import React from 'react'
import { useHistory } from 'react-router-dom';

import { Button, Select, Box, Heading } from '@chakra-ui/core'
import * as Analytics from '/imports/ui/analytics'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, FormikForm } from '/imports/ui/components'


const OriginForm: React.FunctionComponent = (props: any) => {
    const history = useHistory();

    interface IAuthInterface {
        companyname: string,
        address: string,
        phonenumber: string,
        email: string,
        [key: string]: string
    }
    const authInit: IAuthInterface = {
        companyname: "",
        address: "",
        phonenumber: "",
        email: "",
    }

    const handleSubmit = (values: IAuthInterface): void => {
        props.updateState({value: values})
        console.log(values)
    }






    return (
        <Box p={4}>
            <Heading>Create Company</Heading>
            <Box mb="20"><p>We will use this information to setup
your company account</p></Box>

            <Box height="3rem"></Box>

            <Formik
                initialValues={authInit}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        handleSubmit(values)
                        actions.setSubmitting(false);
                    }, 300);
                }}
            >
                {(props: FormikProps<any>) => (
                    <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="Create Your Company">
                        <InputField label="Company Name" placeholder="Meltwater" name="companyname" validate={Validator.isRequired} />
                        <InputField label="Corporate Address" placeholder="22 Aluguntugui Street" name="address" validate={Validator.isRequired} />
                        <InputField label="Corporate Phone Number" placeholder="0244-973-237" name="phonenumber" validate={Validator.isNumeric} />
                        <InputField label="Corporate Email" placeholder="Your Email" name="email" validate={Validator.isEmail} />
                    </FormikForm>
                )}
            </Formik>

        </Box>
    );
}

export default OriginForm