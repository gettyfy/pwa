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
    Date:any,
    LinkCard: string,
    PhoneNumber: number
    
    
}


const CustomerName = (props: ICustomerName) => {
    const {  customerName, iconName, Date, LinkCard, PhoneNumber } = props

    
    return (
        <CustomerStyle>
        <Link to ={LinkCard}>
        <Flex flexDirection="row" mt="3">
           
            <Avatar name={iconName} src="https://bit.ly/code-beast" />
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
