import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});

function Post({ data }) {
  const classes = useStyles();
  console.log(data);

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={data.alt_description}
        height="250"
        image={data.urls.regular}
        title={data.description}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
