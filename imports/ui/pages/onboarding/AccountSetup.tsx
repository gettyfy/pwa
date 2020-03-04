import React from 'react'
import { useHistory } from 'react-router-dom';

import { Box, Heading, Divider, PseudoBox } from '@chakra-ui/core'

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
            
            <Box mb="20"><p>I will use Fynance to manage</p></Box>

            <PseudoBox as="button" rounded="0px" border="1px" width="100%" bg ="#FFFFFF"borderColor="#0B69FF" handleAction={() => handleSubmit()}>Business Transactions</PseudoBox>
            
        </Box>
    );
}

export default WizardFormSecondPage