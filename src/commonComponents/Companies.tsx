import { Box, Grid, Typography, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import softops from "../assets/softops.png";

function Companies(props: any) {
    const { classes } = props;

    const [logoList, setLogoList] = useState([softops, softops, softops, softops, softops, softops, softops])

    const imgArray = logoList.map((ele, index) => {
        return (
            <Grid item xl={12} lg={12} md={3} sm={3} xs={3} className={index % 2 === 0 ? classes.imgContainer : classes.imgContainerDown} key={index}>
                <img src={ele} alt="logoImg" className={classes.logo} />
            </Grid>
        );
    });


    return (
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.container}>
            <Box className={classes.headerBox}>
                <Typography variant="h5" className={classes.heading}>Our Candidates Are Working With</Typography>
            </Box>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3} className={classes.line}>
            </Grid>
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} className={classes.logoContainer}>
                {imgArray}
            </Grid>
        </Grid>
    )
}

const companiesStyle = ({
    container: {
        width: "100%",
        height: "382px",
        backgroundColor: "#FFFBF5",
        display: "block",
        marginTop: "300px",
        border: "2px solid #FFFBF5",
    },
    headerBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
    },
    heading: {
        fontFamily: "Nunito",
        fontSize: 30,
        fontWeight: 700,
        textAlign: "center" as "center",
    },
    compaines: {
        display: "flex",
    },
    line: {
        border: "2px solid rgba(239, 182, 182, 1)",
        width: "294px",
        margin: "16px auto 0px"
    },
    logoContainer: {
        // border: "2px solid #AAAAAA",
        display: "flex",
        jutifyContent: "center",
        padding: "0px 80px 0px",
        marginTop: "40px"
    },
    imgContainer: {
        width: "auto",
        height: "auto",
        maxWidth: "150px",
        maxHeight: "151px",
        marginLeft: "auto",
        // border: "1px solid blue",
        display: "flex",
        justifyContent: "center",
    },
    logo: {
        width: "auto",
        height: "auto",
        maxWidth: "150px",
        maxHeight: "151px",
        // marginLeft: "auto"
    },
    imgContainerDown: {
        display: "flex",
        justifyContent: "center",
        width: "auto",
        height: "auto",
        maxWidth: "150px",
        maxHeight: "151px",
        marginLeft: "auto",
        marginTop: "50px"
    }
})

export default withStyles(companiesStyle)(Companies);