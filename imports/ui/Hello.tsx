import React, { ReactComponentElement } from 'react';
import {
  Button, Link, Flex, Stack, Box, Avatar, AvatarBadge, Stat,
  StatNumber,
  StatHelpText,
  Text,
  StatGroup, Heading, Icon, 
} from '@chakra-ui/core'
// import { Link } from '
// import * as Analytics from '/imports/ui/analytics';
import styled from '@emotion/styled'


const Dashboard = styled.main`
  display: flex;
  flex-direction: column;
`

const DashboardStat = styled(StatGroup)`
  display: flex;
  justify-content: space-between;
  text-align: center;

`
const ActionCardRow = styled.section`
  flex-direction: row;
  width: 100%;
  display: flex;
  flex: 1 1 50%;
  text-align: left;
  min-height: 13rem;
  justify-content: space-between;
  margin-top: 2rem;
  /* flex-wrap: wrap; */

`


export default class Hello extends React.Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <Dashboard>

        <Box d="flex" my="6" flexDirection="column" alignItems="center" justifyContent="center">
          <Avatar name="Friend" >
            <AvatarBadge size="1.25em" bg="green.500" />
          </Avatar>
          Hello Friend
        </Box>

        <DashboardStat>
          <Stat>
            <StatNumber>345</StatNumber>
            <StatHelpText>
              DEALS
              </StatHelpText>
          </Stat>

          <Stat>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              PAYMENT DUE
              </StatHelpText>
          </Stat>
          <Stat>
            <StatNumber>39</StatNumber>
            <StatHelpText>
              OVERDUE
              </StatHelpText>
          </Stat>
        </DashboardStat>

        {/* Earnings Section ---- */}
        <Flex justify="space-between" mt="10">

        <Stack spacing={3}>
            <Heading as="h3" size="lg">
            Earnings
            </Heading>
            <Text>Total Balance</Text>
        </Stack>

        <Stack>
          <Heading as="h1" size="lg">
          ₵ 65,430
          </Heading>
        </Stack>
        </Flex>
        

        {/* Action cards  */}
        
    
          

      <ActionCardRow>
        <Box mt="2" textAlign="left" p="5" pl="6" w="48%" as="button" bg="#FFEAE9">
          <Icon name="edit" mb="6" color="red.500" size="20px"></Icon>
          <Box mb="3" w="65%">
            <Heading as="h2" size="sm">Add a Customer</Heading>
          </Box>
          <Heading as="h6" size="xs">Profile</Heading>
        </Box>

        <Box mt="2" textAlign="left" p="5" pl="6" w="48%" as="button" bg="#E3EDFF">
          <Icon name="plus-square" mb="6" color="blue.500" size="20px"></Icon>
          <Box mb="3" w="65%">
            <Heading as="h4" size="sm">Create a Transation</Heading>
          </Box>
          <Heading as="h6" size="xs">Record</Heading>
        </Box>
        </ActionCardRow>

        <ActionCardRow>
        <Box mt="2" textAlign="left" p="5" pl="6" w="48%" as="button" bg="#FFEAE9">
          <Icon name="edit" mb="6" color="red.500" size="20px"></Icon>
          <Box mb="3" w="65%">
            <Heading as="h2" size="sm">Add a Customer</Heading>
          </Box>
          <Heading as="h6" size="xs">Profile</Heading>
        </Box>

        <Box mt="2" textAlign="left" p="5" pl="6" w="48%" as="button" bg="#E3EDFF">
          <Icon name="plus-square" mb="6" color="blue.500" size="20px"></Icon>
          <Box mb="3" w="65%">
            <Heading as="h4" size="sm">Create a Transation</Heading>
          </Box>
          <Heading as="h6" size="xs">Record</Heading>
        </Box>
      </ActionCardRow>

      </Dashboard>



    );
  }
}








