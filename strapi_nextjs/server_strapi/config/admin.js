module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ab0e6063714732f5a111d5be9440a707'),
  },
});
