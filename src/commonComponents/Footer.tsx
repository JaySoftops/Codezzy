import { Box, Grid, Typography, withStyles } from "@material-ui/core";
import logo from "../assets/logo.png";
import phone from "../assets/phoneLogo.png";
import map from "../assets/Vector.png";
import faceBook from "../assets/fbLogo.png";
import linkedin from "../assets/linkedinLogo.png";
import xLogo from "../assets/xLogo.png";
import insta from "../assets/instaLogo.png";
import React from "react";


function Footer(props: any) {
  const { classes } = props;

  const contact = (
    <Grid xl={3} lg={3} md={3} sm={12} xs={12} className={classes.about}>
      <Box className={classes.codezzyContainer}>
        <Box className={classes.codezzyLogo}>
          <img src={logo} className={classes.logoStyle} />
        </Box>
        <Box className={classes.numberBox}>
          <img src={phone} className={classes.phoneLogoStyle} />
          <Box className={classes.phoneTextStyle}>
            <Typography>+91 0123456789</Typography>
            <Typography>+91 0123456789</Typography>
          </Box>

        </Box>
        <Box className={classes.numberBox}>
          <img src={map} className={classes.mapLogoStyle} />
          <Typography className={classes.phoneTextStyle}>601, merritt7, nowrwa <br></br>06851 Nwe York USA</Typography>
        </Box>
        <Box className={classes.divider}></Box>
        <Box className={classes.faceBoxContainer}>
          <Box className={classes.facebookLogo}>
            <img src={faceBook} />
          </Box>
          <Box className={classes.facebookLogo}>
            <img src={insta} />
          </Box>
          <Box className={classes.facebookLogo}>
            <img src={xLogo} />
          </Box>
          <Box className={classes.facebookLogo}>
            <img src={linkedin} />
          </Box>
        </Box>
      </Box>

    </Grid>
  );

  const about = (
    <Grid xl={3} lg={3} md={3} sm={12} xs={12} className={classes.about}>
      <Typography variant='h6' className={classes.heading}>About Us</Typography>
      <Typography variant='body1' className={classes.text}>
          Codezzy is an interactive learning platform offering high-quality coding courses in various programming languages on numerous tech subjects like web app development (React JS and react native) In addition, it provides a programming practice platform for beginners, built with 1500+ coding problems curated by the industry-best programming experts. The coding profile of a learner can be tracked through Codezzy & further be used for job recruitment.
      </Typography>
    </Grid>
  );
  const company = (
    <Grid xl={3} lg={3} md={3} sm={12} xs={12} className={classes.company}>
      <Typography variant='h6' className={classes.heading}>Company</Typography>
      <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.elementList}>
        <Typography variant='body1' className={classes.element}>Home</Typography>
        <Typography variant='body1' className={classes.element}>Courses</Typography>
        <Typography variant='body1' className={classes.element}>Module</Typography>
        <Typography variant='body1' className={classes.element}>Event</Typography>
        <Typography variant='body1' className={classes.element}>Blog</Typography>
      </Grid>
    </Grid>
  );
  const course = (
    <Grid xl={3} lg={3} md={3} sm={12} xs={12} className={classes.course}>
      <Typography variant='h6' className={classes.heading}>Courses</Typography>
      <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.elementList}>
        <Typography variant='body1' className={classes.element}>ReactJs</Typography>
        <Typography variant='body1' className={classes.element}>React Native</Typography>
        <Typography variant='body1' className={classes.element}>Ruby On rails</Typography>
        <Typography variant='body1' className={classes.element}>UI/UX Design</Typography>
        <Typography variant='body1' className={classes.element}>Quality Assurance</Typography>
      </Grid>
    </Grid>
  );


  return (
    <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.topComtainer} >
      <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.comtainer} >
        {contact}
        {about}
        {company}
        {course}
      </Grid >
      <Grid xl={11} lg={11} md={11} sm={11} xs={11} className={classes.fullDivider}></Grid>
      <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.copyrightContainer}>
        <Typography className={classes.copyright}>@copyrights</Typography>
      </Grid>
    </Grid>

  );
}
const style = ({
  topContainer: {
    display: "block",
    height: "650px",
    width: "100%",
    backgroundColor: "#575757",
    color: "white",
  },
  comtainer: {
    display: "flex",
    // backgroundImage: `url(${background})`,
    // backgroundPosition: "center",
    margin: "auto",
    backgroundColor: "#575757",
    color: "white",
  },
  contact: {
    display: "block",
    marginTop: "40px",
    paddingLeft: "500px",
    border: "2px solid black"
  },
  about: {
    display: "block",
    marginTop: "16px",
    // border: "2px solid black"
  },
  company: {
    display: "block",
    marginTop: "16px",
    paddingLeft: "95px",
    // border: "2px solid black",
    padding: "0px auto 0px",
    justifyContent: "center"

  },
  course: {
    display: "block",
    marginTop: "16px",
    // border: "2px solid black",
    padding: "0px auto 0px",
    justifyContent: "center"
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 700,
    textAlign: "left" as "left",
    marginTop: "16px",
    marginLeft: "50px"
  },
  text: {
    marginTop: "59px",
    marginLeft: "50px"
  },
  elementList: {
    marginTop: "59px",
    marginLeft: "50px",
    display: "block",
    justifyContent: "left"
  },
  element: {
    marginTop: "30px",
    width: "131px"
  },
  codezzyLogo: {
    height: "100px",
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  numberBox: {
    height: "50px",
    width: "70%",
    display: "flex",
    alignItems: "center",
    // justifyContent:"space-around",
    padding: "20px 0 0 20px",
    fontSize: "16px",
    fontWeight: 600,
  },
  codezzyContainer: {
    padding: "10px 10px 10px",
    margin: "20px",
    display: "flex",
    flexDirection: "column" as "column",
    gap: "10px",
    alignItems: "center"
  },
  logoStyle: {
    height: "80px",
    width: "90px"
  },
  faceBoxContainer: {
    height: "60px",
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  facebookLogo: {
    height: "40px",
    width: "40px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  phoneLogoStyle: {
    height: "40px",
    width: "40px",
  },
  mapLogoStyle: {
    height: "40px",
    width: "30px",
  },
  phoneTextStyle: {
    marginLeft: "20px"
  },
  dividerStyle: {
    color: "#fff",
  },
  divider: {
    border: "1px solid #fff",
    width: "68%"
  },
  fullDivider: {
    border: "1.5px solid #fff",
    maginTop: "40px",
    margin: "0px auto"
  },
  copyrightContainer: {
    backgroundColor: "#575757",
    color: "white",
    display: "flex",
    justifyContent: "center",

  },
  copyright: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 700,
    textAlign: "left" as "left",
    margin: "24px auto"
  }
})

export default withStyles(style)(Footer);