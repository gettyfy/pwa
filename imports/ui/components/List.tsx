import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Box, Stack, Avatar, Heading, Text, Icon, Flex as ChFlex } from '@chakra-ui/core'
import * as Analytics from '/imports/ui/analytics';


// const CustomerList = styled.section`
// flex-direction: row;
// align-items: center;
// `


interface ITransactionList {
    analyticName: string,
    customerName: string,
    customerStatus: string,
    itemName?: string,
    amount: any,
    paymentStatus: string,
    overdueAmount: string,
    overdueStatus: string,
    cardLink: string,
    iconName: string | any,
    iconSize: any,

}


const Flex = styled(ChFlex)`
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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


const TransactionList: React.FC<ITransactionList> = (props) => {
    const { analyticName, customerName, customerStatus, amount, paymentStatus, overdueAmount, overdueStatus, iconName, iconSize, cardLink } = props

    const handleClick = (analyticName: string): any => {

        // /we will write the handle analytics here
        Analytics.track(analyticName, {
            comp: "Transactions List Card"
        })
    }

    return (
        <Link to={cardLink} onClick={handleClick(analyticName)}>
            <Flex>
                <Box p="2" width="15%">
                    <Avatar size="sm" name={customerName} src="/" />
                </Box>

                <Box width="40%">
                    <StatusText>{customerStatus}</StatusText>
                    <Heading as="h5" fontSize="sm">{customerName}</Heading>
                </Box>

                <Box width="20%">
                    <Heading as="h6" size="xs">{amount}</Heading>
                    <Text fontSize="xs" color="green.600">{paymentStatus}</Text>
                </Box>

                <Box width="20%">
                    <Heading as="h6" size="xs">{overdueAmount}</Heading>
                    <Text fontWeight="bold" fontSize="xs" color="red.700">{overdueStatus}</Text>
                </Box>

                <Box width="5%">
                    <Stack isInline>
                        <Icon name={iconName} size={iconSize} />
                    </Stack>

                </Box>
            </Flex>
            <LineDivider />
        </Link>



    )
}



/**
 * Component for Transactions List
 */


interface ITransactionSearch extends ITransactionList {
    itemName?: string,
    amountPaid: string,
    amountDue: string
}


const TransactionSearch: React.FC<ITransactionSearch> = (props) => {
    const { analyticName, customerName, itemName, amountPaid, paymentStatus, amountDue, overdueStatus } = props

    const handleClick = (analyticName: string): any => {

        // /we will write the handle analytics here
        Analytics.track(analyticName, {
            comp: "Transactions Search Card"
        })
    }

    return (
        <>
            <Flex onClick={handleClick(analyticName)} {...props}>
                <Box width="55%">
                    <StatusText>{customerName}</StatusText>
                    <Heading as="h5" fontSize="sm">{itemName}</Heading>
                </Box>

                <Box width="20%">
                    <Heading as="h6" size="xs">{amountPaid}</Heading>
                    <Text fontSize="xs" color="green.600">{paymentStatus}</Text>
                </Box>

                <Box width="20%">
                    <Heading as="h6" size="xs">{amountDue}</Heading>
                    <Text fontWeight="bold" fontSize="xs" color="red.700">{overdueStatus}</Text>
                </Box>

                <Box width="5%">
                    <Stack isInline>
                        <Icon name="chevron-right" />
                    </Stack>

                </Box>
            </Flex>
            <LineDivider />
        </>
    )
}

// export the components as modules to be resuable by other component
// export default CustomerList
export { TransactionList, TransactionSearch }
