import React from 'react'
//import { Box, Icon} from '@chakra-ui/core'
import { PositiveFeedback } from '/imports/ui/components'
import Path from '/imports/ui/router';



const Success: React.FunctionComponent = () => {


    return (
        <PositiveFeedback
            message="A customer has been created successfully."
            iconName="check-circle"
            // iconSize="6rem"
            buttonLink={Path.workspace.remind}
            buttonName="SEND A REMINDER"
        />


    );
}

export default Success