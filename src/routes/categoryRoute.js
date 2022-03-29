import Controller from '../controllers/CategoryController';
import auth from '../middleware/auth.middleware'

export default (router) => {
  
    router.post(`/api/category`,auth, Controller.insertcategory);           
    router.get(`/api/category`,auth, Controller.getcategory);               
    router.put(`/api/category/:id`,auth, Controller.updatecategory);       
    router.delete(`/api/category/:id`,auth, Controller.deletecategory);    

};
