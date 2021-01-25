import React, { useState, useEffect } from 'react';
import { fetchData } from './helpers';
import Box from '@material-ui/core/Box';
import Post from './components/Post';

function App() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetchData(setFeeds);
  }, []);

  return (
    <div>
      <Box>
        {feeds.map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </Box>
    </div>
  );
}

export default App;
