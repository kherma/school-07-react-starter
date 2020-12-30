import React from 'react';
import Container from './../Container/Container.js';
import Hero from './../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero
      titleText="About Our App"
      imageSrc="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Container>
);

export default Info;
