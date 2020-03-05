import React from 'react'
import { Box, Stack, Heading, Icon, Divider, Flex, Text} from '@chakra-ui/core'
import styled from '@emotion/styled'
import { CustomerList, TransactionList} from '/imports/ui/components'

const StyledRecover = styled.main`
  display: flex;
  flex-direction: column;
`

export default class recover extends React.Component{
  render(){
    return(
        <StyledRecover>
        <Box>
          <Icon name="arrow-back" size="24px" />
        </Box>
        <Stack spacing={3}>
          <Heading as="h1" size="2xl">
            Recover
         </Heading>
          <Box mt="6">
            <h6>Escalate a bad debt to a professional debt collector</h6>
          </Box>
          </Stack>

          <Flex  mt="40px">
          <Box mt="3">
            <Icon name="search" size="13px" />
        
          </Box>

          </Flex>

        <Flex FlexDirection="row" justify="space-between" mt="6">
         <Text fontSize="xs">Payment overdue</Text>
          <Icon name="drag-handle" size="13px" ml="20"/>
    
          {/* <Box justify="space-between">
            <Divider borderColor="grey.200" />
          </Box> */}
        </Flex>

        <TransactionList

          boxPadding="2"
          customerProfile="Sasuke Uchiha"
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
           boxPadding="2"
          customerProfile="Sasuke Uchiha"
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
         boxPadding="2"
          customerProfile="Sasuke Uchiha"
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
        boxPadding="2"
          customerProfile="Sasuke Uchiha"
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
          boxPadding="2"
          customerProfile="Sasuke Uchiha"
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



        </StyledRecover>

    )
  }
}