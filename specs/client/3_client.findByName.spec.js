//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import ClientHelper from '../../helpers/client.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const localHelper = new LocalHelper();
const clientHelper = new ClientHelper();

describe('FIND CLIENT BY NAME', () => {
  before(async () => {
    //console.log(`search name`, localHelper.DB.clients[0].name);
    await clientHelper.findByName(localHelper.DB.clients[0].name);
    //console.log('clientHelper.response.body', clientHelper.response.body);
    // console.log('clientHelper.response.statusCode',clientHelper.response.statusCode);
    //console.log(clientHelper.response.body.payload.items);
  });
  it(`Checking that response.statusCode is "${localHelper.testPath.client.findByID.success.statusCode}"`, () => {
    expect(clientHelper.response.statusCode).to.be.eq(
      localHelper.testPath.client.findByID.success.statusCode
    );
  });
  it(`Checking that response.body.message is "${localHelper.testPath.client.findByID.success.bodyMessage}"`, () => {
    expect(clientHelper.response.body.message).to.be.eq(
      localHelper.testPath.client.findByID.success.bodyMessage
    );
  });
});
