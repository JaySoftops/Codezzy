import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  StyleRules,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import reactImage from "../assets/reactjs.gif";
import qaImage from "../assets/qa.gif";
import rubyImage from "../assets/ruby.gif";
import uiuxImage from "../assets/uiux.gif";
interface Props {
  classes: any;
}
interface State {
  items: itemData[];
}
interface itemData {
  subject: string;
  img: string;
}
class Subjects extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        { subject: "ReactJS", img: reactImage },
        { subject: "React Native", img: reactImage },
        { subject: "UI/UX Design", img: uiuxImage },
        { subject: "Quality Assurance", img: qaImage },
        { subject: "Ruby On Rails", img: rubyImage },
      ],
    };
  }
  render() {
    const { classes } = this.props;
    // const { items } = this.state;
    return (
      <Grid container className={classes.subjectSectionBody}>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.titleBody}
        >
          <Typography className={classes.title} align="center">
            Popular Subject's
          </Typography>
          <Divider className={classes.divider}></Divider>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.cardGridItem}
        >
          <Grid container className={classes.cardGridContainer}>
            {this.state.items.map((item: any) => (
              <Grid
                item
                xl={2}
                lg={2}
                md={2}
                sm={12}
                xs={12}
                className={classes.cards}
              >
                <Paper className={classes.card} elevation={8}>
                  <Box className={classes.subjectBox}>
                    <Typography className={classes.subject} align="center">
                      {item.subject}
                    </Typography>
                  </Box>
                  <Box className={classes.subjectLogoBox}>
                    <img src={item.img} className={classes.boxImage} alt="img" />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.btnGrid}
        >
          <Button variant="contained" className={classes.btnOutside}>
            View All
          </Button>
        </Grid>
      </Grid>
    );
  }
}
const style: StyleRules = {
  subjectSectionBody: { padding: "10px 10px 50px 10px" },
  titleBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "10px 10px 20px 10px",
  },
  btnGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 10px 0px 10px",
  },
  title: {
    fontSize: "40px",
    fontWeight: 700,
    fontFamily: "Nunito",
    lineHeight: "54.56px",
    margin: "5px 0 5px 0",
  },
  divider: {
    width: "328px",
    height: "3px",
    background: "rgba(247, 119, 171, 1)",
    margin: "5px 0 5px 0",
  },
  subject: {
    fontFamily: "Nunito",
    fontWeight: 800,
    fontSize: "20px",
    lineHeight: "28px",
    color: "white",
  },
  cardGridItem: {
    margin: "10px 0px 10px 0px",
  },
  cardGridContainer: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    // padding: "5px 20px 5px 20px",
    display: "flex",
    justifyContent: "center",
    minWidth: "185px",
    alignItems: "center",
  },
  card: {
    padding: "6px",
    borderRadius: "22px",
    display: "flex",
    height: "267px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "227px",
    margin: "5px 5px 5px 5px",
  },
  subjectBox: {
    background:
      "linear-gradient(180deg, #EFB6B6 0%, rgba(218, 64, 64, 0.46) 100%)",
    height: "96px",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
  },
  subjectLogoBox: {
    display: "flex",
    alignItems: "center",
    width: "133px",
    height: "131px",
    // marginTop: "30px",
  },
  btnOutside: {
    height: "62.28px",
    width: "224.22px",
    color: "white",
    background: "linear-gradient(270deg, #0D6AFC 0%, #074CBA 100%)",
    margin: "10px 10px 10px 10px",
    fontWeight: 700,
    fontSize: "20px",
    fontFamily: "Roboto",
    lineHeight: "23.44px",
  },
  boxImage: { width: "100%", height: "auto" },
  "@media screen and (min-width: 421px) and (max-width: 959px)": {
    card: {
      flexDirection: "row-reverse",
      height: "auto",
      width: "400px",
    },
    subjectLogoBox: {
      marginTop: "0px",
      maxWidth: "100px",
      maxHeight: "98.5px",
    },
    subjectBox: { marginTop: "0px", width: "70%" },
  },
  "@media screen and (min-width: 0px) and (max-width: 420px)": {
    title: { fontSize: 35 },
    divider: { maxWidth: "250px" },
    card: {
      flexDirection: "row-reverse",
      height: "auto",
      width: "400px",
    },
    subjectLogoBox: {
      marginTop: "0px",
      maxWidth: "100px",
      maxHeight: "98.5px",
    },
    subjectBox: { marginTop: "0px", width: "70%" },
  },
};
export default withStyles(style)(Subjects);

// import React from "react";
// import { Grid, Typography, Paper, Button, Box } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import ReactJsImage from "../assets/reactjs.gif";
// import ReactNativeImage from "../assets/native.gif";
// import UiUxDesignImage from "../assets/uiux.gif";
// import QualityAssuranceImage from "../assets/qa.gif";
// import RubyOnRailsImage from "../assets/ruby.gif";



// const useStyles = makeStyles((theme) => ({
//     headingContainer: {
//         // width: '15.18rem',
//         // height: '2.5rem',
//     },
//     heading: {
//         textAlign: "center",
//         marginBottom: theme.spacing(1),
//         fontSize: "2rem",
//         fontFamily: "Nunito",
//         fontWeight: 700,
//         marginTop: "5rem",
//         [theme.breakpoints.down('lg')]: {
//             textAlign: "center",
//             marginBottom: theme.spacing(1),
//             fontSize: "2rem",
//             fontFamily: "Nunito",
//             fontWeight: 700,
//             marginTop: "5rem",
//         },
//     },
//     line: {
//         width: "16rem",
//         height: "2px",
//         margin: "3px auto",
//         backgroundColor: "#5798FE",
//         [theme.breakpoints.down('lg')]: {
//             width: "16rem",
//             height: "2px",
//             margin: "3px auto",
//         }
//     },
//     cardContainer: {
//         textAlign: "center",
//         marginTop: theme.spacing(2),
//         display: "flex",
//     },
//     card: {
//         marginTop: theme.spacing(2),
//         width: "12.5rem",
//         textAlign: "center",
//         height: "16rem",
//         display: "flex",
//         flexDirection: "column",
//         borderRadius: "1.5rem",
//         margin: "0 2rem",
//         padding: "0.5rem",
//         boxShadow: "-3 0 41.900001525878906 rgba(0, 0, 0, 0.25)",
//         [theme.breakpoints.down('lg')]: {
//             width: "12rem",
//             height: "15rem"
//         },
//         [theme.breakpoints.down('md')]: {
//             width: "10rem",
//             height: "13rem"
//         },
//     },
//     reactImage: {
//         maxWidth: "70px",
//         maxHeight: "80px",
//         flexGrow: 1,
//         margin: "auto",
//     },
//     nativeImage: {
//         maxWidth: "70px",
//         maxHeight: "80px",
//         flexGrow: 1,
//         margin: "auto",
//     },
//     designImage: {
//         maxWidth: "9.5rem",
//         maxHeight: "7.5rem",
//         flexGrow: 1,
//         margin: "auto",
//     },
//     qa: {
//         maxWidth: "7.5rem",
//         maxHeight: "7.5rem",
//         flexGrow: 1,
//         margin: "auto",
//     },
//     ruby: {
//         maxWidth: "70px",
//         maxHeight: "80px",
//         flexGrow: 1,
//         margin: "auto",
//     },
//     titleBox: {
//         background: "linear-gradient(90deg, #EFB6B6 100%, #DA4040 46%)",
//         height: "6rem",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: "1.2rem",
//         [theme.breakpoints.down('lg')]: {
//             height: "5.5rem"
//         },
//         [theme.breakpoints.down('md')]: {
//             height: "4.5rem"
//         },
//     },
//     title: {
//         color: "#fff",
//         fontSize: "1.3rem",
//         fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
//         fontWeight: 700,
//         [theme.breakpoints.down('lg')]: {
//             fontSize: "1.1rem",
//             fontWeight: 700,
//         },
//         [theme.breakpoints.down('md')]: {
//             fontSize: "1rem",
//             fontWeight: 700,
//         },
//     },
//     buttonDiv: {
//         marginTop: theme.spacing(9),
//         textAlign: "center",
//         display: "flex",
//         width: "100%"
//     },
//     button: {
//         background: 'linear-gradient(90deg, #074CBA 0%, #0D6AFC 100%)',
//         color: "white",
//         width: "10rem",
//         height: "2.6rem",
//         fontFamily: "Roboto",
//         fontSize: "0.9rem",
//         fontWeight: 700,
//         margin: "auto",
//         [theme.breakpoints.down('md')]: {
//             height: "2.3rem",
//             width: "9rem",
//             fontSize: "0.9rem",
//             fontWeight: 600,
//         },
//         [theme.breakpoints.down('sm')]: {
//             height: "2rem",
//             width: "7.5rem",
//             fontSize: "0.7rem",
//             fontWeight: 500,
//         }
//     }
// }));

// const Subjects = () => {
//     const classes = useStyles();

//     const cards = (
//         <>
//             <Paper elevation={3} className={classes.card}>
//                 <Box className={classes.titleBox}>
//                     <Typography variant="body2" className={classes.title}>ReactJS</Typography>
//                 </Box>
//                 <img
//                     src={ReactJsImage}
//                     alt="ReactJS"
//                 />
//             </Paper>
//             <Paper elevation={3} className={classes.card}>
//                 <Box className={classes.titleBox}>
//                     <Typography variant="body2" className={classes.title}>React-Native</Typography>
//                 </Box>
//                 <img
//                     src={ReactNativeImage}
//                     alt="ReactNativeImage"
//                 />
//             </Paper>
//             <Paper elevation={3} className={classes.card}>
//                 <Box className={classes.titleBox}>
//                     <Typography variant="body2" className={classes.title}>UI/UX Design</Typography>
//                 </Box>
//                 <img
//                     src={UiUxDesignImage}
//                     alt="UiUxDesignImage"
//                     className={classes.designImage}
//                 />
//             </Paper>
//             <Paper elevation={3} className={classes.card}>
//                 <Box className={classes.titleBox}>
//                     <Typography variant="body2" className={classes.title}>Quality Assurance</Typography>
//                 </Box>
//                 <img
//                     src={QualityAssuranceImage}
//                     alt="QualityAssuranceImage"
//                     className={classes.qa}
//                 />
//             </Paper>
//             <Paper elevation={3} className={classes.card}>
//                 <Box className={classes.titleBox}>
//                     <Typography variant="body2" className={classes.title}>Ruby on Rails</Typography>
//                 </Box>
//                 <img
//                     src={RubyOnRailsImage}
//                     alt="ReactJS"
//                 />
//             </Paper>
//         </>
//     );
//     return (
//         <Grid xl={12} lg={12} md={12} sm={12} xs={12} container>
//             <Grid xl={12} lg={12} md={12} sm={12} xs={12} item className={classes.headingContainer}>
//                 <Typography variant="h4" className={classes.heading}>
//                     Popular Subject's
//                 </Typography>
//             </Grid>
//             <Box className={classes.line}></Box>
//             <Grid
//                 container
//                 spacing={9}
//                 justify="center"
//                 className={classes.cardContainer}
//             >
//                 {cards}
//             </Grid>
//             <Box className={classes.buttonDiv}>
//                 <Button variant="contained" className={classes.button}>
//                     VIEW ALL
//                 </Button>
//             </Box>
//         </Grid>
//     );
// };

// export default Subjects;
