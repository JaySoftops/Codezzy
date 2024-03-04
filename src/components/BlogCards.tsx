import {
  Button,
  Grid,
  StyleRules,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import Course from "../commonComponents/Course";
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
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
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
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    price: "$60.00",
    beginner: true,
  },
  {
    id: "3",
    img: cardUIImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    price: "$60.00",
    beginner: true,
  },
  {
    id: "4",
    img: cardQAImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    price: "$60.00",
    beginner: true,
  },
  {
    id: "5",
    img: cardRubyImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    price: "$60.00",
    beginner: true,
  },
  {
    id: "6",
    img: cardReactJSImage,
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    price: "$60.00",
    beginner: true,
  },
];

interface Props {
  classes: any;
}
interface state {}

class BlogCards extends Component<Props, state> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.mainGrid}>
        {DATA.map((element, index: number) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            className={classes.cards}
          >
            <Course data={element} />
          </Grid>
        ))}
        <Grid item md={10} lg={10} xl={10} className={classes.btnOutside}>
          <Button variant="outlined" className={classes.viewMoreBtn} fullWidth>
            View More <KeyboardArrowDownIcon />
          </Button>
        </Grid>
      </Grid>
    );
  }
}
const style: StyleRules = {
  mainGrid: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  btnOutside: {
    display: "flex",
    justifyContent: "space-around",
  },
  viewMoreBtn: {
    color: "#5798FE",
    borderColor: "#5798FE",
    alignSelf: "flex-end",
    height: "63.02px",
    margin: "20px",
  },

  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  },
  // "@media screen and (min-width: 960px) and (max-width: 1280px)": {
  //   mainGrid: {
  //     padding: "10px",
  //     display: "flex",
  //     justifyContent: "space-around",
  //   },
  // },
  "@media screen and (min-width: 0px) and (max-width: 959px)": {
    mainGrid: {
      padding: "20px",
      display: "flex",
      justifyContent: "space-around",
    },
    btnOutside: {
      display: "none",
    },
  },
};
export default withStyles(style)(BlogCards);
