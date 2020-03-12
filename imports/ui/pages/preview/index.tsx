/**
 * This page will act as a preview screen for all our components
 */


import React from 'react';
import * as Validator from '/imports/lib/validator'
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import { Formik, FormikProps } from 'formik'
import { InputField, PageHeader, TransactionList, RadioField, SelectField, AutoCompleteField, CheckField, FormikForm, RadioButtonField, PasswordField, InvoiceList, SummaryList, SummaryRow, Item, ItemList } from '/imports/ui/components'


const Signup: React.FC = () => {

    interface AuthInterface {
        fullname: string,
        username: string,
        password: string,
        [key: string]: string
    }
    const authInit: AuthInterface = {
        fullname: "",
        username: "",
        password: "",
    }

    const handleSubmit = (values: AuthInterface) => {
        console.log(values);
        const options = values
        Accounts.createUser({
            email: options.username,
            password: options.password,
            profile: {
                name: options.fullname
            }
        }, (error) => {
            if (error) {
                console.log(error.message);
                return alert(error.message)
            }
            else {
                alert(`SIGNUP WAS SUCCESSFUL FOR ${JSON.stringify(Meteor.user())}`)
            }
        })
    }
    const autoCompleteOptions = [
        { value: "apple" },
        { value: "pear" },
        { value: "orange" },
        { value: "grape" },
        { value: "banana" }
    ]


    return (
        <>
            <PageHeader />
            <Formik
                initialValues={authInit}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        handleSubmit(values)
                        actions.setSubmitting(false);
                    }, 10000);
                }}
            >
                {(props: FormikProps<any>) => (
                    <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="Signup">
                        <InputField label="Your Full Name" placeholder="enter your name" name="fullname" validate={Validator.isRequired} />
                        <InputField label="Your Email" placeholder="enter an email address" name="username" validate={Validator.isEmail} />
                        <PasswordField label="Your Password" placeholder="set a password" name="password" validate={Validator.isRequired} />
                        <RadioField name="type" label="What Org Type" validate={Validator.isRequired} options={["Organization", "Individual"]} />
                        <RadioButtonField name="buttine" label="Radio Button" validate={Validator.isRequired} options={["Customer", "Debtor"]} />
                        <CheckField name="org-box" boxLabel="Check Item" validate={Validator.isRequired} />
                        <SelectField placeholder="Search" name="select" label="Select Label" validate={Validator.isRequired} options={["Organization", "Individual"]} />
                        <AutoCompleteField placeholder="Search" name="downshift" label="Select Label" validate={Validator.isRequired} options={autoCompleteOptions} />
                        <TransactionList
                            customerStatus="10 days to overdue"
                            customerName="Bukola Saraki"
                            amount="GHC233"
                            paymentStatus="PAID"
                            overdueAmount="GHC346"
                            overdueStatus="OVERDUE"
                            cardLink="/signup"
                            iconName="chevron-right"
                            iconSize="24px"
                            analyticName="Click Transaction item"
                        />
                        <InvoiceList
                            customerName="Joe Bimond"
                            amount="GHC 200"
                            date=" 12 Jan 2020"
                            link="path.workspace.createTransaction"

                        />

                        <SummaryRow>
                            <SummaryList
                                name="Evans Dabo"
                                phone="020 747 475"
                                email="me@gmail.com"
                                location="22 Aluguntugui East legon Accra"
                                iconName="view"
                                iconSize="15px"
                            />
                        </SummaryRow>

                        <Item>
                            <ItemList
                                customerItem="LG Mini Home"
                                customerName="Bukola Saraki"
                                amount="GHC346"
                            />


                        </Item>

                    </FormikForm>
                )}


            </Formik>
        </>
    );
}

export default Signup