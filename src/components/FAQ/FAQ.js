import React from 'react';
import styles from './FAQ.scss';
import Container from './../Container/Container.js';
import Hero from './../Hero/Hero.js';
import { faq } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} imageSrc={faq.image} />
    {faq.faqs.map(({ id, question, answer }) => {
      return (
        <div key={id}>
          <p className={styles.question}>{question}</p>
          <p className={styles.answer}>{answer}</p>
        </div>
      );
    })}
  </Container>
);

export default FAQ;
