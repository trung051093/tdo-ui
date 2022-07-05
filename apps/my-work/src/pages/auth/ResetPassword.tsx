import {
  Box,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { DefaultLayout } from '@my-work/layouts/Default';
import { FormikProvider, useFormik } from 'formik';
import { FormInput, FormPassword } from '@tdo-ui/core/lib/FormControl';
import * as yup from 'yup';
import { useAuthResetPassword } from '@my-work/hooks';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { useEffect } from 'react';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
  token: yup.string().required('Required'),
});

export const ResetPassword = () => {
  const location = useLocation();
  const resetPassword = useAuthResetPassword();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      token: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      resetPassword.mutate(values);
    },
  });

  useEffect(() => {
    const query = qs.parse(location.search);
    const { token, email } = query;
    if (token && email) {
      formik.setFieldValue('token', token);
      formik.setFieldValue('email', email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultLayout>
      <FormikProvider value={formik}>
        <Stack spacing={8} mx={'auto'} minW={'md'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Reset Password
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={4}>
                <FormInput
                  hidden
                  id="token"
                  name="token"
                  label=""
                  type="hidden"
                />
                <FormInput
                  readOnly
                  id="email"
                  name="email"
                  label="Email"
                  type="hidden"
                />
                <FormPassword
                  id="password"
                  name="password"
                  label="Password"
                  type="text"
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
                    Reset Password
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </FormikProvider>
    </DefaultLayout>
  );
};
