import { Box, StyleRules, withStyles } from '@material-ui/core'
import { ArrowRightAlt } from '@material-ui/icons';
import React, { Component } from 'react'
import NoteBook from "../assets/notebookIcon.png";
import VideoTut from "../assets/videoTutorials.png";
import ExpertTeacher from "../assets/expertTeach.png";

interface Props {
    classes: any,
}

class HerosectionCard extends Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.herosectionLowerBody}>
                <Box className={classes.threeBox}>
                    <Box className={classes.threeBoxImg}>
                        <img className={classes.threeBoxImage} src={NoteBook} alt="notebookIcon" />
                    </Box>
                    <Box className={classes.threeBoxMargin}>
                        <Box className={classes.threeBoxTitle}>Common Tricks/Notes</Box>
                        <ArrowRightAlt className={classes.arrow} />
                    </Box>
                </Box>
                <Box className={classes.threeBox}>
                    <Box className={classes.threeBoxImg}>
                        <img className={classes.threeBoxImage} src={VideoTut} alt="videotutIcon" />
                    </Box>
                    <Box className={classes.threeBoxMargin}>
                        <Box className={classes.threeBoxTitle}>Video Tutorials</Box>
                        <ArrowRightAlt className={classes.arrow} />
                    </Box>
                </Box>
                <Box className={classes.threeBox}>
                    <Box className={classes.threeBoxImg}>
                        <img className={classes.threeBoxImage} src={ExpertTeacher} alt="expertTeacherIcon" />
                    </Box>
                    <Box className={classes.threeBoxMargin}>
                        <Box className={classes.threeBoxTitle}>Expert Teacher
                        </Box>
                        <ArrowRightAlt className={classes.arrow} />
                    </Box>
                </Box>
            </Box>
        )
    }
}

const style: StyleRules = ({
    herosectionLowerBody: {
        display: "flex",
        // justifyContent: "center",
        margin: "30px 0px",
        // padding: "0px 200px",

    },

    threeBox: {
        // width: "300px",
        width: "324px",
        height: "268px",
        backgroundColor: "#F0C6BD",
        textAlign: "center",
        borderRadius: "13px",
        // margin: "0px 30px",
        padding: "18px 50px 10px"
    },

    threeBoxImg: {
        width: "117px",
        height: "117px",
        margin: "auto"
    },

    threeBoxImage: {
        width: "100%",
        height: "100%"
    },

    threeBoxTitle: {
        padding: "15px 50px",
        color: "#000000",
        fontFamily: "Nunito",
        fontSize: "22px",
        fontWeight: 600,
        borderBottom: "1px solid #FF2E00"
    },

    arrow: {
        fontSize: "35px",
        fontWeight: 600,
        color: "#ffffff",
        margin: "5px 0px 0px"
    },

    "@media screen and (min-width: 1024px) and (max-width: 1440px)": {
        herosectionLowerBody: {},
        threeBox: {
            width: "250px",
            margin: "0px 20px !important"
        },

        threeBoxTitle: {
            padding: "15px 20px",
        },
    },

    "@media screen and (min-width: 768px) and (max-width: 1023px)": {
        threeBox: {
            width: "750px",
            margin: "0px 10px !important",
            padding: "18px 18px 10px"
        },

        threeBoxTitle: {
            padding: "15px 20px",
        },
    },

    "@media screen and (min-width: 300px) and (max-width: 767px)": {
        herosectionLowerBody: {
            flexDirection: "column",
            margin: "0px",
        },

        threeBox: {
            width: "300px",
            height: "auto",
            display: "flex",
            margin: "15px auto !important",
            padding: "18px 18px 10px"
        },

        threeBoxImg: {
            width: "100px",
            height: "80px",
        },

        threeBoxTitle: {
            padding: "15px 20px",
        },
    }

})

export default withStyles(style)(HerosectionCard)