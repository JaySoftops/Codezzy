import React, { Component } from "react";
import Companies from "../commonComponents/Companies";
import ReachingOut from "../commonComponents/ReachingOut";
import Subjects from "./Subjects";
import Herosection from "../commonComponents/Herosection";
import About from "./About";
import CreateAccountForm from "../commonComponents/CreateAccountForm";
import ClientCarousel from "../commonComponents/ClientCarousel";
import Skills from "./Skills";
import { Box, StyleRules, withStyles } from "@material-ui/core";

interface Props {
    // classes: any,
}

class Home extends Component<Props>{

    render() {
        // const { classes } = this.props;
        return (
            <Box>
                {/* <Box className={classes.homeHero}> */}
                <Herosection
                    heading="Education"
                    // cardClass={1}
                    cardClass={"Herosection-herosectionCenterCards"}
                    highlight="Codezzy"
                    herosectionTitleClassName={"Herosection-herosectionFirstTitle"}
                    herosectionClassName={"Herosection-herosectionFirstMessage"}
                    herosectionMessage={" is an interactive learning platform"}
                    herosectionBody={"Herosection-herosectionBodyFirst"}
                />
                {/* </Box> */}
                <About />
                <Subjects />
                <Skills />
                <CreateAccountForm />
                <ClientCarousel />
                <Companies />
                <ReachingOut />
            </Box>
        );
    };
};

const style: StyleRules = ({
    // homeHero: {
    //     "& .HerosectionCard-herosectionLowerBody-53": {
    //         justifyContent: "center",
    //         "& >*:nth-child(1)": {
    //             margin: "0px 30px",
    //         },
    //         "& >*:nth-child(2)": {
    //             margin: "0px 30px",
    //         },
    //         "& >*:nth-child(3)": {
    //             margin: "0px 30px",
    //         },
    //     },
    // },
})

export default withStyles(style)(Home)