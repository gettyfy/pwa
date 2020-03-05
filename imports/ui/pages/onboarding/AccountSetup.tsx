import React from 'react'
import { useHistory, Link } from 'react-router-dom';

import { Box, Heading, Divider, Button} from '@chakra-ui/core'
import { FormButton } from '/imports/ui/components';



const WizardFormSecondPage: React.FunctionComponent = (props: any) => {
    const history = useHistory();
    const handleSubmit = () => {
        history.push('/onboarding/company-setup');
    }


    return (
        <Box p={4}>
            <Heading>Account Setup</Heading>
            <Box mt="5"><Divider  borderColor="blue.500" /></Box>
            <Box mb="20"><p>We’re in the process of setting up your account, before that let us know how you would like to use fynance</p></Box>
            
            <Box height="5.5rem"></Box>

            <Box mb="5"><p>I will use Fynance to manage</p></Box>

            
            <FormButton handleAction={() => handleSubmit()} buttonName="Business Transaction" buttonColor="#0B69FF" color="#FFF"  mb="10" /> 
            <FormButton  buttonName="Individual"buttonColor="#0B69FF" color="#FFF"  mb="10"/> 
            
        </Box>
    );
}

export default WizardFormSecondPage