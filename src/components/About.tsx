import {
  Box,
  Button,
  Divider,
  Grid,
  StyleRules,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import aboutGif from "../assets/about.gif";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
interface Props {
  classes: any;
}
class About extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.aboutSectionBody}>
        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={12}
          xs={12}
          className={classes.aboutGif}
        >
          <img src={aboutGif} className={classes.aboutGifImage} alt="GIF" />
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={12}
          xs={12}
          className={classes.aboutText}
        >
          <Box className={classes.title}>
            <Typography className={classes.aboutCodezzy}>
              About&nbsp;
            </Typography>
            <Typography className={classes.codezzy}>Codezzy</Typography>
          </Box>
          <Divider className={classes.divider} />
          <Typography className={classes.description}>
            Codezzy is an interactive learning platform offering high-quality
            coding courses in various programming languages on numerous tech
            subjects like web app development (<b>React JS and React Native</b>)
            In addition, it provides a programming practice platform for
            beginners.
          </Typography>
          <Box>
            <Typography className={classes.points}>
              <ArrowForwardIcon className={classes.arrow} />
              &nbsp;&nbsp;1500+ professionals experts
            </Typography>
            <Typography className={classes.points}>
              <ArrowForwardIcon className={classes.arrow} />
              &nbsp;&nbsp;Provide lifetime experience guidance
            </Typography>
          </Box>
          <Button variant="contained" className={classes.demoButton}>
            Get Free Demo
          </Button>
        </Grid>
      </Grid>
    );
  }
}
const style: StyleRules = {
  aboutSectionBody: {
    background: "linear-gradient(270deg, #FFFBF5 0%, #FFFBF5 95.12%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "5em",
    padding: "20px 20px 20px 20px",
  },
  arrow: {
    borderRadius: "50%",
    border: "1px solid rgba(8, 79, 192, 1)",
    color: "rgba(8, 79, 192, 1) ",
    margin: "0px 10px 0px 0px",
  },
  points: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "18.75px",
    display: "flex",
    alignItems: "center",
    margin: "10px 0 10px 10px",
  },
  aboutGif: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutText: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: "80px",
    paddingRight: "80px",
  },
  description: {
    fontSize: "17px",
    lineHeight: "26px",
    fontWeight: 400,
    margin: "10px 0 10px 0",
    maxWidth: "810px",
  },
  title: {
    display: "flex",
    marginBottom: "10px",
    flexDirection: "row",
  },
  aboutCodezzy: {
    fontFamily: "Nunito",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "65px",
  },
  codezzy: {
    fontFamily: "Nunito",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "65px",
    color: "rgba(181, 87, 254, 1)",
  },
  aboutGifImage: { maxWidth: "100%", height: "auto" },
  divider: {
    background: "rgba(242, 39, 126, 1)",
    height: "3px",
    width: "330px",
    marginBottom: "20px",
  },
  demoButton: {
    fontSize: "20px",
    fontWeight: 700,
    fontFamily: "Roboto",
    lineHeight: "23.44px",
    color: "white",
    background:
      "linear-gradient(89.65deg, #074CBA 2.14%, rgba(13, 106, 252, 0.988235) 99.74%)",
    borderRadius: "6px",
    padding: "10px",
    height: "62.28px",
    width: "224.22px",
    margin: "20px 0 10px 0",
  },
  "@media screen and (min-width: 421px) and (max-width: 1279px)": {
    aboutText: {
      alignItems: "center",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    description: {
      maxWidth: "700px",
    },
    divider: { maxWidth: "280px" },
  },
  "@media screen and (min-width: 0px) and (max-width: 420px)": {
    aboutSectionBody: {
      padding: "20px 20px 20px 20px",
    },
    aboutGifImage: { maxWidth: "70%" },
    aboutCodezzy: {
      fontSize: "35px",
    },
    codezzy: {
      fontSize: "35px",
    },
    divider: { maxWidth: "230px" },
    description: {
      maxWidth: "700px",
    },
    aboutText: {
      alignItems: "center",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
};
export default withStyles(style)(About);

// import React from 'react';
// import { Grid, Typography, Button, Box } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import img from '../assets/about.gif';
// import ptr from '../assets/pointer.png';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: theme.spacing(2),
//         backgroundColor: "#FFFBF5"
//     },
//     imageContainer: {
//         display: 'flex',
//         justifyContent: "right",
//         paddingRight: "2rem",
//         [theme.breakpoints.down('md')]: {
//             marginTop: "2.5rem"
//         },
//         [theme.breakpoints.down('sm')]: {
//             justifyContent: "center"
//         }
//     },
//     image: {
//         width: '38rem',
//         height: '30rem',
//         [theme.breakpoints.down('md')]: {
//             width: '30rem',
//             height: '24rem',
//         },
//     },
//     rightContent: {
//         padding: theme.spacing(2),
//         backgroundColor: "#FFFBF5",
//         marginTop: '2rem',
//         [theme.breakpoints.down('sm')]: {
//             justifyContent: "center",
//             padding: "0 10rem"
//         }
//     },
//     btn: {
//         marginTop: theme.spacing(2),
//         color: "white",
//         background: 'linear-gradient(90deg, #074CBA 0%, #0D6AFC 100%)',
//         height: "3.5rem",
//         width: "10rem",
//         fontFamily: "Roboto",
//         fontSize: "1rem",
//         fontWeight: 700,
//         textAlign: "center",
//         [theme.breakpoints.down('md')]: {
//             height: "3rem",
//             width: "10rem",
//             fontSize: "0.9rem",
//             fontWeight: 600,
//         },
//         [theme.breakpoints.down('sm')]: {
//             height: "2.5rem",
//             width: "7.5rem",
//             fontSize: "0.7rem",
//             fontWeight: 500,
//         }
//     },
//     aboutHeading: {
//         marginBottom: theme.spacing(),
//         fontFamily: 'Nunito',
//         fontSize: '2.5rem',
//         fontWeight: 700,
//         textAlign: 'left',
//     },
//     codezzyHeading: {
//         display: 'inline',
//         fontFamily: 'Righteous',
//         fontSize: '2.5rem',
//         fontWeight: 50,
//         textAlign: 'left',
//         color: "#B557FE"
//     },
//     description: {
//         width: "30rem",
//         [theme.breakpoints.down('md')]: {
//             width: "25rem"
//         },
//         [theme.breakpoints.down('sm')]: {
//             width: "100%"
//         }
//     },
//     aboutDescription: {
//         marginTop: theme.spacing(3),
//         marginBottom: theme.spacing(3),
//         fontFamily: 'Roboto',
//         fontSize: '1rem',
//         fontWeight: 400,
//         textAlign: 'left',
//     },
//     aboutList: {
//         marginTop: theme.spacing(2),
//         marginBottom: theme.spacing(2),
//     },
//     listItem: {
//         display: "flex",
//         // alignItem: "center"


//     },
//     line: {
//         width: "10.5rem",
//         border: "1px solid #F2277E",
//         marginBottom: theme.spacing(1),
//     },
//     ptr: {
//         width: "1rem",
//         height: "1rem",
//         alignItems: "center",
//         marginRight: "1rem"
//     },
//     listText: {
//         fontFamily: 'Roboto',
//         fontSize: '1rem',
//         fontWeight: 400,
//         textAlign: 'left',

//     }
// }));

// const About = () => {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12} sm={12} md={6} className={classes.imageContainer}>
//                     <img src={img} alt="Codezzy" className={classes.image} />
//                 </Grid>

//                 <Grid item xs={12} sm={12} md={6}>
//                     <Grid className={classes.rightContent}>
//                         <Typography variant="h5" gutterBottom className={classes.aboutHeading}>
//                             About <Typography variant="h5" gutterBottom className={classes.codezzyHeading}>Codezzy</Typography>
//                         </Typography>
//                         <Box className={classes.line}></Box>
//                         <Box className={classes.description}>
//                             <Typography variant="body1" paragraph className={classes.aboutDescription}>
//                                 Codezzy is an interactive learning platform offering high-quality coding courses in various programming languages on numerous tech subjects like web app development (<b>React JS and React Native</b>). In addition, it provides a programming practice platform for beginners.
//                             </Typography>
//                         </Box>
//                         <ul className={classes.aboutList}>
//                             <li className={classes.listItem}>
//                                 <img src={ptr} alt="pointer" className={classes.ptr} />
//                                 <Typography variant="body1" paragraph className={classes.listText}>1500+ professional experts</Typography>
//                             </li>
//                             <li className={classes.listItem}>
//                                 <img src={ptr} alt="pointer" className={classes.ptr} />
//                                 <Typography variant="body1" paragraph className={classes.listText}>Provide lifetime experience guidance</Typography>
//                             </li>
//                         </ul>
//                         <Button variant="contained" className={classes.btn}>
//                             Get Free Demo
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }

// export default About;
