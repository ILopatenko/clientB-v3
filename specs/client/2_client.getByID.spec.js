//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import ClientHelper from '../../helpers/client.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const localHelper = new LocalHelper();
const clientHelper = new ClientHelper();

describe('GET CLIENT information by ID', () => {
  describe('SMOKE TESTS', () => {
    describe(`POSITIVE - happy path with valid ID`, () => {
      before(async () => {
        await clientHelper.getByID(process.env.CLIENTID);
        //console.log(clientHelper.response.statusCode);
        //console.log(clientHelper.response.body);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.client.getByID.success.statusCode}"`, () => {
        expect(clientHelper.response.statusCode).to.be.eq(
          localHelper.testPath.client.getByID.success.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.client.getByID.success.bodyMessage}"`, () => {
        expect(clientHelper.response.body.message).to.be.eq(
          localHelper.testPath.client.getByID.success.bodyMessage
        );
      });
    });
    describe('NEGATIVE - unhappy path with invalid credentials', () => {
      before(async () => {
        await clientHelper.getByID('3454ab34bbb343434b34');
        //console.log(clientHelper.response.statusCode);
        //console.log(clientHelper.response.body);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.client.getByID.error.statusCode}"`, () => {
        expect(clientHelper.response.statusCode).to.be.eq(
          localHelper.testPath.client.getByID.error.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.client.getByID.error.bodyMessage}"`, () => {
        expect(clientHelper.response.body.message).to.be.eq(
          localHelper.testPath.client.getByID.error.bodyMessage
        );
      });
    });
    describe('Test Suite for all the detail Test Cases', () => {
      before(async () => {
        await clientHelper.getByID(process.env.CLIENTID);
        //console.log(clientHelper.response.statusCode);
        //console.log(clientHelper.response.body);
      });
      it(`Checking that response.body has payload key`, () => {
        expect(clientHelper.response.body.payload).not.to.be.undefined;
      });
      it(`Checking that response.body.payload is an object`, () => {
        expect(clientHelper.response.body.payload).to.be.an('object');
      });
      //clientHelper.response.body.payload
      it(`Checking that response.body.payload has order key`, () => {
        expect(clientHelper.response.body.payload.order).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.order is an array`, () => {
        expect(clientHelper.response.body.payload.order).to.be.an('array');
      });
      it(`Checking that response.body.payload has _id key`, () => {
        expect(clientHelper.response.body.payload._id).not.to.be.undefined;
      });
      it(`Checking that response.body.payload._id is a string`, () => {
        expect(clientHelper.response.body.payload._id).to.be.a('string');
      });
      it(`Checking that response.body.payload has length og 24 symbols`, () => {
        expect(clientHelper.response.body.payload._id.length).to.eq(24);
      });
      it(`Checking that response.body.payload is the same as expected`, () => {
        expect(clientHelper.response.body.payload._id).to.eq(
          process.env.CLIENTID
        );
      });
      it(`Checking that response.body.payload has name key`, () => {
        expect(clientHelper.response.body.payload.name).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.name is a string`, () => {
        expect(clientHelper.response.body.payload.name).to.be.a('string');
      });
      it(`Checking that response.body.payload has phone key`, () => {
        expect(clientHelper.response.body.payload.phone).not.to.be.undefined;
      });
      it(`Checking that response.body.payload is a string`, () => {
        expect(clientHelper.response.body.payload.phone).to.be.a('string');
      });
      it(`Checking that response.body.payload has email key`, () => {
        expect(clientHelper.response.body.payload.email).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.email is a string`, () => {
        expect(clientHelper.response.body.payload.email).to.be.a('string');
      });
      it(`Checking that response.body.payload has notes key`, () => {
        expect(clientHelper.response.body.payload.notes).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.notes is a string`, () => {
        expect(clientHelper.response.body.payload.notes).to.be.a('string');
      });
      it(`Checking that response.body.payload has owner key`, () => {
        expect(clientHelper.response.body.payload.owner).not.to.be.undefined;
      });
      it(`Checking that response.body.payload.owner is a string`, () => {
        expect(clientHelper.response.body.payload.owner).to.be.a('string');
      });
      it(`Checking that response.body.payload has createdAt key`, () => {
        expect(clientHelper.response.body.payload.createdAt).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.createdAt is a string`, () => {
        expect(clientHelper.response.body.payload.createdAt).to.be.a('string');
      });
      it(`Checking that response.body.payload has updatedAt key`, () => {
        expect(clientHelper.response.body.payload.updatedAt).not.to.be
          .undefined;
      });
      it(`Checking that response.body.payload.updatedAt is a string`, () => {
        expect(clientHelper.response.body.payload.updatedAt).to.be.a('string');
      });
    });
  });
});
