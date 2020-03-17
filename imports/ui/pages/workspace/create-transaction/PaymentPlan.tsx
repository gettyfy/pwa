import { useHistory } from 'react-router-dom';
import React from 'react'
import path from '/imports/ui/router'

import { Box } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, SelectField, PageHeader, FormikForm, SignatureField } from '/imports/ui/components'
import { Meteor } from 'meteor/meteor';


const PaymentPlan: React.FunctionComponent = (props: any) => {
    const history = useHistory();
    //const [total, setTotal] = useState(330);




    interface IPaymentPlanInterface {
        itemName: string,
        quantity: string,
        price: string,
        amountPaid: string,
        balance: string,
        [key: string]: string
    }

    const init: IPaymentPlanInterface = {
        itemName: "",
        quantity: "",
        price: "",
        amountPaid: "",
        balance: "",
    }




    const handleSubmit = async (values: IPaymentPlanInterface) => {
        await props.updateState(values)
        console.log(values)
        await Meteor.call('transaction.insert', values)
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
                        <SelectField label="Frequency" name="select" validate={Validator.isRequired} options={["Monthly", "Weekly", "Bi-weekly"]} />
                        <SelectField label="Duration" name="select" validate={Validator.isRequired} options={["1 month", "3 months", "6 months"]} />
                        <InputField label="Start Date" placeholder="St" type="date" name="quantity" validate={Validator.isRequired} />
                        <InputField label="End Date" placeholder="C700" type="date" name="price" validate={Validator.isRequired} />
                        <SignatureField name="signature" validate={Validator.isSignature} />




                    </FormikForm>
                )}
            </Formik>


        </Box>
    );
}

export default PaymentPlan