import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/pic.jpg`} alt="" />
      </Link>
      <header>
        <h2>Rachel Voirin</h2>
        <p><a href="mailto:rachelanav@gmail.com">rachelanav@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Rachel. I like building things that help people.
        I am a <a href="https://icme.stanford.edu/">second-year Computer Science </a> student at Georgia Tech with concentrations in Intelligence and Human-Computer Interactions
        <a href="https://arthena.com">.</a> This summer I will be a software engineer intern 
        at <a href="https://matroid.com">Salesforce</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Rachel Voirin <Link to="/">rachelvoirin.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
