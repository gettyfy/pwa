
/**
 * Formik Field for Autcomplete with DropShift options
 * https://dev.to/aromanarguello/how-to-build-an-autocomplete-dropdown-in-react-using-downshift-1c3o
 */


import React from 'react';
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Downshift from "downshift";
import { useField, Form, Field, FieldProps } from 'formik'
import { FormControl, List, Textarea, ListItem, Checkbox, FormLabel, Select, RadioGroup, RadioButtonGroup, Icon, IconButton, FormErrorMessage, Input, Button, InputGroup, Radio, InputRightElement, CustomTheme, DefaultTheme, Box } from '@chakra-ui/core'
import { CustomerSearch } from '/imports/ui/components/CustomerList'
import { ICustomer } from '/imports/api/schema'


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
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-size: ${(props: any) => props.theme.custom.inputFontSize};
    border-top: none;
    border-left: none;

    ::placeholder, ::-moz-placeholder {
        font-size: ${(props: any) => props.theme.custom.inputPlaceHolder};
        vertical-align: middle;
    }
`
const FormikSelect = styled(Select)`
    border-radius: 0px;
    border-width: 1.3px;
    border-right: none;
    border-bottom: 1.3px solid;
    border-top: none;
    border-left: none;
    font-size: ${(props: any) => props.theme.custom.inputFontSize};
    min-height: ${(props: any) => props.theme.custom.inputMinHeight};
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: ${(props: any) => props.theme.custom.inputFontSize};
    }
`
const FormikLabel = styled(FormLabel) <{ fsize?: string }>`
    font-size: ${props => props.fsize ? props.fsize : '11px'};
    position: absolute;
    top: 0;
    transition: ease-in 0.2s;
    z-index: 11111;
    padding: .1rem;
    padding-left: 1rem;
    padding-right: 10px;
   
`




interface ICustomerSearchField {
    validate: Function,
    name: string
    label?: string,
    placeholder: string
    options: Array<ICustomer>,
    [key: string]: any
}

export const CustomerSearchField: React.FC<ICustomerSearchField> = (props): JSX.Element => {
    const { validate, placeholder, name, options, label, ...rest } = props
    const [field, meta, helpers] = useField<ICustomerSearchField>(props);



    // const items = ;

    return (
        <FormControl isInvalid={meta['error'] && meta.touched ? true : false} mt="5" position="relative">
            <Downshift
                onChange={selection =>
                    //pass in the full object of the field into form hooks
                    helpers.setTouched(true) && helpers.setValue(selection)
                }
                itemToString={item => (item ? item.customerName : "")}
            >
                {({
                    getInputProps,
                    getItemProps,
                    getLabelProps,
                    getToggleButtonProps,
                    getMenuProps,
                    isOpen,
                    inputValue,
                    highlightedIndex,
                    selectedItem,
                    getRootProps
                }) => {
                    const triggerList = () => {
                        getToggleButtonProps();
                        console.log(!isOpen);
                        console.log(getToggleButtonProps());

                        return !!isOpen;
                    }
                    return (
                        <div>
                            <FormLabel {...getToggleButtonProps()} {...getLabelProps()} color="gray.600">{label}</FormLabel>
                            <div {...getRootProps({}, { suppressRefError: true })}>
                                <FormikInput onFocus={triggerList} isFullWidth variant="filled"  {...field} placeholder={placeholder}  {...getInputProps()} {...props} validate={validate} focusBorderColor="gray.500" borderColor="gray.500" errorBorderColor="red.500" size="lg" />
                            </div>

                            <List {...getMenuProps()}>
                                {isOpen
                                    ? options
                                        .filter(item => !inputValue || item.customerName.toLowerCase().includes(inputValue))
                                        .map((item, index) => (
                                            <CustomerSearch
                                                {...getItemProps({
                                                    key: item.customerName,
                                                    index,
                                                    item,
                                                    style: {
                                                        backgroundColor:
                                                            highlightedIndex === index ? "#f6f6f7" : "white",
                                                        fontWeight: selectedItem === item ? "bold" : "normal"
                                                    }
                                                })}
                                                customerName={item.customerName}
                                            />

                                        ))
                                    : null}
                            </List>
                        </div>
                    )
                }}
            </Downshift>
            <FormErrorMessage>{meta.error && meta.error}</FormErrorMessage>
        </FormControl>
    );
}

export class DofMe extends React.Component {
    render() {
        console.log(this.props);
        return (
            <Downshift />
        )
    }
}