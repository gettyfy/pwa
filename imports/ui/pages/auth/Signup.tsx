import React, { ChangeEvent } from 'react';
import { InputGroup, Box, Link, Stack, Input, Button, InputRightElement } from '@chakra-ui/core'
import { Accounts } from 'meteor/accounts-base';
import { Formik, Form, Field } from 'formik'
// import * as Analytics from '/imports/ui/analytics'


const Signup: React.FunctionComponent = (): any => {
    interface AuthInterface {
        fullname: string,
        username: string,
        password: string,
        [key: string]: string
    }
    const authInit: AuthInterface = {
        username: "",
        password: "",
        fullname: "",
    }
    const [show, setShow] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<AuthInterface>(authInit);
    const handleClick = () => setShow(!show);

    const handleChange = (input: string, event: any) => {
        let updatedValue: AuthInterface = value
        switch (input) {
            case 'password':
                updatedValue['password'] = event.target.value
                break;
            case 'username':
                updatedValue['username'] = event.target.value
                break;
            case 'fullname':
                updatedValue['fullname'] = event.target.value
                break;
            default:
                updatedValue = value
                break;
        }
        setValue(Object.assign(value, updatedValue));
        console.log(value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const options = value
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
                return window.location.replace('/wizard');
            }
        })
    }


    return (
        <Box my="6">

            <form onSubmit={(e) => handleSubmit(e)}>
                <Stack spacing="6" >
                    <Input
                        size="lg"
                        type={'fullname'}
                        onChange={(e: any) => handleChange('fullname', e)}
                        placeholder="Enter Fullname"
                    />
                    <Input
                        size="lg"
                        type={'username'}
                        onChange={(e: any) => handleChange('username', e)}
                        placeholder="Enter Username"
                    />

                    <InputGroup size="lg">
                        <Input
                            pr="4.5rem"
                            size="lg"
                            onChange={(e: any) => handleChange('password', e)}
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <Button type="submit" size='lg'>Signup</Button>
                    <Link href="/login">Have an account, Login</Link>

                </Stack>
            </form>
        </Box>
    );
}

export default Signup
