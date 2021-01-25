import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/styles';

function Topbar() {
  const styles = useStyles();

  return (
    <AppBar className={styles.appbar}>
      <Container>
        <Toolbar className={styles.toolbar} disableGutters={true}>
          <Typography variant="h6">Post List</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar;
