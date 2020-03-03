import React from 'react';
import { useHistory } from 'react-router-dom'
import { InputGroup, Stack, Box, Link, Input, Button, InputRightElement } from '@chakra-ui/core'
import { Meteor } from 'meteor/meteor';
import * as Analytics from '/imports/ui/analytics';


const Login: React.FunctionComponent = (): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const history = useHistory()

    interface AuthInterface {
        username: string,
        password: string
    }
    const authInit: AuthInterface = {
        username: "",
        password: ""
    }
    const [value, setValue] = React.useState<AuthInterface>(authInit);
    const handleChange = (input: string, event: any) => {
        let updatedValue: AuthInterface = value
        switch (input) {
            case 'password':
                updatedValue['password'] = event.target.value
                break;
            case 'username':
                updatedValue['username'] = event.target.value
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
        Analytics.identify(value.username)
        Analytics.track("User Login", value)
        Meteor.loginWithPassword(value.username, value.password);
        history.push('/kitchen/food');
    }


    return (
        <Box my="6">

            <form onSubmit={(e) => handleSubmit(e)}>
                <Stack spacing="6" >
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

                    <Button width="100%" variantColor="green" type="submit" size='lg'>Login</Button>
                    <Link href="/signup">Don't have an account, Create one</Link>
                </Stack>
            </form>
        </Box>
    );
}

export default Login