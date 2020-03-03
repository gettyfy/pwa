import React from 'react';
import { Button, Link, Box } from '@chakra-ui/core'
import * as Analytics from '/imports/ui/analytics';

interface ITrackedClick {
    destination: string,
    linkName: string,
    eventName: string
}

export default class ButtonLink extends React.Component<ITrackedClick> {
    handleClick = (eventName: string, destination: string) => {
        Analytics.track(eventName, { attr: destination })
    }
    render() {
        const { eventName, destination, linkName } = this.props;
        return (
            <Box>
                <Link onClick={() => this.handleClick(eventName, destination)} href={`${destination}`}>
                    <Button width="100%" my="1" variant="outline" size="lg" variantColor="green" >{linkName}</Button>
                </Link>
            </Box>
        )
    }
}


export class SimpleLink extends React.Component<ITrackedClick> {
    handleClick = (eventName: string, destination: string) => {
        Analytics.track(eventName, { attr: destination })
    }
    render() {
        const { eventName, destination, linkName } = this.props;
        return (
            <Link onClick={() => this.handleClick(eventName, destination)} href={`${destination}?utm_source=honeysuckle?utm_medium=link`}>
                {linkName}
            </Link>
        )
    }
}