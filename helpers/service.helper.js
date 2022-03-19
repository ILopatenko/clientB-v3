//IMPORT SECTION
//  Import supertest - HTTP service that allows us to create and send a request from a test framework to server
import supertest from 'supertest';
//  Import dotenv package - to work with environmental project's variables
import 'dotenv/config';
//Create a new Class for usersHelper - will store response from a server in response property (variable) all the methods (functions) that related to auth
class ServiceHelper {
  constructor() {
    this.response = null;
  }
  //Register a NEW USER
  async createNew(serviceObject) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post('/service')
      //Add token to your request (for each protected route)
      .set('Authorization', `${process.env.TOKEN}`)
      //Setup payload - object with 2 keys - login and password (and their values)
      .send(serviceObject)
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
  //
  //GET CERVICE PROFILE BY ID
  async getByID(id) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .get(`/service/${id}`)
      //Add token to your request (for each protected route)
      .set('Authorization', `${process.env.TOKEN}`)
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }

  //EDIT service PROFILE BY ID
  async editByID(id, objectWithNewValues) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .patch(`/service/${id}`)
      //Add token to your request (for each protected route)
      .set('Authorization', `${process.env.TOKEN}`)
      //Save a response from server to esponse property (variable)
      //Setup payload - object with 2 keys - login and password (and their values)
      .send(objectWithNewValues)
      .then((res) => {
        this.response = res;
      });
  }

  //DELETE service PROFILE BY ID
  async deleteByID(id) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .delete(`/service/${id}`)
      //Add token to your request (for each protected route)
      .set('Authorization', `${process.env.TOKEN}`)
      //Save a response from server to response property (variable)
      .then((res) => {
        this.response = res;
      });
  }

  //GET ALL (first 100) serviceS PROFILE
  async getAll(limit, page) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post(`/service/search`)
      //Add token to your request (for each protected route)
      .set('Authorization', `${process.env.TOKEN}`)
      //Setup payload - object with 2 keys
      .send({ limit, page })
      //Save a response from server to response property (variable)
      .then((res) => {
        this.response = res;
      });
  }

  //FIND service BY NAME
  async findByName(name) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post(`/service/search`)
      //Add token to your request (for each protected route)
      .set('Authorization', `${process.env.TOKEN}`)
      //Setup payload - object with 2 keys
      .send({ name })
      //Save a response from server to response property (variable)
      .then((res) => {
        this.response = res;
      });
  }
}
//Export the Class
export default ServiceHelper;
