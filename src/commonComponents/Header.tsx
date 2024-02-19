import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <Grid container spacing={2} lg={12} sm={12} xs={12} xl={12} md={12} style={headerStyle.containerStyle}>
            <Grid container lg={1} sm={1} xs={1} xl={1} md={1} style={headerStyle.logoContainerStyle}>
                <img src={logo} alt="logo" style={headerStyle.logo} />
            </Grid>
            <Grid container lg={4} sm={4} xs={4} xl={4} md={4}  ></Grid>
            <Grid container spacing={1} lg={5} sm={5} xs={5} xl={5} md={5} style={headerStyle.navigationStyle}>
                <Typography variant="body1" style={headerStyle.navStyle}>Home</Typography>
                <Typography variant="body1" style={headerStyle.navStyle}>Coursrs</Typography>
                <Typography variant="body1" style={headerStyle.navStyle}>Events</Typography>
                <Typography variant="body1" style={headerStyle.navStyle}>Blog</Typography>
                <Typography variant="body1" style={headerStyle.navStyle}>Contact</Typography>
                <Button variant="outlined" style={headerStyle.loginBtn} >Login</Button>
                <Button variant="contained" style={headerStyle.startBtn} >Get Start Free</Button>
            </Grid>
        </Grid>
    )
}

const headerStyle = {
    containerStyle: {
        backgroundColor: "#000000",
        display: "flex",
        height: "82px",
        justifyContent: "space-between",
        paddingLeft: "30px"
        // position: "fixed" as "fixed",
        // zIndex: 1
    },
    logoContainerStyle: {
        height: "43px",
        width: "64px",
        marginTop: "20px"
    },
    logo: {
        height: "43px",
        width: "64px",
        margin: "auto"
    },
    navigationStyle: {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
    },
    navStyle: {
        color: "#FFFFFF",
        display: "flex",
        margin: "auto",
        fontStyle: "Montserrat",
        fontSize: "14px",
        fontWeight: "600"
    },
    loginBtn: {
        color: "#FFFFFF",
        borderColor: "#FFFFFF",
        height: "50%",
        margin: "auto",
        fontStyle: "Nunito",
        fontSize: "16px",
        fontWeight: "400",
        textAlign: "center" as "center",
        textTransform: 'none' as "none",
        // display: "flex" as "flex",
        // justifyContent: "center" as "center",
        // alignItem: "center" as "center"

    },
    startBtn: {
        color: "#FFFFFF",
        backgroundColor: "#5798FE",
        height: "50%",
        margin: "auto",
        paddingTop: "10px",
        fontStyle: "Nunito",
        fontSize: "16px",
        fontWeight: "400",
        textAlign: "center" as "center",
        textTransform: 'none' as "none",
        padding: "0px 30px"
        // display: "flex" as "flex",
        // justifyContent: "center" as "center",
        // alignItem: "center" as "center"
    }
}