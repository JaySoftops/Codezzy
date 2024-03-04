import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import ReachingOut from '../commonComponents/ReachingOut'
import Companies from '../commonComponents/Companies'
import ClientCarousel from '../commonComponents/ClientCarousel'
import CreateAccountForm from '../commonComponents/CreateAccountForm'
import BlogCards from './BlogCards'
import SecondHerosection from '../commonComponents/SecondHerosection'

// interface Props {
//   classes: any
// }

class Blog extends Component {

  render() {
    // const { classes } = this.props;
    return (
      <Box>
        <SecondHerosection
          heading="BLOG"
          // cardClass={4}
          cardClass={"Herosection-herosectionHideCards"}
          highlight={null}
          herosectionTitleClassName={"Herosection-herosectionSecondTitle"}
          herosectionClassName={"Herosection-herosectionSecondMessage"}
          herosectionMessage={"Programming blog can be a rewarding way to share your knowledge, insights, and experiences with the programming community. Here are some specific tips for creating a successful programming."}
          herosectionBody={"Herosection-herosectionBodySecond"}
        />
        <BlogCards />
        <CreateAccountForm />
        <ClientCarousel />
        <Companies />
        <ReachingOut />
      </Box>
    )
  }
}

export default Blog;