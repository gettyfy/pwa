import React from 'react';
import styled from '@emotion/styled'
import { Box, Stack,Avatar, Text,Icon , Flex} from '@chakra-ui/core'
import * as Analytics from '/imports/ui/analytics';


const CustomerList = styled.section`
flex-direction: row;
align-items: center;
`


interface ITransactionList {
    analyticName: string,
    customerName: string,
    customerStatus: string,
    amount: any,
    paymentStatus: string,
    overdueAmount: string,
    overdueStatus: string,
    boxPadding: number,
    customerProfile: any
}




const TransactionList= (props: ITransactionList) => {
    const { analyticName,boxPadding, customerProfile,customerName, customerStatus, amount,paymentStatus,overdueAmount,overdueStatus,iconName, iconSize} = props
    
    const handleClick = (analyticName: string): any => {

        // /we will write the handle analytics here
        Analytics.track(analyticName, {
            comp: "Dashboard Card"
        })
    }

    return(
        <Flex>
                 <Box p={boxPadding}>
                <Stack isInline>
                  <Avatar name={customerProfile} src="/" />
                </Stack>
                 </Box>

                <Box>
                    <Text fontSize="xs">{customerStatus}</Text>
                  <Text fontSize="xs">{customerName}</Text>
                </Box>

                <Box p={boxPadding}>
                    <Text fontSize="xs">{amount}</Text>
                    <Text fontSize="xs">{paymentStatus}</Text>
                </Box>

                <Box p={boxPadding}>
                    <Text fontSize="xs">{overdueAmount}</Text>
                    <Text fontSize="xs">{overdueStatus}</Text>

                </Box>

                <Box p={boxPadding} onClick={handleClick(analyticName)}>
                <Stack isInline>
                      <Icon name= {iconName} size={iconSize} />
                    </Stack>
                    
                </Box>
              </Flex>

               

    )
}

// export the components as modules to be resuable by other component
export default CustomerList
export {TransactionList}
