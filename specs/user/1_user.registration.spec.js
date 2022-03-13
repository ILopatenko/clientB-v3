//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import UserHelper from '../../helpers/user.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const userHelper = new UserHelper();
const localHelper = new LocalHelper();
describe.skip('USER REGISTRATION main Test Suite', () => {
  //
  //Generate an object with all the requirement parameters to create a new user
  const dataForNewUser = localHelper.generateRandomDataForRegistration();
  //console.log(dataForNewUser);
  //
  describe('SMOKE TESTS', () => {
    describe('  POSITIVE - happy path with valid credentials', () => {
      before(async () => {
        await userHelper.registerNewUser(dataForNewUser);
        //console.log(userHelper.response.statusCode);
        //console.log(userHelper.response.body);
        process.env.USEREMAIL = dataForNewUser.email;
        process.env.USERPASSWORD = dataForNewUser.password;
        //console.log(process.env);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.user.register.success.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.register.success.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.user.register.success.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.register.success.bodyMessage
        );
      });
    });
    describe('  NEGATIVE - unhappy path with email that already in use', () => {
      before(async () => {
        await userHelper.registerNewUser(dataForNewUser);
        //console.log(userHelper.response.statusCode);
        //console.log(userHelper.response.body);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.user.register.theSameCred.statusCode}"`, () => {
        expect(userHelper.response.statusCode).to.be.eq(
          localHelper.testPath.user.register.theSameCred.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.user.register.theSameCred.bodyMessage}"`, () => {
        expect(userHelper.response.body.message).to.be.eq(
          localHelper.testPath.user.register.theSameCred.bodyMessage
        );
      });
    });
  });
  //
  describe('Test Suite for all the detail Test Cases (!IN DEVELOPMENT!)', () => {
    it(`TEXT VALUE FOR TEST CASE`, () => {
      expect(true).to.be.eq(true);
    });
  });
  //
});
