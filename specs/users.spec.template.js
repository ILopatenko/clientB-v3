//IMPORT SECTION
//  Import {expect} assertion function from Chai assertion library
import { expect } from 'chai';
//  Import dotenv for working with process.env variables
import 'dotenv/config';
//  Import helper(s)
import UsersHelper from '../helpers/users.helper';
import LocalHelper from '../helpers/local.helper';
//  Creating a new instance of helper(s)
const usersHelper = new UsersHelper();
const localHelper = new LocalHelper();

describe('USER ENTITY MAIN TEST SUITE', () => {
  describe('  REGISTER FUNCTIONALITY MAIN TEST SUITE', () => {
    describe('  Positive smoke test (happy path) - successful registration of new USER with valid credentials', () => {});
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

describe('TEXT VALUE FOR TEST SUITE', () => {});
before(async () => {});
after(async () => {});
it(`TEXT VALUE FOR TEST CASE`, () => {
  expect(true).to.be.eq(true);
});
