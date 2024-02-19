import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        height: '50px',
        marginBottom: '2rem'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 700,
        textAlign: 'center',
        padding: theme.spacing(1)
    },
    separator: {
        borderRight: '1px solid black',
        height: '40px',
        margin: theme.spacing(0, 2),
    },
}));

const HorizontalNavbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.navItem}>
                    All
                </Typography>
                <div className={classes.separator}></div>
                <Typography variant="h6" className={classes.navItem}>
                    ReactJS
                </Typography>
                <div className={classes.separator}></div>
                <Typography variant="h6" className={classes.navItem}>
                    React-Native
                </Typography>
                <div className={classes.separator}></div>
                <Typography variant="h6" className={classes.navItem}>
                    UI/UX Design
                </Typography>
                <div className={classes.separator}></div>
                <Typography variant="h6" className={classes.navItem}>
                    Ruby On Rails
                </Typography>
                <div className={classes.separator}></div>
                <Typography variant="h6" className={classes.navItem}>
                    Quality Assurance
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default HorizontalNavbar;
