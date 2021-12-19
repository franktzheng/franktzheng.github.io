import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>insecure ramblings</h1>
      <p>There is nothing here (yet)</p>
      <p>Some links for you to click :D</p>
      <Link to="/404">404</Link>
      <br />
      <Link to="test">Test</Link>
    </main>
  );
};

export default IndexPage;
