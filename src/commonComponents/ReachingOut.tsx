import React from 'react'
import { Box, Button, Grid, Input, InputAdornment, OutlinedInput, TextField, Typography, withStyles } from "@material-ui/core";


const ReachingOut = (props: any) => {
    const { classes } = props;


    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.container}>
            <Grid xl={3} lg={2} md={2} sm={2} xs={2}></Grid>
            <Box className={classes.line}></Box>
            <Grid xl={6} lg={6} md={6} sm={6} xs={6}>
                <Box className={classes.headerBox}>
                    <Typography variant="h5" className={classes.heading}>Reach out our customer care executive</Typography>
                </Box>
                <form className={classes.form}>
                    <OutlinedInput
                        placeholder='Enter your email here'
                        className={classes.input}
                        endAdornment={
                            <InputAdornment position="end">
                                <Button variant="outlined" className={classes.btnStyle}>
                                    SUBSCRIBE NOW
                                </Button>
                            </InputAdornment>
                        }
                    />
                </form >
            </Grid>
            <Box className={classes.line}></Box>
            <Grid xl={3} lg={2} md={2} sm={2} xs={2}></Grid>
        </Grid>
    );
}

const style = ({
    container: {
        width: "100%",
        height: "236px",
        backgroundColor: "#EFB6B6",
        display: "flex",
        marginTop: "300px",
        marginBottom: "400px",
    },
    headerBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: "38px",
    },
    heading: {
        fontFamily: "Nunito",
        color: "white",
        fontSize: 30,
        fontWeight: 700,
        textAlign: "center" as "center",
    },
    form: {
        display: "flex",
        justifyContent: "center",
        // border: "2px solid black",
        marginTop: "30px"
    },
    input: {
        width: "500px",
        height: "61px",
        backgroundColor: "white",
        borderRadius: "5px"
    },
    btnStyle: {
        coloe: "white",
        width: "162px",
        height: "39px",
        borderRadius: "6px",
        backgroundImage: "linear-gradient(90deg,rgba(7, 76, 186, 1),rgba(13, 106, 252, 0.9882)) ",
        color: "white",
        fontFamily: "Nunito"
    },
    line: {
        border: "1.8px solid white",
        height: "100%",
        transform: "rotate(22deg)",
    }
});

export default withStyles(style)(ReachingOut);