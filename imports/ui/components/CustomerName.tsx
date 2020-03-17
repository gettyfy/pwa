import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Avatar, Text, Icon, Flex, StatHelpText, Box, Heading } from '@chakra-ui/core'
import { StatusText } from '/imports/ui/components'




const CustomerStyle = styled.section`
flex-direction: row;
align-items: center;
justify-content: center;
`

interface ICustomerName {
    customerName: string,
    iconName: string | any,
    date?: Date,
    LinkCard: string,
    PhoneNumber?: number,
    [key: string]: any


}


const CustomerName = (props: ICustomerName) => {
    const { customerName, iconName, date, LinkCard, PhoneNumber } = props


    return (

        <Link to={LinkCard}>
            <Flex align="center" justify="space-between" direction="row" py="2" borderBottom="1px" borderColor="gray.100">

                <Box display="flex" flexDir="row" justifyContent="flex-start">
                    <Avatar name={customerName} size="sm" />
                    <Box flexDir="column" pl="3">
                        <Heading as="h4" size="sm">{customerName}</Heading>
                        <StatusText fsize=".75rem" >{PhoneNumber}</StatusText>
                    </Box>
                </Box>

                <Icon name={iconName} size="1rem" color="blue.500" {...props} />

            </Flex>
        </Link>


    )
}


export { CustomerStyle, CustomerName }
