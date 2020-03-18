import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import path from '/imports/ui/router'

import { Box, Flex, Heading } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, useFormik, FormikProps } from 'formik'
import { InputField, PageHeader, FormikForm } from '/imports/ui/components'
import { Meteor } from 'meteor/meteor';


const Item: React.FunctionComponent = (props: any) => {
    const history = useHistory();
    const [total, setTotal] = useState(330);


    

    interface IItemInterface {
        itemName: string,
        quantity: string,
        price: string,
        amountPaid: string,
        balance: string,
        [key: string]: string
    }

        const init: IItemInterface = {
        itemName: "",
        quantity: "",
        price: "",
        amountPaid: "",
        balance: "",
    }

    const formik = useFormik(init);
    const calcTotal = (values) => console.log("FIRED", values)


    const handleSubmit = async (values: IItemInterface) => {
        await props.updateState(values)
        console.log(values)
       await Meteor.call('transaction.insert', values)
        history.push(`${path.workspace.createTransaction}/payment-plan`)
    }





    return (
        <Box p={4}>
            <PageHeader title="Add Item" subTitle="" />

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
                    <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="SAVE">
                        <InputField label="Item Name" placeholder="Nasco Water Dispenser" name="itemName" validate={Validator.isRequired} />
                        <InputField label="Quantity" placeholder="1" name="quantity" validate={Validator.isNumeric} />
                        <InputField label="Price" placeholder="C700" name="price" validate={Validator.isNumeric} />
                        <InputField label="Amount Paid" placeholder="C300" name="amountPaid" validate={Validator.isNumeric} />
                        <InputField label="Balance" placeholder="C400" name="balance" validate={Validator.isNumeric} />
                        <h1 onClick={() => calcTotal()}>CLICK</h1>

                        <Flex justify="flex-end" mt="6">
                        <Heading as="h3" size="md">TOTAL: {total}</Heading>
                        </Flex>

                    </FormikForm>
                )}
            </Formik>


        </Box>
    );
}

export default Item