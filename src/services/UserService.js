import Service from './Service';
import bcrypt, { salt } from 'bcrypt';
// var bcrypt = require('bcryptjs');
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

class UserService extends Service {
  constructor(model) {
    super(model);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  //register services
  async register(item) {
    try {
      const salt = await bcrypt.genSalt(10);
      item.password = salt;
      const user = await this.model.create(item)
      return {
        error: false,
        statusCode: 202,
        data: user
      }
    } catch (error) {
      console.log(error)
      return ({
        error: true,
        statusCode: 500,
        data: error,
        msg: "email is alerdy register"
      })
    }
  }

  //login services
  async login(items) {
    console.log("hello")
    try {
      const user = await this.model.findOne({ "username": items.username })
      console.log(user)
      const validated = (user.password)

      console.log(validated)
      if (validated) {
        console.log(validated)
        const { password, ...others } = user._doc;
        return ({
          error: false,
          statusCode: 200,
          data: others,
          token: generateToken(user._id)
        })
      } else {
        return ({
          error: true,
          statusCode: 400,
          data: "login information is not matching",
        })
      }

    } catch (error) {
      return ({
        error: true,
        statusCode: 500,
        data: "server error",
      })
    }
  }


}



const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}




export default UserService;
