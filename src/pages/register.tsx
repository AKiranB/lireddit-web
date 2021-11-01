import React from 'react'
import { Formik, Form } from 'formik'
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Center } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';

interface registerProps {

}



const Register: React.FC<registerProps> = ({ }) => {
    return (

        <Wrapper variant='small'>
            <Formik initialValues={{ username: "", password: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}

            >
                {({ values, handleChange }) => (
                    <Form>
                        <FormControl>
                            <Center>
                                <FormLabel htmlFor="username">Username</FormLabel>
                            </Center>
                            <Input
                                value={values.username}
                                onChange={handleChange}
                                id="username"
                                placeholder="username"
                            />
                            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                        </FormControl>
                    </Form>
                )}

            </Formik>
        </Wrapper>

    );
}

export default Register