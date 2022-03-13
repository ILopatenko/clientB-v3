//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import ClientHelper from '../../helpers/client.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const localHelper = new LocalHelper();
const clientHelper = new ClientHelper();

describe('CREATE a new CLIENT', () => {
  const dataForTestClient = localHelper.generateRandomDataForNewClient();
  //console.log(dataForTestClient);
  describe('SMOKE TESTS', () => {
    describe('POSITIVE - happy path with valid credentials', () => {
      before(async () => {
        await clientHelper.createNew(dataForTestClient);
        //console.log(clientHelper.response.statusCode);
        //console.log(clientHelper.response.body);
        process.env.CLIENTID = clientHelper.response.body.payload;
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.client.create.success.statusCode}"`, () => {
        expect(clientHelper.response.statusCode).to.be.eq(
          localHelper.testPath.client.create.success.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.client.create.success.bodyMessage}"`, () => {
        expect(clientHelper.response.body.message).to.be.eq(
          localHelper.testPath.client.create.success.bodyMessage
        );
      });
    });
    describe('NEGATIVE - unhappy path with invalid credentials (without name)', () => {
      before(async () => {
        await clientHelper.createNew(
          localHelper.testPath.client.create.withoutName
        );
        //console.log(clientHelper.response.statusCode);
        //console.log(clientHelper.response.body);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.client.create.withoutName.statusCode}"`, () => {
        expect(clientHelper.response.statusCode).to.be.eq(
          localHelper.testPath.client.create.withoutName.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.client.create.withoutName.bodyMessage}"`, () => {
        expect(clientHelper.response.body.message).to.be.eq(
          localHelper.testPath.client.create.withoutName.bodyMessage
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
