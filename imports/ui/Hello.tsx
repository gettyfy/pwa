import React, { ReactComponentElement } from 'react';
import {
  Button, Link, Flex, Stack, Box, Avatar, AvatarBadge, Stat,
  StatNumber,
  StatHelpText,
  Text,
  StatGroup, Heading
} from '@chakra-ui/core'
// import { Link } from '
import * as Analytics from '/imports/ui/analytics';
import styled from '@emotion/styled'


const Dashboard = styled.main`
  display: flex;
  flex-direction: column;
`




interface ITrackedClick {
  destination: string,
  buttonName: string,
  // buttonName: JSX.Element,
  eventName: string
}

class TrackedLink extends React.Component<ITrackedClick> {
  handleClick = (eventName: string, destination: string) => {
    Analytics.track(eventName, { attr: destination })
  }




  render() {
    const { eventName, destination, buttonName } = this.props;
    return (
      <Box>
        <Link onClick={() => this.handleClick(eventName, destination)} href={`${destination}?utm_source=home?utm_medium=mobile`}>
          <Button width="100%" my="1" variant="outline" size="lg" variantColor="green" >{buttonName}</Button>
        </Link>
      </Box >
    )
  }
}


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

        <StatGroup>
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
        </StatGroup>

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
        <Flex align="center">
            <Flex bg="blue.50" size="150px" align="center" justify="center">
              <Text textAlign="center" bg="pink.50">
                Box 2
              </Text>
            </Flex>
          
          </Flex>

      </Dashboard>




    );
  }
}








