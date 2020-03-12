import React from 'react';
import { Icon, Box, Flex, Text } from "@chakra-ui/core";
import styled from '@emotion/styled'
import { InvoiceList, InvoiceRow } from '/imports/ui/components/'


const StyledInvoice = styled.main`
  display: flex;
  flex-direction: column;
`


export default class Invoice extends React.Component {
    render() {
        return (
            <StyledInvoice>
                <Box>
                    <Icon name="arrow-back" size="24px" />
                </Box>

                <Flex direction="row" mt="10">
                <Box width="35%">
                    <Text fontSize="sm" mr="20" mt="6">Customers</Text>
                </Box>
                <Box>
                    <Text fontSize="sm" mt="6" >Amount</Text>
                </Box>
                </Flex>

                <InvoiceRow>
                    <InvoiceList
                    customerName="Joe Bimond"
                    amount="GHC 200"
                    date=" 12 Jan 2020"
                    link="path.workspace.createTransaction"
                         
                    />
                    <InvoiceList
                        customerName="Joe Bimond"
                        amount="GHC 200"
                        date=" 12 Jan 2020"
                        link="path.workspace.createTransaction"

                    />

                    <InvoiceList
                        customerName="Joe Bimond"
                        amount="GHC 200"
                        date=" 12 Jan 2020"
                        link="path.workspace.createTransaction"

                    />



               

                </InvoiceRow>
            </StyledInvoice>


        )
    }
}