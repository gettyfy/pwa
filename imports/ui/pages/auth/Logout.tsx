import React, { useEffect } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useHistory } from 'react-router-dom'
import { Box, Icon, Heading, Stack } from '@chakra-ui/core'
import { FormButton, PageHeader } from '../../components';

export default function Logout() {
    const history = useHistory()

    // Call the Meteor Logout Function here
    useEffect(() => {
        Accounts.logout()
    })

    const returnHome = () => {
        history.push('/')
    }

    return (
        <>
            <PageHeader useHeader />
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Stack spacing="8">
                    <Box py="6" display="flex" justifyContent="center" alignItems="center">
                        <Icon textAlign="center" margin="auto" name="info-outline" size="6rem" color="green.700" />
                    </Box>
                    <Heading as="h1" size="md">You've successfully logged out</Heading>
                    <FormButton bg="green.700" color="white" handleAction={returnHome} analyticName="Logout" buttonName="Return Home" />
                </Stack>
            </Box>
        </>
    )
}