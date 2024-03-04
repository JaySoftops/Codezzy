import { Box, Grid, StyleRules, withStyles } from '@material-ui/core'
import React, { Component } from 'react';
import logo from "../assets/logo.png";
import phone from "../assets/phoneLogo.png";
import map from "../assets/Vector.png";
import faceBook from "../assets/fbLogo.png";
import linkedin from "../assets/linkedinLogo.png";
import xLogo from "../assets/xLogo.png";
import insta from "../assets/instaLogo.png";
import codezzyImg from "../assets/codezzyImg.png";

interface Props {
  classes: any,
}

interface State { }

class Footer extends Component<Props, State> {

  renderAreaFooter = (classes: any) => {
    return (
      <Box className={classes.footerBody}>
        <Box className={classes.footerChild}>
          <Box className={classes.footerMainImg}>
            <img src={logo} alt="footerImage" className={classes.footerMainImage} />
          </Box>
          <Box className={classes.footerShowIcon}>
            {this.renderAddress(classes)}
            {this.renderIconList(classes)}
          </Box>
        </Box>
        <Box className={classes.footerChild}>
          <Box className={classes.footerHeading}>About Us</Box>
          <Box className={classes.footerAboutContent}>Codezzy is an interactive learning platform offering high-quality coding courses in various programming languages on numerous tech subjects like web app development (React JS and react native) In addition, it provides a programming practice platform for beginners, built with 1500+ coding problems curated by the industry-best programming experts. The coding profile of a learner can be tracked through Codezzy & further be used for job recruitment.
          </Box>
        </Box>
        <Box className={classes.footerChild}>
          <Box className={classes.footerHeading}>Company</Box>
          <ul className={classes.footerCompanyUl}>
            <li className={classes.footerList}>Home</li>
            <li className={classes.footerList}>Courses</li>
            <li className={classes.footerList}>Modules</li>
            <li className={classes.footerList}>Event</li>
            <li className={classes.footerList}>Blog</li>
          </ul>
        </Box>
        <Box className={classes.footerChild}>
          <Box className={classes.footerHeading}>Course</Box>
          <ul className={classes.footerCourseUl}>
            <li className={classes.footerList}>ReactJs</li>
            <li className={classes.footerList}>React-Native</li>
            <li className={classes.footerList}>Ruby On Rails</li>
            <li className={classes.footerList}>UI/UX Design</li>
            <li className={classes.footerList}>Quality Assurance</li>
          </ul>
        </Box>
        <Box className={classes.hide}>
          {this.renderAddress(classes)}
          {this.renderIconList(classes)}
        </Box>
      </Box>
    )
  }

  renderAddress = (classes: any) => {
    return (
      <Box className={classes.footerBorder}>
        <Box className={classes.footerFlex}>
          <Box className={classes.footerPhoneImg}>
            <img src={phone} alt="phoneImage" className={classes.footerPhoneMapImage} />
          </Box>
          <Box>
            <Box className={classes.footerNumber}>+91 0123456789</Box>
            <Box className={classes.footerNumber}>+91 0123456789</Box>
          </Box>
        </Box>
        <Box className={classes.footerFlex}>
          <Box className={classes.footerMapImg}>
            <img src={map} alt="mapImage" className={classes.footerPhoneMapImage} />
          </Box>
          <Box className={classes.footerAddress}>601, merritt7, nowrway 06851 Nwe York USA
          </Box>
        </Box>
      </Box>
    )
  }

  renderIconList = (classes: any) => {
    return (
      <Box className={classes.iconBox}>
        <Box className={classes.iconList}>
          <img src={faceBook} alt="faceBook" className={classes.iconImage} />
        </Box>
        <Box className={classes.iconList}>
          <img src={insta} alt="insta" className={classes.iconImage} />
        </Box>
        <Box className={classes.iconList}>
          <img src={xLogo} alt="xLogo" className={classes.iconImage} />
        </Box>
        <Box className={classes.iconList}>
          <img src={linkedin} alt="linkedin" className={classes.iconImage} />
        </Box>
      </Box>
    )
  }


  render() {
    const { classes } = this.props
    return (
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.footerGrid}>
          <Box className={classes.codezzyWord}>
            <img className={classes.wordCodezzy} src={codezzyImg} alt="Codezzy" />
          </Box>
          <Box className={classes.footer}>
            {this.renderAreaFooter(classes)}
          </Box>
        </Grid>
      </Grid>
    )
  }
}

const style: StyleRules = ({
  codezzyWord: {
    width: "1158px",
    height: "205px",
    margin: "auto",
  },

  wordCodezzy: {
    width: "100%",
    height: "80%",
    margin: "55px 0px 0px",
    objectFit: "contain",
    objectPosition: "center"
  },

  footer: {
    backgroundColor: "#575757",
    padding: "50px",
    paddingBottom: "55px",
  },

  footerBody: {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "space-evenly",
    borderBottom: "1.5px solid #FFFFFF",
    "& >*:nth-child(1)": {
      width: "350px",
      padding: "25px 30px",
    },
    "& >*:nth-child(2)": {
      width: "498px",
      padding: "25px 30px",
    },
    "& >*:nth-child(3)": {
      width: "350px",
      padding: "25px 30px",
    },
    "& >*:nth-child(4)": {
      width: "350px",
      padding: "25px 30px",
    },
  },

  footerMainImg: {
    width: "100px",
    height: "70px",
    margin: "auto",
  },

  footerMainImage: {
    width: "100%",
    height: "100%"
  },

  footerFlex: {
    display: "flex",
    margin: "15px",
  },

  footerBorder: {
    paddingBottom: "30px",
    borderBottom: "1px solid #FFFFFF",
  },

  footerPhoneImg: {
    width: "38px",
    height: "35px",
    margin: "7px 25px 0px 0px"
  },

  footerMapImg: {
    width: "38px",
    height: "40px",
    margin: "0px 25px 0px 3px"
  },

  footerPhoneMapImage: {
    width: "100%",
    height: "100%",
  },

  footerNumber: {
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "Roboto",
    padding: "2px 0px"
  },

  footerAddress: {
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Roboto",
    padding: "2px 0px",
    lineHeight: "22px",
  },

  footerHeading: {
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "Roboto",
    padding: "10px 0px"
  },

  footerAboutContent: {
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Roboto",
    lineHeight: "22px",
    // padding: "10px 0px"
    margin: "30px 0px",
  },

  footerCompanyUl: {
    listStyle: "none",
    margin: "20px 0px",
  },

  footerCourseUl: {
    listStyle: "none",
    margin: "20px 0px",
  },

  footerList: {
    fontSize: "20px",
    fontWeight: 700,
    fontFamily: "Roboto",
    padding: "8px 0px",
  },

  iconBox: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "20px 0px 0px"
  },

  hide: {
    display: "none"
  },

  "@media screen and (min-width: 1024px) and (max-width: 1440px)": {
    codezzyWord: {
      width: "750px",
      height: "155px",
      margin: "auto",
    },

    wordCodezzy: {
      width: "100%",
      height: "80%",
      margin: "43px 0px 0px",
      objectFit: "contain",
      objectPosition: "center"
    },

    footer: {
      padding: "30px"
    },

    footerBody: {
      borderBottom: "none",
      "& >*:nth-child(1)": {
        width: "220px",
        padding: "20px 0px 20px 10px",
      },
      "& >*:nth-child(2)": {
        width: "220px",
        padding: "20px 0px 20px 10px",
      },
      "& >*:nth-child(3)": {
        width: "220px",
        padding: "20px 0px 20px 10px",
      },
      "& >*:nth-child(4)": {
        width: "220px",
        padding: "20px 0px 20px 10px",
      },
    },

    footerBorder: {
      padding: "0px 0px 70px",
    },

    footerMainImg: {
      width: "80px",
      height: "60px",
      margin: "auto",
    },

    footerPhoneImg: {
      width: "30px",
      height: "25px",
      margin: "7px 25px 0px 0px"
    },

    footerMapImg: {
      width: "40px",
      height: "25px",
      margin: "0px 25px 0px 0px"
    },

    footerNumber: {
      fontSize: "14px",
    },

    footerAddress: {
      fontSize: "12px",
    },

    footerAboutContent: {
      fontSize: "13px",
    },

    footerList: {
      fontSize: "15px"
    },

  },

  "@media screen and (min-width: 768px) and (max-width: 1023px)": {
    codezzyWord: {
      width: "590px",
      height: "155px",
      margin: "auto",
    },

    wordCodezzy: {
      width: "100%",
      height: "80%",
      margin: "55px 0px 0px",
      objectFit: "contain",
      objectPosition: "center",
    },

    footer: {
      padding: "30px 30px 10px 30px"
    },

    footerBody: {
      borderBottom: "none",
      flexDirection: "column",
      alignItems: "center",
    },

    footerShowIcon: {
      display: "none",
    },

    footerHeading: {
      textAlign: "center"
    },

    footerAboutContent: {
      textAlign: "center"
    },

    footerList: {
      textAlign: "center",
    },

    hide: {
      // width: "100%",
      display: "block",
    },

    footerBorder: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& >*:nth-child(2)": {
        width: "200px"
      },
    },

  },

  "@media screen and (min-width: 576px) and (max-width: 767px)": {
    codezzyWord: {
      width: "500px",
      height: "105px",
      margin: "auto",
    },

    wordCodezzy: {
      width: "100%",
      height: "80%",
      margin: "35px 0px 0px",
      objectFit: "contain",
      objectPosition: "center",
    },

    footer: {
      padding: "30px 60px 10px 60px"
    },

    footerBody: {
      borderBottom: "none",
      flexDirection: "column",
      alignItems: "center",
    },

    footerShowIcon: {
      display: "none",
    },

    footerHeading: {
      textAlign: "center"
    },

    footerAboutContent: {
      textAlign: "center"
    },

    footerList: {
      textAlign: "center",
    },

    hide: {
      width: "100%",
      display: "block",
    },

    footerBorder: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& >*:nth-child(2)": {
        width: "200px"
      },
    },
  },

  "@media screen and (min-width: 300px) and (max-width: 575px)": {
    codezzyWord: {
      width: "250px",
      height: "55px",
      margin: "auto",
    },

    wordCodezzy: {
      width: "100%",
      height: "80%",
      margin: "17px 0px 0px",
      objectFit: "contain",
      objectPosition: "center",
    },

    footer: {
      padding: "30px 30px 10px 30px"
    },

    footerBody: {
      borderBottom: "none",
      flexDirection: "column",
      alignItems: "center",
      "& >*:nth-child(1)": {
        width: "220px",
        padding: "20px 0px 20px 10px",
      },
      "& >*:nth-child(2)": {
        width: "220px",
        padding: "20px 0px 20px 10px",
      },
      "& >*:nth-child(3)": {
        width: "220px",
        padding: "20px 0px 20px 10px",
      },
      "& >*:nth-child(4)": {
        width: "220px",
        padding: "20px 0px 20px 10px",
      },
    },

    // footerMapImg: {

    // },

    footerMapImg: {
      width: "47px",
      height: "43px",
      margin: "3px 20px 0px 12px"
    },

    footerShowIcon: {
      display: "none",
    },

    footerHeading: {
      textAlign: "center"
    },

    footerAboutContent: {
      textAlign: "center"
    },

    footerList: {
      textAlign: "center",
    },

    hide: {
      display: "block",
    },

    footerBorder: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& >*:nth-child(2)": {
        width: "200px"
      },
    },
  },

})

export default withStyles(style)(Footer)


// import { Box, Grid, Typography, withStyles } from "@material-ui/core";
// import logo from "../assets/logo.png";
// import phone from "../assets/phoneLogo.png";
// import map from "../assets/Vector.png";
// import React from "react";


// function Footer(props: any) {
//   const { classes } = props;

//   const contact = (
//     <Grid xl={3} lg={3} md={3} sm={12} xs={12} className={classes.about}>
//       <Box className={classes.codezzyContainer}>
//         <Box className={classes.codezzyLogo}>
//           <img src={logo} className={classes.logoStyle} />
//         </Box>
//         <Box className={classes.numberBox}>
//           <img src={phone} className={classes.phoneLogoStyle} />
//           <Box className={classes.phoneTextStyle}>
//             <Typography>+91 0123456789</Typography>
//             <Typography>+91 0123456789</Typography>
//           </Box>

//         </Box>
//         <Box className={classes.numberBox}>
//           <img src={map} className={classes.mapLogoStyle} />
//           <Typography className={classes.phoneTextStyle}>601, merritt7, nowrwa <br></br>06851 Nwe York USA</Typography>
//         </Box>
//         <Box className={classes.divider}></Box>
//         <Box className={classes.faceBoxContainer}>
//           <Box className={classes.facebookLogo}>
//             <img src={faceBook} />
//           </Box>
//           <Box className={classes.facebookLogo}>
//             <img src={insta} />
//           </Box>
//           <Box className={classes.facebookLogo}>
//             <img src={xLogo} />
//           </Box>
//           <Box className={classes.facebookLogo}>
//             <img src={linkedin} />
//           </Box>
//         </Box>
//       </Box>

//     </Grid>
//   );

//   const about = (
//     <Grid xl={3} lg={3} md={3} sm={12} xs={12} className={classes.about}>
//       <Typography variant='h6' className={classes.heading}>About Us</Typography>
//       <Typography variant='body1' className={classes.text}>
//         Codezzy is an interactive learning platform offering high-quality coding courses in various programming languages on numerous tech subjects like web app development (React JS and react native) In addition, it provides a programming practice platform for beginners, built with 1500+ coding problems curated by the industry-best programming experts. The coding profile of a learner can be tracked through Codezzy & further be used for job recruitment.
//       </Typography>
//     </Grid>
//   );
//   const company = (
//     <Grid xl={3} lg={3} md={3} sm={12} xs={12} className={classes.company}>
//       <Typography variant='h6' className={classes.heading}>Company</Typography>
//       <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.elementList}>
//         <Typography variant='body1' className={classes.element}>Home</Typography>
//         <Typography variant='body1' className={classes.element}>Courses</Typography>
//         <Typography variant='body1' className={classes.element}>Module</Typography>
//         <Typography variant='body1' className={classes.element}>Event</Typography>
//         <Typography variant='body1' className={classes.element}>Blog</Typography>
//       </Grid>
//     </Grid>
//   );
//   const course = (
//     <Grid xl={3} lg={3} md={3} sm={12} xs={12} className={classes.course}>
//       <Typography variant='h6' className={classes.heading}>Courses</Typography>
//       <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.elementList}>
//         <Typography variant='body1' className={classes.element}>ReactJs</Typography>
//         <Typography variant='body1' className={classes.element}>React Native</Typography>
//         <Typography variant='body1' className={classes.element}>Ruby On rails</Typography>
//         <Typography variant='body1' className={classes.element}>UI/UX Design</Typography>
//         <Typography variant='body1' className={classes.element}>Quality Assurance</Typography>
//       </Grid>
//     </Grid>
//   );


//   return (
//     <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.topComtainer} >
//       <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.comtainer} >
//         {contact}
//         {about}
//         {company}
//         {course}
//       </Grid >
//       <Grid xl={11} lg={11} md={11} sm={11} xs={11} className={classes.fullDivider}></Grid>
//       <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.copyrightContainer}>
//         <Typography className={classes.copyright}>@copyrights</Typography>
//       </Grid>
//     </Grid>

//   );
// }
// const style = ({
//   topContainer: {
//     display: "block",
//     height: "650px",
//     width: "100%",
//     backgroundColor: "#575757",
//     color: "white",
//   },
//   comtainer: {
//     display: "flex",
//     // backgroundImage: `url(${background})`,
//     // backgroundPosition: "center",
//     margin: "auto",
//     backgroundColor: "#575757",
//     color: "white",
//   },
//   contact: {
//     display: "block",
//     marginTop: "40px",
//     paddingLeft: "500px",
//     border: "2px solid black"
//   },
//   about: {
//     display: "block",
//     marginTop: "16px",
//     // border: "2px solid black"
//   },
//   company: {
//     display: "block",
//     marginTop: "16px",
//     paddingLeft: "95px",
//     // border: "2px solid black",
//     padding: "0px auto 0px",
//     justifyContent: "center"

//   },
//   course: {
//     display: "block",
//     marginTop: "16px",
//     // border: "2px solid black",
//     padding: "0px auto 0px",
//     justifyContent: "center"
//   },
//   heading: {
//     fontFamily: "Roboto",
//     fontSize: 24,
//     fontWeight: 700,
//     textAlign: "left" as "left",
//     marginTop: "16px",
//     marginLeft: "50px"
//   },
//   text: {
//     marginTop: "59px",
//     marginLeft: "50px"
//   },
//   elementList: {
//     marginTop: "59px",
//     marginLeft: "50px",
//     display: "block",
//     justifyContent: "left"
//   },
//   element: {
//     marginTop: "30px",
//     width: "131px"
//   },
//   codezzyLogo: {
//     height: "100px",
//     width: "100px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   numberBox: {
//     height: "50px",
//     width: "70%",
//     display: "flex",
//     alignItems: "center",
//     // justifyContent:"space-around",
//     padding: "20px 0 0 20px",
//     fontSize: "16px",
//     fontWeight: 600,
//   },
//   codezzyContainer: {
//     padding: "10px 10px 10px",
//     margin: "20px",
//     display: "flex",
//     flexDirection: "column" as "column",
//     gap: "10px",
//     alignItems: "center"
//   },
//   logoStyle: {
//     height: "80px",
//     width: "90px"
//   },
//   faceBoxContainer: {
//     height: "60px",
//     width: "75%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-around"
//   },
//   facebookLogo: {
//     height: "40px",
//     width: "40px",
//     borderRadius: "20px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   phoneLogoStyle: {
//     height: "40px",
//     width: "40px",
//   },
//   mapLogoStyle: {
//     height: "40px",
//     width: "30px",
//   },
//   phoneTextStyle: {
//     marginLeft: "20px"
//   },
//   dividerStyle: {
//     color: "#fff",
//   },
//   divider: {
//     border: "1px solid #fff",
//     width: "68%"
//   },
//   fullDivider: {
//     border: "1.5px solid #fff",
//     maginTop: "40px",
//     margin: "0px auto"
//   },
//   copyrightContainer: {
//     backgroundColor: "#575757",
//     color: "white",
//     display: "flex",
//     justifyContent: "center",

//   },
//   copyright: {
//     fontFamily: "Roboto",
//     fontSize: 24,
//     fontWeight: 700,
//     textAlign: "left" as "left",
//     margin: "24px auto"
//   }
// })

// export default withStyles(style)(Footer);