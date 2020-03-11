import React from 'react';
import styled from '@emotion/styled'
import { Flex, Stack, Box, Avatar, AvatarBadge, Stat, StatNumber, StatHelpText, Text, StatGroup, Heading, Icon, Divider, } from '@chakra-ui/core'
// import * as Analytics from '/imports/ui/analytics';
import { ActionCard, ActionCardRow, TransactionList } from '/imports/ui/components/'


const Dashboard = styled.main`
  display: flex;
  flex-direction: column;
`

const DashboardStat = styled(StatGroup)`
  display: flex;
  justify-content: space-between;
  text-align: center;
`


interface IBreakLayout {
  marginT?: string,
  theme?: { custom: { defaultBox: string } }
}
const BreakLayout = styled.section<IBreakLayout>`
  padding: 0;
  margin-top: ${props => props.marginT ? props.marginT : '1.5rem'};
  margin-left: calc(-${ props => props.theme.custom.defaultBox});
  margin-right: calc(-${ props => props.theme.custom.defaultBox});
`



export default class Hello extends React.Component {
  render() {
    return (
      <Dashboard>

        <Box d="flex" my="3" mb="8" alignItems="center" justifyContent="space-between">
          <Stack>
            <p>Good Afternoon,</p>
            <Heading as="h3" size="lg">Kofi Andrew</Heading>
          </Stack>

          <Stack>
            <Avatar name="Friend" />
          </Stack>
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
        <BreakLayout>
          <Box background="white" p="4" pt="0" borderBottom="1px" borderTop="1px" borderColor="gray.100">

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
                iconColor="blue.600"
                name="plus-square"
              />
            </ActionCardRow>


            <ActionCardRow>
              <ActionCard
                cardLink="/signup"
                cardBg="#EDE4FF"
                cardHeading="Send a Reminder"
                cardSubHeading="Pulse"
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
                iconColor="green.600"
              />
            </ActionCardRow>
          </Box>
        </BreakLayout>


        {/* Added a divider */}
        <Box justifyContent="space-between" mt="1" mb="0">
          <Divider borderColor="grey.200" />
        </Box>

        <Flex flexDirection="row">
          <Box pr="2">
            <Icon name="phone" /></Box>
          <Box pr="1">
            <Text fontSize="15px" color="tomato" mr="2">
              ACTION REQUIRED </Text>
          </Box>
        </Flex>

        <Box justifyContent="space-between">
          <Divider borderColor="grey.200" />
        </Box>



        {/* //Individual customer list */}
        <BreakLayout marginT=".5rem">
          <Box background="white" p="4" pb="6" borderBottom="1px" borderTop="1px" borderColor="gray.100">
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
              analyticName="Click Transaction item"
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
              analyticName="Click Transaction item"
            />
          </Box>
        </BreakLayout>

      </Dashboard>


    )
  }
}







