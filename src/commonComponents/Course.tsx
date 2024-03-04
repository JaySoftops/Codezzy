import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import bookIcon from "../assets/bookIcon.png";
interface x {
  id: string;
  img: string;
  lesson: string;
  duration: string;
  description: string;
  rating: string;
  price: string;
  width?: string;
  beginner: boolean;
  backgroundColor?: string;
}
export default function Course(props: any) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Grid className={classes.gridContent} container>
          <Grid
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            item
            className={classes.imageGrid}
          >
            <Box className={classes.imageBox}>
              <img
                src={props.data.img}
                alt=""
                className={classes.cardImage}
              />
            </Box>
          </Grid>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.detailGrid}
          >
            <Grid container className={classes.detailContainer}>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography className={classes.cardText}>
                  <img
                    src={bookIcon}
                    alt=""
                    width="15.23px"
                    height="15.03px"
                    className={classes.cardIcon}
                  />
                  {props.data.lesson} Lesson
                </Typography>
              </Grid>
              <Grid
                item
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={8}
                className={classes.duration}
              >
                <Typography className={classes.cardText} align="right">
                  <ScheduleOutlinedIcon className={classes.cardIcon} />
                  {props.data.duration}
                </Typography>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.cardText}>
                  {props.data.description}
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                <Typography className={classes.cardText}>
                  {props.data.rating}
                </Typography>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <Typography className={classes.price}>
                  {props.data.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Box className={classes.line}></Box>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xl={12}
            xs={12}
            className={classes.buttonContainer}
          >
            <Button variant="contained" className={classes.button}>
              Enroll Now
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
const useStyles = makeStyles((theme) => ({
  card: {
    width: "344px",
    minHeight: "399px",
    // border: "2px solid black",
    margin: "1rem 0 1rem 0",
    background: "rgba(255, 251, 245, 1)",
    borderRadius: "0px",
  },
  cardContent: {
    padding: "0",
  },
  imageGrid: {
    maxHeight: "213px",
  },
  imageBox: {
    width: "100%",
    height: "213px",
  },
  cardImage: {
    height: "100%",
    width: "100%",
  },
  detailGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid black",
  },
  detailContainer: {
    display: "flex",
    // justifyContent: "space-between",
    padding: "10px ",
    alignItems: "center",
    // width: "100%",
  },
  line: {
    border: "0.8px solid #5798FE",
    width: "95%",
    margin: "0px auto 10px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: "91.86px",
    height: "38.26px",
  },
  button: {
    background: "linear-gradient(90deg, #074CBA 0%, #0D6AFC 100%)",
    borderRadius: "6px",
    fontWeight: 500,
    fontSize: "12px",
    fontFamily: "Roboto",
    color: "white",
    lineHeight: "  14.06px",
  },
  duration: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContent: {},
  cardText: {
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "19px",
    color: "black",
    display: "flex",
    alignItems: "center",
    margin: "5px 0px 5px 0px",
  },
  price: {
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "19px",
    color: "rgba(68, 174, 247, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px 0px 5px 0px",
  },
  cardIcon: {
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "19px",
    color: "grey",
    margin: "5px 2px 5px 0px",
  },
}));

// import React from 'react';
// import { makeStyles } from "@material-ui/core/styles";
// import { Box, Button, Grid, Typography, Card, CardContent } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//     card: {
//         width: "330px",
//         height: "27rem",
//         display: "block",
//         border: "2px solid #FFFBF5",
//         margin: "1rem"
//     },
//     imageGrid: {
//         // width: "100%",
//         height: "223px",
//         backgroundColor: "red",
//         // border: "2px solid black",
//         display: "flex",
//         // justifyContent: "center",
//         // alignItems: "center",
//     },
//     detailContainer: {
//         // width: "100%",
//         // height: "100%",
//         marginTop: "15px",
//         display: "flex",
//         justifyContent: "space-between",
//         textAlign: "right" as "right",
//         // padding: "0 15px",
//         // border: "2px solid black",
//     },
//     lesson: {
//         display: "flex",
//         // border: "2px solid black",
//     },
//     duration: {
//         // paddingLeft: "5px",
//         display: "flex",
//         // border: "2px solid black",
//     },
//     description: {
//         marginTop: "5px",
//         // padding: "0 15px",
//         // border: "2px solid black",
//     },
//     pricing: {
//         marginTop: "5px",
//         // padding: "0 15px",

//         // border: "2px solid black",
//     },
//     rating: {
//         // border: "2px solid black",
//     },
//     price: {
//         // border: "2px solid black",
//         display: "flex",
//         justifyContent: "flex-end",
//         color: "#44AEF7"
//     },
//     line: {
//         border: "1px solid #5798FE",
//         width: "95%",
//         margin: "10px auto 10px",
//     },
//     buttonContainer: {
//         // border: "2px solid black",
//         display: "flex",
//         justifyContent: "center",
//         height: "10px",
//     },
//     button: {
//         background: 'linear-gradient(90deg, #074CBA 0%, #0D6AFC 100%)',
//     }
// }));

// export default function Course(props: any) {
//     const classes = useStyles();

//     return (
//         <Card className={classes.card}>
//             <CardContent>
//                 <Grid xl={12} lg={12} md={12} sm={12} xs={12} item className={classes.imageGrid} ></Grid>
//                 <Grid xl={12} lg={12} md={12} sm={12} xs={12} container className={classes.detailContainer}>
//                     <Grid xl={6} lg={6} md={6} sm={6} xs={6} className={classes.lesson} container>
//                         <Typography variant="body1">{props.data.lesson} Lesson</Typography>
//                     </Grid>
//                     <Grid xl={6} lg={6} md={6} sm={6} xs={6} className={classes.duration} container>
//                         <Typography variant="body1">{props.data.duration}</Typography>
//                     </Grid>
//                 </Grid>
//                 <Grid xl={12} lg={12} md={12} sm={12} xs={12} container className={classes.description} >
//                     <Typography variant="body1">{props.data.description}</Typography>
//                 </Grid>
//                 <Grid xl={12} lg={12} md={12} sm={12} xs={12} container className={classes.pricing}>
//                     <Grid xl={6} lg={6} md={6} sm={6} xs={6} className={classes.rating} container>
//                         <Typography variant="body1">{props.data.rating}</Typography>
//                     </Grid>
//                     <Grid xl={6} lg={6} md={6} sm={6} xs={6} className={classes.price} container>
//                         <Typography variant="body1">{props.data.price}</Typography>
//                     </Grid>
//                 </Grid>
//                 <Box className={classes.line} ></Box>
//                 <Grid xl={12} lg={12} md={12} sm={12} xs={12} container className={classes.buttonContainer}>
//                     <Button variant="contained" color="primary" className={classes.button}>Enroll Now</Button>
//                 </Grid>
//             </CardContent>
//         </Card>
//     )
// }
