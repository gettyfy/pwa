import { useHistory } from 'react-router-dom';
import React from 'react'
import path from '/imports/ui/router'

import { Box, Stack } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, SelectField, PageHeader, FormikForm, SignatureField } from '/imports/ui/components'
import { Meteor } from 'meteor/meteor';


const PaymentPlan: React.FunctionComponent = (props: any) => {
    const history = useHistory();



    interface IPaymentPlanInterface {
        frequency: string,
        startDate: string,
        dueDate: string,
        agreementTemplate: string,
        signature: string,
        [key: string]: string
    }

    const init: IPaymentPlanInterface = {
        frequency: "monthly",
        startDate: "",
        dueDate: "",
        agreementTemplate: "default",
        signature: ""


    }




    const handleSubmit = async (values: IPaymentPlanInterface) => {
        await props.updateState(values)
        // console.log(values)
        history.push(`${path.workspace.createTransaction}/review`)
    }




    return (
        <Box p={4}>
            <PageHeader title="Payment Plan" subTitle="" />

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
                        <SelectField label="Frequency" name="frequency" validate={Validator.isRequired} options={["Monthly"]} />
                        <InputField label="Start Date" placeholder="Start" type="date" name="startDate" validate={Validator.isRequired} />
                        <InputField label="End Date" placeholder="End" type="date" name="dueDate" validate={Validator.isRequired} />

                        <Box>
                            <SelectField label="" name="agreementTemplate" validate={Validator.isRequired} options={["Default Template"]} />
                        </Box>



                        <SignatureField name="signature" validate={Validator.isSignature} />




                    </FormikForm>
                )}
            </Formik>


        </Box>
    );
}

export default PaymentPlan