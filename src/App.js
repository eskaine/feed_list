import React, { useState, useEffect } from 'react';
import { fetchData } from './helpers';
import Box from '@material-ui/core/Box';
import Post from './components/Post';

function App() {
  const [feeds, setFeeds] = useState([]);
  const [page, setPage] = useState(1);
  const [isTimeout, setIsTimeout] = useState(false);

  const updateFeeds = (newFeeds) => {
    setFeeds([...feeds, ...newFeeds]);
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
      !isTimeout
    ) {
      let nextPage = page + 1;
      setIsTimeout(true);
      setPage(nextPage);
      fetchData(nextPage, updateFeeds);

      // Set limits to how often fetchData is called
      setTimeout(() => {
        setIsTimeout(false);
      }, 1500);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    fetchData(page, updateFeeds);
  }, []);

  return (
    <div>
      <Box onScroll={handleScroll}>
        {feeds.map((feed) => (
          <Post key={feed.id} data={feed} />
        ))}
      </Box>
    </div>
  );
}

export default App;
