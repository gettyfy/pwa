import React from 'react';
import styled from '@emotion/styled'
import path from '/imports/ui/router'
import { withTracker } from 'meteor/react-meteor-data'
import { Flex, Stack, Box, Avatar, Stat, StatNumber, StatHelpText, Text, StatGroup, Heading, Icon, Spinner, StatArrow } from '@chakra-ui/core'
// import * as Analytics from '/imports/ui/analytics';
import { ActionCard, ActionCardRow, StatusText, PageHeader, TransactionList } from '/imports/ui/components/'
import { greeting, formatNumber } from '/imports/lib/formatter'
import { Accounts } from 'meteor/accounts-base'
import { Transactions, Customers } from '/imports/api/collections'
import { Loader } from '/imports/lib/loader'



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



class DashboardPage extends React.Component {


  render() {
    console.log(this.props)
    const { earnings, customersCount, user } = this.props

    if (!this.props.user) {
      return (
        <Flex align="center" justify="center" margin="auto">
          <Loader />
        </Flex>
      )
    }
    return (
      <Dashboard>

        <PageHeader useHeader />
        <Box d="flex" my="1" mb="8" alignItems="center" justifyContent="space-between">
          <Stack>
            <p>{greeting()}</p>
            <Heading as="h3" size="lg">{user.profile.name}</Heading>
          </Stack>

          <Stack>
            <Avatar size="md" name={user.profile.name} />
          </Stack>
        </Box>

        <DashboardStat>
          <Stat>
            <StatNumber>{this.props.dealsCount}</StatNumber>
            <StatHelpText>
              DEALS
              </StatHelpText>
          </Stat>

          <Stat>
            <StatNumber>{customersCount}</StatNumber>
            <StatHelpText>
              CUSTOMERS
              </StatHelpText>
          </Stat>
          <Stat>
            {/* Add dummy data for Payments overdue */}
            <StatNumber>{this.props.dealsCount - 2}</StatNumber>
            <StatHelpText>
              PAYMENTS DUE
              </StatHelpText>
          </Stat>
        </DashboardStat>

        {/* Earnings Section ---- */}
        <Flex justify="space-between" mt="10">

          <Stack spacing={3}>
            <Heading as="h3" size="lg">
              Expected Earnings
            </Heading>
            <StatusText fsize="12px">Total Collected</StatusText>
          </Stack>

          <Stack>
            <Heading as="h2" size="lg">
              {`₵ ${formatNumber(earnings.expected)}`}
            </Heading>
            <StatusText fsize="14px">
              <StatArrow type="increase" />
              {`₵ ${formatNumber(earnings.collected)}`}
            </StatusText>
          </Stack>
        </Flex>


        {/* A row can house only two ActionCardRow */}
        <BreakLayout>
          <Box background="white" p="4" pt="0" borderBottom="1px" borderTop="1px" borderColor="gray.100">

            <ActionCardRow>
              <ActionCard
                cardLink={path.workspace.createCustomer}
                cardBg="#FFEAE9"
                cardHeading="Add a Customer"
                cardSubHeading="Profile"
                analyticName="Profile"
                name="edit"
                iconColor="red.500"
              />

              <ActionCard
                cardLink={path.workspace.createTransaction}
                cardBg="#E3EDFF"
                cardHeading="Create a Transaction"
                cardSubHeading="Record"
                analyticName="Create Record"
                iconColor="blue.600"
                name="plus-square"
              />
            </ActionCardRow>


            <ActionCardRow>
              <ActionCard
                cardLink={path.workspace.remind}
                cardBg="#EDE4FF"
                cardHeading="Send a Reminder"
                cardSubHeading="Quick reminder"
                analyticName="Create Reminder"
                name="repeat-clock"
                iconColor="purple.500"
              />

              <ActionCard
                cardLink={path.workspace.recovery}
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
        <Box my="2" mt="3">
          <Flex flexDirection="row" color="red.500" >
            <Stack isInline spacing="2">
              <Icon name="drag-handle" color="red.500" mt="1" />
              <Heading as="h3" size="sm" lineHeight="24px" pt="1"> ACTION REQUIRED </Heading>
            </Stack >
          </Flex>
        </Box>


        {/* //Individual customer list */}
        <BreakLayout marginT=".5rem">
          <Box background="white" p="4" pb="6" pt="0" borderTop="1px" borderColor="gray.100">
            <TransactionList
              customerStatus="10 days to overdue"
              customerName="Bukola Saraki"
              amount="GHC233"
              paymentStatus="PAID"
              overdueAmount="GHC346"
              overdueStatus="OVERDUE"
              cardLink="/transactions"
              iconName="chevron-right"
              iconSize="24px"
              analyticName="Click Transaction item"
            />
            <TransactionList
              customerStatus="10 days to overdue"
              customerName="Cory Henry"
              amount="GHC233"
              paymentStatus="PAID"
              overdueAmount="GHC346"
              overdueStatus="OVERDUE"
              cardLink="/transactions"
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



export default withTracker(() => {
  // const id = Accounts.userId()
  let collectedEarnings: number = 0;
  let expectedEarnings: number = 0;

  // calculate overdue sum based on amountDue
  Transactions.find({}, { fields: { amountPaid: 1, amountDue: 1 } }).fetch().forEach((arr) => expectedEarnings += parseFloat(arr.amountDue))
  Transactions.find({}, { fields: { amountPaid: 1, amountDue: 1 } }).fetch().forEach((arr) => collectedEarnings += parseFloat(arr.amountPaid))

  return {
    user: Accounts.user(),
    dealsCount: Transactions.find().count(),
    customersCount: Customers.find().count(),
    payments: Transactions.find({ amountPaid: { $in: ["100"] } }).fetch(),
    earnings: {
      collected: collectedEarnings,
      expected: expectedEarnings
    }
  };
})(DashboardPage);







