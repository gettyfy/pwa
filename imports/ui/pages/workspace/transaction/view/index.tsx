// import React, { Fragment } from 'react';
import React from 'react';
// import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { Stack, Text, Box, Flex } from "@chakra-ui/core";
import { LinkButton } from '/imports/ui/components'
import { withTracker } from 'meteor/react-meteor-data';
import { PageHeader } from '/imports/ui/components'

//imports for API call
import { Transactions } from '/imports/api/collections'
import path from '/imports/ui/router'


const StyledCustomers = styled.main`
  display: flex;
  flex-direction: column;
`

const LineDivider = styled.div`
    height: .8px;
    padding: 0px;
    margin: 0;
    margin-left: calc(-${ props => props.theme.custom.defaultBox});
    margin-right: calc(-${ props => props.theme.custom.defaultBox});
    background: #eee;
`


const TransactionView: React.FC = (props: any) => {


    console.log(props.transactions);
    return (
        <StyledCustomers>
            <PageHeader useHeader useTitle title="Transaction Details" />

            <Stack spacing={3}>

                <Text fontSize="md"><strong>NAME: </strong>{props.transactions ? props.transactions.customerName : ''}</Text>
                <Text fontSize="md"><strong>ADDRESS: </strong>{props.transactions ? props.transactions.customerAddress : ''}</Text>
                <Text fontSize="md"><strong>EMAIL: </strong>{props.transactions ? props.transactions.customerEmail : ''}</Text>
                <Text fontSize="md"><strong>PHONE: </strong>{props.transactions ? props.transactions.customerNumber : ''}</Text>
            </Stack>
            <LineDivider />


            <Box mt="6">
                <strong>Customer Info</strong>

            </Box>




            <Box mt="3">
                <Text fontSize="sm">This customer registerd on 12th February 2020 and is yet to pay this month's installment of GHC200 on 28th of March. Click the action below to schedule a reminder</Text>
            </Box>


            {/* <Box mt="10">
                 <FormButton buttonName="SEND A REMINDER" analyticName="Verify" buttonColor="#0B69FF" color="#FFF" handleAction={() => handleSubmit()} />
             </Box> */}
            <Box mt="10">
                <Flex direction="row" justify="space-between" alignItems="center">
                    <Box >
                        <LinkButton buttonLink={`${path.workspace.remind}/rules`} buttonName="Create Reminder" analyticName="SEND A REMINDER" buttonColor="#0B69FF" color="#FFF" />
                    </Box >

                    <Box >
                        <LinkButton buttonLink={`${path.workspace.createTransaction}/`} buttonName="Create Transaction" analyticName="" buttonColor="#0B69FF" color="#FFF" />
                    </Box >
                </Flex>
            </Box>
        </StyledCustomers>


    );
}









export default withTracker((props: any) => {
    const id = props.match.params.id;
    return {
        transactions: Transactions.findOne({ _id: id }),
    };
})(TransactionView);




