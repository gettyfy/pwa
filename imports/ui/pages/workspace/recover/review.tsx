import React from 'react';
import { Icon, Box, Heading, Stack, Stat, StatNumber, StatHelpText, StatLabel, Flex, Text, StatGroup, Divider } from "@chakra-ui/core";
import styled from '@emotion/styled'
import { FormButton } from '/imports/ui/components'

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
                <Flex flexDirection="row" mt="10">
                <Box>
                    <Icon name="arrow-back" size="24px" />
                </Box>
                <Box ml="3">
                 <Heading as="h3" size="lg">Review Request </Heading>
                 </Box>

                </Flex>
                <Stat>
                  <StatLabel>TRANSACTION SUMMARY</StatLabel>
                    <Flex flexDirection="row" mt="2">
                    <StatNumber>GHC9.00</StatNumber>
                    <Box mt="2" p="2" >
                        <Text fontSize="xs" color="tomato">In Debt</Text>
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
                        <Icon name="download" size="20px" />
                        <StatHelpText>
                            AGREEMENT DOC
              </StatHelpText>
                    </Stat>

                    <Stat>
                        <Icon name="calendar" size="20px" />
                        <StatHelpText>
                            REMINDER LOG
              </StatHelpText>
                    </Stat>
                    <Stat>
                        <Icon name="copy" size="20px" />
                        <StatHelpText>
                            PAYMENT PLAN
              </StatHelpText>
                    </Stat>
                </ReviewStat>
                

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

                    <Flex>
                    <Box>
                        <Icon name="calendar" size="12px" />

                    </Box>
                    <Box ml="2" mt="1">
                            <Text fontSize="xs">22 ALUGUNTUGUI STREET, IKEJA LEGON</Text>
                    </Box>
                    </Flex>
                </Flex>


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
                    <FormButton buttonName="SUBMIT FOR COLLECITION" analyticName="Verify" buttonColor="#0B69FF" color="#FFF" handleAction={() => handleSubmit()} />
                </Box>

            </StyledReview>


        )
    }
}