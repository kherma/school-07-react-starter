import React from 'react';
import Container from './../Container/Container.js';
import Hero from './../Hero/Hero.js';
import { info } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={info.title} imageSrc={info.image} />
    {info.content.map(({ id, text }) => {
      return <p key={id}>{text}</p>;
    })}
  </Container>
);

export default Info;
