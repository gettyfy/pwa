import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { Box, Heading } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { PageHeader, FormikForm, TransactionSearch, TransactionSearchField } from '/imports/ui/components'
import Path from '/imports/ui/router'

// API related imports
import { withTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Customers, Transactions } from '/imports/api/collections'
import { ITransaction } from '/imports/api/schema';

type CreateProps = {
    customers: ITransaction[],
    [key: string]: any
}

const Create: React.FunctionComponent<CreateProps> = (props) => {
    const history = useHistory();
    const [list, showList] = useState(true)
    const inputArr = props.transactions

    console.log(props);

    const authInit: { transaction: ITransaction } = {
        transaction: {}
    }

    const handleSubmit = async (values: ITransaction) => {
        await props.updateState(values)
        console.log(values)

        console.log(values)
        history.push(`${Path.workspace.remind}/rules`)
    }

    // Use this function to trigger a Hide function for the Lists rendered before user begins a search
    const handleCustomerList = () => {
        console.log(list);
        showList(false)
    }




    return (
        <React.Fragment>
            <PageHeader title="Send a Reminder" subTitle="" />
            <Box py={3}>
                <Formik
                    initialValues={authInit}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            handleSubmit(values)
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {(props: FormikProps<any>) => (
                        <FormikForm isLoading={props.isSubmitting} analyticName="Search Transaction" formProps={props} buttonName="NEXT" withIcon>
                            <TransactionSearchField onInput={handleCustomerList} placeholder="Type transaction info to search" name="transaction" label="Select a Transaction" validate={Validator.isRequired} options={inputArr} />

                            {/* //Render a list of customers */}
                            {list &&
                                <Box pt="3">
                                    <Heading fontWeight="bold" as="h4" size="sm">Recent Transactions</Heading>
                                    {inputArr.map((item, index) => {
                                        return (
                                            <TransactionSearch
                                                key={[item._id, index].join('-')}
                                                itemName={item.itemName}
                                                customerName={item.customer?.customerName}
                                                analyticName="search transaction"
                                                paymentStatus="PAID"
                                                amountPaid={`₵ ${item.amountPaid || 0}`}
                                                amountDue={`₵ ${item.amountDue || 0}`}
                                                overdueStatus="OVERDUE"
                                                onClick={() => handleSubmit({ transaction: item })}
                                            />

                                        )
                                    })}
                                </Box>
                            }

                        </FormikForm>
                    )}

                </Formik>


            </Box>
        </React.Fragment>
    );
}




export default withTracker(() => {
    Meteor.subscribe('transactions')
    return {
        customers: Customers.find().fetch(),
        transactions: Transactions.find().fetch()
    };
})(Create);