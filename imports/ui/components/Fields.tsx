
/**
 * This File will house the Form Fields that would be re-used across the project
 */
import { Formik, useFormik, Field } from 'formik'
import { FormControl, Button, FormLabel, FormErrorMessage, Input } from '@chakra-ui/core'



/**
 * This will be the Formik Fields Hook that extends formik functionality into chakra form fields
 */



/**
 * Extend the Formik form fields
 */

interface InputFieldProps {
    name: string,
    label: string,
    placeholder: string

}




const InputField: React.FC<InputFieldProps> = (props) => {
    function validateName(value: string) {
        let error;
        if (!value) {
            error = "Name is required";
        } else if (value !== "Naruto") {
            error = "Jeez! You're not a fan 😱";
        }
        return error;
    }

    return (
        <Formik
            initialValues={{ name: "Sasuke" }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <Field name="name" validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor="name">First name</FormLabel>
                                <Input {...field} id="name" placeholder="name" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button
                        mt={4}
                        variantColor="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                    >
                        Submit
            </Button>
                </form>
            )}
        </Formik>
    );
}









const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <button type="submit">Submit</button>
        </form>
    );
};



























// ====== Export Field Components here ===========
export { InputField }