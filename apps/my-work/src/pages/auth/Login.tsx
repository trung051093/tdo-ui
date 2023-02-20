import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Divider,
} from '@chakra-ui/react';
import { DefaultLayout } from '@my-work/layouts/Default';
import { FormInput, FormPassword } from '@tdo-ui/core/lib/FormControl';
import { ROUTES } from '@my-work/constants';
import { useAuthLogin } from '@my-work/hooks/useAuthSrp';

const validationSchema = yup.object({
  username: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
});

export const Login = () => {
  const login = useAuthLogin();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('🚀 ~ file: Login.tsx:35 ~ Login ~ values', values);
      login.mutate(values);
    },
  });

  return (
    <DefaultLayout>
      <FormikProvider value={formik}>
        <Stack spacing={8} mx={'auto'} minW={'md'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Login
            </Heading>
            <Text fontSize="lg" color="gray.600">
              to enjoy all of our cool features
            </Text>
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
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
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
                    Sign in
                  </Button>
                </Stack>
                <Divider />
                <Stack pt={6}>
                  <Text align={'center'}>
                    Don't have account?{' '}
                    <Link
                      href={ROUTES.Authentication.REGISTER}
                      color={'blue.400'}
                    >
                      Register
                    </Link>
                  </Text>
                </Stack>
                <Stack>
                  <Text align={'center'}>
                    <Link
                      href={ROUTES.Authentication.FORGOT_PASSWORD}
                      color={'blue.400'}
                    >
                      Forgot password?
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </FormikProvider>
    </DefaultLayout>
  );
};
