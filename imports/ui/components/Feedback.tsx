import React from 'react';
import { Box, Icon } from '@chakra-ui/core';
import { LinkButton } from '/imports/ui/components'
import PropTypes from 'prop-types'




interface IFeedback {
    children?: any,
    message: string,
    buttonName: string,
    iconName: string | any,
    buttonLink: string,
    iconSize?: string

}

export const PositiveFeedback: React.FC<IFeedback> = (props) => {
    const { iconName, message, buttonLink, iconSize, buttonName, ...rest } = props
    return (
        <Box p={4}>

            <Box height="6rem"></Box>

            <Box mb="20" marginLeft="10%" alignItems="center">
                <Icon mb="10" name={iconName} marginLeft="25%" size={'6rem'} color="green.500" />
                <strong><h1>{message}</h1>
                </strong>
            </Box>
            <LinkButton buttonLink={buttonLink} buttonName={buttonName} analyticName="Complete Funnel" buttonColor="green.500" color="#FFF" {...rest} {...props} />
        </Box>

    )
};

PositiveFeedback.propTypes = {
    children: PropTypes.element,
    message: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    iconName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.any
    ]),
    iconSize: PropTypes.any
}
