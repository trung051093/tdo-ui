import {
  Box,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { DefaultLayout } from '@my-work/layouts/Default';
import { FormikProvider, useFormik } from 'formik';
import { FormInput, FormPassword } from '@tdo-ui/core/lib/FormControl';
import { ROUTES } from '@my-work/constants';
import * as yup from 'yup';
import { useAuthRegister } from '@my-work/hooks/useAuth';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: yup
    .string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
});

export const Register = () => {
  const register = useAuthRegister();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      register.mutate(values);
    },
  });

  return (
    <DefaultLayout>
      <FormikProvider value={formik}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
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
                <HStack>
                  <Box>
                    <FormInput
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      type="text"
                    />
                  </Box>
                  <Box>
                    <FormInput
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      type="text"
                    />
                  </Box>
                </HStack>
                <FormInput id="email" name="email" label="Email" type="email" />
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
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user?{' '}
                    <Link href={ROUTES.Authentication.LOGIN} color={'blue.400'}>
                      Login
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
