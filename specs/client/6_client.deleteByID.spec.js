//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import ClientHelper from '../../helpers/client.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const localHelper = new LocalHelper();
const clientHelper = new ClientHelper();

describe('DELETE CLIENT by ID', () => {
  describe('SMOKE TESTS', () => {
    describe(`POSITIVE - happy path with valid ID`, () => {
      before(async () => {
        await clientHelper.deleteByID(process.env.CLIENTID);
        //console.log(clientHelper.response.statusCode);
        //console.log(clientHelper.response.body);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.client.delete.success.statusCode}"`, () => {
        expect(clientHelper.response.statusCode).to.be.eq(
          localHelper.testPath.client.delete.success.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.client.delete.success.bodyMessage}"`, () => {
        expect(clientHelper.response.body.message).to.be.eq(
          localHelper.testPath.client.delete.success.bodyMessage
        );
      });
    });
    describe('NEGATIVE - unhappy path with invalid credentials', () => {
      before(async () => {
        await clientHelper.deleteByID('3454ab34bbb343434b34');
        //console.log(clientHelper.response.statusCode);
        //console.log(clientHelper.response.body);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.client.delete.error.statusCode}"`, () => {
        expect(clientHelper.response.statusCode).to.be.eq(
          localHelper.testPath.client.delete.error.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.client.delete.error.bodyMessage}"`, () => {
        expect(clientHelper.response.body.message).to.be.eq(
          localHelper.testPath.client.delete.error.bodyMessage
        );
      });
    });
    describe('Test Suite for all the detail Test Cases (!IN DEVELOPMENT!)', () => {
      it(`TEXT VALUE FOR TEST CASE`, () => {
        expect(true).to.be.eq(true);
      });
    });
  });
});
