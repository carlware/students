import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack
} from '@chakra-ui/core';
import { useField } from "formik";
import React from "react"

export const CInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <FormControl color="#3F4254" isInvalid={meta.error !== undefined && meta.touched}>
      <Stack isInline alignItems="baseline" my="0.5rem">
        <FormLabel flex="3" fontWeight="700" fontSize="sm" htmlFor={props.id || props.name}>{label}</FormLabel>
        <Flex flex="7" flexDir="column">
          <Input {...field} id={props.id} placeholder={props.placeholder} type={props.type} />
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </Flex>
      </Stack>
    </FormControl>
  );
}
