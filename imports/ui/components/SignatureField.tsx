/**
 * Signature Pad Field Component
 * https://codesandbox.io/s/quizzical-bartik-3flkc FOR USER INITIALS SIGNATURE FIELD
 * https://dev.to/ma7eer/create-a-signature-pad-in-react-3mmi SIGNATURE USING REACT-SIGNATURE-PAD
 */


import React, { Component, useRef, useState } from 'react'
import SignaturePad from 'react-signature-canvas'
import { Box, Button, FormErrorMessage, FormLabel, FormControl, Flex } from '@chakra-ui/core'
import { useField, Form, Field, FieldProps, FieldInputProps, FormikValues } from 'formik'


// interface ICustomRadio {
//     isChecked: boolean,
//     isDisabled: boolean,
//     name: string,
//     value: string,
//     children: any,
//     [key: string]: any

// }



export class SignatureField extends Component {
    state = { trimmedDataURL: null }
    sigPad = {}

    clear = () => {
        this.sigPad.clear()
    }

    trim = (data) => {
        let { value } = data
        console.log(this);

        const signedPad = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
        this.props.value = signedPad

        // pass in the signature pad value into Formik Fields
        data.value = signedPad
        console.log(signedPad);
        this.setState({ trimmedDataURL: signedPad })
        return data
    }

    render() {
        let { trimmedDataURL } = this.state


        const { validate, name, defaultValue, options, label, ...rest } = this.props
        // console.log(this);
        //@ts-ignore

        // directly call meta in place of meta.touched to show all errors ::: FIX ISSUE with component not displaying error onDirty
        return (
            <Field name={name} validate={validate} {...this.props}>
                {({ field, form }: FieldProps<FieldInputProps<any>, FormikValues>) => (
                    //@ts-ignore
                    <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
                        {label && <FormLabel id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} color="gray.600">{label}</FormLabel>}

                        <Box border="2px" borderColor="gray.800" pt="2">
                            <Box>
                                <SignaturePad {...field} canvasProps={{ className: "meteor-style-main-css" }}
                                    ref={(ref) => { this.sigPad = ref }} />
                            </Box>
                            <Flex justify="space-between" bg="gray.100" width="100%">
                                <Button width="100%" borderRadius="0" variant="outline" onClick={this.clear}>Clear</Button>
                                <Button width="100%" variantColor="green" borderRadius="0" onClick={this.trim}>Save</Button>
                            </Flex>
                        </Box>
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                )
                }
            </Field>
        )
    }






/*

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




          {/* {trimmedDataURL
                    ? <img className="signature-image"
                        src={trimmedDataURL || ""} />
                    : null
                } */







