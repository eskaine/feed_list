import React, { useState, useEffect } from 'react';

function App() {
  const [feeds, setFeeds] = useState([]);

  const getFeeds = () => {
    const { REACT_APP_API, REACT_APP_KEY } = process.env;

    fetch(`${REACT_APP_API}/?client_id=${REACT_APP_KEY}`)
      .then((res) => res.json())
      .then((data) => setFeeds(data))
      .catch((error) => new Error(error));
  };

  useEffect(() => {
    getFeeds();
  }, []);

  return <div></div>;
}

export default App;
