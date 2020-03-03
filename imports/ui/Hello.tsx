import React, { ReactComponentElement } from 'react';
import { Button, Link, Flex, Stack, Box, Avatar, AvatarBadge } from '@chakra-ui/core'
// import { Link } from '
import * as Analytics from '/imports/ui/analytics';

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
      <div>
        <Box d="flex" my="6" flexDirection="column" alignItems="center" justifyContent="center">
          <Avatar name="Friend" >
            <AvatarBadge size="1.25em" bg="green.500" />
          </Avatar>
          Hello Friend
        </Box>


      </div>
    );
  }
}
