import React, { ChangeEvent } from 'react';
import * as Validator from '/imports/lib/validator'
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import { Formik, FormikProps } from 'formik'
import { InputField, RadioField, FormikForm, PasswordField } from '/imports/ui/components'


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


    return (
        <Formik
            initialValues={authInit}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    handleSubmit(values)
                    actions.setSubmitting(false);
                }, 300);
            }}
        >
            {(props: FormikProps<any>) => (
                <FormikForm isLoading={props.isSubmitting} analyticName="Signup Form" formProps={props} buttonName="Signup">
                    <InputField label="Your Full Name" placeholder="enter your name" name="fullname" validate={Validator.isRequired} />
                    <InputField label="Your Email" placeholder="enter an email address" name="username" validate={Validator.isEmail} />
                    <PasswordField label="Your Password" placeholder="set a password" name="password" validate={Validator.isRequired} />
                    <RadioField name="type" label="What Org Type" validate={Validator.isRequired} options={["Organization", "Individual"]} />
                </FormikForm>
            )}
        </Formik>
    );
}

export default Signup