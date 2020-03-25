import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { Box } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { PageHeader, FormikForm, TransactionSearchField } from '/imports/ui/components'
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
        history.push(`${Path.workspace.remind}/rules`)
    }

    // Use this function to trigger a Hide function for the Lists rendered before user begins a search
    const handleCustomerList = () => {
        console.log(list);
        showList(false)
    }




    return (
        <React.Fragment>
            <PageHeader title="Create a Transaction" subTitle="" />
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
                        <FormikForm isLoading={props.isSubmitting} analyticName="Search Customer" formProps={props} buttonName="Save" withIcon>
                            <TransactionSearchField onInput={handleCustomerList} placeholder="Type to find a transaction" name="transaction" label="Search Transaction" validate={Validator.isRequired} options={inputArr} />

                            {/* //Render a list of customers */}
                            {/* {list &&
                                <Box pt="3">
                                    {inputArr.map((val, index) => {
                                        return (
                                            <CustomerSearch
                                                key={[val.customerName, index].join('-')}
                                                customerName={val.customerName}
                                                phoneNumber={val.phonenumber}
                                                onClick={() => handleSubmit({ customer: val })}
                                            />

                                        )
                                    })}
                                </Box>
                            } */}

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