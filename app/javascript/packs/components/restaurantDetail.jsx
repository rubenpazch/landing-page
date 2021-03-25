import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

//import getTourDetail from '../redux/services/tourdetail.service';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to={'/'}>
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
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '15px 30px',
    textDecoration: 'none',
  }
}));

const cards = [1, 2, 3, 4];


function RestaurantDetail() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { restaurants } = useSelector(state => state.restaurantStore);
  const { pictures } = useSelector(state => state.picturesStore);
  const [currentId, setCurrentId] = useState();
  const [currentPictures, setCurrentPictures] = useState();
  const [currentRestaurant, setCurrentRestaurant] = useState();
  const { id } = useParams();  
  const classes = useStyles();
  
  
  useEffect(() => {
    if (restaurants.data == null){
      history.push("/");
    }else {
      
      setCurrentId(id);
      restaurants.data.shift();
      const restaurantFounded = restaurants.data.find(item => item.id == id);
      setCurrentRestaurant(restaurantFounded);
      const picturesFounded = pictures.data.filter(x => x.relationships.restaurant.data.id == id)
      picturesFounded.shift();
      setCurrentPictures(picturesFounded);
      console.log({picturesFounded});
    }
    
  }, [id]);

  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          
          
          <Link to={'/'} className={classes.button}>
            <span>Back Home</span>
          </Link>  
        </Toolbar>
        
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            { currentRestaurant == null
            ? <span>no data</span>
            : currentRestaurant.attributes.title
            }
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            { currentRestaurant == null
            ? <span>no data</span>
            : currentRestaurant.attributes.description
            }
            </Typography>
     
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={1}>
            { currentPictures== null
            ? <span>no data</span>
            :
            currentPictures.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.attributes.link}
                    title="Image title"
                  />                  
                </Card>
              </Grid>
            ))}
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

export default RestaurantDetail;
