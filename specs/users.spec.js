//IMPORT SECTION
//  Import {expect} assertion function from Chai assertion library
import { expect } from 'chai';
import 'dotenv/config';
//  Import helper(s)
import UsersHelper from '../helpers/users.helper';
import LocalHelper from '../helpers/local.helper';
//  Creating a new instance of helper(s)
const usersHelper = new UsersHelper();
const localHelper = new LocalHelper();

/* await usersHelper.login(dataForCreatingNewUser);
localHelper.updateLocalUserAfterLogin(usersHelper.response.body);
await usersHelper.confirmEmail(
  localHelper.DB.users[localHelper.DB.users.length - 1]
);
console.log(localHelper.DB);
 */

before(async () => {});

describe('NEGATIVE - unhappy path - unsuccessful login with invalid credentials', () => {});
//
//
//
describe('USERS MAIN TEST SUITE', () => {
  //
  const testUser = localHelper.generateRandomDataForRegistration();
  //
  describe('  REGISTER', () => {
    //
    describe('    SMOKE TESTS', () => {
      //
      describe('      POSITIVE - successful registration with valid credentials', () => {
        before(async () => {
          await usersHelper.registerNewUser(testUser);
          localHelper.saveUserToLocalDB(testUser);
          process.env.USEREMAIL =
            localHelper.DB.users[localHelper.DB.users.length - 1].email;
          process.env.USERPASSWORD =
            localHelper.DB.users[localHelper.DB.users.length - 1].password;
        });
        it(`Checking that response status code is "${localHelper.testPath.user.register.success.statusCode}"`, () => {
          expect(usersHelper.response.statusCode).to.eq(
            localHelper.testPath.user.register.success.statusCode
          );
        });
        it('Checking that response contains body section and it is not undefined', () => {
          expect(usersHelper.response.body).not.to.be.undefined;
        });
        it(`Checking that response has a message "${localHelper.testPath.user.register.success.bodyMessage}"`, () => {
          expect(usersHelper.response.body.message).to.be.eq(
            localHelper.testPath.user.register.success.bodyMessage
          );
        });
      });
      //
      describe('      NEGATIVE - unsuccessful registration with invalid credentials (credentials of another user)', () => {
        before(async () => {
          await usersHelper.registerNewUser(testUser);
        });
        it(`Checking that response status code is "${localHelper.testPath.user.register.theSameCred.statusCode}"`, () => {
          expect(usersHelper.response.statusCode).to.eq(
            localHelper.testPath.user.register.theSameCred.statusCode
          );
        });
        it('Checking that response contains body section and it is not undefined', () => {
          expect(usersHelper.response.body).not.to.be.undefined;
        });
        it(`Checking that response has a message "${localHelper.testPath.user.register.theSameCred.bodyMessage}"`, () => {
          expect(usersHelper.response.body.message).to.be.eq(
            localHelper.testPath.user.register.theSameCred.bodyMessage
          );
        });
      });
      //
    });
    describe('    DETAILED TCs', () => {
      //
      describe('        POSITIVE - successful registration with valid credentials', () => {});
      //
      describe('        NEGATIVE - unsuccessful registration with invalid credentials', () => {});
      //
    });
    //
  });
  //
  //
  describe('  LOGIN', () => {
    //
    describe('    SMOKE TESTS', () => {
      //
      describe('      POSITIVE', () => {
        before(async () => {
          usersHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
          console.log(usersHelper.response.body);
        });
        it(`Checking that response status code is "${localHelper.testPath.user.register.theSameCred.statusCode}"`, () => {
          expect(usersHelper.response.statusCode).to.eq(
            localHelper.testPath.user.register.theSameCred.statusCode
          );
        });
        it('Checking that response contains body section and it is not undefined', () => {
          expect(usersHelper.response.body).not.to.be.undefined;
        });
        it(`Checking that response has a message "${localHelper.testPath.user.register.theSameCred.bodyMessage}"`, () => {
          expect(usersHelper.response.body.message).to.be.eq(
            localHelper.testPath.user.register.theSameCred.bodyMessage
          );
        });
      });
      //
      describe('      NEGATIVE', () => {});
      //
    });
    describe('    DETAILED TCs', () => {
      //
      describe('       POSITIVE - successful registration with valid credentials', () => {});
      //
      describe('       NEGATIVE - unsuccessful registration with invalid credentials', () => {});
      //
    });
    //
  });
  //
  //
  describe('  EMAIL CONFIRMATION', () => {
    //
    describe('    SMOKE TESTS', () => {
      //
      describe('      POSITIVE', () => {});
      //
      describe('      NEGATIVE', () => {});
      //
    });
    describe('    DETAILED TCs', () => {
      //
      describe('        POSITIVE - successful registration with valid credentials', () => {});
      //
      describe('       NEGATIVE - unsuccessful registration with invalid credentials', () => {});
      //
    });
    //
  });
  //
  //
});
