
/**
 * This File will house the Form Fields that would be re-used across the project
 */
// CREATE FIELDS FOR CONTROL BOX https://chakra-ui.com/controlbox

import React from 'react';
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Downshift from "downshift";
import { useField, Form, Field, FieldProps, FieldConfig } from 'formik'
import { FormControl, Checkbox, FormLabel, Select, RadioGroup, RadioButtonGroup, Icon, IconButton, FormErrorMessage, Input, Button, InputGroup, Radio, InputRightElement, CustomTheme, DefaultTheme } from '@chakra-ui/core'
import * as Analytics from '/imports/ui/analytics'



const FormikButton = styled(Button) <{ withIcon: boolean | undefined }>`
    border-radius: 0;
    min-height: 54px;
    justify-content: ${(props) => props.withIcon ? 'space-between' : 'center'};
    align-content: center;
`

const FormikInput = styled(Input)`
    border-radius: 0px;
    border-width: 1.3px;
    border-right: none;
    font-size: ${(props: any) => props.theme.custom.InputFontSize};
    border-top: none;
    border-left: none;
    min-height: ${(props: any) => props.theme.custom.inputMinHeight};
    line-height: 1px;

    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: ${(props: any) => props.theme.custom.InputFontSize};
        padding-bottom: 0;
        line-height: 1rem;
        vertical-align: bottom;
    }
`
const FormikSelect = styled(Select)`
    border-radius: 0px;
    border-width: 1.3px;
    border-right: none;
    border-bottom: 1.3px solid;
    border-top: none;
    border-left: none;
    font-size: ${(props: any) => props.theme.custom.InputFontSize};
    min-height: ${(props: any) => props.theme.custom.inputMinHeight};
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: ${(props: any) => props.theme.custom.InputFontSize};
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
    withIcon?: boolean | undefined,
    formProps: {
        errors: object,
        values: object,
        [key: string]: any
    }
}

const FormikForm = (props: IFormikForm): JSX.Element => {
    const { children, withIcon, buttonName, isLoading, formProps: { errors, values }, analyticName, ...rest } = props;
    console.log("HERE ARE FORMIK FORM ON SUBMISSION", props.formProps);

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
                withIcon={withIcon}
                variantColor="blue"
                type="submit"
                isLoading={isLoading}
                //@ts-ignore
                rightIcon={withIcon && "arrow-forward"}
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
                        {options && options.map((val, idx) => {
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

interface ICustomRadio {
    isChecked: boolean,
    isDisabled: boolean,
    name: string,
    value: string,
    children: any,
    [key: string]: any

}

const ButtonComponent = React.forwardRef((props: ICustomRadio, ref) => {
    // Step 1: Create a component that accepts `isChecked` and `isDisabled` prop
    const { isChecked, children, isDisabled, value, ...rest } = props;
    return (
        <Button
            ref={ref}
            variantColor={isChecked ? "red" : "blue"}
            aria-checked={isChecked}
            width="inherit"
            borderRadius="0"
            m="1"
            ml="0"
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        >{children}</Button>

    )
});


const RadioButtonField = (props: RadioFieldProps): JSX.Element => {
    const { validate, name, defaultValue, options, label, ...rest } = props
    //@ts-ignore
    const [field, meta, helpers] = useField(props);
    // console.log(field, meta, helpers);

    // directly call meta in place of meta.touched to show all errors ::: FIX ISSUE with component not displaying error onDirty
    return (
        <FormControl isInvalid={meta['error'] && meta.touched} mt="5" position="relative">
            <FormLabel {...field} htmlFor={[name, 'radio-button'].join('__')} color="gray.600">{label}</FormLabel>
            <RadioButtonGroup
                name={name}
                id={[name, 'radio-button'].join('__')}
                onChange={val => helpers.setTouched(true) && helpers.setValue(val)}
                defaultValue={"org"}
                isInline
            >
                {options && options.map((val, idx) => {
                    return (
                        <ButtonComponent name={val} key={[val, idx].join('--')} value={val} {...rest}>{val}</ButtonComponent>
                    )
                })}
            </RadioButtonGroup>
            <FormErrorMessage>{meta.error && meta.error}</FormErrorMessage>
        </FormControl>
    );
}


RadioButtonField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validate: PropTypes.func,
    defaultValue: PropTypes.string,
    options: PropTypes.array.isRequired
};

// ++ ================================= END SECTION =================================================================++





/**
 * Formik Field for Checkbox Selections
 */

interface CheckFieldProps {
    validate: Function,
    name: string
    boxLabel: string
    label?: string,
    isChecked?: boolean
}

const CheckField = (props: CheckFieldProps): JSX.Element => {
    const { validate, boxLabel, isChecked, name, label } = props
    return (
        <Field name={name} validate={validate} {...props}>
            {({ field, form }: FieldProps) => (
                //@ts-ignore
                <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
                    {label && <FormLabel id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} color="gray.600">{label}</FormLabel>}
                    <Checkbox isChecked={isChecked} id={[name, 'input'].join('-')} size="lg" name={name} variantColor="blue" {...field}>
                        {boxLabel}
                    </Checkbox>
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
}

CheckField.propTypes = {
    name: PropTypes.string.isRequired,
    boxLabel: PropTypes.string.isRequired,
    label: PropTypes.string,
    validate: PropTypes.func,
    isChecked: PropTypes.bool,
};

// ++ ================================= END SECTION =================================================================++


/**
 * Formik Field for Select options
 */

interface SelectFieldProps {
    validate: Function,
    name: string
    label?: string,
    placeholder: string
    defaultValue?: string
    options: Array<string>,
}

const SelectField = (props: SelectFieldProps): JSX.Element => {
    const { validate, placeholder, name, defaultValue, options, label } = props

    return (
        <Field name={name} validate={validate} {...props}>
            {({ field, form }: FieldProps) => (
                //@ts-ignore
                <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
                    <FormLabel htmlFor={[name, 'select'].join('-')} color="gray.600">{label}</FormLabel>
                    <FormikSelect variant="filled" placeholder={placeholder} name={name} id={[name, 'select'].join('-')} defaultValue={defaultValue} {...field} size="lg">
                        {options && options.map((val, idx) => {
                            return (
                                <option key={`${val}-${idx}`} value={val.toLowerCase()}>{val}</option>
                            )
                        })}
                    </FormikSelect>
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
}

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validate: PropTypes.func,
    defaultValue: PropTypes.string,
    options: PropTypes.array.isRequired
};

// ++ ================================= END SECTION =================================================================++

/**
 * Formik Field for Autcomplete with DropShift options
 * https://dev.to/aromanarguello/how-to-build-an-autocomplete-dropdown-in-react-using-downshift-1c3o
 */

interface AutoCompleteProps {
    validate: Function,
    name: string
    label?: string,
    placeholder: string
    defaultValue?: string
    options: Array<string>,
}

const AutoCompleteField = (props: AutoCompleteProps): JSX.Element => {
    const { validate, placeholder, name, defaultValue, options, label } = props
    const items = [
        { value: "apple" },
        { value: "pear" },
        { value: "orange" },
        { value: "grape" },
        { value: "banana" }
    ];

    return (
        <Field name={name} validate={validate} {...props}>
            {({ field, form }: FieldProps) => (
                //@ts-ignore
                <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
                    <FormLabel htmlFor={[name, 'select'].join('-')} color="gray.600">{label}</FormLabel>
                    {/* <FormikSelect variant="filled" placeholder={placeholder} name={name} id={[name, 'select'].join('-')} defaultValue={defaultValue} {...field} size="lg">
                        {options && options.map((val, idx) => {
                            return (
                                <option key={`${val}-${idx}`} value={val.toLowerCase()}>{val}</option>
                            )
                        })}
                    </FormikSelect> */}



                    <Downshift
                        onChange={selection =>
                            alert(selection ? `You selected ${selection.value}` : "Selection Cleared")
                        }
                        itemToString={item => (item ? item.value : "")}
                    >
                        {({
                            getInputProps,
                            getItemProps,
                            getLabelProps,
                            getMenuProps,
                            isOpen,
                            inputValue,
                            highlightedIndex,
                            selectedItem,
                            getRootProps
                        }) => (
                                <div>
                                    <label {...getLabelProps()}>Enter a fruit</label>
                                    <div
                                        style={{ display: "inline-block" }}
                                        {...getRootProps({}, { suppressRefError: true })}
                                    >
                                        <input {...getInputProps()} />
                                    </div>
                                    <ul {...getMenuProps()}>
                                        {isOpen
                                            ? items
                                                .filter(item => !inputValue || item.value.includes(inputValue))
                                                .map((item, index) => (
                                                    <li
                                                        {...getItemProps({
                                                            key: item.value,
                                                            index,
                                                            item,
                                                            style: {
                                                                backgroundColor:
                                                                    highlightedIndex === index ? "lightgray" : "white",
                                                                fontWeight: selectedItem === item ? "bold" : "normal"
                                                            }
                                                        })}
                                                    >
                                                        {item.value}
                                                    </li>
                                                ))
                                            : null}
                                    </ul>
                                </div>
                            )}
                    </Downshift>

                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
}

AutoCompleteField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validate: PropTypes.func,
    defaultValue: PropTypes.string,
    options: PropTypes.array.isRequired
};





// ====== Export Field Components here ===========
export { InputField, PasswordField, CheckField, RadioField, AutoCompleteField, RadioButtonField, SelectField, FormikForm }









