import UserController from '../controllers/UserController';
import auth from '../middleware/auth.middleware';

export default (router) => {
    router.post(`/api/users/register`, UserController.register); //user register
    router.post(`/api/users/login`, UserController.login);  //user login
};
