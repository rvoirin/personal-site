import Link from 'next/link';
import { NextSeo } from 'next-seo';

import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';

import markdown from '../content/about.md';

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links

// const markdown = await import(`../content/about.md`);

// const LinkRenderer = ({ ...children }) => <Link {...children} />;
const About = () => (
  <Layout>
    <NextSeo
      title="About | Michael D'Angelo"
      description="Facts about Michael D'Angelo."
    />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link href="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
      />
    </article>
  </Layout>
);

export default About;
