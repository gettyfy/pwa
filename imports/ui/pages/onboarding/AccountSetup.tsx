import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useFormik } from 'formik'

import { Box, Heading, Divider, Button} from '@chakra-ui/core'
import { FormButton } from '/imports/ui/components';



const WizardFormSecondPage: React.FunctionComponent = (props: any) => {
    const history = useHistory();

    const handleButton = (variable: string) => {
        formik.values.type = variable
        formik.handleSubmit()
    }

    const formik = useFormik({
        initialValues: {
            type: ''
        },
        onSubmit: async values => {
            console.log(values, "FROM FORMIK")
            await props.updateState(values)
            history.push('/onboarding/company-setup');
        }
    })

    // const handleSubmit = async (values) => {
    //     await props.updateState(values)
    //     history.push('/onboarding/company-setup');
    // }


    return (
        <Box p={4}>
            <Heading>Account Setup</Heading>
            <Box mt="5"><Divider  borderColor="blue.500" /></Box>
            <Box mb="20"><p>We’re in the process of setting up your account, before that let us know how you would like to use fynance</p></Box>
            
            <Box height="5.5rem"></Box>

            <Box mb="5"><p>I will use Fynance to manage</p></Box>

        


            
            <FormButton handleAction={() => handleButton("business")} buttonName="Business Transaction" buttonColor="#0B69FF" color="#FFF"  mb="10" /> 
            <FormButton handleAction={() => handleButton("individual")} value="ind" buttonName="Individual"buttonColor="#0B69FF" color="#FFF"  mb="10"/> 
            
        </Box>
    );
}

export default WizardFormSecondPage