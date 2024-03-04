import { TextField, Grid, Typography, Button, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import background from "../assets/background.png";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import btnCover from "../assets/btncover.png"

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        width: "100rem",
        height: "33rem",
        opacity: "0.06px",
        margin: "6rem auto 0",
        display: "flex",
        flexDirection: "row",
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    textContainerStyle: {
        display: "block",
        width: "624px",
        height: "100%",
    },
    headingContainerStyle: {
        display: "flex",
        flexWrap: "wrap" as "wrap",
        width: "554px",
        height: "217px",
        marginLeft: "50px",
        marginTop: "70px",
    },
    headingStyle: {
        fontFamily: "Nunito",
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: "65px",
        letterSpacing: "0em",
        textAign: "left" as "left",
    },
    headingNumberStyle: {
        fontFamily: "Nunito",
        fontSize: "48px",
        fontWeight: 500,
        lineHeight: "56px",
        letterSpacing: "0em",
        textAlign: "left" as "left",
        color: "#B557FE",
        display: "inline"
    },
    btnContainerStyle: {
        display: "flex",
    },
    textContainer: {
        width: "20rem",
        margin: "auto 3rem"
    },
    playBtn: {
        height: "5rem",
        width: "5rem",
        borderRadius: "100%",
        backgroundColor: "#fff"
    },
    btnCover: {
    },
    bodyContainerStyle: {
        flexWrap: "wrap" as "wrap",
        margin: "150px auto 150px",
        width: "45rem",
        height: "4rem",
        display: "flex",
        justifyContent: "space-around"
    },
    textStyle: {
    },
    formContainerStyle: {
        display: "block",
        justifyContent: "center",
        backgroundColor: "#EFB6B6",
        width: "28rem",
        height: "34rem",
        borderRadius: "16px",
        padding: "20px",
        fontStyle: "Nunito",
        paddingTop: "40px",
        paddingLeft: "20px",
        marginTop: "100px",
    },
    formHeadingStyle: {
    },
    form: {
        marginTop: "30px"
    },
    oneTextField: {
        display: "block",
        margin: "20px auto",
    },
    twoTextField: {
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "space-between",
        margin: "20px auto",
    },
    btnStyle: {
        width: "224.22px",
        height: "50px",
        borderRadius: "6px",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontWeight: 700,
        letterSpacing: "0em",
        textAlign: "center" as "center",
        backgroundImage: "linear-gradient(90deg,rgba(7, 76, 186, 1),rgba(13, 106, 252, 0.9882)) ",
        color: "white"
    },
    textCityStyle: {
        backgroundColor: "white",
        borderRadius: "5px"
    },
    textMobileStyle: {
        backgroundColor: "white",
        borderRadius: "5px"
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "white",
        borderRadius: "5px"
    }
}));


export default function Registration() {
    const classes = useStyles();

    const formComponent = (
        <Grid container lg={4} sm={12} md={4} xs={12} xl={4} >
            <Box className={classes.formContainerStyle}>
                <Typography className={classes.formHeadingStyle}><b>Fill Your Registration Form</b></Typography>
                <form className={classes.form}>
                    <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.oneTextField}>
                        <TextField placeholder="Enter Your Name" variant="outlined" fullWidth className={classes.input} />
                    </Grid>
                    <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.twoTextField}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                            <TextField placeholder="City" variant="outlined" className={classes.textCityStyle} />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                            <TextField placeholder="Mobile No" variant="outlined" className={classes.textMobileStyle} />
                        </Grid>
                    </Grid>
                    <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.oneTextField}>
                        <TextField placeholder="Enter Your E-mail" variant="outlined" fullWidth className={classes.input} />
                    </Grid>
                    <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.oneTextField}>
                        <TextField placeholder="Your Message" variant="outlined" multiline rows={4} fullWidth className={classes.input} />
                    </Grid>
                    <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.buttonContainer}>
                        <Button variant="contained" className={classes.btnStyle}>Submit Now</Button>
                    </Grid>
                </form>
            </Box>
        </Grid >
    )

    return (
        <>
            <Grid container lg={12} sm={12} md={12} xs={12} xl={12} className={classes.containerStyle}>
                <Grid container lg={6} sm={12} md={6} xs={12} xl={6} className={classes.textContainerStyle} >
                    <Grid container lg={12} sm={12} md={12} xs={12} xl={12} className={classes.headingContainerStyle} >
                        <Typography variant="h4" className={classes.headingStyle}>
                            Create your Account Get free access to <Typography variant="h4" className={classes.headingNumberStyle}><b>6000+</b></Typography> online course
                        </Typography>
                    </Grid>
                    <Grid container lg={12} sm={12} md={12} xs={12} xl={12} className={classes.bodyContainerStyle} >
                        <Box className={classes.btnContainerStyle}>
                            <Button variant="contained" className={classes.playBtn}><PlayArrowIcon /></Button>
                            {/* <img src={btnCover} alt="btnCover" className={classes.btnCover}></img> */}
                        </Box>
                        <Box className={classes.textContainer}>
                            <Typography variant="body1" className={classes.textStyle}>
                                Coding problems curated by the industry-best programming experts
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container lg={1} sm={12} md={1} xs={12} xl={1} ></Grid>
                {formComponent}
                <Grid container lg={1} sm={12} md={1} xs={12} xl={1} ></Grid>

            </Grid>
        </>
    );
}






