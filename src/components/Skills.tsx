import React from 'react';
import Course from '../commonComponents/Course';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import HorizontalNavbar from './HorizontalNavBar';


const DATA = [{
    id: "1",
    img: "circle-image.jpg",
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    price: "$60.00",
    width: "100%",
    beginner: true,
    backgroundColor: "#000000"
},
{
    id: "2",
    img: "circle-image.jpg",
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    price: "$60.00",
    beginner: true
},
{
    id: "3",
    img: "circle-image.jpg",
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    price: "$60.00",
    beginner: true
},
{
    id: "4",
    img: "circle-image.jpg",
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    price: "$60.00",
    beginner: true
},
{
    id: "5",
    img: "circle-image.jpg",
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    price: "$60.00",
    beginner: true
},
{
    id: "6",
    img: "circle-image.jpg",
    lesson: "3",
    duration: "2 hours 40 minutes",
    description: "Learn Essentials of User Interface Design in Figma",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    price: "$60.00",
    beginner: true
}
];

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "flex",
        margin: "0 auto",
        width: "100%",
        justifyContent: "center",
        padding: "0 15px",
        // backgroundColor: "#000000",
    },
    container: {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
    },
    headingContainer: {
        display: "flex",
        justifyContent: "center",
        width: "35rem",
        margin: "0 auto 2rem"
    },
    heading: {
        textAlign: "center",
        fontFamily: "Nunito",
        fontSize: "30px",
        fontWeight: 700,
    },
    codezzy: {
        display: "inline",
        color: "#5798FE",
        textAlign: "center",
        fontFamily: "Nunito",
        fontSize: "30px",
        fontWeight: 700,
    },
    line: {
        border: "2px solid #EFB6B6",
        width: "22rem",
        margin: "1.5rem auto 1.5rem",
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
        margin: "1rem auto 2rem"
    },
    btn: {
        color: "#5798FE",
        borderColor: "#5798FE",
        width: "67rem",
    }
}));


export default function Skills() {
    const classes = useStyles();

    return (
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.container} >
            <Grid container spacing={1} xl={12} lg={12} md={12} sm={12} xs={12} className={classes.headingContainer}>
                <Typography variant="h5" component="h3" className={classes.heading}>Elevate Your Skills in Top</Typography>
                <Typography variant="h5" component="h3" className={classes.heading}>Programming Languages with <Typography variant="h5" component="h3" className={classes.codezzy}>Codezzy</Typography></Typography>
            </Grid>
            <Box className={classes.line}></Box>
            <HorizontalNavbar />
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.cardContainer} >
                {DATA.map((element, index) => (
                    <Course data={DATA[index]} key={index} />
                ))}
            </Grid>
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.btnContainer}>
                <Button variant="outlined" className={classes.btn}>
                    View All
                </Button>
            </Grid>
        </Grid>
    )
}
