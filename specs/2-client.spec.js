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
    describe('  Positive smoke test (happy path) - successful creation of new CLIENT with valid credentials', () => {
      before(async () => {
        await usersHelper.login(
          process.env.USEREMAIL,
          process.env.USERPASSWORD
        );
        process.env.TOKEN = usersHelper.response.body.payload.token;
        //console.log(`Generated data for creating a new client`, testClient);
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
        //console.log(localHelper.DB);
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
    describe('  Negative smoke test (unhappy path) - unsuccessful registration of new USER with invalid credentials (email of existing user)', () => {});
    describe('  Additional test cases for all the possible detail checks', () => {});
  });
  describe('  LOGIN FUNCTIONALITY MAIN TEST SUITE', () => {
    describe('  Positive smoke test (happy path) - successful login with valid credentials', () => {});
    describe('  Negative smoke test (unhappy path) - unsuccessful login with invalid credentials (wrong email)', () => {});
    describe('  Additional test cases for all the possible detail checks', () => {});
  });
  describe('  EMAIL VERIFICATION FUNCTIONALITY MAIN TEST SUITE', () => {});
});
