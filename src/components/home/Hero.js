import React from 'react';

const Hero = React.memo(() => {
  return (
    <section className="hero">
      <h2>
        For the
        <span role="img" aria-label="love"> ❤️ </span>
        of uisce beatha!
      </h2>
      <p>We&apos;re a local whisky collective based out of Austin, Texas. As self-proclaimed whisky connoisseurs, we sample and rate whiskies from the world over. This site is a collection of our ratings of Bourbons, Irish, Rye, Scotch, Japanese, and other whiskys.</p>
      <p>Slàinte!</p>
    </section>
  );
});

export default Hero;
