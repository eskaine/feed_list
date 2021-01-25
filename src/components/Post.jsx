import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/styles';

function Post({ data }) {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        alt={data.alt_description}
        height="250"
        image={data.urls.regular}
        title={data.description}
      />
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary" align="center">
          {data.description ? data.description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
