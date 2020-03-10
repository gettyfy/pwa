import React from 'react';
import { Icon, Box, Heading, Stack  } from "@chakra-ui/core";
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

        <Stack spacing={3} mt="5">
        <Heading as="h3" size="lg">Record </Heading>
        <h6>Records of customers and transactions</h6>
        </Stack>

      
      </StyledRecord>


    )
  }
}