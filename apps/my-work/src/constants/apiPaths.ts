export const ApiPaths = {
  auth: {
    login: '/api/v1/auth/login',
    register: '/api/v1/auth/register',
    forgotPassword: '/api/v1/auth/forgot-password',
    resetPassword: '/api/v1/auth/reset-password',
    google: '/api/v1/auth/google/login',
  },
  user: {
    list: '/api/v1/users',
    create: '/api/v1/user',
    delete: '/api/v1/user/:id',
    update: '/api/v1/user/:id',
    get: '/api/v1/user/:id',
  },
  file: {
    presignedUrl: '/api/v1/file/presign-url',
    upload: '/upload/images',
  },
};
