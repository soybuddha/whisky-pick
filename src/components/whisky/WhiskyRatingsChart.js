import React from 'react';
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';

class WhiskyRatingsChart extends React.Component {
  constructor(props) {
    super(props);
    this.saveRef = React.createRef();
  }

  state = {
    width: 900,
  }

  componentDidMount() {
    this.setState({
      width: this.saveRef.current.clientWidth,
    });
    window.addEventListener('resize', this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize = () => {
    this.setState({
      width: this.saveRef.current.clientWidth,
    });
  };

  render() {
    const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const chartWidth = this.state.width;
    const {
      ratings,
      chartHeight,
      padding,
      outerPadding,
      textColor,
      textSize,
      axisLinesStrokeColor,
      axisLinesStrokeWidth,
      gridLinesStrokeColor,
      gridLinesStrokeWidth,
      gridLinesStrokeDasharray,
      gridLinesStrokeDasharrayWidth,
      circleRadius,
      circleColor,
      connectingLines,
      connectingLinesStrokeColor,
      connectingLinesStrokeWidth,
    } = this.props;

    const plotCoordinates = ratings.map((rating, index) => {
      const startX = (chartWidth - padding) / (ratings.length + 1);
      const startY = (chartHeight - padding) / percentages.length;
      const x = startX * (index + 1) + padding;
      const y = startY * ((110 - rating.score) / 10);

      return { rating, x, y };
    });

    let connectingLinesPath = '';
    if (connectingLines) {
      connectingLinesPath = plotCoordinates.reduce((fullPath, plot, index) => {
        if (index === 0) {
          return `${fullPath}M${plot.x},${plot.y}`;
        }
        return `${fullPath}L${plot.x},${plot.y}`;
      }, '');
    }

    return (
      <div
        className="ratings-container"
        ref={this.saveRef}
        style={{
          width: `calc(100% - ${outerPadding * 2}px)`,
          margin: `0 ${outerPadding}px`,
          padding: `${outerPadding}px 0`,
        }}
      >
        <svg
          className="ratings"
          width={chartWidth}
          height={chartHeight}
        >
          <g className="ratings-grid ratings-grid-x">
            {
              plotCoordinates.map(plot => {
                return (
                  <line
                    key={`${plot.rating.name}${plot.rating.score}`}
                    x1={plot.x}
                    y1="0"
                    x2={plot.x}
                    y2={chartHeight - padding}
                    stroke={gridLinesStrokeColor}
                    strokeWidth={gridLinesStrokeWidth}
                    strokeDasharray={gridLinesStrokeDasharray ? gridLinesStrokeDasharrayWidth : 0}
                  />
                );
              })
            }
          </g>

          <g className="ratings-grid ratings-grid-y">
            {
              percentages.reverse().map((pct, index) => {
                const y = ((chartHeight - padding) / percentages.length) * (index + 1);
                return (
                  <line
                    key={pct}
                    x1={padding}
                    y1={y}
                    x2={chartWidth}
                    y2={y}
                    stroke={gridLinesStrokeColor}
                    strokeWidth={gridLinesStrokeWidth}
                    strokeDasharray={gridLinesStrokeDasharray ? gridLinesStrokeDasharrayWidth : 0}
                  />
                );
              })
            }
          </g>

          <g className="ratings-axis ratings-axis-x">
            <line
              x1={padding}
              y1="0"
              x2={chartWidth}
              y2="0"
              stroke={axisLinesStrokeColor}
              strokeWidth={axisLinesStrokeWidth}
            />
            <line
              x1={padding}
              y1={chartHeight - padding}
              x2={chartWidth}
              y2={chartHeight - padding}
              stroke={axisLinesStrokeColor}
              strokeWidth={axisLinesStrokeWidth}
            />
          </g>

          <g className="ratings-axis ratings-axis-y">
            <line
              x1={padding}
              y1="0"
              x2={padding}
              y2={chartHeight - padding}
              stroke={axisLinesStrokeColor}
              strokeWidth={axisLinesStrokeWidth}
            />
            <line
              x1={chartWidth}
              y1="0"
              x2={chartWidth}
              y2={chartHeight - padding}
              stroke={axisLinesStrokeColor}
              strokeWidth={axisLinesStrokeWidth}
            />
          </g>

          <g className="ratings-labels ratings-labels-x">
            {
              plotCoordinates.map(plot => {
                return (
                  <text
                    key={`${plot.rating.name}${plot.rating.score}`}
                    x={plot.x}
                    y={chartHeight - (padding / 2)}
                    fill={textColor}
                    fontSize={textSize}
                    textAnchor="middle"
                  >
                    {`${plot.rating.name.split(' ')[0]} ${plot.rating.name.split(' ')[1][0]}.`}
                  </text>
                );
              })
            }
          </g>

          <g className="ratings-labels ratings-labels-y">
            {
              percentages.map((pct, index) => {
                const y = ((chartHeight - padding) / percentages.length) * (index + 1);
                return (
                  <text
                    key={pct}
                    x={0}
                    y={y}
                    fill={textColor}
                    fontSize={textSize}
                    alignmentBaseline="central"
                  >
                    {pct}
                    %
                  </text>
                );
              })
            }
          </g>

          {connectingLines && (
            <g className="ratings-path">
              <path
                d={connectingLinesPath}
                fill="none"
                stroke={connectingLinesStrokeColor}
                strokeWidth={connectingLinesStrokeWidth}
              />
            </g>
          )}

          <g className="ratings-circles">
            {
              plotCoordinates.map(plot => {
                return (
                  <circle
                    key={`${plot.rating.name}${plot.rating.score}`}
                    r={circleRadius}
                    cx={plot.x}
                    cy={plot.y}
                    fill={circleColor}
                  />
                );
              })
            }
          </g>
        </svg>
      </div>
    );
  }
}

WhiskyRatingsChart.propTypes = {
  ratings: arrayOf(shape({
    name: string.isRequired,
    score: number.isRequired,
  })).isRequired,
  chartHeight: number.isRequired,
  padding: number.isRequired,
  outerPadding: number.isRequired,
  textColor: string.isRequired,
  textSize: number.isRequired,
  axisLinesStrokeColor: string.isRequired,
  axisLinesStrokeWidth: number.isRequired,
  gridLinesStrokeColor: string.isRequired,
  gridLinesStrokeWidth: number.isRequired,
  gridLinesStrokeDasharray: bool.isRequired,
  gridLinesStrokeDasharrayWidth: number.isRequired,
  circleRadius: number.isRequired,
  circleColor: string.isRequired,
  connectingLines: bool.isRequired,
  connectingLinesStrokeColor: string.isRequired,
  connectingLinesStrokeWidth: number.isRequired,
};

export default WhiskyRatingsChart;
