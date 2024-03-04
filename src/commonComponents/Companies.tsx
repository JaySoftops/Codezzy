import {
  Box,
  Divider,
  Grid,
  StyleRules,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import softopsImage from "../assets/softops.png";

interface Props {
  classes: any;
}
interface State {
  items: itemData[];
}
interface itemData {
  id: number;
}
class Companies extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
      ],
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.companiesSectionBody}>
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
            Our Candidates Are Working With
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
          className={classes.companies}
        >
          <Grid container className={classes.logos}>
            {this.state.items.map((item: any, index: number) => (
              <Grid
                item
                xl={1}
                lg={1}
                md={1}
                sm={5}
                xs={4}
                className={index % 2 ? classes.logo2 : classes.logo}
              >
                {index === 6 ? (
                  <Box className={classes.image7}>
                    {" "}
                    <img
                      src={softopsImage}
                      alt="img"
                      className={classes.imageComponent}
                    />
                  </Box>
                ) : (
                  <Box className={classes.image}>
                    {" "}
                    <img
                      src={softopsImage}
                      alt="img"
                      className={classes.imageComponent}
                    />
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
const style: StyleRules = {
  companiesSectionBody: {
    padding: "20px",
    background: "linear-gradient(270deg, #FFFBF5 0%, #FFFBF5 95.12%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  titleGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "30px",
    fontFamily: "Nunito",
    fontWeight: 700,
    lineHeight: "40.92px",
    margin: "10px 10px 10px 10px",
  },
  divider: {
    margin: "10px 10px 0px 10px",
    height: "5px",
    width: "249px",
    background: "rgba(239, 182, 182, 1)",
  },
  companies: {
    margin: "0 10px 10px 10px",
  },
  logos: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "10px 10px 10px 0px",
  },
  logo: {
    margin: "0 10px 10px 10px",
    display: "flex",
    padding: "10px 10px 10px 10px",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  logo2: {
    margin: "70px 10px 10px 10px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "10px 10px 10px 10px",
  },
  image: {
    minWidth: "170px",
    display: "flex",
    minHeight: "171px",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid black",
  },
  image7: {
    minWidth: "170px",
    minHeight: "171px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid black",
  },
  imageComponent: {
    height: "auto",
    width: "100%",
  },
  "@media screen and (min-width: 960px) and (max-width: 1260px)": {
    title: {
      fontSize: "25px",
      margin: "6px",
    },
    imageComponent: {
      width: "80%",
    },
  },
  "@media screen and (min-width: 0px) and (max-width: 959px)": {
    companiesSectionBody: {
      padding: "15px",
    },
    logo2: {
      margin: "0 10px 10px 10px",
    },
    image7: {
      display: "none",
    },
    imageComponent: {
      width: "70%",
    },
    title: {
      fontSize: "25px",
    },
  },
};
export default withStyles(style)(Companies);

// import { Box, Grid, Typography, withStyles } from "@material-ui/core";
// import React, { useState } from "react";
// import softops from "../assets/softops.png";
// import { makeStyles } from "@material-ui/core/styles";


// function Companies() {
//     const classes = useStyles();

//     const [logoList, setLogoList] = useState([softops, softops, softops, softops, softops, softops, softops])

//     const imgArray = logoList.map((ele, index) => {
//         return (
//             <Grid item xl={12} lg={12} md={3} sm={3} xs={3} className={index % 2 === 0 ? classes.imgContainer : classes.imgContainerDown} key={index}>
//                 <img src={ele} alt="logoImg" className={classes.logo} />
//             </Grid>
//         );
//     });


//     return (
//         <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.container}>
//             <Box className={classes.headerBox}>
//                 <Typography variant="h5" className={classes.heading}>Our Candidates Are Working With</Typography>
//             </Box>
//             <Grid item xl={3} lg={3} md={3} sm={3} xs={3} className={classes.line}>
//             </Grid>
//             <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
//                 <Box className={classes.logoContainer}>
//                     {imgArray}
//                 </Box>
//             </Grid>
//         </Grid>
//     )
// }

// const useStyles = makeStyles((theme) => ({
//     container: {
//         width: "100%",
//         height: "382px",
//         backgroundColor: "#FFFBF5",
//         display: "block",
//         marginTop: "300px",
//         border: "2px solid #FFFBF5",
//         padding: "0 2rem"
//     },
//     headerBox: {
//         display: "flex",
//         justifyContent: "center",
//         marginTop: "30px",
//     },
//     heading: {
//         fontFamily: "Nunito",
//         fontSize: 30,
//         fontWeight: 700,
//         textAlign: "center" as "center",
//     },
//     compaines: {
//         display: "flex",
//     },
//     line: {
//         border: "2px solid rgba(239, 182, 182, 1)",
//         width: "294px",
//         margin: "16px auto 0px"
//     },
//     logoContainer: {
//         // border: "2px solid #AAAAAA",
//         display: "flex",
//         jutifyContent: "center",
//         padding: "0px 5rem 0px",
//         margin: "40px auto 0",
//         [theme.breakpoints.down('lg')]: {
//             padding: "0px 2rem",
//             flexWrap: "wrap",

//         },
//         [theme.breakpoints.down('md')]: {
//             padding: "0px",
//             margin: "30px 0",
//         },
//     },
//     imgContainer: {
//         width: "auto",
//         height: "auto",
//         maxWidth: "9.5rem",
//         maxHeight: "9.5rem",
//         display: "flex",
//         justifyContent: "center",
//         margin: "0 2rem",
//         [theme.breakpoints.down('lg')]: {
//             padding: "0px 2rem",
//             maxWidth: "8.5rem",
//             maxHeight: "8.5rem",
//         },
//         [theme.breakpoints.down('md')]: {
//             padding: "0px",
//             maxWidth: "6.5rem",
//             maxHeight: "6.5rem",

//         },
//     },
//     logo: {
//         width: "auto",
//         height: "auto",
//         maxWidth: "150px",
//         maxHeight: "151px",
//         [theme.breakpoints.down('lg')]: {
//             maxWidth: "140px",
//             maxHeight: "141px",
//         },
//         [theme.breakpoints.down('md')]: {
//             maxWidth: "100px",
//             maxHeight: "101px",

//         },
//         // marginLeft: "auto"
//     },
//     imgContainerDown: {
//         display: "flex",
//         justifyContent: "center",
//         width: "auto",
//         height: "auto",
//         maxWidth: "150px",
//         maxHeight: "151px",
//         // marginLeft: "auto",
//         margin: "50px 2rem 0",
//         [theme.breakpoints.down('lg')]: {
//             padding: "0px 2rem",
//             maxWidth: "8.5rem",
//             maxHeight: "8.5rem",
//         },
//         [theme.breakpoints.down('md')]: {
//             padding: "0px",
//             maxWidth: "6.5rem",
//             maxHeight: "6.5rem",

//         },
//     }
// }));

// export default Companies;