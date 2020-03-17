import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import path from '/imports/ui/router'
import { AppIcon } from '/imports/ui/components'
import { Flex, Text as ChakraText } from '@chakra-ui/core'
import styled from '@emotion/styled'

const Text = styled(ChakraText)`
    font-size: 8px;
    text-align: center;

`
const LinkList = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    list-style: none;

`
const TabLayout = styled.footer`
    position: fixed;
    background: white;
    bottom: 0;
    padding: .5rem;
    padding-top: .7rem;
    left: 0;
    margin-top: calc(54px + 2rem);
    border-top: 1px #DDD solid;
    display: block;
    width: 100vw;
    min-height: 54px;
    z-index: 111111;
`



export const TabbedNav = (): JSX.Element {
    return (
        <TabLayout>
            <Flex justify="space-around">
                <Link to={path.root}>
                    <LinkList>
                        <AppIcon src="/icons/nav/dashboard.svg" />
                        <Text>HOME</Text>
                    </LinkList>
                </Link>

                <Link to={path.workspace.customer}>
                    <LinkList>
                        <AppIcon src="/icons/nav/users.svg" />
                        <Text>CUSTOMER</Text>
                    </LinkList>
                </Link>

                <Link to={path.workspace.transaction}>
                    <LinkList>
                        <AppIcon src="/icons/nav/transactions.svg" />
                        <Text>TRANSACTIONS</Text>
                    </LinkList>
                </Link>

                <Link to={path.workspace.account}>
                    <LinkList>
                        <AppIcon src="/icons/nav/settings.svg" />
                        <Text>ACCOUNT</Text>
                    </LinkList>
                </Link>
            </Flex>
        </TabLayout>
    )
}