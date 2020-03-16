import React from 'react'
import { Box, Icon } from '@chakra-ui/core'
import { FormButton } from '/imports/ui/components'


const Message: React.FunctionComponent = (props: any) => {
    // const history = useHistory();
    const handleSubmit = () => {
        history.push('/dashboard');
    }
    return (
        <Box p={4}>
            <Icon name="arrow-back" size="24px" />
            <Box height="6rem"></Box>
            <Box mb="20" marginLeft="10%" alignItems="center">
                <Icon mb="10" name="check-circle" marginLeft="25%" size="6rem" color="green.900" />
                <h1>Hi, MEST Africa</h1>
                <Text fontSize="xs">Your payment of C4500 is due in 15 days. Kindly make preparations for payment.</Text>
                
            </Box>
            <FormButton buttonName="SEND REMINDER" analyticName="Verify" buttonColor="#4EB191" color="#FFF" handleAction={() => handleSubmit()} />
        </Box>
    );
}
export default Message