import React, { useState, useEffect, useCallback } from 'react';
import { fetchData } from './helpers';
import Box from '@material-ui/core/Box';
import Topbar from './components/Topbar';
import Post from './components/Post';
import useStyles from './styles/styles';

function App() {
  const maxFeeds = 30;
  const [feeds, setFeeds] = useState([]);
  const [page, setPage] = useState(1);
  const styles = useStyles();

  const updateFeeds = useCallback(
    (newFeeds) => {
      setFeeds((curFeeds) => [...curFeeds, ...newFeeds]);
    },
    [setFeeds]
  );

  const handleScroll = (e) => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
      feeds.length < maxFeeds
    ) {
      let nextPage = page + 1;
      setPage(nextPage);
      fetchData(nextPage, updateFeeds);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    fetchData(page, updateFeeds);
  }, []);

  return (
    <div>
      <Topbar />
      <Box className={styles.content}>
        {feeds.map((feed) => (
          <Post key={feed.id} data={feed} />
        ))}
      </Box>
    </div>
  );
}

export default App;
