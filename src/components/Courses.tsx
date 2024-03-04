import { Box, StyleRules, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import Herosection from '../commonComponents/Herosection'
import CreateAccountForm from '../commonComponents/CreateAccountForm'
import ClientCarousel from '../commonComponents/ClientCarousel'
import Companies from '../commonComponents/Companies'
import ReachingOut from '../commonComponents/ReachingOut'
import Filter from './Filter'

interface Props {
  // classes: any
}

class Courses extends Component<Props> {

  render() {
    // const { classes } = this.props;
    return (
      <Box>
        <Herosection
          heading="Courses"
          // cardClass={2}
          cardClass={"Herosection-herosectionLeftCards"}
          highlight={null}
          herosectionTitleClassName={"Herosection-herosectionSecondTitle"}
          herosectionClassName={"Herosection-herosectionSecondMessage"}
          herosectionMessage={"Catering to various skill levels and programming languages. Here are some popular platforms and types of courses you might consider"}
          herosectionBody={"Herosection-herosectionBodyFirst"}
        />
        <Filter />
        <CreateAccountForm />
        <ClientCarousel />
        <Companies />
        <ReachingOut />
      </Box>
    )
  }
}

const style: StyleRules = ({
  // coursesHero: {
  //   "& .HerosectionCard-herosectionLowerBody-54": {
  //     justifyContent: "left",
  //     "& >*:nth-child(1)": {
  //       margin: "0px 30px 0px 0px",
  //     },
  //     "& >*:nth-child(2)": {
  //       margin: "0px 30px",
  //     },
  //     "& >*:nth-child(3)": {
  //       margin: "0px 30px",
  //     },
  //   },
  // },
})

export default withStyles(style)(Courses);