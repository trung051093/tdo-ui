export const ROUTES = {
  Home: '/',
  Photos: '/photos',
  Users: {
    Management: '/users',
    Edit: '/user/:userId'
  },
  Authentication: {
    LOGIN_TOKEN: '/auth/token',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    SIGNUP: '/auth/sign-up',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
};
