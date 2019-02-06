import React from 'react';

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <p>
        Made with&nbsp;
        <span role="img" aria-label="love">❤️</span>
        &nbsp;by&nbsp;
        <a
          href="https://kevinnayar.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Kevin Nayar
        </a>
      </p>
    </footer>
  );
});

export default Footer;
