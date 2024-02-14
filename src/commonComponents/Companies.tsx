import { Box, Grid, Typography, withStyles } from "@material-ui/core";

function Companies(props: any) {

    const { classes } = props;
    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.container}>
            <Box className={classes.headerBox}>
                <Typography variant="h5" className={classes.heading}>Our Candidates Are Working With</Typography>
            </Box>
            <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.companies}>

            </Grid>
        </Grid>
    )
}

const companiesStyle = ({
    container: {
        width: "100%",
        height: "432px",
        backgroundColor: "#FFFBF5",
        display: "block",

        marginTop: "50px",
        border: "2px solid black"
    },
    headerBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        border: "2px solid black",

    },
    heading: {
        // fontFamily: "Nunito",
        // fontSize: "30px",
        // fontWeight: "700",
        // lineHeight: "41px",
        // letterSpacing: "0em",
        // textAlign: "center"
    },
    compaines: {
        display: "flex",
    }
})

export default withStyles(companiesStyle)(Companies);