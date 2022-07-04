import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';

export type FormInputProps = FieldHookConfig<string> & {
  label: string;
  name: string;
  readOnly?: boolean;
  hidden?: boolean;
};

export const FormInput = ({
  id,
  type,
  label,
  placeholder,
  readOnly,
  hidden,
  ...rest
}: FormInputProps) => {
  const [field, meta] = useField({
    id,
    type,
    ...rest,
  });
  const isError = meta.touched && !!meta.error;

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input {...field} readOnly={readOnly} hidden={hidden} />
      {!isError ? (
        <FormHelperText>{placeholder}</FormHelperText>
      ) : (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};
