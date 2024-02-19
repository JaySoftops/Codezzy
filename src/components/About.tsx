import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img from '../assets/about.gif';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: "#FFFBF5"
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: '110%',
        height: '109%',
    },
    rightContent: {
        padding: theme.spacing(2),
        backgroundColor: "#FFFBF5",
        marginTop: '4rem'
    },
    button: {
        marginTop: theme.spacing(2),
        color: "white",
        background: "linear-gradient(90deg, #074CBA 100%, #0D6AFC 90.82%)",
    },
    aboutHeading: {
        marginBottom: theme.spacing(2),
        fontFamily: 'Nunito',
        fontSize: '40px',
        fontWeight: 700,
        textAlign: 'left',
    },
    codezzyHeading: {
        display: 'inline',
        fontFamily: 'Righteous',
        fontSize: '40px',
        fontWeight: 200,
        textAlign: 'left',
        color: "#B557FE"
    },
    description: {
        width: "460px",
    },
    aboutDescription: {
        marginBottom: theme.spacing(2),
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 400,
        textAlign: 'left',
    },
    aboutList: {
        marginBottom: theme.spacing(2),
    },
    listItem: {
        marginBottom: theme.spacing(1),
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 400,
    },
    line: {
        width: "200px",
        border: "1px solid #F2277E",
        marginBottom: theme.spacing(2),
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} className={classes.imageContainer}>
                    <img src={img} alt="Codezzy" className={classes.image} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Grid className={classes.rightContent}>
                        <Typography variant="h5" gutterBottom className={classes.aboutHeading}>
                            About <Typography variant="h5" gutterBottom className={classes.codezzyHeading}>Codezzy</Typography>
                        </Typography>
                        <Box className={classes.line}></Box>
                        <Box className={classes.description}>
                            <Typography variant="body1" paragraph className={classes.aboutDescription}>
                                Codezzy is an interactive learning platform offering high-quality coding courses in various programming languages on numerous tech subjects like web app development (<b>React JS and React Native</b>). In addition, it provides a programming practice platform for beginners.
                            </Typography>
                        </Box>
                        <ul className={classes.aboutList}>
                            <li className={classes.listItem}>1500+ professional experts</li>
                            <li className={classes.listItem}>Provide lifetime experience guidance</li>
                        </ul>
                        <Button variant="contained" className={classes.button}>
                            Get Free Demo
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
