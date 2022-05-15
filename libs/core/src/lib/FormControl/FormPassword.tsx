import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  Input,
  Button,
  InputRightElement,
} from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export type FormPasswordProps = FieldHookConfig<string> & {
  label: string;
  name: string;
};

export const FormPassword = ({
  id,
  type,
  label,
  placeholder,
  ...rest
}: FormPasswordProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [field, meta] = useField({
    id,
    type,
    placeholder,
    ...rest,
  });

  const isError = meta.touched && !!meta.error;
  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup>
        <Input type={showPassword ? 'text' : 'password'} {...field} />
        <InputRightElement h={'full'}>
          <Button
            variant={'ghost'}
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isError ? (
        <FormHelperText>{placeholder}</FormHelperText>
      ) : (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};
