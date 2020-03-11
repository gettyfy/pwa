import React from 'react';
import styled from '@emotion/styled'
import { Box, Heading, Text, Flex as ChFlex } from '@chakra-ui/core'






const Item = styled.section`
flex-direction: row;
align-items: center;
`

interface IItem {
    analyticName: string,
    customerName: string,
    customerItem: string,
    amount: any,
    

}

const Flex = styled(ChFlex)`
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 1px solid #dddddd; */
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

const StatusText = styled(Text)`
    margin: 0;
    padding: 0;
    font-size: .65rem;
    line-height: 6px;
    text-transform: uppercase;
`

const LineDivider = styled.div`
    height: .8px;
    padding: 0px;
    margin: 0;
    margin-left: calc(-${ props => props.theme.custom.defaultBox});
    margin-right: calc(-${ props => props.theme.custom.defaultBox});
    background: #eee;
`

const ItemList = (props: IItem) => {
    const {  customerName, customerItem, amount } = props

   
        return (
                <Item>
                <Flex>
                 

                    <Box width="40%">
                        <StatusText>{customerItem}</StatusText>
                        <Heading as="h5" fontSize="sm">{customerName}</Heading>
                    </Box>

                    <Box width="20%">
                        <Heading as="h6" size="xs">{amount}</Heading>
                        {/* <Text fontWeight="bold" fontSize="xs" color="red.700">{overdueStatus}</Text> */}
                    </Box>

        
                </Flex>
                <LineDivider />
            
            </Item>


        )
    }

    // export the components as modules to be resuable by other component
    // export default CustomerList
    export { ItemList, Item }