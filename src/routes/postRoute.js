import PostController from '../controllers/PostController';
import auth from '../middleware/auth.middleware'

export default (router) => {
  
    router.post(`/api/post`,auth, PostController.insertpost);
    router.get(`/api/post`,auth, PostController.getpost);
    router.put(`/api/post/:id`,auth, PostController.updatepost);
    router.delete(`/api/post/:id`,auth, PostController.deletepost);

};
