import React from 'react';
import { Icon, Box, Heading, Tabs, TabList, Tab, TabPanel, TabPanels, Avatar, Text, Flex } from "@chakra-ui/core";
import styled from '@emotion/styled'
import { FormButton } from '/imports/ui/components'
import { CustomerName, Customer } from '/imports/ui/components/CustomerName';
import { PageHeader, BreakLayout, TransactionList } from '/imports/ui/components'



const StyledTransaction = styled.main`
  display: flex;
  flex-direction: column;
`


export default class Transaction extends React.Component {
  render() {
    return (
      <StyledTransaction>
        <PageHeader title="Transactions" />

        {/* Button */}
        <Box my="2">
          <FormButton buttonName="CREATE NEW TRANSACTION" analyticName="Verify" buttonColor="#0B69FF" color="#FFF" handleAction={() => handleSubmit()} />
        </Box>

        <Box mt="10">
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Paid</Tab>
              <Tab>Unpaid</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CustomerName
                  customerName="John Azumah"
                  iconName="Christian Nwamba"
                  Date="15 Feb 2020"
                />
                <CustomerName
                  customerName="John Azumah"
                  iconName="Christian Nwamba"
                  Date="11 April 2020"
                />
                <CustomerName
                  customerName="John Azumah"
                  iconName="Christian Nwamba"
                  Date="30 May 2020"
                />
              </TabPanel>

              {/* Second Tab Panel` */}
              <TabPanel>

                <TransactionList
                  analyticName="View a Transaction"
                  customerStatus="10 days to overdue"
                  customerName="Evans Boateng"
                  amount="GHc233"
                  paymentStatus="PAID"
                  overdueAmount="GHC346"
                  overdueStatus="OVERDUE"
                  cardLink="/signup"
                  iconName="chevron-right"
                  iconSize="24px"
                />

                <TransactionList
                  analyticName="View a Transaction"
                  customerStatus="10 days to overdue"
                  customerName="Evans Boateng"
                  amount="GHc233"
                  paymentStatus="PAID"
                  overdueAmount="GHC346"
                  overdueStatus="OVERDUE"
                  cardLink="/signup"
                  iconName="chevron-right"
                  iconSize="24px"
                />


              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

      </StyledTransaction>


    )
  }
}