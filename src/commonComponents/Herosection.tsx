import { Box, Grid, StyleRules, withStyles } from '@material-ui/core'
import React, { Component } from 'react';
import dotCircleImage from "../assets/dotCircleCodezzy.png";
import educationImage from "../assets/educationCodezzy.png";
import HerosectionCard from './HerosectionCard';
import titleUnderline from "../assets/herosectionUnderlineVector.png";

interface Props {
    classes: any,
    heading: string,
    cardClass: string,
    // cardClass: number,
    highlight: any,
    herosectionTitleClassName?: string,
    herosectionClassName?: string,
    herosectionMessage?: string,
    herosectionBody?: string,
}

class Herosection extends Component<Props>{

    renderHerosection = () => {
        const { classes } = this.props;
        // const cardClass = this.props.cardClass;
        return (
            <Box className={`${classes.herosection} ${this.props.herosectionBody}`}>
                <Box className={classes.herosectionUpperBody}>
                    <Box className={classes.herosectionContent}>
                        <Box className={this.props.herosectionTitleClassName}>{this.props.heading}</Box>
                        <Box>
                            <img src={titleUnderline} alt="underline" className={classes.herosectionUnderline}/>
                        </Box>
                        {/* <Box className={classes.herosectionMessage}><Box component="span" className={classes.herosectionSpan}>{this.props.highlight}</Box> is an interactive learning platform</Box> */}
                        <Box className={this.props.herosectionClassName}><Box component="span" className={classes.herosectionSpan}>{this.props.highlight}</Box>{this.props.herosectionMessage}</Box>
                        <button className={classes.herosectionButton}>Get Free Demo</button>
                    </Box>
                    <Box className={classes.herosectionImgBody}>
                        <Box className={classes.herosectionFirstImg}>
                            <img className={classes.herosectionFirstImage} src={dotCircleImage} alt="educationImage" />
                        </Box>
                        <Box className={classes.herosectionSecondImg}>
                            <img className={classes.herosectionSecondImage} src={educationImage} alt="educationImage" />
                        </Box>
                    </Box>
                </Box>
                {/* <Box className={cardClass === 1 ? classes.homeHero : cardClass === 2 ? classes.coursesHero : cardClass === 3 ? classes.eventsHero : cardClass === 4 ? classes.blogHero : cardClass === 5 ? classes.contactHero: null}> */}

            </Box>
        )
    }

    render() {
        const { classes } = this.props;
        // console.log(classes);
        // const cardClass = this.props.cardClass;
        return (
            <Grid container className={classes.gridContain}>
                <Grid lg={12} md={12} sm={12} xs={12} className={`${classes.gridHero}`}>
                    {this.renderHerosection()}
                </Grid>
                <Grid lg={12} md={12} sm={12} xs={12} className={`${classes.gridHH}`}>
                    <Box className={this.props.cardClass}>
                        <HerosectionCard />
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

const style: StyleRules = ({
    gridHero: {
        width: "100%",
        height: "100%",
        // height: "1000px",
        // paddingBottom: "50px",
        "& .Herosection-herosectionBodyFirst": {
            width: "100%",
            // height: "700px",
            padding: "0px 130px",
            backgroundColor: "#F8EBDA",
            margin: "0px 0px    0px"
        },
        "& .Herosection-herosectionBodySecond": {
            width: "100%",
            height: "630px",
            padding: "0px 130px",
            backgroundColor: "#F8EBDA",
            margin: "0px 0px 0px",
        },
    },

    gridHH: {
        marginTop: "-150px",
        paddingBottom: "30px",
    },

    gridContain: {
        "& .Herosection-herosectionLeftCards": {
            height: "270px",
            padding: "0px 130px",
            "& >*:nth-child(1)": {
                justifyContent: "left",
                "& >*:nth-child(1)": {
                    margin: "0px 30px 0px 0px",
                },
                "& >*:nth-child(2)": {
                    margin: "0px 30px",
                },
                "& >*:nth-child(3)": {
                    margin: "0px 30px",
                },
            },
        },
        "& .Herosection-herosectionCenterCards": {
            height: "270px",
            padding: "0px 130px",
            "& >*:nth-child(1)": {
                justifyContent: "center",
                "& >*:nth-child(1)": {
                    margin: "0px 30px",
                },
                "& >*:nth-child(2)": {
                    margin: "0px 30px",
                },
                "& >*:nth-child(3)": {
                    margin: "0px 30px",
                },
            },
        },
        "& .Herosection-herosectionHideCards": {
            width: "100%",
            display: "none"
        },
    },

    herosectionUpperBody: {
        width: "100%",
        height: "700px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "70px 0px"
    },

    herosectionContent: {
        width: "50%",
        // paddingRight: "280px",
        paddingTop: "30px",
        "& .Herosection-herosectionFirstTitle": {
            color: "#44AEF7",
            // textDecoration: "underline",
            fontFamily: "Nunito",
            // fontSize: "25px",
            fontSize: "32px",
            fontWeight: 700,
            padding: "0px 5px",
            lineHeight: "43.65px"
        },
        "& .Herosection-herosectionSecondTitle": {
            color: "#44AEF7",
            // textDecoration: "underline",
            fontFamily: "Nunito",
            fontSize: "96px",
            // fontSize: "32px",
            fontWeight: 700,
            padding: "0px 5px",
            lineHeight: "87.3px"
        },
        "& .Herosection-herosectionFirstMessage": {
            width: "550px",
            fontFamily: "Nunito",
            // fontSize: "50px",
            fontSize: "64px",
            fontWeight: 800
        },
        "& .Herosection-herosectionSecondMessage": {
            width: "450px",
            fontFamily: "Nunito",
            fontSize: "26px",
            // fontSize: "30px",
            fontWeight: 400
        },
    },

    // herosectionTitle: {
    //     color: "#44AEF7",
    //     textDecoration: "underline",
    //     fontFamily: "Nunito",
    //     fontSize: "25px",
    //     // fontSize: "32px",
    //     fontWeight: 700,
    //     padding: "0px 5px",
    //     // lineHeight: "43.65px"
    // },


    herosectionSpan: {
        color: "#B557FE",
    },

    herosectionButton: {
        // width: "185px",
        width: "224px",
        // height: "45px",
        height: "62.28px",
        backgroundColor: "rgba(13, 106, 252, 0.988235)",
        color: "#ffffff",
        margin: "40px 0px",
        borderRadius: "6px",
        border: "none",
        fontFamily: "Roboto",
        // fontSize: "15px",
        fontSize: "20px",
        fontWeight: 700,
        textTransform: "uppercase"
    },

    herosectionImgBody: {
        width: "50%",
        position: "relative",
    },

    herosectionFirstImg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "430px",
        height: "430px",
        zIndex: 8,
    },

    herosectionFirstImage: {
        width: "100%",
        height: "100%",
    },

    herosectionSecondImg: {
        width: "400px",
        height: "280px",
        position: "absolute",
        top: "70px",
        left: "150px",
        zIndex: 10,
    },

    herosectionSecondImage: {
        width: "100%",
        height: "100%",
    },

    // threeBox: {
    //     // width: "300px",
    //     width: "324px",
    //     height: "268px",
    //     backgroundColor: "#F0C6BD",
    //     textAlign: "center",
    //     borderRadius: "13px",
    //     margin: "0px 30px",
    //     padding: "18px 50px 10px"
    // },

    "@media screen and (min-width: 1024px) and (max-width: 1440px)": {
        gridContain: {
            "& .Herosection-herosectionCenterCards": {
                padding: "0px 80px",
            },
            "& .Herosection-herosectionLeftCards": {
                padding: "0px 80px",
            },
        },

        // herosectionBody: {
        //     padding: "0px 80px"
        // },

        herosectionContent: {
            "& .Herosection-herosectionFirstTitle": {
                fontSize: "20px",
            },
            "& .Herosection-herosectionSecondTitle": {
                fontSize: "64px",
            },
            "& .Herosection-herosectionFirstMessage": {
                width: "95%",
                fontSize: "48px",
            },
            "& .Herosection-herosectionSecondMessage": {
                width: "400px",
                fontSize: "20px",
            }

        },

        // herosectionTitle: {
        //     fontSize: "22px",
        // },

        // herosectionMessage: {
        //     width: "380px",
        //     fontSize: "45px",
        // },

        herosectionButton: {
            width: "178.63px",
            height: "56.11px",
            fontSize: "16px"
        },

        herosectionFirstImg: {
            width: "340px",
            height: "340px",
        },

        herosectionSecondImg: {
            width: "300px",
            height: "220px",
            left: "120px",
        },

        herosectionLowerBody: {
            padding: "0px",
            justifyContent: "space-evenly",
        },

    },

    "@media screen and (min-width: 768px) and (max-width: 1023px)": {
        gridHero: {
            "& .Herosection-herosectionBodyFirst": {
                padding: "0px 80px",
            },
            "& .Herosection-herosectionBodySecond": {
                padding: "0px 80px",
            },
        },

        gridContain: {
            "& .Herosection-herosectionCenterCards": {
                padding: "0px 80px",
            },
            "& .Herosection-herosectionLeftCards": {
                padding: "0px 80px",
            },
        },

        herosectionBody: {
            height: "600px",
            padding: "0px 50px"
        },

        herosectionUpperBody: {
            padding: "50px 0px 20px"
        },

        herosectionContent: {
            "& .Herosection-herosectionFirstTitle": {
                fontSize: "20px",
            },
            "& .Herosection-herosectionSecondTitle": {
                fontSize: "50px",
            },
            "& .Herosection-herosectionFirstMessage": {
                width: "95%",
                fontSize: "40px",
            },
            "& .Herosection-herosectionSecondMessage": {
                width: "320px",
                fontSize: "18px",
            }

        },

        herosectionButton: {
            width: "178.63px",
            height: "56.11px",
            fontSize: "16px"
        },

        // herosectionMessage: {
        //     width: "240px",
        //     fontSize: "35px",
        // },

        herosectionFirstImg: {
            width: "320px",
            height: "320px",
            // top: "0px"
        },

        herosectionSecondImg: {
            width: "270px",
            height: "170px",
            left: "60px",
        },

        // herosectionLowerBody: {
        //     padding: "0px",
        //     margin: "0px",
        //     justifyContent: "space-evenly",
        // },

        // threeBox: {
        //     width: "210px",
        //     margin: "0px",
        //     padding: "40px 40px 20px"
        // },

        // threeBoxImg: {
        //     width: "120px",
        //     height: "120px",
        //     margin: "auto",
        // },

        // threeBoxImage: {
        //     width: "70%",
        //     height: "70%",
        // },

        // threeBoxTitle: {
        //     padding: "0px"
        // },

    },

    "@media screen and (min-width: 300px) and (max-width: 767px)": {
        gridHero: {
            "& .Herosection-herosectionBodyFirst": {
                padding: "0px 10px",
            },
            "& .Herosection-herosectionBodySecond": {
                padding: "0px 10px",
            },
        },

        gridContain: {
            "& .Herosection-herosectionCenterCards": {
                height: "auto",
                padding: "0px 10px",
                // margin: "10px 0px",
            },
            "& .Herosection-herosectionLeftCards": {
                height: "auto",
                padding: "0px 10px",
            },
        },

        gridHH: {
            marginTop: "0px",
            // height: "800px",
        },

        herosectionBody: {
            height: "700px",
            padding: "0px 20px",
        },

        herosectionUpperBody: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "10px 0px 60px"
        },

        herosectionContent: {
            width: "100%",
            textAlign: "center",
            "& .Herosection-herosectionFirstTitle": {
                fontSize: "16px",
                padding: "0px",
            },
            "& .Herosection-herosectionSecondTitle": {
                fontSize: "16px",
                padding: "0px"
            },
            "& .Herosection-herosectionFirstMessage": {
                width: "100%",
                fontSize: "20px",
                padding: "15px 0px 0px",
            },
            "& .Herosection-herosectionSecondMessage": {
                width: "100%",
                fontSize: "20px",
                padding: "15px 0px 0px",
            }
        },

        // herosectionTitle: {
        //     fontSize: "16px",
        //     padding: "0px"
        // },

        // herosectionMessage: {
        //     fontSize: "20px",
        //     width: "100%",
        //     padding: "15px 0px 0px",
        // },

        herosectionButton: {
            width: "130px",
            height: "40px",
            fontSize: "12px",
            margin: "20px 0px 30px"
        },

        herosectionImgBody: {
            width: "100%",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },

        herosectionFirstImg: {
            width: "250px",
            height: "250px",
            top: "auto",
            left: "auto"
        },

        herosectionSecondImg: {
            width: "220px",
            height: "150px",
            top: "30px",
            left: "auto",
        },

        herosectionLowerBody: {
            height: "420px",
            flexDirection: "column",
            padding: "0px",
            margin: "0px"
        },


    }
})

export default withStyles(style)(Herosection)