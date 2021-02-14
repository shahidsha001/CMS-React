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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
 BlogText: {
   
    marginLeft:"140px",
    marginBottom:"60px"
  },
  GridContainer:{
    position:"absolute",
    top:"40%"
      },
      blogCard: {
        justifyContent: 'left',
        alignItems: 'left',
        textAlign: 'left',
        marginBottom:"2px",
        paddingLeft:"5%",
        marginTop:"5%",
      },
      blogImg1: {
        width: '100%',
      },
      authorText: {
        fontSize: '8px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      blogTitleText: {
        fontSize: '16px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      blogContent: {
        fontSize: '8px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      paper:{
          width:200,
          height:250
      }
}));

function Blog(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
    return (
        <div>
            <div>
        <img className={classes.bgimg} src="images/Blog.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat/>
        <Grid container spacing={0}  className={classes.GridContainer}>
          <Grid item md={12} className={classes.BlogText}>
            <Typography variant="h3" >Blog</Typography>
          </Grid>
          <Grid container   direction="row"
  justify="flex-end"
  alignItems="center" >
          <Grid item  md={2}>
              <Typography style={{paddingRight:"20px"}} variant="body1">showing 50 post</Typography>
              </Grid>
              <Grid item  md={1}>
              <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
              </Grid>
              <Grid item  md={1}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Grid>
          </Grid>
          <Grid container >
          <Grid item xs={12} md={4} sm={6} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} sm={6} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} sm={6} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '0px',
                  marginRight: '0px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} sm={6} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} sm={6} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} sm={6} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
              
            </Grid>
          </Grid>
          <Grid item md={12} style={{display:"flex",justifyContent:"center",
            alignItems:"center", paddingRight:"50px",paddingLeft:"50px"}}>
                  <Button variant="outlined" style={{color:"white",backgroundColor:"orangered",marginTop:"50px",borderRadius:"20px"}}>Read More</Button>
              </Grid>
              <FooterPage />

          </Grid>
         
        </ThemeProvider>
        </div>
    );
}

export default Blog;