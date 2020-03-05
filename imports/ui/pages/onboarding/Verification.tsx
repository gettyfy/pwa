import React from 'react'
import { useHistory } from 'react-router-dom';

import { Input, Box, Heading, Divider } from '@chakra-ui/core'
import { FormButton } from '/imports/ui/components'

const WizardFormFirstPage: React.FunctionComponent = (props: any) => {
    const history = useHistory();
    const handleSubmit = () => {
        history.push('/onboarding/account-setup');
    }


    return (
        <Box p={4}>
            <Heading>Verify Identity</Heading>
            <Box mt="5"><Divider  borderColor="blue.500" /></Box>
            <Box mb="20"><p>Verify your mobile number to continue</p></Box>
            <Box height="5.5rem"></Box>
            <Box mb="10"><Input placeholder="Type code here" size="lg"/></Box>
            
            <FormButton buttonName="Verify" analyticName="Verify" buttonColor="#0B69FF" color="#FFF" handleAction={() => handleSubmit()} />
        </Box>
    );
}

export default WizardFormFirstPage