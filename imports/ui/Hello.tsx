import React from 'react';
import styled from '@emotion/styled'
import { Flex, Stack, Box, Avatar, AvatarBadge, Stat, StatNumber, StatHelpText, Text, StatGroup, Heading, Icon, Divider,Avatar } from '@chakra-ui/core'
// import * as Analytics from '/imports/ui/analytics';
import { ActionCard, ActionCardRow } from './components'
import { TransactionList, CustomerList} from './components'


const Dashboard = styled.main`
  display: flex;
  flex-direction: column;
`

const DashboardStat = styled(StatGroup)`
  display: flex;
  justify-content: space-between;
  text-align: center;

`



export default class Hello extends React.Component {
  render() {
    return (
      <Dashboard>

        <Box d="flex" my="6" flexDirection="column" alignItems="center" justifyContent="center">
          <Avatar name="Friend" >
            <AvatarBadge size="1.25em" bg="green.500" />
          </Avatar>
          Hello Friend
        </Box>

        <DashboardStat>
          <Stat>
            <StatNumber>345</StatNumber>
            <StatHelpText>
              DEALS
              </StatHelpText>
          </Stat>

          <Stat>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              PAYMENT DUE
              </StatHelpText>
          </Stat>
          <Stat>
            <StatNumber>39</StatNumber>
            <StatHelpText>
              OVERDUE
              </StatHelpText>
          </Stat>
        </DashboardStat>

        {/* Earnings Section ---- */}
        <Flex justify="space-between" mt="10">

          <Stack spacing={3}>
            <Heading as="h3" size="lg">
              Earnings
            </Heading>
            <Text>Total Balance</Text>
          </Stack>

          <Stack>
            <Heading as="h1" size="lg">
              ₵ 65,430
          </Heading>
          </Stack>
        </Flex>


        {/* A row can house only two ActionCardRow */}

        <ActionCardRow>
          <ActionCard 
            cardLink="/login" 
            cardBg="#FFEAE9" 
            cardHeading="Add a Customer" 
            cardSubHeading="Profile" 
            analyticName="Profile" 
            name="edit" 
            iconColor="red.500" 
          />          

          <ActionCard 
            cardLink="/login" 
            cardBg="#E3EDFF" 
            cardHeading="Create a Transation" 
            cardSubHeading="Record" 
            analyticName="Create Record" 
            iconColor="blue.500" 
          />
          </ActionCardRow>


          <ActionCardRow>
            <ActionCard 
              cardLink="/signup" 
              cardBg="#EDE4FF" 
              cardHeading="Manage Pulse" 
              cardSubHeading="Remind" 
              analyticName="Create Reminder" 
              name="repeat-clock" 
              iconColor="purple.500" 
              />

            <ActionCard 
              cardLink="/signup" 
              cardBg="#E3FFEF" 
              cardHeading="Escalate Transaction" 
              cardSubHeading="Recover a Debt" 
              analyticName="Escalate Transaction" 
              name="unlock" 
              iconColor="green.800" 
              />
          </ActionCardRow>
              
              {/* Added a divider */}
          <Box justify="space-between" mt="6">
              <Divider borderColor="grey.200" />
            </Box>

            <Flex flexDirection="row">
              <Box pr ="2">
            <Icon name="phone"/></Box>
            <Box pr="1">
             <Text fontSize="15px" color="tomato" mr="2">
                 ACTION REQUIRED </Text>                        
                 </Box>
               </Flex>

               <Box justify="space-between">
              <Divider borderColor="grey.200" />
              </Box>

             {/* //Individual customer list */}
              <TransactionList

              boxPadding= "2"
               customerProfile= "Sasuke Uchiha"
                customerStatus ="10 days to overdue"
                customerName = "Evans Boateng"
                amount = "GHc233"
                paymentStatus ="PAID"
                overdueAmount ="GHC346"
                overdueStatus = "OVERDUE" >
                            

              </TransactionList>
              <TransactionList

              boxPadding= "2"
               customerProfile= "Sasuke Uchiha"
                customerStatus ="10 days to overdue"
                customerName = "Evans Boateng"
                amount = "GHc233"
                paymentStatus ="PAID"
                overdueAmount ="GHC346"
                overdueStatus = "OVERDUE" >
                            

              </TransactionList>

        </Dashboard>


    )
  }
}







