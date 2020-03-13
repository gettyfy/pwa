import React from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Stack, Icon, Divider, Flex, Text, Input } from '@chakra-ui/core'
import styled from '@emotion/styled'
import Path from '/imports/ui/router'
import { Formik, FormikProps, } from 'formik'
import { SelectField, PageHeader, FormikForm, TransactionList } from '/imports/ui/components'
import * as Validator from '/imports/lib/validator'


const StyledRecover = styled.main`
  display: flex;
  flex-direction: column;
`

const List: React.FunctionComponent = (props: any) => {
  const history = useHistory();
  // const handleSubmit = () => {
  //     history.push('/success');
  // }


  interface ICustomerInterface {
    customerName: string,
    customerAddress: string,
    customerEmail: string,
    customerNumber: string,
    name: string,
    address: string,
    select: string,
    phonenumber: string,
    [key: string]: string
  }
  const authInit: ICustomerInterface = {
    customerName: "",
    customerAddress: "",
    customerEmail: "",
    customerNumber: "",
    name: "",
    address: "",
    select: "",
    phonenumber: "",
  }

  const handleSubmit = async (values: ICustomerInterface) => {
    await props.updateState(values)

    console.log(values)
    history.push(`${Path.workspace.recovery}/reason`)
  }





  return (

    <React.Fragment>
      <PageHeader title="Recover" subTitle="Escalate a bad debt to a professional debt collector" />
      <Box py={4}>
        <Formik
          initialValues={authInit}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleSubmit(values)
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props: FormikProps<any>) => (
            <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="SAVE">
              <SelectField placeholder="Search" name="select" label="Search Customer" validate={Validator.isRequired} options={["Bukola Saraki", "Mohammed Muraril"]} />



            </FormikForm>
          )}
        </Formik>



        <StyledRecover>

          <Stack spacing={3}>

            <Box mt="6">

            </Box>
          </Stack>

          <Flex mt="40px" flexDirection="row">
            <Box ml="100px">
            </Box>

          </Flex>

          <Flex FlexDirection="row" justify="space-between" mt="6" ml="8" mr="8">
            <Text fontSize="xs" color="tomato">Payments overdue</Text>
            <Icon name="drag-handle" size="13px" ml="200px" />


            <Box justify="space-between">
              <Divider borderColor="grey.200" />
            </Box>


          </Flex>

          <Box mt="10">

            <TransactionList

              customerStatus="10 days to overdue"
              customerName="Evans Boateng"
              amount="GHc233"
              paymentStatus="PAID"
              overdueAmount="GHC346"
              overdueStatus="OVERDUE"
              cardLink="/recovery/reason"
              iconName="chevron-right"
              iconSize="24px"
            />

            <TransactionList
              customerStatus="10 days to overdue"
              customerName="Evans Boateng"
              amount="GHc233"
              paymentStatus="PAID"
              overdueAmount="GHC346"
              overdueStatus="OVERDUE"
              cardLink="/recovery/reason"
              iconName="chevron-right"
              iconSize="24px"
            />


            <TransactionList
              customerStatus="10 days to overdue"
              customerName="Evans Boateng"
              amount="GHc233"
              paymentStatus="PAID"
              overdueAmount="GHC346"
              overdueStatus="OVERDUE"
              cardLink="/recovery/reason"
              iconName="chevron-right"
              iconSize="24px"
            />


            <TransactionList
              customerStatus="10 days to overdue"
              customerName="Evans Boateng"
              amount="GHc233"
              paymentStatus="PAID"
              overdueAmount="GHC346"
              overdueStatus="OVERDUE"
              cardLink="/recovery/reason"
              iconName="chevron-right"
              iconSize="24px"
            />


            <TransactionList
              customerProfile="Sasuke Uchiha"
              customerStatus="10 days to overdue"
              customerName="Evans Boateng"
              amount="GHc233"
              paymentStatus="PAID"
              overdueAmount="GHC346"
              overdueStatus="OVERDUE"
              cardLink="/recovery/reason"
              iconName="chevron-right"
              iconSize="24px"
            />
          </Box>


        </StyledRecover>

      </Box>
    </React.Fragment>

  );
}

export default List