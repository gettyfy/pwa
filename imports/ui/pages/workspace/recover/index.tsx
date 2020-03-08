import React from 'react'
import styled from '@emotion/styled'
import { Box, Icon } from '@chakra-ui/core'


const StyledRecord = styled.main`
  display: flex;
  flex-direction: column;
`


export default class Record extends React.Component {
  render() {
    return (
      <StyledRecord>
        <Box>
          <Icon name="arrow-back" size="24px" />
          <h1>Recover Me</h1>
        </Box>



      </StyledRecord>


    )
  }
}
