import React from 'react';

const Hero = React.memo(() => {
  return (
    <section className="hero">
      <h2>
        For the&nbsp;
        <span role="img" aria-label="love">❤️</span>
        &nbsp;of uisce beatha!
      </h2>
      <p>We&apos;re a local whisky collective based out of Austin, Texas. As self-proclaimed whisky connoisseurs, we sample and rate whiskies from the world over. This site is a collection of our ratings of Bourbons, Irish, Rye, Scotch, Japanese, and other whiskies.</p>
      <p>Slàinte!</p>
      <p className="attr">
        <a
          href="https://www.pexels.com/photo/assorted-wine-bottles-1283219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Photo credit: Chris F. at Pexels
        </a>
      </p>
    </section>
  );
});

export default Hero;
