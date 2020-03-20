/**
 * Signature Pad Field Component
 * https://codesandbox.io/s/quizzical-bartik-3flkc FOR USER INITIALS SIGNATURE FIELD
 * https://dev.to/ma7eer/create-a-signature-pad-in-react-3mmi SIGNATURE USING REACT-SIGNATURE-PAD
 */


import React, { useRef, useState, MutableRefObject } from 'react'
import SignaturePad from 'react-signature-pad-wrapper'
import { Box, Button, FormErrorMessage, FormLabel, FormControl, Flex } from '@chakra-ui/core'
import { useField } from 'formik'


interface SignatureProps {
    validate: Function,
    name: string
    label?: string,
    [key: string]: any
}

export const SignatureField: React.FC<SignatureProps> = (props): JSX.Element => {
    const { name, label, validate } = props
    const [field, meta, helpers] = useField(props)
    const [sigImg, setSigImg] = useState(null)


    interface ISigCanvas {
        clear: Function,
        getTrimmedCanvas: Function,
        [key: string]: any

    }

    const sigCanvas: MutableRefObject<ISigCanvas> = useRef({});
    console.log(sigCanvas);
    sigCanvas


    // This method clears the signature input derived from the canvas ref...
    const clear = () => sigCanvas.current.clear();

    // This method trims all white space on the canvas and exports a base64 image URL 
    const save = () => {

        // create trimmed version of signature and save in variable xImg FOR REACT CANVAS
        // const xImg = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
        // return setSigImg(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'))

        const xImg = sigCanvas.current.toDataURL();

        // call formik method to set xImg Value in Form
        helpers.setTouched(true) && helpers.setValue(xImg)
        console.log(xImg, "I AM X MANA");
        setSigImg(xImg)

        // return useState method for xImg
    }

    return (
        <FormControl isInvalid={meta['error'] && meta.touched} mt="5" position="relative">
            <FormLabel isInvalid={validate} {...field} htmlFor={[name, 'radio-button'].join('__')} color="gray.600">{label}</FormLabel>
            <Box border="2px" borderRadius="3px" borderColor="gray.800" pt="2">
                <Box>
                    <SignaturePad onClick={() => helpers.setTouched(true)}  {...field} canvasProps={{ className: "meteor-style-main-css" }} ref={sigCanvas} />
                </Box>
                <Flex justify="space-between" bg="gray.100" width="100%">
                    <Button width="100%" borderRadius="0" variant="outline" onClick={clear}>Clear</Button>
                    <Button isDisabled={false} width="100%" variantColor="green" borderRadius="0" onClick={save}>Save</Button>
                </Flex>
            </Box>
            <FormErrorMessage>{meta.error && meta.error}</FormErrorMessage>
        </FormControl>
    )

}




// export class SignatureFielD extends Component {
//     state = { trimmedDataURL: null }
//     sigPad = {}

//     clear = () => {
//         this.sigPad.clear()
//     }

//     trim = (data) => {
//         let { value } = data
//         console.log(this);

//         const signedPad = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
//         this.props.value = signedPad

//         // pass in the signature pad value into Formik Fields
//         data.value = signedPad
//         console.log(signedPad);
//         this.setState({ trimmedDataURL: signedPad })
//         return data
//     }

//     render() {
//         let { trimmedDataURL } = this.state


//         const { validate, name, defaultValue, options, label, ...rest } = this.props
//         // console.log(this);
//         //@ts-ignore

//         // directly call meta in place of meta.touched to show all errors ::: FIX ISSUE with component not displaying error onDirty
//         return (
//             <Field name={name} validate={validate} {...this.props}>
//                 {({ field, form }: FieldProps<FieldInputProps<any>, FormikValues>) => (
//                     //@ts-ignore
//                     <FormControl isInvalid={form.errors[name] && form.touched[name]} mt="5" position="relative">
//                         {label && <FormLabel id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} color="gray.600">{label}</FormLabel>}

//                         <Box border="2px" borderColor="gray.800" pt="2">
//                             <Box>
//                                 <SignaturePad  {...field} canvasProps={{ className: "meteor-style-main-css" }}
//                                     ref={(ref) => { this.sigPad = ref }} />
//                             </Box>
//                             <Flex justify="space-between" bg="gray.100" width="100%">
//                                 <Button width="100%" borderRadius="0" variant="outline" onClick={this.clear}>Clear</Button>
//                                 <Button width="100%" variantColor="green" borderRadius="0" onClick={this.trim}>Save</Button>
//                             </Flex>
//                         </Box>
//                         <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
//                     </FormControl>
//                 )
//                 }
//             </Field>
//         )
//     }
// }