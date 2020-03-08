import React from 'react';
import { Icon, Box } from "@chakra-ui/core";
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


        
      </StyledRecord>


    )
  }
}