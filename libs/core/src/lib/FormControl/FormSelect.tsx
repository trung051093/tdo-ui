import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
} from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';

export type FormSelectProps = FieldHookConfig<string> & {
  label: string;
  name: string;
};

export const FormSelect = ({
  id,
  type,
  label,
  placeholder,
  ...rest
}: FormSelectProps) => {
  const [field, meta] = useField(rest);

  const isError = meta.touched && !!meta.error;

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select {...field} />
      {!isError ? (
        <FormHelperText>{placeholder}</FormHelperText>
      ) : (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};
