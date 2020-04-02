import React from 'react';
import { useHistory } from 'react-router-dom'
import { Box, Stack, FormButton, Icon, Heading, Flex, Text, Box, Flex, Heading, Stack Select, ControlBox, VisuallyHidden } from "@chakra-ui/core";
import styled from '@emotion/styled'
import Path from '/imports/ui/router';
import { Meteor } from 'meteor/meteor'
import * as Validator from '/imports/lib/validator'
import { Formik, FormikProps } from 'formik'
import { InputField, PageHeader, FormikForm, CheckField, StatusText, SelectField, TextAreaField } from '/imports/ui/components'
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

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <React.Fragment>
      <PageHeader title="Reminder Rules" subTitle="Where should we send your reminder?" />

      <Box py={4}>

        <Box width="95%">

          <a href="#">
            <Heading pr="3" pb="1" textDecoration="underline" as="h6" size="sm" textAlign="right">Add More Channels</Heading>
          </a>
          <Stack isInline spacing={8} justifyContent="space-around">

            <label>
              <Stack>
                {/* This is the sibling input, it's visually hidden */}
                <VisuallyHidden onChange={handleChange} as="input" type="checkbox" defaultChecked />
                {/* This is the control box with a check icon as children */}
                <ControlBox
                  borderWidth="1px"
                  bg="gray.500"
                  size="3.5rem"
                  rounded="sm"
                  _checked={{ bg: "green.500", color: "white", borderColor: "green.500" }}
                  _focus={{ borderColor: "green.600", boxShadow: "outline" }}
                >
                  <Icon name="chat" size="28px" />
                </ControlBox>

                {/* You can pass additional text */}
                <Box as="span" verticalAlign="top">
                  <StatusText textAlign="center">Whatsapp</StatusText>
                </Box>
              </Stack>
            </label>

            <label>
              <Stack>
                {/* This is the sibling input, it's visually hidden */}
                <VisuallyHidden as="input" type="checkbox" defaultChecked />
                {/* This is the control box with a check icon as children */}
                <ControlBox
                  borderWidth="1px"
                  size="3.5rem"
                  bg="gray.500"
                  rounded="sm"
                  _checked={{ bg: "blue.500", color: "white", borderColor: "blue.500" }}
                  _focus={{ borderColor: "green.600", boxShadow: "outline" }}
                >
                  <Icon name="bell" size="28px" />
                </ControlBox>

                {/* You can pass additional text */}
                <Box as="span" verticalAlign="top">
                  <StatusText textAlign="center">SMS</StatusText>
                </Box>
              </Stack>
            </label>

            <label>
              <Stack>
                {/* This is the sibling input, it's visually hidden */}
                <VisuallyHidden as="input" type="checkbox" defaultChecked />
                {/* This is the control box with a check icon as children */}

                <ControlBox
                  borderWidth="1px"
                  size="3.5rem"
                  bg="gray.500"
                  rounded="sm"
                  _checked={{ bg: "blue.500", color: "white", borderColor: "blue.500" }}
                  _focus={{ borderColor: "green.600", boxShadow: "outline" }}
                >
                  <Icon name="phone" size="28px" />
                </ControlBox>

                {/* You can pass additional text */}
                <Box as="span" verticalAlign="top">
                  <StatusText textAlign="center">VOICE</StatusText>
                </Box>
              </Stack>
            </label>

            <label>
              <Stack>
                {/* This is the sibling input, it's visually hidden */}
                <VisuallyHidden as="input" type="checkbox" defaultChecked />
                {/* This is the control box with a check icon as children */}
                <ControlBox
                  borderWidth="1px"
                  size="3.5rem"
                  bg="gray.500"

                  rounded="sm"
                  _checked={{ bg: "blue.500", color: "white", borderColor: "blue.500" }}
                  _focus={{ borderColor: "green.600", boxShadow: "outline" }}
                >
                  <Icon name="email" size="28px" />
                </ControlBox>

                {/* You can pass additional text */}
                <Box as="span" verticalAlign="top">
                  <StatusText textAlign="center">EMAIL</StatusText>
                </Box>
              </Stack>
            </label>

          </Stack>

        </Box>



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
            <FormikForm isLoading={props.isSubmitting} analyticName="Send Reminder" formProps={props} buttonName="Create Reminder" withIcon>
              {/* <InputField label="Description" placeholder="Payment for Artwork" name="itemName" validate={Validator.isRequired} /> */}

              <Stack isInline spacing={8}>
                <CheckField name="high" boxLabel="High" />
                <CheckField name="medium" boxLabel="Low" />
                <CheckField name="low" boxLabel="Low" />
              </Stack>

              <Box mt="4">
                <Heading as="h3" size="sm">Frequency</Heading>
                <SelectField validate={Validator.isRequired} placeholder="Daily" name="frequency" label="Frequency" options={["Daily", "Weekly", "Bi-Weekly", "Monthly"]} />
              </Box>


              <Box>
                <TextAreaField placeholder="Type your address here" label="Text Area" validate={Validator.isRequired} name="textarea" />
              </Box>





            </FormikForm>
          )}
        </Formik>


      </Box>
    </React.Fragment>
  )
}


export default Record



