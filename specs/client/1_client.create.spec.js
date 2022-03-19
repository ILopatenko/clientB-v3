//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import ClientHelper from '../../helpers/client.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const localHelper = new LocalHelper();
const clientHelper = new ClientHelper();
const testClientData = localHelper.generateRandomDataForNewClient();
//console.log('testClientData', testClientData);
describe('CREATE a new CLIENT', () => {
  before(async () => {
    console.log(`creating a new client`);
    await clientHelper.createNew(testClientData);
    console.log('status code', clientHelper.response.statusCode);
    console.log('response body', clientHelper.response.body);
    process.env.CLIENTID = clientHelper.response.body.payload;
    testClientData.id = clientHelper.response.body.payload;
    console.log('testClentData after adding ID', testClientData);
  });
  after(async () => {
    console.log('deleteting a new client');
    clientHelper.deleteByID(process.env.CLIENTID);
    console.log('status code', clientHelper.response.statusCode);

    console.log('response.body', clientHelper.response.body);
  });
  describe('SMOKE TESTS', () => {
    describe('POSITIVE - happy path with valid credentials', () => {
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
    describe('Test Suite for all the detail Test Cases', () => {
      it(`Checking that response.body has PAYLOAD key`, () => {
        expect(clientHelper.response.body.payload).not.to.be.undefined;
      });
      it(`Checking that response.body.payload is a STRING`, () => {
        expect(clientHelper.response.body.payload).to.be.a('string');
      });
      it(`Checking that response.body.payload has length 24 symbols`, () => {
        expect(clientHelper.response.body.payload.length).to.eq(24);
      });
    });
  });
});
