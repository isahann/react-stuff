import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// <a href="/pagetwo"> Go to page two </a>
// We should avoid using <a/> tags with react, because if you do:

// 1 - you add an <a/> tag
// 2 - the user clicks on the tag
// 3 - the browser makes a request to localhost:3000/pagetwo
// 4 - development server reponds with index.html file
// 5 - browser receives index.html file,
//   DUMPS OLD HTML FILE IT WAS SHOWING (including react/redux state data!!!!)
// 6 - index.html file list js files in script tags
// 7 - the app starts up

// Using the <Link>, react router prevents the index.html file dump
const PageOne = () => {
  return (
    <div>
      Page 1<Link to="/pagetwo">Go to page two</Link>

      <a href="/pagetwo"> Go to page two </a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page 2 <button>Click me</button> <Link to="/">Go to page one</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={PageOne} exact />
        <Route path="/pageTwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
