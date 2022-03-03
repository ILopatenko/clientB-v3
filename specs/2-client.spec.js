//IMPORT SECTION
//  Import {expect} assertion function from Chai assertion library
import { expect } from 'chai';
//  Import dotenv for working with process.env variables
import 'dotenv/config';
//  Import helper(s)
import ClientHelper from '../helpers/client.helper';
import LocalHelper from '../helpers/local.helper';
import UsersHelper from '../helpers/users.helper';
//  Creating a new instance of helper(s)
const clientHelper = new ClientHelper();
const localHelper = new LocalHelper();
const usersHelper = new UsersHelper();

describe('CLIENT ENTITY MAIN TEST SUITE', () => {
  const testClient = localHelper.generateRandomDataForNewClient();
  describe('  CREATE FUNCTIONALITY MAIN TEST SUITE', () => {
    describe('  Positive smoke test (happy path) - successful creating a new CLIENT with valid credentials', () => {
      before(async () => {
        await usersHelper.login(
          process.env.USEREMAIL,
          process.env.USERPASSWORD
        );
        process.env.TOKEN = usersHelper.response.body.payload.token;
        await clientHelper.createNew(testClient);
        /*  console.log(
          'Status Code of response from server after CREATE a new CLIENT request',
          clientHelper.response.statusCode
        );
        console.log(
          'Body of response from server after CREATE a new CLIENT request',
          clientHelper.response.body
        ); */
      });
      after(async () => {
        testClient.id = clientHelper.response.body.payload;
        localHelper.addNewClientToLocalDB(testClient);
        console.log(localHelper.DB);
      });
      it(`Checking that response status code is "${localHelper.testPath.client.create.success.statusCode}"`, () => {
        expect(clientHelper.response.statusCode).to.be.eq(
          localHelper.testPath.client.create.success.statusCode
        );
      });
      it(`Checking that response.body has a message: "${localHelper.testPath.client.create.success.bodyMessage}"`, () => {
        expect(clientHelper.response.body.message).to.be.eq(
          localHelper.testPath.client.create.success.bodyMessage
        );
      });
    });
    describe('  Additional test cases for all the possible detail checks', () => {});
  });
  describe('  GET CLIENT BY ID', () => {
    before(async () => {
      await clientHelper.getByID(localHelper.DB.clients.at(-1).id);
      console.log(
        'Status Code of response from server after GET BY ID request',
        clientHelper.response.statusCode
      );
      console.log(
        'Body of response from server after GET BY ID request',
        clientHelper.response.body
      );
    });
    it(`Checking that response status code is "${localHelper.testPath.client.getByID.success.statusCode}"`, () => {
      expect(clientHelper.response.statusCode).to.be.eq(
        localHelper.testPath.client.getByID.success.statusCode
      );
    });
    it(`Checking that response.body has a message: "${localHelper.testPath.client.getByID.success.bodyMessage}"`, () => {
      expect(clientHelper.response.body.message).to.be.eq(
        localHelper.testPath.client.getByID.success.bodyMessage
      );
    });
    it(`Checking that response.body has PAYLOAD key that is not undefined`, () => {
      expect(clientHelper.response.body.payload).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has ORDER key that is not undefined`, () => {
      expect(clientHelper.response.body.payload.order).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has _ID key that is not undefined`, () => {
      expect(clientHelper.response.body.payload._id).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has NAME key that is not undefined`, () => {
      expect(clientHelper.response.body.payload.name).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has PHONE key that is not undefined`, () => {
      expect(clientHelper.response.body.payload.phone).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has EMAIL key that is not undefined`, () => {
      expect(clientHelper.response.body.payload.email).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has NOTES key that is not undefined`, () => {
      expect(clientHelper.response.body.payload.notes).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has OWNER key that is not undefined`, () => {
      expect(clientHelper.response.body.payload.owner).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has CREATEDAT key that is not undefined`, () => {
      expect(clientHelper.response.body.payload.createdAt).not.to.be.undefined;
    });
    it(`Checking that response.body.payload has UPDATEDAT key that is not undefined`, () => {
      expect(clientHelper.response.body.payload.updatedAt).not.to.be.undefined;
    });
  });
  describe('  EDIT CLIENT BY ID', () => {
    before(async () => {
      await usersHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
      process.env.TOKEN = usersHelper.response.body.payload.token;
      await clientHelper.editByID(
        localHelper.DB.clients.at(-1).id,
        localHelper.generateRandomDataForNewClient()
      );
      await clientHelper.getByID(localHelper.DB.clients.at(-1).id);
      console.log(
        'Status Code of response from server after EDIT CLIENT BY ID request',
        clientHelper.response.statusCode
      );
      console.log(
        'Body of response from server after EDIT CLIENT BY ID request',
        clientHelper.response.body
      );
      console.log(localHelper.DB);
    });
    it(`Checking that response status code is "${localHelper.testPath.client.getByID.success.statusCode}"`, () => {
      expect(clientHelper.response.statusCode).to.be.eq(
        localHelper.testPath.client.getByID.success.statusCode
      );
    });
    it(`Checking that response.body has a message: "${localHelper.testPath.client.getByID.success.bodyMessage}"`, () => {
      expect(clientHelper.response.body.message).to.be.eq(
        localHelper.testPath.client.getByID.success.bodyMessage
      );
    });
  }); //
});
