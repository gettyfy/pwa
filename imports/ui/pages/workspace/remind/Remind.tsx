import React from 'react';
import { useHistory } from 'react-router-dom'
import { Box, Stack, FormButton, Heading, Flex, Text, Box, Flex, Heading, Stack Select } from "@chakra-ui/core";
import styled from '@emotion/styled'
import Path from '/imports/ui/router';
import { Meteor } from 'meteor/meteor'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, PageHeader, FormikForm, CheckField } from '/imports/ui/components'
import theme from '/imports/lib/theme'


const Record: React.FC = (props) => {
  const history = useHistory()

  const init = {
    whatsapp: true,
  }

  const handleSubmit = async (values) => {
    await props.updateState(values)
    console.log(props.data)
    await Meteor.call('reminder.insert', props.data)
    history.push(`${Path.workspace.remind}/success`)
  }

  return (
    <React.Fragment>
      <PageHeader title="Transaction Detail" subTitle="" />

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
            <FormikForm isLoading={props.isSubmitting} analyticName="Create Reminder" formProps={props} buttonName="Create Reminder" withIcon>
              <CheckField name="whatsapp" boxLabel="Whatsapp" validate={Validator.isRequired} />
              <CheckField name="voice" boxLabel="Voice" validate={Validator.isRequired} />
              <CheckField name="sms" boxLabel="sms" validate={Validator.isRequired} />

              <InputField label="Description" placeholder="Payment for Artwork" name="itemName" validate={Validator.isRequired} />
              <Stack isInline>
                <Box width="40%">
                  <InputField label="Quantity" placeholder="1" name="quantity" validate={Validator.isNumeric} />
                </Box>
              </Stack>




            </FormikForm>
          )}
        </Formik>


      </Box>
    </React.Fragment>
  )
}


export default Record



