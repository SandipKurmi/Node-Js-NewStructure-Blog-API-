import Controller from './Controller';
import Post from "../models/Post.model"
import PostService from "../services/PostService";
import Category from "../models/Category.model";
import CategoryService from '../services/CategoryService';

const postService = new PostService(new Post().getInstance());
const categoryService = new CategoryService(new Category().getModel());

class PostController extends Controller {
    constructor(service) {
        super(service);
        this.insertpost = this.insertpost.bind(this);
        this.getpost = this.getpost.bind(this);
        this.updatepost = this.updatepost.bind(this);
        this.deletepost = this.deletepost.bind(this);

    }

    //create post

    async insertpost(req, res) {
        var data = req.body
        var userid = req.user.id
      
        const response = await this.service.insertpost(data, userid);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

    //get post
    async getpost(req, res) {
        const data = {
          
            userid: req.user.id
    
        }
        const response = await this.service.getpost(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

    //update post
    async updatepost(req, res) {
        var postid = req.params.id
        var data = req.body
        var userid = req.user.id
        const response = await this.service.updatepost(postid, data, userid);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
      }

      //delete post
    async deletepost(req, res) {
        const data = {
            body: req.body,
            userid: req.user.id,
            postid: req.params.id
        }
        const response = await this.service.deletepost(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

}

export default new PostController(postService, categoryService);


