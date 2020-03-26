import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Box as ChakraBox, Button } from '@chakra-ui/core';
import * as Analytics from '/imports/ui/analytics';



const Box = styled(ChakraBox)`
    /* width: 16.8rem; */
    display: block;
    width: 100%;
    height: ${(props) => props.theme.custom.buttonHeight};
`

const StyledButton = styled(Button) <{ withIcon: boolean | undefined }>`
    border-radius: 3px;
    min-height: 54px;
    justify-content: ${(props) => props.withIcon ? 'space-between' : 'center'};
    align-content: center;
`


interface ISubmitButton {
    analyticName: string,
    children: any,
    isLoading: boolean,
    useSubmit?: boolean | "submit" | "button" | "reset" | undefined,
    buttonName: string,
    withIcon?: boolean | undefined
}

export const SubmitButton: React.FC<ISubmitButton> = (props) => {
    const { withIcon, isLoading, buttonName, ...rest } = props
    return (
        <StyledButton
            mt={10}
            withIcon={withIcon}
            variantColor="blue"
            type="submit"
            isLoading={isLoading}
            //@ts-ignore
            rightIcon={withIcon && "arrow-forward"}
            width="100%"
            {...rest}
        >
            {buttonName}
        </StyledButton>
    )
}


interface IButton {
    analyticName: string,
    buttonName: string,
    handleAction: Function,
    buttonColor?: string,
    color: string,
    type?: string,
    bg?: string,
    border?: string,
    borderColor?: string,
    children?: any
}


export const FormButton: React.FC<IButton> = (props) => {
    const { analyticName, type, handleAction, borderColor, buttonColor, buttonName, color, border } = props

    const handleClick = (analyticName: string): any => {
        // we will write the handle analytics here
        console.log("console me", analyticName, handleAction)
        Analytics.track(analyticName, {
            component: `Click LinkTo${buttonName}`
        })
        handleAction && handleAction()
    }
    return (
        <Box as="button" fontWeight="bold" type={type} width="16.5rem" rounded="0" bg={buttonColor || 'blue.500'} size="lg" border={border} borderColor={borderColor} color={color} px={4} h={8} {...props} onClick={() => handleClick(analyticName)}>
            {buttonName}
        </Box>
    )
}


interface ILinkButton {
    analyticName: string,
    buttonName: string,
    buttonLink: string,
    //handleAction: Function,
    buttonColor?: string,
    color?: string,
    bg?: string,
    border?: string,
    borderColor?: string,
    children?: any,
    //href: string
}


export const LinkButton: React.FC<ILinkButton> = (props) => {
    const { analyticName, borderColor, buttonColor, buttonLink, buttonName, color, border } = props

    const handleClick = (analyticName: string): any => {
        // we will write the handle analytics here
        console.log("console me", analyticName)
        Analytics.track(analyticName, {
            component: `Click LinkTo${buttonName}`
        })

    }
    return (
        <Link to={buttonLink}>
            <Box as="button" width="16.5rem" rounded="3px" bg={buttonColor || 'blue.500'} size="lg" border={border} borderColor={borderColor} color={color} px={4} h={8} {...props} onClick={() => handleClick(analyticName)}>
                <strong> {buttonName}</strong>
            </Box>
        </Link>
    )
}