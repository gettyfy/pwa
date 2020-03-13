import React from 'react'
//import { Box, Icon} from '@chakra-ui/core'
import { PositiveFeedback } from '/imports/ui/components'
import Path from '/imports/ui/router';



const Success: React.FunctionComponent = (props: any) => {


    return (

        <PositiveFeedback
            message="Your debt has been transferred to a debt recovery agent. You will be contacted soon."
            iconName="check-circle"
            iconSize="6rem"
            buttonLink={Path.root}
            buttonName="RETURN TO DASHBOARD" />
    );
}

export default Success