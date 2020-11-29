import Link from 'next/link';
import { NextSeo } from 'next-seo';

const PageNotFound = () => (
  <>
    <NextSeo
      title="404 | Michael D'Angelo"
      description="There's nothing to see here. Please move along. Really, move along. Go away."
    />
    <div className="not-found">
      <h1>Page Not Found.</h1>
      <p>Return to <Link href="/">index</Link>.</p>
    </div>
  </>
);

export default PageNotFound;
