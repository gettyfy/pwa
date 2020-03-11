import React from 'react'
import { Stack, Box, Icon, Heading } from '@chakra-ui/core'
import { Link, useHistory } from 'react-router-dom'
import Headroom from 'react-headroom'
import styled from '@emotion/styled'
import path from '/imports/ui/router'
import { AppIcon, LineDivider, BreakLayout } from '/imports/ui/components'

const Navbar = styled.header`
    min-height: 48px;
    position: relative;
    margin: 0;
    z-index: 95299999999239;
    background: white;
    padding: .9rem 1rem .75rem 1rem;
`


const LogoHeader: React.FC = (): JSX.Element => {
    return (
        <BreakLayout marginT="-10px">
            <Headroom
                wrapperStyle={{ marginBottom: '2.5rem' }}
                style={{ zIndex: "99999999999999999999999", borderBottom: '1px solid #ddd' }}
            >
                <Navbar >
                    <Link to={path.root}>
                        <img alt="fynance" width="40%" src="/img/header-logo.svg" aria-label="header logo" />
                    </Link>
                </Navbar >
            </Headroom >
        </BreakLayout>
    )
}



export const PageHeader: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <LogoHeader />
            <Box>
                <Icon name="arrow-back" size="24px" />
            </Box>
            <Stack spacing={3}>
                <Heading as="h1" size="xl">
                    Create a Reminder
                </Heading>
                <Box mt="6">
                    <h6>Select Channels</h6>
                </Box>
            </Stack>
        </React.Fragment>
    )
}
