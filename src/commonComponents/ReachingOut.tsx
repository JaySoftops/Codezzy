import {
  Box,
  Button,
  Grid,
  StyleRules,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import React, { Component } from "react";
// import tiltImage from "../assets/tilts.png";
interface Props {
  classes: any;
}
interface State { }
class ReachingOut extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.reachSectionBody}>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.titleBody}
        >
          <Box className={classes.contentBox}>
            {" "}
            <Typography className={classes.content} align="center">
              Reach out our customer care executive
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              placeholder="Enter your email here"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" className={classes.btnInside}>
                      Subscribe Now
                    </Button>
                  </InputAdornment>
                ),
                style: {
                  width: "100%",
                  height: "100%",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            />
            <Button variant="contained" className={classes.btnOutside}>
              Subscribe Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
const style: StyleRules = {
  reachSectionBody: {
    background: "rgba(239, 182, 182, 1)",
    padding: "10px",
  },
  titleBody: {
    minHeight: "228px",
    justifyContent: "center",
    display: "flex",
  },
  contentBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    padding: "40px",
  },
  content: {
    fontSize: "30px",
    fontFamily: "Nunito",
    fontWeight: 700,
    lineHeight: "40.92px",
    color: "white",
  },
  textField: {
    background: "white",
    width: "490px",
    borderRadius: "6px",
    height: "61px",
  },
  btnInside: {
    color: "white",
    background: "linear-gradient(270deg, #0D6AFC 0%, #074CBA 100%)",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "19.1px",
    fontFamily: "Nunito",
    width: "162px",
    height: "39px",
  },
  btnOutside: {
    display: "none",
    color: "white",
    background: "linear-gradient(270deg, #0D6AFC 0%, #074CBA 100%)",
    margin: "10px 10px 10px 10px",
    width: "162px",
    height: "39px",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "19.1px",
    fontFamily: "Nunito",
  },
  "@media screen and (min-width: 601px) and (max-width: 959px)": {
    btnInside: {
      display: "none",
    },
    contentBox: { padding: "20px 10px 20px 10px" },
    btnOutside: {
      display: "block",
    },
    textField: {
      maxWidth: "344px",
      maxHeight: "53px",
    },
  },
  "@media screen and (min-width: 0px) and (max-width: 600px)": {
    btnInside: {
      display: "none",
    },
    contentBox: { padding: "10px" },
    btnOutside: {
      display: "block",
      color: "white",
      background: "linear-gradient(270deg, #0D6AFC 0%, #074CBA 100%)",
      margin: "10px 10px 10px 10px",
    },
    textField: {
      maxWidth: "270px",
      maxHeight: "49px",
    },
  },
};
export default withStyles(style)(ReachingOut);



// import React from 'react'
// import { Box, Button, Grid, Input, InputAdornment, OutlinedInput, TextField, Typography, withStyles } from "@material-ui/core";


// const ReachingOut = (props: any) => {
//     const { classes } = props;


//     return (
//         <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.container}>
//             <Grid xl={3} lg={2} md={2} sm={2} xs={2}></Grid>
//             <Box className={classes.line}></Box>
//             <Grid xl={6} lg={6} md={6} sm={6} xs={6}>
//                 <Box className={classes.headerBox}>
//                     <Typography variant="h5" className={classes.heading}>Reach out our customer care executive</Typography>
//                 </Box>
//                 <form className={classes.form}>
//                     <OutlinedInput
//                         placeholder='Enter your email here'
//                         className={classes.input}
//                         endAdornment={
//                             <InputAdornment position="end">
//                                 <Button variant="outlined" className={classes.btnStyle}>
//                                     SUBSCRIBE NOW
//                                 </Button>
//                             </InputAdornment>
//                         }
//                     />
//                 </form >
//             </Grid>
//             <Box className={classes.line}></Box>
//             <Grid xl={3} lg={2} md={2} sm={2} xs={2}></Grid>
//         </Grid>
//     );
// }

// const style = ({
//     container: {
//         width: "100%",
//         height: "236px",
//         backgroundColor: "#EFB6B6",
//         display: "flex",
//         marginTop: "300px",
//         marginBottom: "400px",
//     },
//     headerBox: {
//         display: "flex",
//         justifyContent: "center",
//         marginTop: "38px",
//     },
//     heading: {
//         fontFamily: "Nunito",
//         color: "white",
//         fontSize: 30,
//         fontWeight: 700,
//         textAlign: "center" as "center",
//     },
//     form: {
//         display: "flex",
//         justifyContent: "center",
//         // border: "2px solid black",
//         marginTop: "30px"
//     },
//     input: {
//         width: "500px",
//         height: "61px",
//         backgroundColor: "white",
//         borderRadius: "5px"
//     },
//     btnStyle: {
//         coloe: "white",
//         width: "162px",
//         height: "39px",
//         borderRadius: "6px",
//         backgroundImage: "linear-gradient(90deg,rgba(7, 76, 186, 1),rgba(13, 106, 252, 0.9882)) ",
//         color: "white",
//         fontFamily: "Nunito"
//     },
//     line: {
//         border: "1.8px solid white",
//         height: "100%",
//         transform: "rotate(22deg)",
//     }
// });

// export default withStyles(style)(ReachingOut);