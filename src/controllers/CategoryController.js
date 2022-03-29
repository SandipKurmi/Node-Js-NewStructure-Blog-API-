import Controller from './Controller'
import Category from "../models/Category.model";
import CategoryService from '../services/CategoryService';

const categoryService = new CategoryService(new Category().getInstance());

class CategoryController extends Controller {
    constructor(service) {
        super(service);
        this.insertcategory = this.insertcategory.bind(this);
        this.getcategory = this.getcategory.bind(this);
        this.updatecategory = this.updatecategory.bind(this);
        this.deletecategory = this.deletecategory.bind(this);
    }

    //store category
    async insertcategory(req, res) {
        const data = {
            body: req.body,
            userid:req.user.id
        }
        console.log(data.userid)
        console.log("id")
        const response = await this.service.insertcategory(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

    //get category
    async getcategory(req, res) {
        const data = {
            userid:req.user.id
        }
        const response = await this.service.getcategory(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

    //update category
    async updatecategory(req, res) {
        let name = req.body.name
        let catid = req.params.id
        let userid = req.user.id
        const response = await this.service.updatecategory(name, catid, userid);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

    //delete category
    async deletecategory(req, res) {
        const data = {
            id: req.params.id,
        }
        const response = await this.service.deletecategory(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }
}

export default new CategoryController(categoryService);
