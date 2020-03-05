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
          <Flex flexDirection="row" mt="10px" justify="space-between">
        <Box border="1px" borderRadius="md" borderColor="yellow" w="16%" h="59px">
          Card
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="16%" h="59px">
            Card
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="16%" h="59px">
            Card
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="16%" h="59px">
            Card
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="16%" h="59px">
            Card
          </Box>
        </Flex>
      </StyledRecord>


    )
  }
}