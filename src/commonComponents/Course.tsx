import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography, Card, CardContent } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    card: {
        width: "330px",
        height: "27rem",
        display: "block",
        border: "2px solid #FFFBF5",
        margin: "1rem"
    },
    imageGrid: {
        // width: "100%",
        height: "223px",
        backgroundColor: "red",
        // border: "2px solid black",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    },
    detailContainer: {
        // width: "100%",
        // height: "100%",
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-between",
        textAlign: "right" as "right",
        // padding: "0 15px",
        // border: "2px solid black",
    },
    lesson: {
        display: "flex",
        // border: "2px solid black",
    },
    duration: {
        // paddingLeft: "5px",
        display: "flex",
        // border: "2px solid black",
    },
    description: {
        marginTop: "5px",
        // padding: "0 15px",
        // border: "2px solid black",
    },
    pricing: {
        marginTop: "5px",
        // padding: "0 15px",

        // border: "2px solid black",
    },
    rating: {
        // border: "2px solid black",
    },
    price: {
        // border: "2px solid black",
        display: "flex",
        justifyContent: "flex-end",
        color: "#44AEF7"
    },
    line: {
        border: "1px solid #5798FE",
        width: "95%",
        margin: "10px auto 10px",
    },
    buttonContainer: {
        // border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        height: "10px",
    },
    button: {
        background: 'linear-gradient(90deg, #074CBA 0%, #0D6AFC 100%)',
    }
}));

export default function Course(props: any) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} item className={classes.imageGrid} ></Grid>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} container className={classes.detailContainer}>
                    <Grid xl={6} lg={6} md={6} sm={6} xs={6} className={classes.lesson} container>
                        <Typography variant="body1">{props.data.lesson} Lesson</Typography>
                    </Grid>
                    <Grid xl={6} lg={6} md={6} sm={6} xs={6} className={classes.duration} container>
                        <Typography variant="body1">{props.data.duration}</Typography>
                    </Grid>
                </Grid>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} container className={classes.description} >
                    <Typography variant="body1">{props.data.description}</Typography>
                </Grid>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} container className={classes.pricing}>
                    <Grid xl={6} lg={6} md={6} sm={6} xs={6} className={classes.rating} container>
                        <Typography variant="body1">{props.data.rating}</Typography>
                    </Grid>
                    <Grid xl={6} lg={6} md={6} sm={6} xs={6} className={classes.price} container>
                        <Typography variant="body1">{props.data.price}</Typography>
                    </Grid>
                </Grid>
                <Box className={classes.line} ></Box>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} container className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" className={classes.button}>Enroll Now</Button>
                </Grid>
            </CardContent>
        </Card>
    )
}
