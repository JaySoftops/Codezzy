import { Avatar, Box, Grid, StyleRules, withStyles } from '@material-ui/core';
import React, { Component } from 'react'
import Slider from 'react-slick';
import back from "../assets/card_background.png"
import rank from "../assets/rank427319694.png";
import Girl from "../assets/girlEllipse 655.png";

interface Props {
    classes: any
}

class ClientCarousel extends Component<Props>{
    render() {
        const { classes } = this.props;

        const settings = {
            className: "center",
            // centerMode: true,
            // centerPadding: "60px",
            dots: true,
            // arrows:false,    
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesPerRow: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                       
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                    slidesToShow: 1,
                    }
                },
            ],
        }

        return (
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} className={classes.clientGrid}>
                    <Box className={`${classes.clientHeading} ${classes.secondHeading}`}>Client Testimonial</Box>
                    <Box>
                        <Slider {...settings} className={classes.clientCaro}>
                            <Box className={classes.card}>
                                <Box className={classes.cardRank}>
                                    <img src={rank} alt="rank" />
                                </Box>
                                <Box className={classes.cardName}>Paul Patterson</Box>
                                <Box className={classes.cardDesignation}>UI/UX Designer</Box>
                                <Box className={classes.cardImgBody}>
                                    <Avatar className={classes.cardImage} src={Girl} alt="img" />
                                </Box>
                                <Box className={classes.cardTitle}>Amazing Customer Service</Box>
                                <Box className={classes.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta, eligendi dolor, quibusdam deserunt, aliquid laboriosam blanditiis iusto hic eum odio soluta ducimus asperiores voluptatibus adipisci sapiente odit ad saepe.</Box>
                            </Box>
                            <Box className={classes.card}>
                                <Box className={classes.cardRank}>
                                    <img src={rank} alt="rank" />
                                </Box>
                                <Box className={classes.cardName}>Paul Patterson</Box>
                                <Box className={classes.cardDesignation}>UI/UX Designer</Box>
                                <Box className={classes.cardImgBody}>
                                    <Avatar className={classes.cardImage} src={Girl} alt="img" />
                                </Box>
                                <Box className={classes.cardTitle}>Amazing Customer Service</Box>
                                <Box className={classes.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta, eligendi dolor, quibusdam deserunt, aliquid laboriosam blanditiis iusto hic eum odio soluta ducimus asperiores voluptatibus adipisci sapiente odit ad saepe.</Box>
                            </Box>
                            <Box className={classes.card}>
                                <Box className={classes.cardRank}>
                                    <img src={rank} alt="rank" />
                                </Box>
                                <Box className={classes.cardName}>Paul Patterson</Box>
                                <Box className={classes.cardDesignation}>UI/UX Designer</Box>
                                <Box className={classes.cardImgBody}>
                                    <Avatar className={classes.cardImage} src={Girl} alt="img" />
                                </Box>
                                <Box className={classes.cardTitle}>Amazing Customer Service</Box>
                                <Box className={classes.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta, eligendi dolor, quibusdam deserunt, aliquid laboriosam blanditiis iusto hic eum odio soluta ducimus asperiores voluptatibus adipisci sapiente odit ad saepe.</Box>
                            </Box>
                            {/* <Box className={classes.card}>
                                <Box className={classes.cardRank}>
                                    <img src={rank} alt="rank" />
                                </Box>
                                <Box className={classes.cardName}>Paul Patterson</Box>
                                <Box className={classes.cardDesignation}>UI/UX Designer</Box>
                                <Box className={classes.cardImgBody}>
                                    <Avatar className={classes.cardImage} src={Girl} alt="img" />
                                </Box>
                                <Box className={classes.cardTitle}>Amazing Customer Service</Box>
                                <Box className={classes.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta, eligendi dolor, quibusdam deserunt, aliquid laboriosam blanditiis iusto hic eum odio soluta ducimus asperiores voluptatibus adipisci sapiente odit ad saepe.</Box>
                            </Box>
                            <Box className={classes.card}>
                                <Box className={classes.cardRank}>
                                    <img src={rank} alt="rank" />
                                </Box>
                                <Box className={classes.cardName}>Paul Patterson</Box>
                                <Box className={classes.cardDesignation}>UI/UX Designer</Box>
                                <Box className={classes.cardImgBody}>
                                    <Avatar className={classes.cardImage} src={Girl} alt="img" />
                                </Box>
                                <Box className={classes.cardTitle}>Amazing Customer Service</Box>
                                <Box className={classes.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta, eligendi dolor, quibusdam deserunt, aliquid laboriosam blanditiis iusto hic eum odio soluta ducimus asperiores voluptatibus adipisci sapiente odit ad saepe.</Box>
                            </Box>
                            <Box className={classes.card}>
                                <Box className={classes.cardRank}>
                                    <img src={rank} alt="rank" />
                                </Box>
                                <Box className={classes.cardName}>Paul Patterson</Box>
                                <Box className={classes.cardDesignation}>UI/UX Designer</Box>
                                <Box className={classes.cardImgBody}>
                                    <Avatar className={classes.cardImage} src={Girl} alt="img" />
                                </Box>
                                <Box className={classes.cardTitle}>Amazing Customer Service</Box>
                                <Box className={classes.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta, eligendi dolor, quibusdam deserunt, aliquid laboriosam blanditiis iusto hic eum odio soluta ducimus asperiores voluptatibus adipisci sapiente odit ad saepe.</Box>
                            </Box>
                            <Box className={classes.card}>
                                <Box className={classes.cardRank}>
                                    <img src={rank} alt="rank" />
                                </Box>
                                <Box className={classes.cardName}>Paul Patterson</Box>
                                <Box className={classes.cardDesignation}>UI/UX Designer</Box>
                                <Box className={classes.cardImgBody}>
                                    <Avatar className={classes.cardImage} src={Girl} alt="img" />
                                </Box>
                                <Box className={classes.cardTitle}>Amazing Customer Service</Box>
                                <Box className={classes.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta, eligendi dolor, quibusdam deserunt, aliquid laboriosam blanditiis iusto hic eum odio soluta ducimus asperiores voluptatibus adipisci sapiente odit ad saepe.</Box>
                            </Box>
                            <Box className={classes.card}>
                                <Box className={classes.cardRank}>
                                    <img src={rank} alt="rank" />
                                </Box>
                                <Box className={classes.cardName}>Paul Patterson</Box>
                                <Box className={classes.cardDesignation}>UI/UX Designer</Box>
                                <Box className={classes.cardImgBody}>
                                    <Avatar className={classes.cardImage} src={Girl} alt="img" />
                                </Box>
                                <Box className={classes.cardTitle}>Amazing Customer Service</Box>
                                <Box className={classes.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta, eligendi dolor, quibusdam deserunt, aliquid laboriosam blanditiis iusto hic eum odio soluta ducimus asperiores voluptatibus adipisci sapiente odit ad saepe.</Box>
                            </Box> */}
                        </Slider>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

const style: StyleRules = ({
    clientGrid: {
        width: "100%",
        // height: "200px",
        backgroundColor: "white",
        marginTop: "50px",
    },

    clientHeading: {
        width: "220px",
        textAlign: "center",
        margin: "20px auto",
        fontSize: "25px",
        fontWeight: 700,
        fontFamily: "Nunito",
        borderBottom: "2px solid #EFB6B6",
    },

    clientCaro: {
        // width: "70%",
        width: "1170px",
        // height: "700px",
        // overflow: "hidden",
        margin: "auto",
        padding: "50px 0px",
        "& .slick-list": {
            width: "100%",
            padding: "0px !important",
            display: "flex",
            // justifyContent: "space-evenly",
            justifyContent: "center"
        },
        "& .slick-track": {
            width: "1170px !important",
            display: "flex",
            justifyContent: "space-evenly",
            // padding: "0px 15px",
            
        },
        "& .slick-slide": {
            width: "300px !important",
            margin: "0px 50px",
            "& > *:nth-child(1)": {
                width: "300px",
            },
        },
        "& .slick-dots": {
            bottom: "0px"
        }
    },

    card: {
        width: "100% !important",
        // width: "100% !important",
        background: `url(${back})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "40px",
        textAlign: "center",
        borderRadius: "15px !important",
    },

    cardRank: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },

    cardName: {
        fontSize: "26px",
        fontWeight: 600,
        fontFamily: "Nunito",
        margin: "10px 0px"
    },

    cardDesignation: {
        fontSize: "12px",
        fontWeight: 700,
        fontFamily: "Nunito",
        margin: "5px 0px"
    },

    cardImgBody: {
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        margin: "30px 0px"
    },

    cardImage: {
        width: "30%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    },
    
    cardTitle: {
        fontSize: "14px",
        fontWeight: 500,
        fontFamily: "Roboto",
        margin: "35px 0px 0px",
    },

    cardDescription: {
        margin: "10px 0px",
        fontSize: "14px",
        fontWeight: 400,
        fontFamily: "Roboto",
    },

    "@media screen and (min-width: 1024px) and (max-width: 1440px)": {
        clientCaro: {
            width: "900px",
            height: "500px",
            overflow: "hidden",
            margin: "auto",
            "& .slick-list": {
                width: "100%",
                padding: "0px !important"
            },
            "& .slick-track": {
                width: "900px",
                display: "flex",
                justifyContent: "space-evenly",
            },
            "& .slick-slide": {
                width: "250px !important",
                margin: "0px 30px",
                "& > *:nth-child(1)": {
                    width: "250px",
                },
            },  
        },
        card: {
            padding: "30px 10px",
        },
        

        cardName: {
            fontSize: "22px",
            margin: "5px 0px"
        },

        cardDesignation: {
            margin: "0px 0px"
        },

        cardDescription: {
            fontSize: "12px"
        },
    },

    "@media screen and (min-width: 768px) and (max-width: 1023px)": {
        clientCaro: {
            width: "700px",
            height: "500px",
            overflow: "hidden",
            margin: "auto",
            "& .slick-list": {
                width: "100%",
                padding: "0px !important"
            },
            "& .slick-track": {
                width: "700px",
                display: "flex",
                justifyContent: "space-evenly",
            },
            "& .slick-slide": {
                width: "250px !important",
                margin: "0px 40px",
                "& > *:nth-child(1)": {
                    width: "250px",
                },
            },  
        },
        card: {
            padding: "30px 10px",
        },
        

        cardName: {
            fontSize: "22px",
            margin: "5px 0px"
        },

        cardDesignation: {
            margin: "0px 0px"
        },

        cardDescription: {
            fontSize: "12px"
        },
    },

    "@media screen and (min-width: 576px) and (max-width: 767px)": {
        clientCaro: {
            width: "500px",
            height: "500px",
            overflow: "hidden",
            margin: "auto",
            "& .slick-list": {
                width: "100%",
                padding: "0px !important"
            },
            "& .slick-track": {
                width: "500px",
                display: "flex",
                justifyContent: "space-evenly",
            },
            "& .slick-slide": {
                width: "250px !important",
                margin: "0px 40px",
                "& > *:nth-child(1)": {
                    width: "250px",
                },
            },  
        },
        card: {
            padding: "30px 10px",
        },
        
        cardName: {
            fontSize: "22px",
            margin: "5px 0px"
        },

        cardDesignation: {
            margin: "0px 0px"
        },

        cardDescription: {
            fontSize: "12px"
        },
    },

    "@media screen and (min-width: 300px) and (max-width: 575px)": {
        clientCaro: {
            width: "300px",
            height: "500px",
            overflow: "hidden",
            margin: "auto",
            "& .slick-list": {
                width: "100%",
                padding: "0px !important"
            },
            "& .slick-track": {
                width: "300px",
                display: "flex",
                justifyContent: "space-evenly",
            },
            "& .slick-slide": {
                width: "250px !important",
                margin: "0px 40px",
                "& > *:nth-child(1)": {
                    width: "250px",
                },
            },  
        },
        card: {
            padding: "30px 10px",
        },
        
        cardName: {
            fontSize: "22px",
            margin: "5px 0px"
        },

        cardDesignation: {
            margin: "0px 0px"
        },

        cardDescription: {
            fontSize: "12px"
        },
    },
    
})

export default withStyles(style)(ClientCarousel)