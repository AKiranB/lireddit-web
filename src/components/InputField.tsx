import React from "react";
import { useField } from "formik"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { values } from "lodash";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
    const [field, { error }] = useField(props);

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    )



}