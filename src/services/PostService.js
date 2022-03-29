import Service from "./Service";
import dotenv from "dotenv";
dotenv.config();



class PostService extends Service {
    constructor(model) {
        super(model);
        this.insertpost = this.insertpost.bind(this);
        this.getpost = this.getpost.bind(this);
        this.updatepost = this.updatepost.bind(this);
        this.deletepost = this.deletepost.bind(this);
    }

    //insert post
    async insertpost(data, userid) {
        console.log(userid)
        try {
            try {
                console.log( data.title)
                    var post = new this.model({
                        title: data.title,
                        desc : data.desc,
                        categoryid: data.categoryid,
                        userid: userid
                    });
                    data = await post.save()
                    return {
                        error: false,
                        statusCode: 202,
                        data: data,
                    };
                
            } catch (error) {
                console.log(error)
                return {
                    error: true,
                    statusCode: 500,
                    message: 'Post not insert',
                    errors: error,
                };
            }
        }
        catch (err) {
            console.log(err)
            return {
                error: true,
                statusCode: 500,
                message: 'Post not insert',
                errors: err,
            };
        }
    }

    //get post
    async getpost(item) {
        let post = await this.model.find({ "userid": item.userid })
        if (post) {
            try {
                // console.log(user)
                return {
                    error: false,
                    statusCode: 202,
                    data: post,
                };
            } catch (err) {
                console.log(err)
                return {
                    error: true,
                    statusCode: 500,
                    message: 'Not able to get post',
                    errors: err,
                };
            }
        } else {
            return {
                error: true,
                statusCode: 500,
                message: 'Not able to get post'

            }

        }
    }

    //update post
    async updatepost(postid, data, userid) {
        try {
            let post = await this.model.findOne({ "userid": userid })
            if (post) {
                const updatedPost = await this.model.updateOne({ _id: postid },  data );
                return {
                    error: false,
                    deleted: true,
                    statusCode: 200,
                    message: 'Post update successfullly!',
                    data: updatedPost
                };
            } else {
                return {
                    error: true,
                    statusCode: 404,
                    message: 'post not found',
                };
            }
        } catch (err) {
            console.log(err)
            return {
                error: true,
                statusCode: 500,
                message: 'post not found',
                errors: err,
            };
        }
    }

    //post deleted
    async deletepost(item) {
        try {
            let post = await this.model.find({ "userid": item.userid })
            if (post) {
                let postid = await this.model.findByIdAndDelete(item.postid)
                if (postid) {
                    return {
                        error: false,
                        deleted: true,
                        statusCode: 200,
                        message: 'post deleted !',
                    };
                } else {
                    return {
                        error: true,
                        statusCode: 404,
                        message: 'post not found',
                    };
                }

            }
        } catch (err) {
            console.log(err)
            return {
                error: true,
                statusCode: 500,
                message: 'Error 500',
                errors: err,
            };
        }
    }

   
 
}

export default PostService;
