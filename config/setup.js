//IMPORT SECTION
//  Import dotenv package - to work with environmental project's variables
import 'dotenv/config';
//  Import Helper(s)
import UsersHelper from '../helpers/users.helper';
import LocalHelper from '../helpers/local.helper';
//  Create a new instanse of helper(s)
const usersHelper = new UsersHelper();
const localHelper = new LocalHelper();
//  Before - will be runned before all the tests - MAIN PRECONDITIONS
before(async () => {
  await usersHelper.login(process.env.USEREMAIL, process.env.USERPASSWORD);
  process.env.TOKEN = usersHelper.response.body.payload.token;
  //console.log(usersHelper.response.body);
});
//  After - will be runned after all the tests - MAIN POSTCONDITIONS
after(async () => {
  //console.log(localHelper.DB);
  //Clear all the test changes
  //console.log(`after`);
});
