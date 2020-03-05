import React from 'react';
import styled from '@emotion/styled'
import { Box as ChakraBox } from '@chakra-ui/core';
import * as Analytics from '/imports/ui/analytics';



const Box = styled(ChakraBox)`
    /* width: 16.8rem; */
    display: block;
    width: 100%;
    height: ${(props) => props.theme.custom.buttonHeight};
`


interface IButton {
    analyticName: string, 
    buttonName: string,
    handleAction: Function,
    buttonColor?: string,
    color: string,
    bg: string,
    border: string,
    borderColor: string,
    children?: any
}


const FormButton = (props: IButton) => {
    const { analyticName, handleAction, borderColor, buttonColor, buttonName, color, border} = props

    const handleClick = (analyticName: string): any => {
        // we will write the handle analytics here
        console.log("console me", analyticName, handleAction)


        Analytics.track(analyticName, {
            component: `Click LinkTo${buttonName}`
        })
        handleAction && handleAction()
    }
    return (
        <Box as="button" width="16.5rem" rounded="0" bg={buttonColor || 'blue.500'} size="lg" border={border} borderColor={borderColor} color={color} px={4} h={8} {...props} onClick={() => handleClick(analyticName)}>
        {buttonName}
        </Box>
    )
}


// export the components as modules to be resuable by other component
export default FormButton