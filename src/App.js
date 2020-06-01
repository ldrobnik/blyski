import React from 'react';
import ReactGA from 'react-ga';

//Google Analytics code
const ANALYTICS_KEY = process.env.REACT_APP_ANALYTICS_KEY; // Google analytics API key
ReactGA.initialize(ANALYTICS_KEY);
// ReactGA.initialize(ANALYTICS_KEY, { testMode: true });
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
