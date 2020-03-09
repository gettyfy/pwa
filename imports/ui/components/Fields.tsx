
/**
 * This File will house the Form Fields that would be re-used across the project
 */
// CREATE FIELDS FOR CONTROL BOX https://chakra-ui.com/controlbox

import React from 'react';
import { FormControl, FormLabel, FormErrorMessage, Input, Button, InputRightElement } from '@chakra-ui/core'
import Proptypes from 'proptypes'
import { Formik, Form, FormikProps, Field, FieldInputProps, FieldMetaProps, FieldProps, FormikBag, FormikFormProps, FormikHandlers } from 'formik'
import * as Analytics from '/imports/ui/analytics'



/**
 * This will be the Formik Fields Hook that extends formik functionality into chakra form fields
 */



/**
 * Extend the Formik form fields
 */

interface InputFieldProps {
    name: string,
    label: string,
    placeholder: string,
    validate?: Function
}




/**
 * This component extends a chakra input field and ties it up with the formik utility while exposing a few props to utilize across other pages
 * The form takes in a form name and calls a validation function that will be used within the pages
 */
const InputField = (props: InputFieldProps): JSX.Element => {
    const { validate, name, placeholder, label } = props

    /**
     * Formik Field Props to be aware of
     *  field, { name, value, onChange, onBlur }
        form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta => uses action handlers like touched... to trigger validation and other login on the Fields component
     */

    return (
        <Field name={name} validate={validate} {...props}>
            {({ field, form }: FieldProps) => (
                //@ts-ignore
                <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                    <FormLabel htmlFor={name}>{label}</FormLabel>
                    <Input {...field} id={name} placeholder={placeholder} focusBorderColor="gray.500" errorBorderColor="red.500" size="lg" />
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
}


interface IFormikForm {
    analyticName: string,
    children: any,
    isLoading: boolean,
    buttonName: string,
    formProps: {
        errors: object,
        values: object,
        [key: string]: any
    }
}


const FormikForm = (props: IFormikForm): JSX.Element => {
    const { children, buttonName, isLoading, formProps: { errors, values }, analyticName, ...rest } = props;
    console.log("HERE ARE FORMIK FORM ON SUBMISSION", props);
    // alert(`CALLED ON SUBMIT ${JSON.stringify(values)}`)

    // Call Analytics on all Form Submissions
    Analytics.track(analyticName, {
        errors: errors,
        value: values
    })

    return (
        <Form {...rest}>
            {children}
            <Button
                mt={10}
                variantColor="blue"
                isLoading={isLoading}
                type="submit"
                size='lg'
                width="100%"
                {...rest}
            >
                {buttonName}
            </Button>
        </Form>
    )
}















// ====== Export Field Components here ===========
export { InputField, FormikForm }













// const Signup: React.FC = () => {

//     interface AuthInterface {
//         fullname: string,
//         username: string,
//         password: string,
//         [key: string]: string
//     }
//     const authInit: AuthInterface = {
//         fullname: "",
//         username: "",
//         password: "",
//     }

//     const handleSubmit = (values: AuthInterface) => {
//         console.log(values);
//         const options = values
//         Accounts.createUser({
//             email: options.username,
//             password: options.password,
//             profile: {
//                 name: options.fullname
//             }
//         }, (error) => {
//             if (error) {
//                 console.log(error.message);
//                 return alert(error.message)
//             }
//             else {
//                 alert(`SIGNUP WAS SUCCESSFUL FOR ${JSON.stringify(Meteor.user())}`)
//             }
//         })
//     }

//     /**
//      * Formik Field Props to be aware of
//      *  field, { name, value, onChange, onBlur }
//         form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//         meta => uses action handlers like touched... to trigger validation and other login on the Fields component
//      */





//     function validateName(value: string) {
//         console.log(value);
//         let error;
//         if (!value) {
//             error = "Name is required";
//         } else if (value !== "Andrew") {
//             error = "Jeez! You're not a fan 😱";
//         }
//         return error;
//     }




//     return (
//         <Formik
//             initialValues={{ ...authInit }}
//             onSubmit={(values, actions) => {
//                 setTimeout(() => {
//                     handleSubmit(values)
//                     actions.setSubmitting(false);
//                 }, 1000);
//             }}
//         >
//             {(props: FormikProps<any>) => (
//                 <form onSubmit={props.handleSubmit}>
//                     <Field name="fullname" validate={validateName}>
//                         {({ field, form }: FieldProps) => (
//                             //@ts-ignore
//                             <FormControl isInvalid={form.errors.fullname && form.touched.fullname}>
//                                 <FormLabel htmlFor="fullname">Full name</FormLabel>
//                                 <Input {...field} id="fullname" placeholder="fullname" focusBorderColor="gray.500" errorBorderColor="red.500" size="lg" />
//                                 <FormErrorMessage>{form.errors.fullname}</FormErrorMessage>
//                             </FormControl>
//                         )}
//                     </Field>
//                     <Field name="username">
//                         {({ field, form }: FieldProps) => (
//                             //@ts-ignore
//                             <FormControl isInvalid={form.errors.username && form.touched.username} mt="2">
//                                 <FormLabel htmlFor="username">Your Email</FormLabel>
//                                 <Input {...field} id="username" placeholder="email@getfynance.com" focusBorderColor="gray.500" errorBorderColor="red.500" size="lg" />
//                                 <FormErrorMessage>{form.errors.username}</FormErrorMessage>
//                             </FormControl>
//                         )}
//                     </Field>
//                     <Field name="password">
//                         {({ field, form }: FieldProps) => (
//                             //@ts-ignore
//                             <>
//                                 {/* <FormControl isInvalid={form.errors.name && form.touched.name} mt="2"> */}
//                                 <FormLabel htmlFor="name">Set a Password</FormLabel>
//                                 <Input {...field} id="password" placeholder="password" focusBorderColor="gray.500" errorBorderColor="red.500" size="lg" />
//                                 <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                                 {/* </FormControl> */}
//                             </>
//                         )}
//                     </Field>
//                     <Button
//                         mt={10}
//                         variantColor="teal"
//                         isLoading={props.isSubmitting}
//                         type="submit"
//                         size='lg'
//                         width="100%"
//                     >
//                         Submit
//             </Button>
//                 </form>
//             )}
//         </Formik>
//     );
// }
