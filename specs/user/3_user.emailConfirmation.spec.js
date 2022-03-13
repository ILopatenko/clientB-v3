//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import UserHelper from '../../helpers/user.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const userHelper = new UserHelper();
const localHelper = new LocalHelper();
describe.skip('USER EMAIL CONFIRMATION main Test Suite', () => {
  before(async () => {
    await userHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
    let link = localHelper.generateEmailConfirmationLinkClientBasev2(
      userHelper.response.body.payload.userId
    );
    //console.log(link);
    await userHelper.confirmEmail(link);
    //console.log(userHelper.response.body);
    /* await userHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
    console.log(userHelper.response.body.payload.user); */
  });
  it(`Checking that response has status code is "${localHelper.testPath.user.emailConfirmarion.success.statusCode}"`, () => {
    expect(userHelper.response.statusCode).to.be.eq(
      localHelper.testPath.user.emailConfirmarion.success.statusCode
    );
  });
  it(`Checking that response.body has message key`, () => {
    expect(userHelper.response.body.message).not.to.be.undefined;
  });
  it(`Checking that response.body.message is "${localHelper.testPath.user.emailConfirmarion.success.bodyMessage}"`, () => {
    expect(userHelper.response.body.message).to.eq(
      localHelper.testPath.user.emailConfirmarion.success.bodyMessage
    );
  });
});
