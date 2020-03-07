import React, { ChangeEvent } from 'react';
import { FormControl, FormLabel, FormErrorMessage, Input, Button, InputRightElement } from '@chakra-ui/core'
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import { Formik, Form, FormikProps } from 'formik'
import { InputField } from '/imports/ui/components'
// import * as Analytics from '/imports/ui/analytics'


const Signup: React.FC = () => {

    interface AuthInterface {
        fullname: string,
        username: string,
        password: string,
        [key: string]: string
    }
    const authInit: AuthInterface = {
        fullname: "",
        username: "",
        password: "",
    }

    const handleSubmit = (values: AuthInterface) => {
        console.log(values);
        const options = values
        Accounts.createUser({
            email: options.username,
            password: options.password,
            profile: {
                name: options.fullname
            }
        }, (error) => {
            if (error) {
                console.log(error.message);
                return alert(error.message)
            }
            else {
                alert(`SIGNUP WAS SUCCESSFUL FOR ${JSON.stringify(Meteor.user())}`)
            }
        })
    }


    function validateName(value: string) {
        console.log(value);
        let error;
        if (!value) {
            error = "Name is required";
        } else if (value !== "Andrew") {
            error = "Jeez! You're not a fan 😱";
        }
        return error;
    }




    return (
        <Formik
            initialValues={{ ...authInit }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    handleSubmit(values)
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {(props: FormikProps<any>) => (
                <form onSubmit={props.handleSubmit}>

                    <InputField label="Your Full Name" placeholder="enter your name" name="fullname" validate={validateName} />
                    <InputField label="Your Emails" placeholder="enter an email address" name="username" />
                    <InputField label="Your Password" placeholder="set a password" name="password" />

                    <Button
                        mt={10}
                        variantColor="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                        size='lg'
                        width="100%"
                    >
                        Submit
            </Button>
                </form>
            )}
        </Formik>
    );
}

export default Signup