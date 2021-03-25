import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import RestaurantItem from './restaurantItem';
import { getRestaurantsAsync } from '../services/restaurant.service';
import { getCommentsAsync } from '../services/comment.service';
import { getPicturesAsync } from '../services/picture.service';
import { setRestaurantListAction } from '../redux/actions/restaurants.actions';
import { setCommentListAction } from '../redux/actions/comments.actions';
import { setPictureListAction } from '../redux/actions/pictures.actions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function RestaurantList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [restaurantList, setRestaurantList] = useState([]);


  useEffect(() => {
    getRestaurantsAsync()
      .then(({ data }) => {
        dispatch(setRestaurantListAction(data));
        setRestaurantList(data);
      })
      .catch(error => {
        console.log({error})
      });
    
      getCommentsAsync()
      .then(({ data }) => {
        
        dispatch(setCommentListAction(data));
        
      })
      .catch(error => {
        console.log({error})
      });

      getPicturesAsync()
      .then(({ data }) => {
        
        dispatch(setPictureListAction(data));
        
      })
      .catch(error => {
        console.log({error})
      });
  }, []);



  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Restaurant <br/>The Peruvian
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {restaurantList.data == null
            ? <h1>no data</h1>
            : 
            restaurantList.data.map(card => (              
              <RestaurantItem
                key={card.id}
                title={card.attributes.title}
                description={card.attributes.description}
                picturesArray={card.relationships.pictures.data}
                id={card.id}
                itemRestaurant={card}
               />
            ))
            }
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}