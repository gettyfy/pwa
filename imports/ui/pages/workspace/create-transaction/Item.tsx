import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import path from '/imports/ui/router'

import styled from '@emotion/styled';
import { Box, Flex, Heading, Stack } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, PageHeader, FormikForm, CheckField } from '/imports/ui/components'
import { Meteor } from 'meteor/meteor';
import theme from '/imports/lib/theme'


const Text = styled.p`
    font-size: 12px;
    display: flex;
    flex: 1
`
const Span = styled.span`
    font-weight: bold;
    padding-right: 2px;
`


const Item: React.FunctionComponent = (props: any) => {
    const history = useHistory();
    const [amountDue, setAmountDue] = useState('0');
    const [date, setDate] = useState('');
    const [amountPaid, setAmountPaid] = useState('0');
    const [balance, setBalance] = useState<any>(0)

    const { data: { customer } } = props
    console.log(props);

    // Function to calculate the balance owed
    const calcBalance = () => {
        let balance = parseFloat(amountDue) - parseFloat(amountPaid);
        setBalance(balance)
    }

    // This function call will check to ensure that user doesnt bypass the Form Flow, or havent add a customer data.
    useEffect(() => {
        return () => {
            props.data === "" || Object.keys(props.data).length === 0 &&
                history.push(path.workspace.createTransaction)
        };
    });

    //Input Validation Scope
    const paymentValidation = () => {
        if (Validator.isRequired && parseFloat(amountPaid) > parseFloat(amountDue)) {
            return ['Payment cant be greater']
        }
    }


    interface IItemInterface {
        itemName: string,
        quantity: string,
        price: string,
        amountPaid: string,
        dueDate: string,
        [key: string]: string
    }

    const init: IItemInterface = {
        itemName: "",
        quantity: "1",
        price: "",
        amountPaid: "0",
        dueDate: "",
    }

    const handleTracker = (value: string, callback: Function) => {
        callback(value)
        calcBalance()
    }

    const handleSubmit = async (values: IItemInterface) => {
        await props.updateState(values)
        console.log(values)
        await Meteor.call('transaction.insert', values)
        history.push(`${path.workspace.createTransaction}/payment-plan`)
    }





    return (
        <Box p={4}>
            <PageHeader title="Transaction Detail" subTitle="" />

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
                    <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="NEXT" withIcon>
                        <InputField label="Description" placeholder="Payment for Artwork" name="itemName" validate={Validator.isRequired} />
                        <Stack isInline>
                            <Box width="40%">
                                <InputField label="Quantity" placeholder="1" name="quantity" validate={Validator.isNumeric} />
                            </Box>
                            <InputField label="Amount Due" trackInput={(data: string) => handleTracker(data, setAmountDue)} placeholder="700" name="price" validate={Validator.isNumeric} />
                            <InputField label="Amount Received" trackInput={(data: any) => handleTracker(data, setAmountPaid)} placeholder="0" name="amountPaid" validate={paymentValidation} />
                        </Stack>

                        <InputField type="date" trackInput={(data: string) => handleTracker(data, setDate)} label="When is this payment due?" placeholder="03/30/2021" name="dueDate" validate={Validator.isRequired} />

                        {amountDue && date &&
                            <>
                                <Flex direction="column" mt="6" bg="gray.100" p="2" borderRadius={theme.custom.defaultRadius}>
                                    <Text><Span>{`${customer && customer.customerName || ""}'s`} </Span> payment is due by: <Span> {date}</Span></Text>
                                    <Text><Span>Their payment balance is</Span> <Span>GH₵ {balance}</Span></Text>
                                </Flex>
                                <CheckField name="withInstallment" boxLabel="Use an Installment Plan" validate={Validator.isRequired} />
                            </>
                        }


                    </FormikForm>
                )}
            </Formik>


        </Box>
    );
}

export default Item