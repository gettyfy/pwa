import React from 'react';
import { Icon, Box, Heading, Stack, Stat, StatNumber, StatHelpText, StatLabel, Flex, Text, StatGroup, Divider } from "@chakra-ui/core";
import styled from '@emotion/styled'


const StyledReview= styled.main`
  display: flex;
  flex-direction: column;
`

const ReviewStat = styled(StatGroup)`
  display: flex;
  justify-content: space-between;
  text-align: center;

`


export default class review extends React.Component {
    render() {
        return (
            <StyledReview>
                <Box>
                    <Icon name="arrow-back" size="24px" />
                </Box>

                <Stack spacing={3} mt="5">
                    <Heading as="h3" size="lg">Review Request </Heading>
                    
                </Stack>

                <Stat>
                  <StatLabel>TRANSACTION SUMMARY</StatLabel>
                    <Flex flexDirection="row" mt="10">
                    <StatNumber>GHC9.00</StatNumber>
                    <Box mt="2" p="2" >
                        <Text fontSize="xs" color="tomato">In Debt</Text>
                        </Box>
                    </Flex>
                    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat>

                <ReviewStat mt="10">
                    <Stat>
                        <Icon name="download" size="24px" />
                        <StatHelpText>
                            AGREEMENT DOC
              </StatHelpText>
                    </Stat>

                    <Stat>
                        <Icon name="calendar" size="24px" />
                        <StatHelpText>
                            REMINDER LOG
              </StatHelpText>
                    </Stat>
                    <Stat>
                        <Icon name="copy" size="24px" />
                        <StatHelpText>
                            PAYMENT PLAN
              </StatHelpText>
                    </Stat>
                </ReviewStat>

                <Divider />

                <Box>
                    <Text fontSize="xs">In love with React & Next</Text>



                </Box>
                <



            </StyledReview>


        )
    }
}