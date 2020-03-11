import React from 'react';
import { Icon, Box } from "@chakra-ui/core";
import styled from '@emotion/styled'
import { PageHeader } from '/imports/ui/components'



const StyledRecord = styled.main`
  display: flex;
  flex-direction: column;
`


export default class record extends React.Component {
  render() {
    return (
      <StyledRecord>
        <PageHeader useHeader />

      </StyledRecord>


    )
  }
}