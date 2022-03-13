//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import UserHelper from '../../helpers/user.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const userHelper = new UserHelper();
const localHelper = new LocalHelper();
describe.skip('USER LOGIN after successful email confirmation main Test Suite', () => {
  //
  describe('Login', () => {
    before(async () => {
      await userHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
      //console.log(userHelper.response.statusCode);
      //console.log(userHelper.response.body);
      //console.log(userHelper.response.body.payload);
      process.env.TOKEN = userHelper.response.body.payload.token;
      process.env.USERID = userHelper.response.body.payload.userId;
      //console.log(process.env);
    });
    it(`Checking that response.statusCode is "${localHelper.testPath.user.login.success.statusCode}"`, () => {
      expect(userHelper.response.statusCode).to.be.eq(
        localHelper.testPath.user.login.success.statusCode
      );
    });
    it(`Checking that response.body.message is "${localHelper.testPath.user.login.success.bodyMessage}"`, () => {
      expect(userHelper.response.body.message).to.be.eq(
        localHelper.testPath.user.login.success.bodyMessage
      );
    });
  });
  //
  describe(`Test Suite for all the detail Test Cases after successfull login (EMAIL is "${process.env.USEREMAIL} and PASSWORD is "${process.env.USERPASSWORD}")`, () => {
    describe('  Checking all the keys of response.body.payload and their types', () => {
      it(`Checking that response.body has payload key`, () => {
        expect(userHelper.response.body.payload).not.to.be.undefined;
      });
      //response.body.payload.confirmEmailLink
      it(`Checking that response.body.payload has confirmEmailLink key`, () => {
        expect(userHelper.response.body.payload.confirmEmailLink).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.confirmEmailLink is a string`, () => {
        expect(userHelper.response.body.payload.confirmEmailLink).to.be.a(
          'string'
        );
      });
      //response.body.payload.token
      it(`Checking that response.body.payload has token key`, () => {
        expect(userHelper.response.body.payload.token).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.token is a string`, () => {
        expect(userHelper.response.body.payload.token).to.be.a('string');
      });
      //response.body.payload.acl
      it(`Checking that response.body.payload has acl key`, () => {
        expect(userHelper.response.body.payload.acl).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.acl is an array`, () => {
        expect(userHelper.response.body.payload.acl).to.be.an('array');
      });
      it(`Checking that response.body.payload.acl.length more than 20`, () => {
        expect(userHelper.response.body.payload.acl.length).to.be.at.least(21);
      });
      //response.body.payload.userId
      it(`Checking that response.body.payload has userId key`, () => {
        expect(userHelper.response.body.payload.userId).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.user.userId is a string`, () => {
        expect(userHelper.response.body.payload.userId).to.be.a('string');
      });
      it(`Checking that response.body.payload.user.userId has the same value as we expected (${process.env.USERID})`, () => {
        expect(userHelper.response.body.payload.userId).to.eq(
          process.env.USERID
        );
      });
      //response.body.payload.user
      it(`Checking that response.body.payload has user key`, () => {
        expect(userHelper.response.body.payload.user).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.user is an object`, () => {
        expect(userHelper.response.body.payload.user).to.be.an('object');
      });
      it(`Checking that response.body.payload.user has emailConfirmation key`, () => {
        expect(userHelper.response.body.payload.user.emailConfirmation).not.to
          .be.undefined;
      });
      it(`Checking that response.body.payload.user.emailConfirmation is an object`, () => {
        expect(
          userHelper.response.body.payload.user.emailConfirmation
        ).to.be.an('object');
      });
      it(`Checking that response.body.payload.user has resetPassword key`, () => {
        expect(userHelper.response.body.payload.user.resetPassword).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.resetPassword is an object`, () => {
        expect(userHelper.response.body.payload.user.resetPassword).to.be.an(
          'object'
        );
      });
      it(`Checking that response.body.payload.user has lastLogin key`, () => {
        expect(userHelper.response.body.payload.user.lastLogin).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.lastLogin is an object`, () => {
        expect(userHelper.response.body.payload.user.lastLogin).to.be.an(
          'object'
        );
      });
      it(`Checking that response.body.payload.user has timeZone key`, () => {
        expect(userHelper.response.body.payload.user.timeZone).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.timeZone is a string`, () => {
        expect(userHelper.response.body.payload.user.timeZone).to.be.a(
          'string'
        );
      });
      it(`Checking that response.body.payload.user has name key`, () => {
        expect(userHelper.response.body.payload.user.name).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.user.name is a string`, () => {
        expect(userHelper.response.body.payload.user.name).to.be.a('string');
      });
      it(`Checking that response.body.payload.user has firstName key`, () => {
        expect(userHelper.response.body.payload.user.firstName).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.firstName is a string`, () => {
        expect(userHelper.response.body.payload.user.firstName).to.be.a(
          'string'
        );
      });
      it(`Checking that response.body.payload.user has lastName key`, () => {
        expect(userHelper.response.body.payload.user.lastName).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.lastName is a string`, () => {
        expect(userHelper.response.body.payload.user.lastName).to.be.a(
          'string'
        );
      });
      it(`Checking that response.body.payload.user has roles key`, () => {
        expect(userHelper.response.body.payload.user.roles).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.user.roles is an array`, () => {
        expect(userHelper.response.body.payload.user.roles).to.be.an('array');
      });
      it(`Checking that response.body.payload.user has active key`, () => {
        expect(userHelper.response.body.payload.user.active).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.active is boolean`, () => {
        expect(userHelper.response.body.payload.user.active).to.be.an(
          'boolean'
        );
      });
      it(`Checking that response.body.payload.user has _id key`, () => {
        expect(userHelper.response.body.payload.user._id).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.user._id is a string`, () => {
        expect(userHelper.response.body.payload.user._id).to.be.a('string');
      });
      it(`Checking that response.body.payload.user has email key`, () => {
        expect(userHelper.response.body.payload.user.email).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.user.email is a string`, () => {
        expect(userHelper.response.body.payload.user.email).to.be.a('string');
      });
      it(`Checking that response.body.payload.user.email is the same as we expected ("${process.env.USEREMAIL}")`, () => {
        expect(userHelper.response.body.payload.user.email).to.eq(
          process.env.USEREMAIL
        );
      });
      it(`Checking that response.body.payload.user has password key`, () => {
        expect(userHelper.response.body.payload.user.password).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.password is null`, () => {
        expect(userHelper.response.body.payload.user.password).to.eq(null);
      });
      it(`Checking that response.body.payload.user has createdAt key`, () => {
        expect(userHelper.response.body.payload.user.createdAt).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.createdAt is a string`, () => {
        expect(userHelper.response.body.payload.user.createdAt).to.be.a(
          'string'
        );
      });
      it(`Checking that response.body.payload.user has updatedAt key`, () => {
        expect(userHelper.response.body.payload.user.updatedAt).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.user.updatedAt is a string`, () => {
        expect(userHelper.response.body.payload.user.updatedAt).to.be.a(
          'string'
        );
      });
    });
    //
    describe(`Checking that after email was confirmed user has a role "verified"`, () => {
      before(async () => {
        await userHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
      });

      it(`Checking that response.body.payload.user.roles has only 1 role`, () => {
        expect(userHelper.response.body.payload.user.roles.length).to.eq(1);
      });
      it(`Checking that response.body.payload.user.roles has only 1 role that is "verified"`, () => {
        expect(userHelper.response.body.payload.user.roles[0]).to.eq(
          'verified'
        );
      });
    });
    //
    //
  });
  //
});
