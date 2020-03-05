import React from 'react';
import { Icon, Box } from "@chakra-ui/core";


const Record = styled.main`
  display: flex;
  flex-direction: column;
`




export default class record extends React.Component {
    render() {
      return (
            <Record>
                <Box>
                <Icon name="arrow-back" size="24px" />

                </Box>



            </Record>


      )
    }
}