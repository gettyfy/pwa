/**
 * This page will act as a preview screen for all our components
 */


import React from 'react';
import * as Validator from '/imports/lib/validator'
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/random'
import { Formik, FormikProps } from 'formik'
import {
    InputField,
    PageHeader,
    TransactionList,
    RadioField,
    TextAreaField,
    SelectField,
    AutoCompleteField,
    SignatureField,
    CheckField, FormikForm, RadioButtonField, PasswordField, InvoiceList, SummaryList, SummaryRow,
    Item,
    ItemList,
    CustomerSearchField,
    TransactionSearchField
} from '/imports/ui/components'
import { CheckButtonField } from '/imports/ui/components/Fields'


const Signup: React.FC = () => {


    console.log("ID -", Random.id());
    console.log("SECRET -", Random.secret());
    console.log("HEXSTRING[22] - ", Random.hexString(22));

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
        signature: "",
        buttine: ""

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
        { value: "Apple" },
        { value: "Pear" },
        { value: "Orange" },
        { value: "Grape" },
        { value: "Banana" },
        { value: "Coloran" },
        { value: "Buran" },
        { value: "Zeron" },
        { value: "Fedan" },
        { value: "Chrysler" },
        { value: "Ferrari" },
        { value: "Bugati" }
    ]
    const customerOptions = [
        { customerName: "Udoka", customerNumber: "0240337741", value: "Apple" },
        { customerName: "Udoma", customerNumber: "0240337741", value: "Pear" },
        { customerName: "Amanda", customerNumber: "0240337741", value: "Orange" },
        { customerName: "Kelechi", customerNumber: "0240337741", value: "Grape" },
        { customerName: "Buhari", customerNumber: "0240337741", value: "Banana" },
        { customerName: "Buhami", customerNumber: "0240337741", value: "Coloran" },
        { customerName: "Baba Bukola", customerNumber: "0240337741", value: "Buran" },
        { customerName: "Baba Saraki", customerNumber: "0240337741", value: "Zeron" },
        { customerName: "Chinyere", customerNumber: "0240337741", value: "Fedan" },
        { customerName: "Baba Sanwo", customerNumber: "0240337741", value: "Chrysler" },
        { customerName: "Udoka Kima", customerNumber: "0240337741", value: "Ferrari" },
        { customerName: "Udoka Chima", customerNumber: "0240337741", value: "Bugati" }
    ]


    return (
        <>
            <PageHeader useHeader />
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
                        <TransactionSearchField placeholder="Search Transaction" name="transaction" label="Search Transaction" validate={Validator.isRequired} options={customerOptions} />
                        <CustomerSearchField placeholder="Find Customer" name="customer" label="Search Customer" validate={Validator.isRequired} options={customerOptions} />

                        <TextAreaField placeholder="Type your address here" label="Text Area" validate={Validator.isRequired} name="textarea" />
                        <InputField label="Your Full Name" placeholder="enter your name" name="fullname" validate={Validator.isRequired} />
                        <InputField label="Your Email" placeholder="enter an email address" name="username" validate={Validator.isEmail} />
                        <PasswordField label="Your Password" placeholder="set a password" name="password" validate={Validator.isRequired} />
                        <RadioField name="type" label="What Org Type" validate={Validator.isRequired} options={["Organization", "Individual"]} />
                        <RadioButtonField name="buttine" label="Radio Button" validate={Validator.isRequired} options={["Customer", "Debtor"]} />
                        <CheckButtonField name="checkbutton" label="Check Button" validate={Validator.isRequired} options={["Customer", "Installer", "Merchant", "Debtor"]} />
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
                                analyticName="Click Invoice Item"
                                customerItem="LG Mini Home"
                                customerName="Bukola Saraki"
                                amount="GHC346"
                            />
                        </Item>



                        <SignatureField name="signature" validate={Validator.isSignature} />

                    </FormikForm>
                )}


            </Formik>
        </>
    );
}

export default Signup