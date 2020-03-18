/**
 * https://stackoverflow.com/questions/20515989/how-can-i-log-out-a-user-from-the-server-in-meteor-js
 */
import React, { useEffect } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Box, Icon, Heading, Stack } from '@chakra-ui/core'
import { FormButton, PageHeader } from '/imports/ui/components';
import Path from '../../router';

export default function Logout() {
    // Call the Meteor Logout Function here
    useEffect(() => {
        async function logout() {
            await Accounts.logout()
        }
        logout();
        window && window.location.replace(Path.auth.loginRoute)
    })

    const returnHome = () => {
        window && window.location.replace(Path.auth.loginRoute)
    }

    return (
        <>
            <PageHeader useHeader />
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Stack spacing="8" alignItems="center">
                    <Box py="6" display="flex" justifyContent="center" alignItems="center">
                        <Icon textAlign="center" margin="auto" name="info-outline" size="6rem" color="green.700" />
                    </Box>
                    <Heading as="h1" size="md">You've successfully logged out</Heading>
                    {/* <FormButton bg="green.700" color="white" handleAction={returnHome} analyticName="Logout" buttonName="Return Home" /> */}
                    <small onClick={returnHome}>Click the button below if you're not redirected in 10 seconds</small>
                </Stack>
            </Box>
        </>
    )
}