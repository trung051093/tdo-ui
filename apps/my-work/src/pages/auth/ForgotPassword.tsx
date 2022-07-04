import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { DefaultLayout } from '@my-work/layouts/Default';
import { FormikProvider, useFormik } from 'formik';
import { FormInput, FormPassword } from '@tdo-ui/core/lib/FormControl';
import * as yup from 'yup';
import { useForgotPassword } from '@my-work/hooks';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
});

export const ForgotPassword = () => {
  const forgotPassword = useForgotPassword();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      forgotPassword.mutate(values);
    },
  });

  return (
    <DefaultLayout>
      <FormikProvider value={formik}>
        <Stack spacing={8} mx={'auto'} minW={'md'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Forgot Password
            </Heading>
            <Text fontSize="lg" color="gray.600">
              We'll send an email to help you setup new password.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            {forgotPassword.isSuccess ? (
              <Text fontSize="lg" color="gray.600">
                We just send an email to help you reset your password. Pls help check your mail box !!!
              </Text>
            ) : (
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={4}>
                  <FormInput
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                  />
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      type="submit"
                    >
                      Forgot Password
                    </Button>
                  </Stack>
                </Stack>
              </form>
            )}
          </Box>
        </Stack>
      </FormikProvider>
    </DefaultLayout>
  );
};
