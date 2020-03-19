import React from 'react';
import { useHistory } from 'react-router-dom'
import { Icon, Box, Heading, Stack, Stat, StatNumber, StatHelpText, StatLabel, Flex, Text, StatGroup, Divider } from "@chakra-ui/core";
import styled from '@emotion/styled'
import { FormButton, SummaryList, SummaryRow, PageHeader } from '/imports/ui/components'
import Path from '/imports/ui/router';
import { Meteor } from 'meteor/meteor'



const StyledReview = styled.main`
  display: flex;
  flex-direction: column;
  background-color: inherit;
`

const ReviewStat = styled(StatGroup)`
  display: flex;
  justify-content: space-between;
  text-align: center;

`


const Review = (props) => {
  const history = useHistory()

  console.log(props)

  const handleSubmit = () => {
    Meteor.call('transaction.insert', props.data)
    history.push(`${Path.workspace.createTransaction}/success`)
  }

  return (

    <StyledReview>

      <PageHeader useHeader title="Review" subTitle="Review this transaction" />
      <Box bg="#F3F5FD">
        <Flex flexDirection="row" mt="10">
          <Box>

          </Box>
          <Box ml="3">
            <Heading as="h3" size="lg">Review Request </Heading>
          </Box>

        </Flex>
        <Stat>
          <StatLabel>TRANSACTION SUMMARY</StatLabel>
          <Flex flexDirection="row" mt="2">
            <StatNumber>GHC900.00</StatNumber>
            <Box mt="2" p="2" >
              <Text fontSize="xs" color="red.500">In Debt</Text>
            </Box>
          </Flex>
          <Flex flexDirection="row" >
            <Box mr="2" >
              <Icon name="calendar" size="13px" />
            </Box>

            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Flex>
        </Stat>



        {/* <Box bg='tomato' /> */}
        <ReviewStat mt="10">
          <Stat>
            <Icon name="download" size="15px" color="#4EB191" />
            <StatHelpText>
              AGREEMENT DOC
              </StatHelpText>
          </Stat>

          <Stat>
            <Icon name="calendar" size="15px" color="#4EB191" />
            <StatHelpText>
              REMINDER LOG
              </StatHelpText>
          </Stat>
          <Stat>
            <Icon name="copy" size="15px" color="#4EB191" />
            <StatHelpText>
              PAYMENT PLAN
              </StatHelpText>
          </Stat>
        </ReviewStat>
      </Box>


      <Divider />

      <Flex flexDirection="row">
        <Box mr="40">
          <Text fontSize="xs">Customer Summary</Text>
        </Box>
        <Box ml="10" >
          <Icon name="chevron-down" size="24px" />
        </Box>
      </Flex>

      <Divider />



      {/* Customer info */}
      <SummaryRow>
        <SummaryList
          name="Evans Dabo"
          phone="020 747 475"
          email="me@gmail.com"
          location="22 Aluguntugui East legon Accra"
          iconName="view"
          iconSize="15px"
        />



      </SummaryRow>



      {/* Guarantor Info */}
      <Flex flexDirection="row" mt="10">
        <Box mr="40">
          <Text fontSize="xs">Guarantor Info</Text>
        </Box>
        <Box ml="10">
          <Icon name="chevron-down" size="24px" />
        </Box>
      </Flex>

      <Divider />


      <Flex flexDirection="column">
        <Flex flexDirection="row">
          <Box>
            <Icon name="view" size="15px" />

          </Box>
          <Box ml="2" mt="1">
            <Text fontSize="xs">Evans Boateng</Text>
          </Box>
        </Flex>

        <Flex>
          <Box>
            <Icon name="phone" size="12px" />

          </Box>
          <Box ml="2" mt="1">
            <Text fontSize="xs">020 844 9872</Text>
          </Box>
        </Flex>

        <Flex>
          <Box>
            <Icon name="at-sign" size="12px" />

          </Box>
          <Box ml="2" mt="1">
            <Text fontSize="xs">me@gmail.com</Text>
          </Box>
        </Flex>

      </Flex>





      {/* Button */}
      <Box mt="10">
        <FormButton buttonName="CREATE TRANSACTION" analyticName="Verify" buttonColor="#0B69FF" color="#FFF" handleAction={() => handleSubmit()} />
      </Box>

    </StyledReview>
  )
}


export default Review