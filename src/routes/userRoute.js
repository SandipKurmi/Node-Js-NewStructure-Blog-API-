import UserController from '../controllers/UserController';
import auth from '../middleware/auth.middleware';

export default (router) => {
    router.get(`/api/users`, UserController.getAll);
    router.post(`/api/user`, UserController.insert);
    router.get(`/api/user/:id`, UserController.get);
    router.put(`/api/user/:id`, UserController.update);
    router.delete(`/api/user/:id`, UserController.delete);
};
