
import Controller from './Controller';
import User from '../models/UserModel';
import UserService from '../services/UserService';

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  //register
  async register(req, res) {
    const response = await this.service.register(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(response.statusCode).send(response);
  }
  //login
  async login(req, res) {
    const response = await this.service.login(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(response.statusCode).send(response);
  }

}

export default new UserController(userService);
