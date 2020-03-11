import React from 'react'
//import { Box, Icon} from '@chakra-ui/core'
import {PositiveFeedback } from '/imports/ui/components'



const Success: React.FunctionComponent = (props: any) => {


    return (

        // <Box p={4}>

        // <Icon name="arrow-back" size="24px" />

        // <Box height="6rem"></Box>
        

        // <Box mb="20" marginLeft="10%" alignItems="center">
        // <Icon mb="10" name="check-circle" marginLeft="25%" size="6rem" color="green.900" />
        // <strong><h1>A customer was created successfully.</h1>
        //     </strong>
        // </Box>

        // </Box>
         
   <PositiveFeedback message="A customer has been created successfully." iconName="check-circle" iconSize="6rem" buttonLink="/dashboard" buttonName="RETURN TO DASHBOARD"/>

       
    );
}

export default Success