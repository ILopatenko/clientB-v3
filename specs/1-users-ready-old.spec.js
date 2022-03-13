//IMPORT SECTION
//  Import {expect} assertion function from Chai assertion library
import { expect } from 'chai';

//  Import helper(s)
import UserHelper from '../helpers/user.helper';
import LocalHelper from '../helpers/local.helper';
//  Creating a new instance of helper(s)
const userHelper = new UserHelper();
const localHelper = new LocalHelper();

describe('USER ENTITY MAIN TEST SUITE', () => {
  //Create a new testUser with localHelper
  const testUser = localHelper.generateRandomDataForRegistration();
  describe.skip('  REGISTER FUNCTIONALITY MAIN TEST SUITE', () => {
    describe('  Positive smoke test (happy path) - successful registration of new USER with valid credentials', () => {
      before(async () => {
        //console.log('testUser', testUser);
        //Setup process.env variables
        process.env.USEREMAIL = testUser.email;
        process.env.USERPASSWORD = testUser.password;
        /* console.log(
          `New process.env.USEREMAIL = "${process.env.USEREMAIL}" and process.env.PASSWORD = "${process.env.USERPASSWORD}"`
        ); */
        //Register a new USER
        await userHelper.registerNewUser(testUser);
        /*   console.log(
          'Status Code of response from server after REGISTER request',
          userHelper.response.statusCode
        );
        console.log(
          'Body of response from server after REGISTER request',
          userHelper.response.body
        ); */
      });
      after(() => {
        //Save testUser in local Data Base
        localHelper.saveUserToLocalDB(testUser);
        /*  console.log(
          'After saving a new user in local Data Base',
          localHelper.DB
        ); */
      });
      it(`Checking that response status code is "${localHelper.testPath.user.register.success.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.register.success.statusCode
        );
      });
      it(`Checking that response.body has a message: "${localHelper.testPath.user.register.success.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.register.success.bodyMessage
        );
      });
    });
    describe('  Negative smoke test (unhappy path) - unsuccessful registration of new USER with invalid credentials (email of existing user)', () => {
      before(async () => {
        //Register a new USER with credentials from another USER
        await userHelper.registerNewUser(testUser);
        /*  console.log(
          'Status Code of response from server after REGISTER request',
          userHelper.response.statusCode
        );
        console.log(
          'Body of response from server after REGISTER request',
          userHelper.response.body
        ); */
      });
      it(`Checking that response status code is "${localHelper.testPath.user.register.theSameCred.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.register.theSameCred.statusCode
        );
      });
      it(`Checking that response.body has a message: "${localHelper.testPath.user.register.theSameCred.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.register.theSameCred.bodyMessage
        );
      });
    });
    describe('  Additional test cases for all the possible detail checks', () => {});
  });
  //
  //
  describe.skip('  LOGIN FUNCTIONALITY MAIN TEST SUITE', () => {
    describe('  Positive smoke test (happy path) - successful login with valid credentials', () => {
      before(async () => {
        await userHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
        /*   console.log(
          'Status Code of response from server after LOGIN request',
          userHelper.response.statusCode
        );
        console.log(
          'Body of response from server after LOGIN request',
          userHelper.response.body
        ); */
      });
      after(() => {
        //Add additional information (UserId, token and confirmation link in local DB)
        localHelper.updateLocalUserAfterLogin(userHelper.response.body);
        //console.log(localHelper.DB);
      });
      it(`Checking that response status code is "${localHelper.testPath.user.login.success.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.login.success.statusCode
        );
      });
      it(`Checking that response.body has a message: "${localHelper.testPath.user.login.success.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.login.success.bodyMessage
        );
      });
      it.skip(`Checking that user has role "new"`, () => {
        expect(userHelper.response.body.payload.user.roles[0]).to.be.eq('new');
      });
    });

    describe('  Negative smoke test (unhappy path) - unsuccessful login with invalid credentials (wrong email)', () => {
      before(async () => {
        await userHelper.login('qqq@dsfsdf.rrr', process.env.USERPASSWORD);
        /*   console.log(
          'Status Code of response from server after LOGIN request',
          userHelper.response.statusCode
        );
        console.log(
          'Body of response from server after LOGIN request',
          userHelper.response.body
        ); */
      });
      it(`Checking that response status code is "${localHelper.testPath.user.login.error.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.login.error.statusCode
        );
      });
      it(`Checking that response.body has a message: "${localHelper.testPath.user.login.error.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.login.error.bodyMessage
        );
      });
    });
    describe('  Additional test cases for all the possible detail checks', () => {});
  });
  describe.skip('  EMAIL CONFIRMARION FUNCTIONALITY MAIN TEST SUITE', () => {
    describe('  POSITIVE Smoke test', () => {
      before(async () => {
        await userHelper.confirmEmail(
          localHelper.DB.users[localHelper.DB.users.length - 1]
        );
        /*  console.log(
          'Status Code of response from server after LOGIN request',
          userHelper.response.statusCode
        );
        console.log(
          'Body of response from server after LOGIN request',
          userHelper.response.body
        ); */
      });
      it(`Checking that response status code is "${localHelper.testPath.user.emailConfirmarion.success.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.emailConfirmarion.success.statusCode
        );
      });
      it(`Checking that response.body has a message: "${localHelper.testPath.user.emailConfirmarion.success.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.emailConfirmarion.success.bodyMessage
        );
      });
    });
    describe('        Checking that after email confirmation user has role "verified"', () => {
      before(async () => {
        await userHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
        /*  console.log(
          'Status Code of response from server after LOGIN request',
          userHelper.response.statusCode
        );
        console.log(
          'Body of response from server after LOGIN request',
          userHelper.response.body
        ); */
      });
      it(`Checking that response status code is "${localHelper.testPath.user.login.success.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.login.success.statusCode
        );
      });
      it(`Checking that response.body has a message: "${localHelper.testPath.user.login.success.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.login.success.bodyMessage
        );
      });
      it(`Checking that user has role "verified"`, () => {
        expect(userHelper.response.body.payload.user.roles[0]).to.be.eq(
          'verified'
        );
      });
    });
    describe('  NEGATIVE test case', () => {
      before(async () => {
        await userHelper.confirmEmail({
          emailConfLink:
            'http://clientbase-server.herokuapp.com/v2/user/verify/email/621997831b565d0016e4c7b5/621997831b565d066664c7b6',
        });
        /* console.log(
          'Status Code of response from server after LOGIN request',
          userHelper.response.statusCode
        );
        console.log(
          'Body of response from server after LOGIN request',
          userHelper.response.body
        ); */
      });
      it(`Checking that response status code is "${localHelper.testPath.user.emailConfirmarion.error.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.emailConfirmarion.error.statusCode
        );
      });
      it(`Checking that response.body has a message: "${localHelper.testPath.user.emailConfirmarion.error.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.emailConfirmarion.error.bodyMessage
        );
      });
    });
  });
});
