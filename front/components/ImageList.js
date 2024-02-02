// components/ImageList.js
import React from 'react';
import { Card, CardContent, CardMedia, Button, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
}));

const ImageList = ({ images, onLike }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image, index) => (
        <Card key={index} className={classes.card}>
          <CardMedia
            component="img"
            height="140"
            image={image.url}
            alt={`Image ${index}`}
          />
          <CardContent>
            <Button onClick={() => onLike(image.id)} variant="contained" color="primary">
              Like
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImageList;
