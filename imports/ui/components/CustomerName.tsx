import React from 'react';
import styled from '@emotion/styled'
import { Avatar, Text,  Flex,StatHelpText, Box } from '@chakra-ui/core'




const Customers = styled.section`
flex-direction: row;
align-items: center;
`

interface ICustomerName {
    customerName: string,
    iconName: string,
    Date:any
    
    
}


const CustomerName = (props: ICustomerName) => {
    const {  customerName, iconName, Date } = props

    
    return (

        <Flex flexDirection="row" mt="3">
            <Avatar name={iconName} src="https://bit.ly/code-beast" />
             <Text fontSize="md" mt="3" ml="2">{customerName}</Text>
             <Box mt="3" ml="20">
            <StatHelpText>{Date}</StatHelpText>
            </Box>
            
        </Flex>


    )
}


export { Customers, CustomerName}
