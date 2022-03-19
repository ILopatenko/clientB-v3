//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import ServiceHelper from '../../helpers/service.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const localHelper = new LocalHelper();
const serviceHelper = new ServiceHelper();

describe('CREATE a new SERVICE', () => {
  describe('SMOKE TESTS', () => {
    describe('POSITIVE - happy path with valid credentials', () => {
      before(async () => {
        await serviceHelper.createNew(localHelper.DB.services[0]);
        console.log(serviceHelper.response.statusCode);
        //console.log(serviceHelper.response.body);
        process.env.SERVICEID = serviceHelper.response.body.payload;
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.service.create.success.statusCode}"`, () => {
        expect(serviceHelper.response.statusCode).to.be.eq(
          localHelper.testPath.service.create.success.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.service.create.success.bodyMessage}"`, () => {
        expect(serviceHelper.response.body.message).to.be.eq(
          localHelper.testPath.service.create.success.bodyMessage
        );
      });
    });
    describe('NEGATIVE - unhappy path with invalid credentials (without name)', () => {
      before(async () => {
        await serviceHelper.createNew(
          localHelper.testPath.service.create.withoutName
        );
        //console.log(serviceHelper.response.statusCode);
        //console.log(serviceHelper.response.body);
      });
      it(`Checking that response.statusCode is "${localHelper.testPath.service.create.withoutName.statusCode}"`, () => {
        expect(serviceHelper.response.statusCode).to.be.eq(
          localHelper.testPath.service.create.withoutName.statusCode
        );
      });
      it(`Checking that response.body.message is "${localHelper.testPath.service.create.withoutName.bodyMessage}"`, () => {
        expect(serviceHelper.response.body.message).to.be.eq(
          localHelper.testPath.service.create.withoutName.bodyMessage
        );
      });
    });
    describe('Test Suite for all the detail Test Cases', () => {
      it(`Checking that response.body has PAYLOAD key`, () => {
        expect(serviceHelper.response.body.payload).not.to.be.undefined;
      });
      it(`Checking that response.body.payload is a STRING`, () => {
        expect(serviceHelper.response.body.payload).to.be.a('string');
      });
      it(`Checking that response.body.payload has length 24 symbols`, () => {
        expect(serviceHelper.response.body.payload.length).to.eq(24);
      });
    });
  });
});
