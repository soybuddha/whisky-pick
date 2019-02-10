## Whisky Pick

We're a local whisky collective based out of Austin, Texas. As self-proclaimed whisky connoisseurs, each month, we sample and rate two bottles of whisky from the world over. This site is a collection of our ratings of Bourbons, Irish, Rye, Scotch, Japanese, and other whiskies.

Check it out at [**whiskypick.com**](http://whiskypick.com). You can filter whiskies by...

**Whiskey Types**
* Bourbon
* Irish
* Rye
* Scotch
* Whisky

**Taste Profiles**
* Floral
* Fruity
* Honey
* Malty
* Nutty
* Smokey
* Spicy
* Sweet

_Built by [Kevin Nayar](https://kevinnayar.github.io/) using [React](https://facebook.github.io/react/) & [Redux](http://redux.js.org/)_


### State management
Create global state using `redux` and `redux-thunk` passing in a custom API.
```
ReduxThunk.withExtraArgument(api)
```

**Fetches are made via the container/component pattern.**

The `route` loads a parent component which is a `container`. The `container` checks to see if the data needed to render child components is already present in the global state. If so, the component is loaded. If not, an `action` is fired to get the data.

The `action` calls a corresponding custom API method. Business logic is abstracted away in the custom API. These methods always return data via a resolved `promise` or return an `error`.

The returned data is passed to the `reducer` and the `store` is updated. Finally, the `container` receives the data and sends it to the child component(s).

<br>

### Support deeplinking
On each route, the main `container` checks for any prerequisite data in state tree. If the data is not present, the `container` fires the initial `action` to fetch it first, essentially the paragraph listed under **State Management**.

<br>

### Code splitting
Lazy load components using using `React.lazy` and `React.Suspense`.
```
const Home = React.lazy(() => import('./containers/home/HomeContainer'));
```


Wrap routes from `react-router` in a `React.Suspense` component to enable code splitting. This splits `bundle.js` into route-based chunks and only loads the appropriate JS file(s) when the route is rendered.
```
<Suspense fallback={<Loading />}>
  <Switch>
    <Route path="/" exact render={(props) => <Home {...props} />} />
    ...
  </Switch>
</Suspense>
```

<br>

### Optimize rendering
For stateless or pure components, avoid re-rendering on parent component render by leveraging `React.PureComponent` (for class-based components) or `React.memo` (for function components). Use stateless, function components whenever possible.

<br>

### Type statically where possible
Enforce loose static typing by using `PropTypes` in every component. Generally, it's okay with pass generic `array` or `object` types, but validate the `shape` on the rendering component level.


#### [TODO]
- testing
- sass - chunks and custom fonts
- image caching/optimization
- service workers
