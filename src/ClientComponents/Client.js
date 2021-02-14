import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from '../Footer';
import clientimg from '../assets/images/clients1.jpg'
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import NavBArMat from '../NavBarMat';

import HeaderComponent from '../HeaderComponnent';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
    imageContainer: {},
  
    bgimg: {
      // margin: 'auto',
    //   height: '50vh',
    //   width: '100%',
    //   display: 'block',
    //   objectFit: 'cover',
    //   position: 'absolute',
    //   top: '0',
    //   left: 0,
    //   opacity: '0.5',
    //   backgroundImage: `url(${clientimg})`,
    //   backgroundPosition:"0px -150px",
    //   backgroundSize:" 100% auto",
    //   backgroundRepeat:"no-repeat",
      
    //   [theme.breakpoints.down('xs')]: {
    //     backgroundPosition:"0px 0px",
    //     height:"100%",
    //   },
    height: '50vh',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: 0,
    opacity: '0.5',
    [theme.breakpoints.down('xs')]: {},
    },
    GridContainer: {
        position: 'absolute',
        top: '42%',
      },
      ClientText: {
        marginLeft: '140px',
        marginBottom: '60px',
      },
      clientH1: {
        [theme.breakpoints.down('md')]: {},
        [theme.breakpoints.down('xs')]: {
          position: 'absolute',
          right: '10%',
        },
      },
      HeaderText1: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        marginTop: '50px',
      },
      paper:{
          width:200,
          height:200,
          justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          display:"flex",
          marginBottom:"10px",
          marginTop:"10px",
          marginLeft:"20px",
          [theme.breakpoints.down('xs')]: {
          marginLeft:"50px"
          },
      },
      cardimg:{
          width:"70%"
      }
}));
function Client(props) {
    const classes = useStyles();
    return (
        <div>
            <div >
        <img className={classes.bgimg}  src={clientimg} />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat/>
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.ClientText}>
            <Typography variant="h3" className={classes.clientH1}>
              OUR CLIENTS
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.Header1}>
            <Typography style={{ color: '#0B132B', fontWeight: '400' }} variant="h4" className={classes.HeaderText1}>
              Here are just a few examples of client relationships.
            </Typography>
            <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  left: '42%',
                  
                }}
                className="underline"
              ></div>
              <Typography style={{textAlign:"center",paddingRight:"100px",paddingLeft:"100px",paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis in cumque quis reprehenderit, quasi repudiandae iusto minima possimus fugit? Impedit hic accusantium enim, numquam nisi qui sequi ratione vero tempora.</Typography>
          </Grid>
          <Grid container spacing={0} style={{marginBottom:"50px"}}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <img className={classes.cardimg} src="./images/mspng.png"/>

          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
              
          <img  className={classes.cardimg} src="./images/ibmpng.png"/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img className={classes.cardimg} src="./images/fedexpng.png"/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img className={classes.cardimg} src="./images/nikepng.png"/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img className={classes.cardimg} src="./images/addidaspng.png"/>
          </Paper>
        </Grid>
      </Grid>
      <FooterPage />

          </Grid>
          
        </ThemeProvider>
        </div>
    );
}

export default Client;