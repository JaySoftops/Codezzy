import React, { Component } from 'react'
import { Box } from '@material-ui/core'
import ReachingOut from '../commonComponents/ReachingOut';
import Companies from '../commonComponents/Companies';
import ClientCarousel from '../commonComponents/ClientCarousel';
import ContactRegForm from './ContactRegForm';
import SecondHerosection from '../commonComponents/SecondHerosection';

interface Props {
    // classes: any,
}

class Contact extends Component<Props> {
    render() {
        // const {classes} = this.props;
        return (
            <Box>
                <SecondHerosection
                    heading="Contact"
                    // cardClass={5}
                    cardClass={"Herosection-herosectionHideCards"}
                    highlight={null}
                    herosectionTitleClassName={"Herosection-herosectionSecondTitle"}
                    herosectionClassName={"Herosection-herosectionSecondMessage"}
                    herosectionMessage={"We'd happy to hear from you!"}
                    herosectionBody={"Herosection-herosectionBodySecond"}
                />
                <ContactRegForm />
                <ClientCarousel />
                <Companies />
                <ReachingOut />
            </Box>
        )
    }
}

export default Contact;