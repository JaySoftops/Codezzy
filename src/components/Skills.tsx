import React from "react";
import Course from "../commonComponents/Course";
import {
  Box,
  Button,
  Grid,
  Typography,
  Divider,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import cardReactJSImage from "../assets/cardReactJSImage.png";
import cardReactNativeImage from "../assets/cardReactNativeImage.png";
import cardUIImage from "../assets/cardUIImage.png";
import cardQAImage from "../assets/cardQAImage.png";
import cardRubyImage from "../assets/cardRubyImage.png";
const DATA = [
  {
    id: "1",
    img: cardReactJSImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
    price: "$60.00",
    width: "100%",
    beginner: true,
    backgroundColor: "#000000",
  },
  {
    id: "2",
    img: cardReactNativeImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
    price: "$60.00",
    beginner: true,
  },
  {
    id: "3",
    img: cardUIImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
    price: "$60.00",
    beginner: true,
  },
  {
    id: "4",
    img: cardQAImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
    price: "$60.00",
    beginner: true,
  },
  {
    id: "5",
    img: cardRubyImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
    price: "$60.00",
    beginner: true,
  },
  {
    id: "6",
    img: cardReactJSImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
    price: "$60.00",
    beginner: true,
  },
];
const skills = [
  "All",
  "React JS",
  "React-Native",
  "UI/UX Design",
  "Ruby On Rails",
  "Quality Assurance",
];
export default function Skills() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainGrid}>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.titleGrid}
      >
        <Typography className={classes.title} align="center">
          Elevate Your Skills in Top Programming Languages with{" "}
          <span className={classes.codezzyText}>Codezzy</span>
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
        className={classes.selection}
      >
        <Box className={classes.skills}>
          {skills.map((element, index) => (
            <>
              <Typography className={classes.skill}>{element}</Typography>
              {index !== 5 && <Divider className={classes.skillsDivider} />}
            </>
          ))}
        </Box>
        <TextField
          select
          className={classes.dropDwn}
          SelectProps={{
            native: true,
          }}
          InputProps={{ style: { width: "100%", height: "100%" } }}
          variant="outlined"
        >
          {skills.map((option) => (
            <option key={option} value={option}>
              {option} <KeyboardArrowDownIcon />
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid
        item
        xs={12}
        lg={12}
        md={12}
        sm={12}
        xl={12}
        className={classes.rightSide}
      >
        <Grid container className={classes.cardContainer} spacing={2}>
          {DATA.map((element, index: number) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classes.cards}
            >
              <Course data={element} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.btnOutside}
      >
        <Button variant="outlined" className={classes.viewMoreBtn}>
          View More <KeyboardArrowDownIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  "& .MuiCardContent-root": {
    padding: "0px",
  },
  titleGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "5px",
    },
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "5px",
    },
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    margin: "15px 10px 10px 10px",
    height: "4px",
    width: "324px",
    background: "rgba(239, 182, 182, 1)",
    [theme.breakpoints.down("xs")]: {
      width: "290px",
    },
  },
  skillsDivider: {
    backgroundColor: "black",
    width: "26.78px",
    rotate: "-90deg",
    height: "1.3px",
    borderRadius: "1px",
  },
  divider2: {
    margin: "10px 10px 10px 10px",
    height: "2px",
    width: "60%",
    background: "white",
    "&:hover": {
      background: "rgba(239, 182, 182, 1)",
    },
  },
  title: {
    fontSize: "30px",
    fontFamily: "Nunito",
    margin: "10px 10px 15px 10px",
    fontWeight: 700,
    lineHeight: "40.92px",
    maxWidth: "559px",
  },
  cards: { display: "flex", alignItems: "center", justifyContent: "center" },
  selection: {
    margin: "10px 10px 15px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  codezzyText: { color: "rgba(87, 152, 254, 1)" },
  skills: {
    display: "flex",
    width: "1077px",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "845px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  skill: {
    cursor: "pointer",
    fontWeight: 500,
    padding: "5px",
    lineHeight: "21px",
    fontSize: "18px",
    fontFamily: "Roboto",
    borderBottom: "1px solid white",
    "&:hover": {
      borderBottom: "1px solid rgba(242, 39, 126, 1)",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      padding: "5px 7px 5px 7px",
    },
  },
  dropDwn: {
    display: "none",
    width: "290px",
    height: "36px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "240px",
    },
  },
  btnOutside: {
    display: "flex",
    justifyContent: "center",
    padding: "0 20px 0 20px",
  },
  viewMoreBtn: {
    color: "#5798FE",
    borderColor: "#5798FE",
    margin: "10px 10px 10px 10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    height: "80.37px",
    width: "87%",
  },
}));


// import React from 'react';
// import Course from '../commonComponents/Course';
// import { Box, Button, Grid, Typography } from '@material-ui/core';
// import { makeStyles } from "@material-ui/core/styles";
// import HorizontalNavbar from './HorizontalNavBar';


// const DATA = [{
//     id: "1",
//     img: "circle-image.jpg",
//     lesson: "3",
//     duration: "2 hours 40 minutes",
//     description: "Learn Essentials of User Interface Design in Figma",
//     rating: "⭐️⭐️⭐️⭐️⭐️",
//     price: "$60.00",
//     width: "100%",
//     beginner: true,
//     backgroundColor: "#000000"
// },
// {
//     id: "2",
//     img: "circle-image.jpg",
//     lesson: "3",
//     duration: "2 hours 40 minutes",
//     description: "Learn Essentials of User Interface Design in Figma",
//     rating: "⭐️⭐️⭐️⭐️⭐️",
//     price: "$60.00",
//     beginner: true
// },
// {
//     id: "3",
//     img: "circle-image.jpg",
//     lesson: "3",
//     duration: "2 hours 40 minutes",
//     description: "Learn Essentials of User Interface Design in Figma",
//     rating: "⭐️⭐️⭐️⭐️⭐️",
//     price: "$60.00",
//     beginner: true
// },
// {
//     id: "4",
//     img: "circle-image.jpg",
//     lesson: "3",
//     duration: "2 hours 40 minutes",
//     description: "Learn Essentials of User Interface Design in Figma",
//     rating: "⭐️⭐️⭐️⭐️⭐️",
//     price: "$60.00",
//     beginner: true
// },
// {
//     id: "5",
//     img: "circle-image.jpg",
//     lesson: "3",
//     duration: "2 hours 40 minutes",
//     description: "Learn Essentials of User Interface Design in Figma",
//     rating: "⭐️⭐️⭐️⭐️⭐️",
//     price: "$60.00",
//     beginner: true
// },
// {
//     id: "6",
//     img: "circle-image.jpg",
//     lesson: "3",
//     duration: "2 hours 40 minutes",
//     description: "Learn Essentials of User Interface Design in Figma",
//     rating: "⭐️⭐️⭐️⭐️⭐️",
//     price: "$60.00",
//     beginner: true
// }
// ];

// const useStyles = makeStyles((theme) => ({
//     cardContainer: {
//         display: "flex",
//         margin: "0 auto",
//         width: "100%",
//         justifyContent: "center",
//         padding: "0 15px",
//         // backgroundColor: "#000000",
//     },
//     container: {
//         display: "block",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     headingContainer: {
//         display: "flex",
//         justifyContent: "center",
//         width: "35rem",
//         margin: "0 auto 2rem"
//     },
//     heading: {
//         textAlign: "center",
//         fontFamily: "Nunito",
//         fontSize: "30px",
//         fontWeight: 700,
//     },
//     codezzy: {
//         display: "inline",
//         color: "#5798FE",
//         textAlign: "center",
//         fontFamily: "Nunito",
//         fontSize: "30px",
//         fontWeight: 700,
//     },
//     line: {
//         border: "2px solid #EFB6B6",
//         width: "22rem",
//         margin: "1.5rem auto 1.5rem",
//     },
//     btnContainer: {
//         display: "flex",
//         justifyContent: "center",
//         margin: "1rem auto 2rem"
//     },
//     btn: {
//         color: "#5798FE",
//         borderColor: "#5798FE",
//         width: "67rem",
//     }
// }));


// export default function Skills() {
//     const classes = useStyles();

//     return (
//         <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.container} >
//             <Grid container spacing={1} xl={12} lg={12} md={12} sm={12} xs={12} className={classes.headingContainer}>
//                 <Typography variant="h5" component="h3" className={classes.heading}>Elevate Your Skills in Top</Typography>
//                 <Typography variant="h5" component="h3" className={classes.heading}>Programming Languages with <Typography variant="h5" component="h3" className={classes.codezzy}>Codezzy</Typography></Typography>
//             </Grid>
//             <Box className={classes.line}></Box>
//             <HorizontalNavbar />
//             <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.cardContainer} >
//                 {DATA.map((element, index) => (
//                     <Course data={DATA[index]} key={index} />
//                 ))}
//             </Grid>
//             <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.btnContainer}>
//                 <Button variant="outlined" className={classes.btn}>
//                     View All
//                 </Button>
//             </Grid>
//         </Grid>
//     )
// }
