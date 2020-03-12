import React from 'react'
import { useHistory } from 'react-router-dom';
import { Meteor } from 'meteor/meteor'

import { Box } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { SelectField, PageHeader, FormikForm } from '/imports/ui/components'
import Path from '/imports/ui/router'


const Create: React.FunctionComponent = (props: any) => {
    const history = useHistory();
    // const handleSubmit = () => {
    //     history.push('/success');
    // }


    interface ICustomerInterface {
        customerName: string,
        customerAddress: string,
        customerEmail: string,
        customerNumber: string,
        name: string,
        address: string,
        select: string,
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
        select: "",
        phonenumber: "",
    }

    const handleSubmit = async (values: ICustomerInterface) => {
        await props.updateState({ value: values })
        await Meteor.call('tasks.insert', JSON.stringify(values));

        console.log(values)
        history.push(`${Path.workspace.remind}/rules`)
    }





    return (
        <React.Fragment>
            <PageHeader title="Create a Reminder" subTitle="Remind a customer about an overdue payment" />
            <Box py={4}>
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
                        <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="SAVE">
                            <SelectField placeholder="Search" name="select" label="Search Customer" validate={Validator.isRequired} options={["Bukola Saraki", "Mohammed Muraril"]} />



                        </FormikForm>
                    )}
                </Formik>
            </Box>
        </React.Fragment>
    );
}

export default Create