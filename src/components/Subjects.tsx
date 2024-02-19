import React from "react";
import { Grid, Typography, Paper, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactJsImage from "../assets/reactjs.gif";
import ReactNativeImage from "../assets/native.gif";
import UiUxDesignImage from "../assets/design.gif";
import QualityAssuranceImage from "../assets/qa.gif";
import RubyOnRailsImage from "../assets/ruby.gif";


const DATA = [
    {
        id: 1,
        img: ReactJsImage,
        title: "ReactJS",
    },
    {
        id: 2,
        img: ReactNativeImage,
        title: "React-Native",
    },
    {
        id: 3,
        img: UiUxDesignImage,
        title: "UI/UX Design",
    },
    {
        id: 4,
        img: QualityAssuranceImage,
        title: "Quality Assurance",
    },
    {
        id: 5,
        img: RubyOnRailsImage,
        title: "Ruby on Rails",
    },
];
const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: "center",
        marginBottom: theme.spacing(1),
        fontSize: "24px",
        fontFamily: "Nunito",
        fontWeight: 700,
    },
    line: {
        width: "21%",
        backgroundColor: "#F777AB",
        height: "2px",
        margin: "0 auto",
    },
    cardContainer: {
        textAlign: "center",
        marginTop: theme.spacing(2),
    },
    card: {
        width: "120px",
        textAlign: "center",
        height: "160px",
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        borderRadius: "20px",
    },
    cardImage: {
        maxWidth: "70px",
        maxHeight: "80px",
        flexGrow: 1,
        margin: "auto",
    },
    titleBox: {
        background: "linear-gradient(90deg, #EFB6B6 100%, #DA4040 46%)",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
    },
    title: {
        color: "#fff"
    },
    buttonDiv: {
        marginTop: theme.spacing(3),
        textAlign: "center",
    },
    button: {
        background: "linear-gradient(90deg, #074CBA 100%, #0D6AFC 98.82%)",
        color: "white",
        width: "136px",
        height: "37px",
        fontFamily: "Roboto",
        fontSize: "12px",
        fontWeight: 700,
        textAlign: "center"
    }
}));

const Subjects = () => {
    const classes = useStyles();

    const cards = (DATA.map((ele) => {
        return (
            <Grid item>
                <Paper elevation={3} className={classes.card}>
                    <Box className={classes.titleBox}>
                        <Typography variant="body2" className={classes.title}>{ele.title}</Typography>
                    </Box>
                    <img
                        src={ele.img}
                        alt="ReactJS"
                        className={classes.cardImage}
                    />
                </Paper>
            </Grid>);
    }))
    return (
        <div>
            <Typography variant="h4" className={classes.heading}>
                Popular Subjects
            </Typography>
            <Box className={classes.line}></Box>
            <Grid
                container
                spacing={6}
                justify="center"
                className={classes.cardContainer}
            >
                {cards}
            </Grid>
            <Box className={classes.buttonDiv}>
                <Button variant="contained" className={classes.button}>
                    VIEW ALL
                </Button>
            </Box>
        </div>
    );
};

export default Subjects;
