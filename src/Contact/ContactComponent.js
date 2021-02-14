import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from '../Footer';
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Paper,
  TextField,Button
} from '@material-ui/core';
import HeaderComponent from '../HeaderComponnent';
import NavBArMat from '../NavBarMat';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
  imageContainer: {},

  bgimg: {
    // margin: 'auto',
    height: '50vh',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: 0,
    opacity: '0.5',
    backgroundPosition: ' 0 -500px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  ContactText: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
    // alignItems: 'flex-start',
    // position: 'absolute',
    // top: '40%',
    // left: '10%',
    // width: '50%',
    // marginBottom: '10px',
    marginLeft:"140px",
    marginBottom:"60px"
  },
  Heading1: {


    
    marginBottom:"60px",
    // position: 'absolute',
    // top: '60%',
    // left: '25%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
    alignItems: 'center',
  },
  Heading2:{
      marginLeft:"70px",
      paddingLeft:"10px",
      width:"70%",
      position:"relative",
  },
  root: {
    flexGrow: 1,
  },
  GridContainer:{
position:"absolute",
top:"42%"
  },
  paper:{
      width:300,
      height:470,
  },
  lastGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
    left: '0px',
    marginTop: '13px',
    backgroundImage: 'url(../images/explaining.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '35vh',
    marginBottom:"-25px"
  },
 
}));
function ContactComponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img className={classes.bgimg} src="images/telphone.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat/>
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.ContactText}>
            <Typography variant="h3" >CONTACT</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            className={classes.Heading1}
            direction="column"
          >
            <Typography variant="h5" style={{ marginBottom: '-25px' }}>
              Get in Touch With Us
            </Typography>
            <div className="underline"></div>
            <Typography style={{width:"50%",marginTop:"20px"}}>
            Any Kind of business solution and Consulation don't hesitate to contact with us for imidiate customer support.We would love to hear from you
            </Typography>
          </Grid>
          <Grid container md={6} >
          <Grid item xs={12}
            md={10} 
            className={classes.Heading2}
            >
                    <Typography variant="h5" style={{ marginBottom: '-25px' }}>
              Send Us Your Message
            </Typography>
            <div className="underline"></div>
            <Typography style={{marginTop:"20px"}}>
              Alternatively,if you'd like for us to get back in touch with you please fill in the form below.
            </Typography>
            <TextField id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small" label="Firstname" variant="outlined"  style={{marginRight:"20px",marginLeft:"0px",marginTop:"20px",marginBlock:"20px"}}/>  
            <TextField id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small" label="LastName" variant="outlined" style={{marginRight:"20px",marginLeft:"0px",marginTop:"20px",marginBlock:"20px"}}/>  
            <TextField id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small" label="EmailAdress" variant="outlined" style={{marginRight:"20px",marginLeft:"0px",marginTop:"20px",marginBlock:"20px"}}/>  
            <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          style={{marginRight:"20px",marginLeft:"0px",marginTop:"20px",marginBlock:"20px"}}/>          
<TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          style={{marginRight:"20px",marginLeft:"0px",marginTop:"20px",marginBlock:"20px"}}/>         
        <Grid item md={12}>
        <Button style={{color:"white",backgroundColor:"orangered",marginBottom:"40px"}}  variant="outlined">Send Message</Button>
        </Grid>
          

           </Grid>

         
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={classes.Heading1}
            direction="column"
          >
            <Paper className={classes.paper}>
                <div style={{marginBottom:"50px"}}>
                <Typography variant="h6" style={{textAlign:"left",
            paddingLeft:"30px",color:"orangered"}}>Address:</Typography>
                 <Typography variant="subtitle2" style={{textAlign:"left",
            paddingLeft:"30px"}}>canton management services,</Typography>
            <Typography variant="subtitle2" style={{textAlign:"left",
            paddingLeft:"30px"}}>Canton Mixigon,</Typography>
            </div>
            <div style={{marginBottom:"50px"}}>
                <Typography variant="h6" style={{textAlign:"left",
            paddingLeft:"30px",color:"orangered"}}>Phone Number:</Typography>
                 <Typography variant="subtitle2" style={{textAlign:"left",
            paddingLeft:"30px"}}>+1(248)842-2805</Typography>
           
            </div>
            <div style={{marginBottom:"50px"}}>
                <Typography variant="h6" style={{textAlign:"left",
            paddingLeft:"30px",color:"orangered"}}>Email Address:</Typography>
                 <Typography variant="subtitle2" style={{textAlign:"left",
            paddingLeft:"30px"}}>palani59@gmail.com</Typography>
            
            </div>
            <div>
                <Typography variant="h6" style={{textAlign:"left",
            paddingLeft:"30px",color:"orangered"}}>Watching Hours:</Typography>
                 <Typography variant="subtitle2" style={{textAlign:"left",
            paddingLeft:"30px"}}>Mon-Fri:10.00-19.00</Typography>
            <Typography variant="subtitle2" style={{textAlign:"left",
            paddingLeft:"30px"}}>sat-sun:Holiday</Typography>
            
            </div>
            </Paper>

          </Grid>
          <Grid container className={classes.lastGrid}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" style={{ color: 'white' }}>
                We Help You unlock & unleash the power within your large scale
                buissness
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                style={{
                  color: 'white',
                  backgroundColor: 'orangered',
                  borderRadius: '20px',
                }}
              >
                Book a Consulation
              </Button>
            </Grid>
          </Grid>
          <FooterPage />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default ContactComponent;
