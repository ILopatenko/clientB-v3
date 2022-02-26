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
before(async () => {});
//  After - will be runned after all the tests - MAIN POSTCONDITIONS
after(async () => {
  //Clear all the test changes
  //console.log(`after`);
});
