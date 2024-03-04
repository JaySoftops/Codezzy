import React, { useState, useEffect } from "react";
import { Grid, Button, Box } from "@material-ui/core";
import logo from "../assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import ReorderIcon from '@material-ui/icons/Reorder';
import { NavLink } from "react-router-dom";
import underLine from "../assets/VectorUnderline.png"

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        height: "82px",
        backgroundColor: "#000000",
        display: "flex",
        // height: "5rem",
        paddingLeft: "30px"
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
        justifyContent: "flex-end",
        paddingRight: "2rem",
        [theme.breakpoints.down('lg')]: {
            paddingRight: "1rem",
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: "1rem",
        },
        "& .active": {
            // backgroundColor: "red",
            // "& .underlineHide": {
            //     display: "block !important",
            //     color: "blue",
            // },
            "& >*:nth-child(2)": {
                display: "block",
            },
            // textDecorationLine: "underline !important",
        },
        "& .makeStyles-navStyle-5": {
            textDecorationLine: "none",
        },
        
       
    },

    underlineHide: {},
    //     display: "none",
    // },

    navStyle: {
        textDecoration: "auto",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        margin: "auto 1rem",
        fontFamily: "Montserrat",
        // fontFamily: "Nunito",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "21.82px",
        [theme.breakpoints.down('lg')]: {
            margin: "auto 0.7rem",
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: "0.5rem",
            fontSize: "0.9rem",
            margin: "auto 0.4rem",
        },
        "& >*:nth-child(2)": {
            display: "none",
        },
    },
    loginBtn: {
        width: "82.29px",
        height: "42.38px",
        borderRadius: "5px",
        border: "1px solid #FFFFFF",
        color: "#FFFFFF",
        // borderColor: "#FFFFFF",
        // maxHeight: "50%",
        margin: "auto 1rem",
        fontFamily: "Nunito",
        fontSize: "16px",
        fontWeight: 400,
        textTransform: 'none',
        [theme.breakpoints.down('lg')]: {
            fontSize: "13px",
            fontWeight: 400,
            textTransform: 'none',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "13px",
            fontWeight: 400,
            paddingTop: "5px",
            margin: "auto 0.4rem",

        },
    },
    startBtn: {
        width: "168.62px",
        height: "42.38px",
        borderRadius: "6px",
        color: "#FFFFFF",
        backgroundColor: "#5798FE",
        // maxHeight: "50%",
        margin: "auto 1rem",
        paddingTop: "10px",
        fontFamily: "Nunito",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "21.82px",
        textTransform: 'none',
        [theme.breakpoints.down('lg')]: {
            fontSize: "13px",
            fontWeight: 400,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "13px",
            fontWeight: 400,
            paddingTop: "5px",
            margin: "auto 0.4rem",
        },
    },
    menuIcon: {
        color: "#fff",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        fontSize: "2rem",
        justifyContent: "flex-start",
    }
}));

function Header() {
    const classes = useStyles();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth < 960);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth < 960);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that this effect runs only once after initial render


    return (
        <Grid container lg={12} sm={12} xs={12} xl={12} md={12} className={classes.containerStyle}>
            <Grid container lg={1} sm={1} xs={1} xl={1} md={1} className={classes.logoContainerStyle}>
                <img src={logo} alt="logo" className={classes.logo} />
            </Grid>
            <Grid container lg={4} sm={10} xs={9} xl={6} md={1}></Grid>
            {windowWidth ?
                <ReorderIcon className={classes.menuIcon} />
                : <Grid item spacing={2} lg={7} sm={1} xs={1} xl={5} md={10} className={classes.navigationStyle}>
                    <NavLink end to="/" className={classes.navStyle}>
                        <Box>Home</Box>
                        <img src={underLine} alt="lineImg" className={classes.underlineHide} />
                    </NavLink>
                    <NavLink to="/courses" className={classes.navStyle}>
                        <Box>Courses</Box>
                        <img src={underLine} alt="lineImg" className={classes.underlineHide} />
                    </NavLink>
                    <NavLink to="/events" className={classes.navStyle}>
                        <Box>Events</Box>
                        <img src={underLine} alt="lineImg" className={classes.underlineHide} />
                    </NavLink>
                    <NavLink to="/blog" className={classes.navStyle}>
                        <Box>Blog</Box>
                        <img src={underLine} alt="lineImg" className={classes.underlineHide} />
                    </NavLink>
                    <NavLink to="/contact" className={classes.navStyle}>
                        <Box>Contact</Box>
                        <img src={underLine} alt="lineImg" className={classes.underlineHide} />
                    </NavLink>
                    {/* <NavLink to="/courses" className={classes.navStyle}>Courses</NavLink>
                    <NavLink to="/events" className={classes.navStyle}>Events</NavLink>
                    <NavLink to="/blog" className={classes.navStyle}>Blog</NavLink>
                    <NavLink to="/contact" className={classes.navStyle}>Contact</NavLink> */}
                    <Button variant="outlined" className={classes.loginBtn} >Login</Button>
                    <Button variant="contained" className={classes.startBtn} >Get Start Free</Button>

                    {/* <NavLink end to="/" className={classes.navStyle}>Home</NavLink>
                    <NavLink to="/courses" className={classes.navStyle}>Courses</NavLink>
                    <NavLink to="/events" className={classes.navStyle}>Events</NavLink>
                    <NavLink to="/blog" className={classes.navStyle}>Blog</NavLink>
                    <NavLink to="/contact" className={classes.navStyle}>Contact</NavLink>
                    <Button variant="outlined" className={classes.loginBtn} >Login</Button>
                    <Button variant="contained" className={classes.startBtn} >Get Start Free</Button> */}
                </Grid>}
        </Grid>
    )
}

export default Header;
