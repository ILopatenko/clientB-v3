//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import ClientHelper from '../../helpers/client.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const localHelper = new LocalHelper();
const clientHelper = new ClientHelper();

describe('GET ALL THE CLIENTS (last 100)', () => {
  describe('SMOKE TESTS (only positive - there is no any way to create a negative TC)', () => {
    describe(`POSITIVE - happy path with credentials`, () => {
      before(async () => {
        await clientHelper.getAll(100, 1);
        //console.log(clientHelper.response.statusCode);
        //console.log(clientHelper.response.body);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.client.getAll.success.statusCode}"`, () => {
        expect(clientHelper.response.statusCode).to.be.eq(
          localHelper.testPath.client.getAll.success.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.client.getAll.success.bodyMessage}"`, () => {
        expect(clientHelper.response.body.message).to.be.eq(
          localHelper.testPath.client.getAll.success.bodyMessage
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
