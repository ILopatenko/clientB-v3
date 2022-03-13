//Import expect assertion method from chai assertion library
import { expect } from 'chai';
//Import all the helpers
import ClientHelper from '../../helpers/client.helper';
import LocalHelper from '../../helpers/local.helper';
//Create a new instances for all the helpers
const localHelper = new LocalHelper();
const clientHelper = new ClientHelper();

describe.skip('DELETE THE CLIENTS (last 100)', () => {
  before(async () => {
    await clientHelper.getAll(100, 1);
    //console.log(clientHelper.response.body.payload.items);
    let array = clientHelper.response.body.payload.items;
    await array.forEach((el) => clientHelper.deleteByID(el._id));
  });
  it(`TEXT VALUE FOR TEST CASE`, () => {
    expect(true).to.be.eq(true);
  });
});
