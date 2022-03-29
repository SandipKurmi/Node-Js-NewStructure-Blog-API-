import Service from './Service';
import dotenv from "dotenv";
dotenv.config();

class CategoryService extends Service {
    constructor(model) {
        super(model);
        this.insertcategory = this.insertcategory.bind(this);
        this.getcategory = this.getcategory.bind(this);
        this.updatecategory = this.updatecategory.bind(this);
        this.deletecategory = this.deletecategory.bind(this);
    }
    
    //insert category
    async insertcategory(cat) {
        // console.log( cat.userid)
        const data = new this.model({
            // postid:req.body.postid,
            name: cat.body.name,
            userid: cat.userid
        })
        try {
            const savedCat = await data.save();
            return ({
                error: false,
                statusCode: 200,
                data: savedCat,
            });
        } catch (err) {
            return ({
                error: true,
                statusCode: 500,
                data: err,

            });
        }
    }

    //get category
    async getcategory(cat) {
        try {
            const categorie = await this.model.find({ "userid": cat.userid });
            return ({
                error: false,
                statusCode: 200,
                data: categorie,
            });
        } catch (error) {
            return ({
                error: true,
                statusCode: 500,
                data: error,
            });
        }
    }

    //update category
    async updatecategory(name, catid, userid) {
        try {
            let usercategory = await this.model.find({ userid: userid })
            if (usercategory) {
                const updatedCategory = await this.model.updateOne({ _id: catid }, { name: name });
                return {
                    error: false,
                    deleted: true,
                    statusCode: 200,
                    data: updatedCategory
                };
            } else {
                return {
                    error: true,
                    statusCode: 404,
                    message: 'category not found',
                };
            }
        } catch (err) {
            console.log(err);
            return {
                error: true,
                statusCode: 500,
                message: 'cant find a catogory',
                errors: err,
            };
        }
    }

    //deleter category
    async deletecategory(cat) {
        try {
            let catid = await this.model.findByIdAndDelete(cat.id)
            return ({
                error: false,
                statusCode: 200,
                msg: "category has been deleted..."
            });
        } catch (error) {
            // console.log(error)
            return ({
                error: true,
                statusCode: 500,
                data: error,
                msg: "this categories is not in the database"
            })
        }
    }
}

export default CategoryService;
