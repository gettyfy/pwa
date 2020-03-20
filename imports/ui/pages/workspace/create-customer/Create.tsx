import React from 'react'
import { useHistory } from 'react-router-dom';
import path from '/imports/ui/router'

import { Box, Accordion, AccordionItem, AccordionHeader, AccordionIcon, AccordionPanel, Icon } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, PageHeader, FormikForm } from '/imports/ui/components'
import { Meteor } from 'meteor/meteor';


const Create: React.FunctionComponent = (props: any) => {
    const history = useHistory();


    interface ICustomerInterface {
        customerName: string,
        customerAddress: string,
        customerEmail: string,
        customerNumber: string,
        name: string,
        address: string,
        email: string,
        phonenumber: string,
        [key: string]: string
    }
    const authInit: ICustomerInterface = {
        customerName: "",
        customerAddress: "",
        customerEmail: "",
        customerNumber: "",
        name: "",
        address: "",
        email: "",
        phonenumber: "",
    }

    const handleSubmit = async (values: ICustomerInterface) => {
        await props.updateState({ value: values })
        console.log(values)
        history.push(`${path.workspace.createCustomer}/success`)
    }





    return (
        <Box p={4}>
            <PageHeader title="Add Customer" subTitle="Fill the form to add a new customer" />


            <Box height="3rem"></Box>
            <Box mb="5"><p>Customer Details </p></Box>

            <Formik
                initialValues={authInit}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        handleSubmit(values)
                        Meteor.call('customer.insert', values)
                        actions.setSubmitting(false);
                    }, 300);
                }}
            >
                {(props: FormikProps<any>) => (
                    <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} withIcon buttonName="Add Customer">
                        <InputField label="Customer Name" placeholder="Gordon Amaza" name="customerName" validate={Validator.isRequired} />
                        <InputField label="Customer Address" placeholder="44 Lagos Avenue" name="customerAddress" validate={Validator.isRequired} />
                        <InputField label="Customer Phone Number" placeholder="0244-973-237" name="customerNumber" validate={Validator.isNumeric} />
                        <InputField label="Customer Email" placeholder="gordon@getfynance.co" name="customerEmail" validate={Validator.isEmail} />


                        <Box height="2rem"></Box>

                        {/* Add Accordion Section for Optional Guarantor Form */}
                        <Accordion defaultIndex={3} allowToggle>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <AccordionHeader>
                                            <Box flex="1" textAlign="left">Add a Guarantor</Box>
                                            <Icon size="12px" name={isExpanded ? "minus" : "add"} />
                                        </AccordionHeader>
                                        <AccordionPanel pb={8}>
                                            <InputField label="Name" placeholder="Benjamin Kwame" name="name" />
                                            <InputField label="Address" placeholder="12 Aluguntugui street" name="address" />
                                            <InputField label="Phone Number" placeholder="0244-973-237" name="phonenumber" />
                                            <InputField label="Email" placeholder="benj@getfynance.co" name="email" />

                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                        <Box height="3rem"></Box>



                    </FormikForm>
                )}
            </Formik>


        </Box>
    );
}

export default Create