import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import path from '/imports/ui/router'

import { Box } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, TextAreaField, PageHeader, FormikForm } from '/imports/ui/components'
import { Meteor } from 'meteor/meteor';


const Reason: React.FunctionComponent = (props: any) => {
    const history = useHistory();
    

    interface IReasonInterface {
        itemName: string,
        quantity: string,
        price: string,
        amountPaid: string,
        balance: string,
        [key: string]: string
    }

        const init: IReasonInterface = {
        itemName: "",
        quantity: "",
        price: "",
        amountPaid: "",
        amount: "",
        balance: "",
    }



    const handleSubmit = async (values: IReasonInterface) => {
        await props.updateState(values)
        console.log(values)
       await Meteor.call('transaction.insert', values)
        history.push(`${path.workspace.recovery}/review`)
    }





    return (
        <Box p={4}>
            <PageHeader title="Escalate" subTitle="Debt recovery agents can help you" />

            <Formik
                initialValues={init}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        handleSubmit(values)
                        actions.setSubmitting(false);
                    }, 300);
                }}
            >
                {(props: FormikProps<any>) => (
                    <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="NEXT">
                        <InputField label="Price" placeholder="C700" name="price" validate={Validator.isNumeric} />
                        <InputField label="Amount to recover" placeholder="C300" name="amount" validate={Validator.isNumeric} />
                        <TextAreaField label="Your reason" placeholder="Why do you want to escalate?" name="reason" />
                       

                    </FormikForm>
                )}
            </Formik>


        </Box>
    );
}

export default Reason