import React, { ChangeEvent } from 'react';
import { FormControl, FormLabel, FormErrorMessage, Input, Button, InputRightElement } from '@chakra-ui/core'
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import { Formik, Form, FormikProps, Field, FieldInputProps, FieldMetaProps, FieldProps, FormikBag, FormikFormProps, FormikHandlers } from 'formik'
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
        password: "io",
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

    /**
     * Formik Field Props to be aware of
     *  field, { name, value, onChange, onBlur }
        form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta => uses action handlers like touched... to trigger validation and other login on the Fields component
     */





    function validateName(value: string) {
        console.log(value);
        let error;
        if (!value) {
            error = "Name is required";
        } else if (value !== "Naruto") {
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
                    <Field name="fullname" validate={validateName}>
                        {({ field, form }: FieldProps) => (
                            //@ts-ignore
                            <FormControl isInvalid={form.errors.fullname && form.touched.fullname}>
                                <FormLabel htmlFor="fullname">Full name</FormLabel>
                                <Input {...field} id="fullname" placeholder="fullname" focusBorderColor="gray.500" errorBorderColor="red.500" size="lg" />
                                <FormErrorMessage>{form.errors.fullname}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="username">
                        {({ field, form }: FieldProps) => (
                            //@ts-ignore
                            <>
                                {/* <FormControl isInvalid={form.errors.name && form.touched.name} mt="2"> */}
                                <FormLabel htmlFor="username">Your Email</FormLabel>
                                <Input {...field} id="username" placeholder="email@getfynance.com" focusBorderColor="gray.500" errorBorderColor="red.500" size="lg" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                {/* </FormControl> */}
                            </>
                        )}
                    </Field>
                    <Field name="password">
                        {({ field, form }: FieldProps) => (
                            //@ts-ignore
                            <>
                                {/* <FormControl isInvalid={form.errors.name && form.touched.name} mt="2"> */}
                                <FormLabel htmlFor="name">Set a Password</FormLabel>
                                <Input {...field} id="password" placeholder="password" focusBorderColor="gray.500" errorBorderColor="red.500" size="lg" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                {/* </FormControl> */}
                            </>
                        )}
                    </Field>
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