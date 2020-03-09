
/**
 * This File will house the Form Fields that would be re-used across the project
 */
// CREATE FIELDS FOR CONTROL BOX https://chakra-ui.com/controlbox

import React from 'react';
import PropTypes, { object } from 'prop-types'
import styled from '@emotion/styled'
import { Formik, Form, Field, FieldProps } from 'formik'
import { FormControl, Checkbox, FormLabel, RadioGroup, Icon, IconButton, FormErrorMessage, Input, Button, InputGroup, Radio, InputRightElement } from '@chakra-ui/core'
import * as Analytics from '/imports/ui/analytics'



const FormikButton = styled(Button)`
    border-radius: 0;
    min-height: 54px;
    justify-content: space-between;
    align-content: center;
`

const FormikInput = styled(Input)`
    border-radius: 0px;
    border-width: 1.3px;
    border-right: none;
    border-top: none;
    border-left: none;
    min-height: 64px;
    line-height: 1px;

    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: 16px;
        padding-bottom: 0;
        line-height: 1rem;
        vertical-align: bottom;
    }
`
const FormikLabel = styled(FormLabel)`
    font-size: 12px;
    position: absolute;
    top: 0;
    transition: ease-in 0.2s;
    z-index: 11111;
    padding: .1rem;
    padding-left: 1rem;
    /* background: #999999; */
    /* color: white; */
    padding-right: 10px;
   
`

/**
 * This will be the Formik Fields Hook that extends formik functionality into chakra form fields
 */



/**
 * This component extends a chakra input field and ties it up with the formik utility while exposing a few props to utilize across other pages
 * The form takes in a form name and calls a validation function that will be used within the pages
 */

interface InputFieldProps {
    name: string,
    label: string,
    placeholder: string,
    validate?: Function
}

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
                <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
                    <FormikLabel id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} color="gray.600">{label}</FormikLabel>
                    <InputGroup size="lg">
                        <FormikInput isFullWidth variant="filled" {...field} id={[name, 'input'].join('-')} placeholder={placeholder} focusBorderColor="gray.500" borderColor="gray.500" errorBorderColor="red.500" size="lg" />
                    </InputGroup>
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
}
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    validate: PropTypes.func,
};

// ++ ============================================= END SECTION =====================================================



/**
 * Extend the Form Component to Manage the Analytics provider, expose a Button component and HandleSubmit Action
 */

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
            <FormikButton
                mt={10}
                variantColor="blue"
                rightIcon="arrow-forward"
                isLoading={isLoading}
                type="submit"
                size='lg'
                width="100%"
                {...rest}
            >
                {buttonName}
            </FormikButton>
        </Form>
    )
}

FormikForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    analyticName: PropTypes.string,
    isLoading: PropTypes.bool,
    buttonName: PropTypes.string.isRequired,
    formProps: PropTypes.object

}
// ++ ================================= END SECTION =================================================================++



/**
 * Formik Field for Password Inputs
 */
const PasswordField = (props: InputFieldProps): JSX.Element => {
    const { validate, name, placeholder, label } = props
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <Field name={name} validate={validate} {...props}>
            {({ field, form }: FieldProps) => (
                //@ts-ignore
                <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
                    <FormikLabel htmlFor={name} color="gray.600">{label}</FormikLabel>
                    <InputGroup size="lg">
                        <FormikInput type={show ? "text" : "password"} isFullWidth variant="filled" {...field} id={name} placeholder={placeholder} focusBorderColor="gray.500" borderColor="gray.500" errorBorderColor="red.500" size="lg" />
                        <InputRightElement width="4.5rem" pt="4">
                            <IconButton
                                variant="outline"
                                size="sm"
                                isRound
                                aria-label="Reveal Password"
                                icon={show ? "view" : "view-off"}
                                onClick={handleClick}>
                                ></IconButton>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
}
PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    validate: PropTypes.func,
};

// ++ ================================= END SECTION =================================================================++




/**
 * Formik Field for Radio Selections
 */

interface RadioFieldProps {
    validate: Function,
    name: string
    label: string,
    defaultValue?: string
    options: Array<string>,
}

const RadioField = (props: RadioFieldProps): JSX.Element => {
    const { validate, name, defaultValue, options, label } = props

    return (
        <Field name={name} validate={validate} {...props}>
            {({ field, form }: FieldProps) => (
                //@ts-ignore
                <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
                    <FormLabel htmlFor={name} color="gray.600">{label}</FormLabel>
                    <RadioGroup name={name} id={name} defaultValue={defaultValue} {...field} size="lg">
                        {options.map((val, idx) => {
                            return (
                                <Radio key={`${val}-${idx}`} value={val.toLowerCase()}>{val}</Radio>
                            )
                        })}
                    </RadioGroup>
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
}

RadioField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validate: PropTypes.func,
    defaultValue: PropTypes.string,
    options: PropTypes.array.isRequired
};

// ++ ================================= END SECTION =================================================================++





/**
 * Formik Field for Radio Selections
 */

interface CheckFieldProps {
    validate: Function,
    name: string
    label?: string,
    isChecked?: boolean
}

const CheckField = (props: CheckFieldProps): JSX.Element => {
    const { validate, isChecked, name, label } = props

    return (
        <Field name={name} validate={validate} {...props}>
            {({ field, form }: FieldProps) => (
                //@ts-ignore
                <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
                    {label && <FormLabel id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} color="gray.600">{label}</FormLabel>}
                    <Checkbox isChecked={isChecked} id={[name, 'input'].join('-')} size="lg" name={name} variantColor="blue" {...field}>
                        {name}
                    </Checkbox>
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
}

CheckField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    validate: PropTypes.func,
    isChecked: PropTypes.bool,
};

// ++ ================================= END SECTION =================================================================++






// ====== Export Field Components here ===========
export { InputField, PasswordField, CheckField, RadioField, FormikForm }









