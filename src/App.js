import React, { useState, useEffect, useCallback } from 'react';
import { fetchData } from './helpers';
import Box from '@material-ui/core/Box';
import Topbar from './components/Topbar';
import Post from './components/Post';
import useStyles from './styles/styles';

function App() {
  const heightOffset = 500;
  const [feeds, setFeeds] = useState([]);
  const [page, setPage] = useState(1);
  const [isTimeout, setIsTimeout] = useState(false);
  const styles = useStyles();

  const updateFeeds = useCallback(
    (newFeeds) => {
      setFeeds((curFeeds) => [...curFeeds, ...newFeeds]);
    },
    [setFeeds]
  );

  const handleScroll = (e) => {
    let height = window.innerHeight + document.documentElement.scrollTop;
    if (height >= document.documentElement.offsetHeight - heightOffset && !isTimeout) {
      let nextPage = page + 1;
      setIsTimeout(true);
      setPage(nextPage);
      fetchData(nextPage, updateFeeds);
      setTimeout(() => {
        setIsTimeout(false);
      }, 1000);
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
