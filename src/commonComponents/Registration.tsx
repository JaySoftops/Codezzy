import { TextField, Grid, Typography, Button } from "@material-ui/core";
import React from "react";


export default function Registration() {
    const formComponent = (
        <Grid container lg={4} sm={12} md={4} xs={12} xl={4} style={registationStyle.formContainerStyle}>
            <Typography style={registationStyle.formHeadingStyle}><b>Fill Your Registration Form</b></Typography>
            <form style={registationStyle.form}>
                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} style={registationStyle.oneTextField}>
                    <TextField placeholder="Enter Your Name" variant="outlined" fullWidth style={registationStyle.input} />
                </Grid>
                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} style={registationStyle.twoTextField}>
                    <TextField placeholder="City" variant="outlined" style={registationStyle.textCityStyle} />
                    <TextField placeholder="Mobile No" variant="outlined" style={registationStyle.textMobileStyle} />
                </Grid>
                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} style={registationStyle.oneTextField}>
                    <TextField placeholder="Enter Your E-mail" variant="outlined" fullWidth style={registationStyle.input} />
                </Grid>
                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} style={registationStyle.oneTextField}>
                    <TextField placeholder="Your Message" variant="outlined" multiline rows={4} fullWidth style={registationStyle.input} />
                </Grid>
                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} style={registationStyle.buttonContainer}>
                    <Button variant="contained" style={registationStyle.btnStyle}>Submit Now</Button>
                </Grid>
            </form>
        </Grid >
    )

    return (
        <>
            <Grid container lg={12} sm={12} md={12} xs={12} xl={12} style={registationStyle.containerStyle}>
                <Grid container lg={6} sm={12} md={6} xs={12} xl={6} style={registationStyle.textContainerStyle} >
                    <Grid container lg={12} sm={12} md={12} xs={12} xl={12} style={registationStyle.headingContainerStyle} >
                        <Typography variant="h4" style={registationStyle.headingStyle}>
                            Create your Account Get free access to <Typography variant="h4" style={registationStyle.headingNumberStyle}><b>6000+</b></Typography> online course
                        </Typography>
                    </Grid>
                    <Grid container lg={12} sm={12} md={12} xs={12} xl={12} style={registationStyle.bodyContainerStyle} >
                        <Typography variant="body1" style={registationStyle.textStyle}>
                            Coding problems curated by the industry-best programming experts
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container lg={1} sm={12} md={1} xs={12} xl={1} style={registationStyle.textContainerStyle} ></Grid>
                {formComponent}
                <Grid container lg={1} sm={12} md={1} xs={12} xl={1} style={registationStyle.textContainerStyle} ></Grid>

            </Grid>
        </>
    );
}

const registationStyle = {
    containerStyle: {
        width: "1399px",
        height: "527px",
        opacity: "0.06px",
        margin: "auto" as "auto",
        backgroundColor: "#FEFBF6",
        display: "flex",
        flexDirection: "row" as "row",
        marginTop: "87px",
        // backgroundImage: url("https://s3-alpha-sig.figma.com/img/1cc2/b20f/fccb795a9707f5e1f6b9119106fb1841?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NP0GgNUKvxobuXjJSQcNFZDzdApq~IZg-2SNTFDf6mZNVq0PLvgZxM8pRIb0YcN0FPZDDidrifUAsFSelOllgHFk6B9hZABO8eBbgA~rfI8bI2h50RUQodx72-p80GuGAO3g10GPDFZm~ZIr90PZJmTUVLOaecREcdXS9mLfGwfiXYqF6pI8SWChQbdbo~zsO45dBM8khJIV1suw9-~bcRqwdeFY~Veqp3zQT2QY1~xIdMmVaGFHaaxCqDDsbksntxfJFpc4G86xr-zvm99iPISIQa4BKnXnGyd2hp8K8CerzVevO2a2twfiaOXDQRqVEH1z98aG18zv1VC20RivOQ"),
        // backgroundSize: 'cover',
        // backgroundPosition: 'center'
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
        fontWeight: "700",
        lineHeight: "65px",
        letterSpacing: "0em",
        textAign: "left" as "left",
    },
    headingNumberStyle: {
        fontFamily: "Nunito",
        fontSize: "48px",
        fontWeight: "500",
        lineHeight: "56px",
        letterSpacing: "0em",
        textAlign: "left" as "left",
        color: "#B557FE",
        display: "inline"
    },
    bodyContainerStyle: {
        flexWrap: "wrap" as "wrap",
        margin: "150px auto 0px",
        width: "280px",
        height: "55px",
    },
    textStyle: {
    },
    formContainerStyle: {
        display: "block",
        backgroundColor: "#EFB6B6",
        width: "226px",
        height: "542px",
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
        fontWeight: "700",
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
}




