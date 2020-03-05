import React from 'react';
import { Icon, Box, Stack, Heading, Flex } from "@chakra-ui/core";
import styled from '@emotion/styled'


const StyledRecord = styled.main`
  display: flex;
  flex-direction: column;
`


export default class record extends React.Component {
  render() {
    return (
      <StyledRecord>
        <Box>
          <Icon name="arrow-back" size="24px" />
        </Box>
        <Stack spacing={3}>
         <Heading as="h1" size="2xl">
          Create a Reminder
         </Heading>
         <Box mt="6">
          <h6>Select Channels</h6>
          </Box>
          </Stack>

            {/* Channels */}
          <Flex flexDirection="row" mt="10px" justify="space-between" textAlign="center">
        <Box border="1px" borderRadius="md" w="25%" h="59px" mr="3" style={{borderColor: "blue"}}>
            <Box mt="3">
              <Icon name="phone" size="24px" />
            </Box>
           
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="25%" h="59px" mr="3" style={{ borderColor: "blue" }}>
            <Box mt="3">
              <Icon name="email" size="24px" />
            </Box>
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="25%" h="59px" mr="3" style={{ borderColor: "blue" }}>
            <Box mt="3">
              <Icon name="chat" size="24px" />
            </Box>
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="25%" h="59px" style={{ borderColor: "blue" }}>
            <Box mt="3">
              <Icon name="at-sign" size="24px" />
            </Box>
          </Box>
        </Flex>

            Set reminders
            


      </StyledRecord>


    )
  }
}