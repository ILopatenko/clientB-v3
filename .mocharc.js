module.exports = {
  //Import babel to the project
  require: '@babel/register',
  //Setup all the specs that will be runned
  spec: 'specs/user/*.spec.js',
  //Setup configuretion file - MAIN HOOKS
  file: 'config/setup.js',
  //Setup all the specs that will be ignored
  //ignore: 'specs/auth.spec.js',
  //Setup additionall timeout (2000 by default)
  timeout: 4000,
};
