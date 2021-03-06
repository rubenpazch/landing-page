import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
import styled from 'styled-components';
import CommentItem from './commentsItem';
import {saveComment} from '../services/comment.service';


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
  },
  multiline: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const cards = [1, 2, 3, 4];


function RestaurantDetail() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { restaurants } = useSelector(state => state.restaurantStore);
  const { pictures } = useSelector(state => state.picturesStore);
  const { comments } = useSelector(state => state.commentsStore);
  const [currentId, setCurrentId] = useState();
  const [currentPictures, setCurrentPictures] = useState();
  const [currentComments, setCurrentComments] = useState();
  const [currentRestaurant, setCurrentRestaurant] = useState();
  const [usuario, setUsuario] = useState("");
  const [comentario, setComentario] = useState("");
  const { id } = useParams();  
  const classes = useStyles();
  
  const changeUsuario = (e) =>{
    setUsuario(e.target.value);
  }

  const changeComment = (e) => {
    setComentario(e.target.value);
  }
  useEffect(() => {
    if (restaurants.data == null){
      history.push("/");
    }else {
      
      setCurrentId(id);
      restaurants.data.shift();
      const restaurantFounded = restaurants.data.find(item => item.id == id);
      setCurrentRestaurant(restaurantFounded);
      const picturesFounded = pictures.data.filter(x => x.relationships.restaurant.data.id == id)
      const commentsFounded = comments.data.filter(x => x.relationships.restaurant.data.id == id)
      
      setCurrentComments(commentsFounded)
      picturesFounded.shift();
      setCurrentPictures(picturesFounded);
      
    }
    
  }, [id]);

  
  const handleSubmitModal = (e) => {
    e.preventDefault();

    saveComment(usuario, comentario, id)
    .then(({ response, data }) => {
      if (typeof (data) !== 'undefined') {
        // notifySuccess('The appointment was successfully registered');
        history.push('/Appointments');
      }
      if (typeof (response) !== 'undefined') {
        if (response.status === 422) {
          notifyError(`Error: ${getTextFromObject(response.request.responseText)}`);
        } else if (response.status === 200) {
          // notifySuccess('The appointment was successfully registered');
          handleClose();
        } else {
          notifyError('else paso algo');
        }
      }
    })
    .catch(error => {
      console.log({error});
    });
  };

  
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
          <Container maxWidth="md">
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
              <Grid item key={card.id} xs={12} sm={6} md={3}>
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
        <Container className={classes.cardGrid} maxWidth="md">
          <h1>Comments</h1>
         {
            currentComments== null
            ? <span>no hay comentarios</span>
            : currentComments.map(item => (
              <CommentItem
                key={item.id}
                usuario={item.attributes.usuario}
                dateComment={item.attributes.commentDate}
                description={item.attributes.description}
              />
            ))
         }
        
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <h1>New Comment</h1>
          <TextField id="standard-basic" label="Usuario" onChange={ changeUsuario } value={ usuario }/>
          <br /><br /><br />
          <TextField
          id="outlined-multiline-static"
          label="Comentario"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          className={classes.multiline}
          onChange={changeComment}
          value={comentario}
        />
      <br /><br /><br />
      <Button variant="contained" color="primary" onClick={handleSubmitModal} type="submit">
        Save
      </Button>
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
