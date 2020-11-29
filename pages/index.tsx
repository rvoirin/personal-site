import Link from 'next/link';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link href="/">About this site</Link></h2>
          <p>A beautiful, responsive, next.js app.</p>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free to read more
        {' '}
        <Link href="/about">about me</Link>
        ,
        {' '}
        or you can check out my
        {' '}
        <Link href="/resume">resume</Link>
        ,
        {' '}
        <Link href="/projects">projects</Link>
        ,
        {' '}
        view
        {' '}
        <Link href="/stats">site statistics</Link>
        ,
        {' '}
        or
        {' '}
        <Link href="/contact">contact</Link>
        {' '}
        me.
      </p>
      <p>
        Source available
        {' '}
        <a href="https://github.com/mldangelo/personal-site">here</a>
        .
      </p>
    </article>
  </Layout>
);

export default IndexPage;
