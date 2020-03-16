import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Avatar, Text,  Flex,StatHelpText, Box } from '@chakra-ui/core'




const CustomerStyle = styled.section`
flex-direction: row;
align-items: center;
`

interface ICustomerName {
    customerName: string,
    iconName: string,
    date?: Date,
    LinkCard: string,
    PhoneNumber?: number,
    [key:string]: any
    
    
}


const CustomerName = (props: ICustomerName) => {
    const {  customerName, iconName, date, LinkCard, PhoneNumber } = props

    
    return (
        <CustomerStyle>
        <Link to ={LinkCard}>
        <Flex flexDirection="row" mt="3">
           
            <Avatar name={customerName} size="sm" />
             <Text fontSize="md" mt="3" ml="2">{customerName}</Text>
             <Box mt="3" ml="20">
            <StatHelpText>{PhoneNumber}</StatHelpText>
            </Box>
           
        </Flex>
        </Link>
        </CustomerStyle>


    )
}


export { CustomerStyle, CustomerName}
