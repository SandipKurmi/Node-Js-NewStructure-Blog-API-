import bcrypt from 'bcrypt';
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import Controller from './Controller';
import User from '../models/UserModel';
import UserService from '../services/UserService';
//import Stripe from '../helpers/Stripe';

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
  }

  async getAll(req, res) {
    // console.log(req.query);
    const response = await this.service.getAll(req.query);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(response.statusCode).send(response);
  }

}

export default new UserController(userService);
