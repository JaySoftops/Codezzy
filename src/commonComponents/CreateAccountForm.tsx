import { Box, Grid, StyleRules, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm';
import RectangleBackgroundImg from '../assets/RectangleBack 13808.png';

interface Props {
  classes: any,
}

class CreateAccountForm extends Component<Props> {

  renderFormContent = (classes: any) => {
    return (
      <Box className={classes.contentBox}>
        <Box className={classes.contentHeading}>Create your Account Get free access to <Box className={classes.span} component="span">6000+ </Box>online course</Box>
        <Box className={classes.contentFlex}>
          <Box className={classes.contentImg}>
            <img className={classes.contentImage} src="icon" alt="icon" />
          </Box>
          <Box className={classes.contentParagraph}>Coding problems curated by the industry-best programming experts</Box>
        </Box>
      </Box>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.contentBody}>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.firstGrid}>
          <Box className={classes.firstBox}>
            {this.renderFormContent(classes)}
          </Box>
          <Box className={classes.secondBox}>
            <RegistrationForm />
          </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.secondGrid}>
        </Grid>
        {/* <Grid item lg={12} md={12} sm={12} xs={12} className={classes.contentLowerColor}/> */}
      </Grid>
    )
  }
}

const style: StyleRules = ({
  contentBody: {
    // width: "90%",
    margin: "0px auto 20px",
    padding: "0px 120px",

  },

  firstGrid: {
    width: "100%",
    height: "520px",
    display: "flex",
    backgroundImage: `url("${RectangleBackgroundImg}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  firstBox: {
    width: "50%",
    marginTop: "120px",
  },

  secondBox: {
    width: "50%",
    marginTop: "120px",
    zIndex: 5,
  },

  contentHeading: {
    width: "80%",
    fontSize: "48px",
    fontWeight: 700,
    fontFamily: "Nunito",
    // marginRight: "250px",
  },

  span: {
    color: "#B557FE"
  },

  contentFlex: {
    display: "flex",
    margin: "80px 0px 0px"
  },

  contentParagraph: {
    width: "40%",
    fontFamily: "Nunito",
    fontSize: "18px",
    fontWeight: 500,
    margin: "0px 15px 0px",
  },

  secondGrid: {
    width: "100%",
    height: "130px",
    backgroundColor: "#FEFBF6",
    margin: "15px 0px 0px"
  },

  "@media screen and (min-width: 1024px) and (max-width: 1440px)": {
    contentBody: {
      padding: "0px 80px",
    },

    firstGrid: {
      height: "450px",
    },

    firstBox: {
      marginTop: "60px",
    },

    secondBox: {
      marginTop: "60px",
    },

    contentHeading: {
      width: "80%",
      marginTop: "20px",
      marginRight: "0px",
      fontSize: "40px"
    },

    contentFlex: {
      margin: "60px 0px 0px"
    },

    contentParagraph: {
      width: "100%",
      fontSize: "14px",
    },

    secondGrid: {
      height: "100px"
    },

  },

  "@media screen and (min-width: 768px) and (max-width: 1023px)": {
    contentBody: {
      padding: "0px 60px"
    },

    firstGrid: {
      height: "350px",
    },

    firstBox: {
      marginTop: "20px",
    },

    secondBox: {
      marginTop: "20px",
    },

    contentFlex: {
      margin: "50px 0px 0px"
    },

    contentHeading: {
      width: "100%",
      marginTop: "20px",
      marginRight: "0px",
      fontSize: "35px",
    },

    contentParagraph: {
      width: "100%",
      fontSize: "14px",
    },

    secondGrid: {
      height: "90px",
    },
  },

  "@media screen and (min-width: 576px) and (max-width: 767px)": {
    contentBody: {
      padding: "0px"
    },

    firstGrid: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "0px 40px"
    },

    firstBox: {
      width: "100%",
      marginTop: "40px",
    },

    secondBox: {
      width: "100%",
    },

    contentFlex: {
      margin: "40px 0px 0px"
    },

    contentHeading: {
      width: "50%",
      fontSize: "30px",
      textAlign: "center",
      margin: "auto",
    },

    contentParagraph: {
      width: "80%",
      textAlign: "center"
    },

  },

  "@media screen and (min-width: 300px) and (max-width: 575px)": {
    contentBody: {
      padding: "0px"
    },

    firstGrid: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "0px 10px"
    },

    // secondGrid: {
    //   height: "400px",
    // },

    firstBox: {
      width: "70%",
      margin: "0px auto",
      marginTop: "40px",
    },

    secondBox: {
      width: "100%",
      // height: "500px",
      marginTop: "20px",
    },

    contentHeading: {
      width: "100%",
      fontSize: "20px",
      textAlign: "center",
      margin: "auto",
    },

    contentFlex: {
      margin: "20px 0px 0px"
    },

    contentParagraph: {
      width: "80%",
      textAlign: "center",
      fontSize: "15px",
    },

    secondGrid: {
      height: "70px",
    },
  }

})

export default withStyles(style)(CreateAccountForm)