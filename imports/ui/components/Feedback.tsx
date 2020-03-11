import React from 'react';
import { Box, Icon } from '@chakra-ui/core';
import { LinkButton } from '/imports/ui/components'




interface IFeedback {
    children: any,
    message: string,
    buttonName: string,
    iconName: string | any,
    buttonLink: string
    
}


export const PositiveFeedback: React.FC<IFeedback> = (props) => {
    const { iconName, message, buttonLink, buttonName, ...rest } = props


    
    return (
        <Box p={4}>

        <Icon name="arrow-back" size="24px" />

        <Box height="6rem"></Box>
        

        <Box mb="20" marginLeft="10%" alignItems="center">
        <Icon mb="10" name={iconName} marginLeft="25%" size="6rem" color="green.500" />
        <strong><h1>{message}</h1>
            </strong>
        </Box>
            <LinkButton buttonLink={buttonLink} buttonName={buttonName} analyticName="Verify" buttonColor="green.500" color="#FFF" {...rest} {...props}/>
        </Box>
        

      
        
    
    )
};
