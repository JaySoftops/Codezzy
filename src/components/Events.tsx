import { Box, Divider, StyleRules, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import EventCard from "./EventCard";
import CreateAccountForm from "../commonComponents/CreateAccountForm";
import ClientCarousel from '../commonComponents/ClientCarousel'
import Companies from "../commonComponents/Companies";
import ReachingOut from "../commonComponents/ReachingOut";
import SecondHerosection from "../commonComponents/SecondHerosection";

interface Props {
  classes: any;
}
class Events extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Box>
        <SecondHerosection
                    heading="Event"
                    // cardClass={3}
                    cardClass={"Herosection-herosectionHideCards"}
                    highlight={null}
                    herosectionTitleClassName={"Herosection-herosectionSecondTitle"}
                    herosectionClassName={"Herosection-herosectionSecondMessage"}
                    herosectionMessage={"Review fundamental concepts in computer science, especially if you're interviewing for a technical role. This might include algorithms, data structures, databases, networking, and system design."}
                    herosectionBody={"Herosection-herosectionBodySecond"}
                /> 
        <Box className={classes.evCardBox}>
          <Box className={classes.evCard}>
            <Box className={classes.week}>1 Week Ago</Box>
            <EventCard />
            <Divider className={classes.divider} />
          </Box>
          <Box className={classes.evCard}>
            <Box className={classes.week}>2 Week Ago</Box>
            <EventCard />
            <EventCard />
            <Divider className={classes.divider} />
          </Box>
          <Box className={classes.evCard}>
            <Box className={classes.week}>4 Week Ago</Box>
            <EventCard />
            <EventCard />
            <Divider className={classes.divider} />
          </Box>
        </Box>
        <CreateAccountForm />
        <ClientCarousel />
        <Companies />
        <ReachingOut />
      </Box>
    );
  }
}
const style: StyleRules = {
  evCardBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "30px",
  },
  evCard: {
    width: "100%",
  },
  week: {
    maxWidth: "1280px",
    margin: "10px auto",
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "Nunito",
    // border: "1px solid black",
  },
  divider: {
    maxWidth: "1300px",
    height: "4px",
    backgroundColor: "#FAECEB",
    margin: "10px auto",
    // border: "1px solid black",
  },
  "@media screen and (min-width: 768px) and (max-width: 1440px)": {
    week: {
      maxWidth: "100%",
    },
    divider: {
      width: "90%",
    },
  },
  "@media screen and (min-width: 576px) and (max-width: 767px)": {
    evCardBox: {
      padding: "20px",
    },
    week: {
      maxWidth: "398px",
    },
    divider: {
      display: "none",
    },
  },
  "@media screen and (min-width: 0px) and (max-width: 575px)": {
    evCardBox: {
      padding: "20px",
    },
    week: {
      maxWidth: "358px",
    },
    divider: {
      display: "none",
    },
  },
};
export default withStyles(style)(Events);




// import { Box, Divider, StyleRules, withStyles } from '@material-ui/core'
// import React, { Component } from 'react'
// import Herosection from '../commonComponents/Herosection'
// import EventCard from './EventCard'
// import CreateAccountForm from '../commonComponents/CreateAccountForm'
// import ClientCarousel from '../commonComponents/ClientCarousel'
// import Companies from '../commonComponents/Companies'
// import ReachingOut from '../commonComponents/ReachingOut'

// interface Props {
//     classes: any
// }
// class Events extends Component<Props> {

//     render() {
//         const { classes } = this.props;
//         return (
//             <Box>
//                 <Herosection
//                     heading="Event"
//                     // cardClass={3}
//                     cardClass={"Herosection-herosectionHideCards"}
//                     highlight={null}
//                     herosectionTitleClassName={"Herosection-herosectionSecondTitle"}
//                     herosectionClassName={"Herosection-herosectionSecondMessage"}
//                     herosectionMessage={"Review fundamental concepts in computer science, especially if you're interviewing for a technical role. This might include algorithms, data structures, databases, networking, and system design."}
//                     herosectionBody={"Herosection-herosectionBodySecond"}
                    
//                 />
//                 <Box>
//                     <Box className={classes.evCard}>
//                         <Box className={classes.week}>1 Week Ago</Box>
//                         <EventCard />
//                         <Divider className={classes.divider} />
//                     </Box>
//                     <Box className={classes.evCard}>
//                         <Box className={classes.week}>2 Week Ago</Box>
//                         <EventCard />
//                         <EventCard />
//                         <Divider className={classes.divider} />

//                     </Box>
//                     <Box className={classes.evCard}>
//                         <Box className={classes.week}>4 Week Ago</Box>
//                         <EventCard />
//                         <EventCard />
//                         <Divider className={classes.divider} />

//                     </Box>
//                 </Box>
//                 <CreateAccountForm />
//                 <ClientCarousel />
//                 <Companies />
//                 <ReachingOut />
//             </Box>
//         )
//     }
// }
// const style: StyleRules = ({
//     evCard: {
//         margin: "40px 0px"
//     },
//     week: {
//         // width: "1280px",
//         maxWidth: "1280px",
//         margin: "10px auto",
//         fontSize: "20px",
//         fontWeight: 600,
//         fontFamily: "Nunito"
//     },
//     divider: {
//         // width: "1300px",
//         maxWidth: "1300px",
//         height: "4px",
//         backgroundColor: "#FAECEB",
//         margin: "10px auto",

//     },
// })

// export default withStyles(style)(Events)