import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <main>
      <h1>404</h1>
      <p>You appear lost</p>
      <Link to="/">Home</Link>
    </main>
  );
};

export default NotFoundPage;
