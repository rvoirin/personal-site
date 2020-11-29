import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const BASE_PATH = '';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <div  className="logo">
        <Link href="/">
          <img src={`${BASE_PATH}/images/me.jpg`} alt=""/>
        </Link>
      </div>
      <header>
        <h2>Michael D&apos;Angelo</h2>
        <p><a href="mailto:michael.l.dangelo@gmail.com">michael.l.dangelo@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Michael. I like building things.
        I am a <a href="https://icme.stanford.edu/">Stanford ICME</a>
        {' '}
        graduate, YC Alumni, and the co-founder and CTO of
        {' '}<a href="https://arthena.com">Arthena</a>
        . Before Arthena I was at
        {' '}<a href="https://matroid.com">Matroid</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>.
      </p>
      <ul className="actions">
        <li>
          <div className="button">
            {`${BASE_PATH}/resume` !== false ? <Link href="/resume">Learn More</Link> : <Link href="/about">About Me</Link>}
          </div>
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
      <p className="copyright">
        &copy; Michael D&apos;Angelo
        <Link href="/">mldangelo.com</Link>
        .
      </p>
    </section>
  </section>
);

export default Nav;
