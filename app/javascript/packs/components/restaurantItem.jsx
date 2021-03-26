import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { setCurrentPictures } from '../redux/actions/pictures.actions';
import { setCurrentRestaurant } from '../redux/actions/restaurants.actions';

export default function RestaurantItem({title, description, picturesArray, id, itemRestaurant}) {
  const [localPictures, setLocalPictures] = useState();
  const { pictures } = useSelector(state => state.picturesStore);
  const { restaurants } = useSelector(state => state.restaurantStore);
  const dispatch = useDispatch();
  
  useEffect(() => {
    let tempArray = [];
    if (pictures.data != null && picturesArray  != null ){
      let lenArray = picturesArray.length;
      picturesArray.forEach(element => {
        tempArray.push(pictures.data.find(item => item.id == element.id));
        // element.id
      });
    }
    setLocalPictures(tempArray[0].attributes.link);
    
  }, [pictures]);
  
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const classes = useStyles();
  return (
  <Grid item  xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={localPictures}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {description.substring(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Link to={`/restaurantdetail/${id}`}>
          Click Me
        </Link>
      </CardActions>
    </Card>
  </Grid>
    );
  }