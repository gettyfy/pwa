import { useHistory } from 'react-router-dom';
import React from 'react'
import styled from '@emotion/styled';

import { Box, Flex, } from '@chakra-ui/core'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, SelectField, PageHeader, FormikForm, SignatureField, BreakLayout } from '/imports/ui/components'
import path from '/imports/ui/router'
import theme from '/imports/lib/theme'


import AgreementDoc from './AgreementDoc'

const Text = styled.p`
    font-size: 12px;
    display: flex;
    flex: 1
`
const Span = styled.span`
    font-weight: bold;
    padding-right: 2px;
`



const NegativeMargin = styled.section`
    margin-left: -2px;
`
const AgreementWrapper = styled.div`
    display: block;
    max-height: 250px;
    overflow-y: scroll;
    padding: 1rem;
`


const PaymentPlan: React.FunctionComponent = (props: any) => {
    const history = useHistory();
    const propData = props.data



    interface IPaymentPlanInterface {
        frequency: string,
        startDate: string,
        dueDate: string,
        agreementTemplate: string,
        signature: string,
        [key: string]: string
    }

    const init: IPaymentPlanInterface = {
        frequency: "monthly",
        startDate: "",
        dueDate: "",
        agreementTemplate: "default",
        signature: ""


    }




    const handleSubmit = async (values: IPaymentPlanInterface) => {
        await props.updateState(values)
        // console.log(values)
        history.push(`${path.workspace.createTransaction}/review`)
    }




    return (
        <React.Fragment>
            <PageHeader title="Payment Plan" subTitle="" />
            <Box py={4}>

                <Formik
                    initialValues={init}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            handleSubmit(values)
                            actions.setSubmitting(false);
                        }, 300);
                    }}
                >
                    {(props: FormikProps<any>) => (
                        <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="CREATE PAYMENT PLAN" withIcon>
                            <SelectField label="Frequency" name="frequency" validate={Validator.isRequired} options={["Monthly"]} />
                            <InputField label="Start Date" placeholder="Start" type="date" name="startDate" validate={Validator.isRequired} />
                            <InputField label="End Date" placeholder="End" type="date" name="dueDate" validate={Validator.isRequired} />

                            <Flex direction="column" mt="6" bg="gray.100" p="2" borderRadius={theme.custom.defaultRadius}>
                                <Text><Span>Payment Plan Generated for:</Span></Text>
                                <Text><Span>{propData && propData.amountDue || " "}</Span> <Span>GH₵ {'balance'}</Span></Text>
                            </Flex>

                            <BreakLayout>
                                <NegativeMargin>
                                    <Box p="5" pt="1" width="100.5%" m="0" bg="gray.200">
                                        <small>Use Agreement Template</small>
                                        <SelectField mt="0" name="agreementTemplate" validate={Validator.isRequired} options={["Default Template"]} />
                                    </Box>

                                    {/* Box to hold the agreement wrapper */}
                                    <Box border='1px' width="100.5%" bg="white">
                                        <AgreementWrapper>
                                            <AgreementDoc />
                                        </AgreementWrapper>

                                    </Box>
                                </NegativeMargin>
                            </BreakLayout>
                            <SignatureField label="Input your signature" name="signature" validate={Validator.isSignature} />







                        </FormikForm>
                    )}
                </Formik>


            </Box>
        </React.Fragment>
    );
}

export default PaymentPlan