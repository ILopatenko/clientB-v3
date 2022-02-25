
//IMPORT SECTION
//  Import {expect} assertion function from Chai assertion library
import { expect } from 'chai';
//  Import helper(s)
import AuthHelper from '../helpers/auth.helper';
//  Creating a new instance of helper(s)
const authHelper = new AuthHelper();
//  Main Test Suite
describe('\nSuccessful login sub suite (happy path with valid login and password)', () => {
    //BEFORE hook
  before(async () => {
    await authHelper.login(process.env.LOGIN, process.env.PASSWORD);
  });
    //Test Cases
  it('Checking that response status code is 200', () => {
    expect(authHelper.response.statusCode).to.eq(200);
  });
  it('Checking that response contains TOKEN key that is not undefined', () => {
    expect(authHelper.response.body.token).not.to.be.undefined;
  });
  it('Checking that response contains TOKEN key with value that is 36 symbols in length', () => {
    expect(authHelper.response.body.token.length).to.be.eq(36);
  });
});


