//IMPORT SECTION
//  Import supertest - HTTP Client that allows us to create and send a request from a test framework to server
import supertest from 'supertest';
//  Import dotenv package - to work with environmental project's variables
import 'dotenv/config';
//Create a new Class for usersHelper - will store response from a server in response property (variable) all the methods (functions) that related to auth
class UsersHelper {
  constructor() {
    this.response = null;
  }
  //Register a NEW USER
  async registerNewUser(userObject) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post('/user')
      //Setup payload - object with 2 keys - login and password (and their values)
      .send(userObject)
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
  //
  //Login
  async login(email, password) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post('/user/login')
      //Setup payload - object with 2 keys - login and password (and their values)
      .send({ email: email, password: password })
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }

  //Login
  async confirmEmail(userObject) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest('')
      //Setup a request method - POST and an endpoint - /auth
      .get(userObject.emailConfLink)
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
}
//Export the Class
export default UsersHelper;
