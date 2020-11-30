import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Layout from '../components/layout';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => (
  <Layout>
    <NextSeo
      title="Stats | Michael D'Angelo"
      description="Statistics about this site and about me."
    />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link href="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Layout>
);

export default Stats;
