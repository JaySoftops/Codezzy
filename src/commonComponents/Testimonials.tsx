import React, { useEffect } from "react";
import Slider from "react-slick";
import {
    Card,
    Typography,
    CardContent,
    Grid,
    Avatar,
    Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImg from "../assets/card_background.png";

const DATA = [
    {
        id: 0,
        img: "circle-image.jpg",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        name: "Paul Patterson",
        title: "AMAZING CUSTOMER SERVICE",
        designation: "UI/UX designer",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
        id: 1,
        img: "circle-image.jpg",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        name: "Paul Patterson",
        title: "AMAZING CUSTOMER SERVICE",
        designation: "UI/UX designer",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
        id: 2,
        img: "circle-image.jpg",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        name: "Paul Patterson",
        title: "AMAZING CUSTOMER SERVICE",
        designation: "UI/UX designer",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
        id: 3,
        img: "circle-image.jpg",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        name: "Paul Patterson",
        title: "AMAZING CUSTOMER SERVICE",
        designation: "UI/UX designer",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
        id: 4,
        img: "circle-image.jpg",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        name: "Paul Patterson",
        title: "AMAZING CUSTOMER SERVICE",
        designation: "UI/UX designer",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
        id: 5,
        img: "circle-image.jpg",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        name: "Paul Patterson",
        title: "AMAZING CUSTOMER SERVICE",
        designation: "UI/UX designer",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
];

const useStyles = makeStyles((theme) => ({
    container: {
        height: "50rem",
        backgroundColor: "#FFFBF5",
        display: "block",
        padding: "2rem",
        marginTop: "50px",
        justifyContent: "center",
    },
    heading: {
        fontFamily: "Nunito",
        fontSize: "30px",
        fontWeight: 700,
        textAlign: "center",
    },
    line: {
        border: "2px solid #EFB6B6",
        width: "15rem",
        margin: "1.5rem auto 3rem",
    },
    card: {
        maxWidth: 320, //300
        height: 400, //400
        margin: "0 auto",
        textAlign: "center",
        borderRadius: "1rem",
        background: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    smallerCard: {
        maxWidth: 320, //300
        height: 400, //400
        margin: "0 auto",
        textAlign: "center",
        border: "2px solid black",
        borderRadius: "1rem",
    },
    cardContent: {
        justifyContent: "center",
    },

    avatar: {
        width: theme.spacing(11),
        height: theme.spacing(11),
        margin: "1rem auto",
        marginBottom: theme.spacing(2),
    },
    rating: {},
    name: {
        fontFamily: "Nunito",
        fontSize: "1.5rem",
        fontWeight: 700,
        textAlign: "center",
    },
    designation: {

    },
    infoBox: {
        display: "block",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "2rem",
    },
    title: {
        fontFamily: "Nunito",
        fontSize: "1rem",
        fontWeight: 400,
        textAlign: "center",
    },
    description: {
        fontFamily: "Roboto",
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "19px",
        letterSpacing: "0em",
        textAlign: "center",
    },
}));

function Testimonials() {
    const classes = useStyles();

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    const card = DATA.map((data) => (
        <div>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        className={classes.rating}
                    >
                        {data.rating}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        className={classes.name}
                    >
                        {data.name}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        className={classes.designation}
                    >
                        {data.designation}
                    </Typography>
                    <Avatar alt="Avatar" src={data.img} className={classes.avatar} />
                    <Box className={classes.infoBox}>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            className={classes.title}
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.description}
                        >
                            {data.description}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </div>
    ));

    return (
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.container}>
            <Typography variant="h5" className={classes.heading}>
                Client Testimonial
            </Typography>
            <Box className={classes.line}></Box>
            <Box className="slider-container" >
                <Slider {...settings}>{card}</Slider>
            </Box>
        </Grid>
    );
}

export default Testimonials;

