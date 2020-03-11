import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Flex, Box, Heading, Text, StatNumber, Icon } from '@chakra-ui/core'



const InvoiceRow= styled.main`
  display: flex;
  flex-direction: column;
`
const StatusText = styled(Text)`
    margin: 0;
    padding: 0;
    font-size: .65rem;
    line-height: 19px;
    text-transform: uppercase;
`

interface IInvoiceList {      
//   analyticName: string,
  customerName: string,
  date: any,
  amount: any,
  link: string,
  children?: any
}




const InvoiceList: React.FC<IInvoiceList> = (props) => {
    const {  customerName, date, amount,link } = props

    // const handleClick = (analyticName: string): any => {
    //     // we will write the handle analytics here
    //     Analytics.track(analyticName, {
    //         action: `Click LinkTo ${}`
    //     })

    
 return(
        
        <Flex direction="row" mt="10" alignItems="center">
            <Box width="30%" >
        <Heading as="h5" fontSize="sm">{customerName}</Heading>
                <StatusText>{date}</StatusText>
            </Box>
        <StatNumber mr="10px">{amount}</StatNumber>

            <Text fontSize="xs" color="red.500" mr="18px" ml="30px">RESOLVE</Text>
                <Link to={link}>
            <Icon name="chevron-right" size="19px" />
            </Link>
            
            </Flex>

            )

            }



//  export the components as modules to be resuable by other component
export { InvoiceList, InvoiceRow}