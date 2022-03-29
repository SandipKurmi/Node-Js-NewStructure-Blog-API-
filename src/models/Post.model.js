import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class PostModel {
  
  initSchema() {
    const schema = new Schema(
      {
        categoryid:{
          type:String,
          required: true
        },
        userid:{
          type: String,
          required: true
        },
        title: {
          type: String,
          required: true,
        },
        desc:{
          type: String,
          required: true,
        }
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('Post', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('Post');
  }

  getModel() {
    return mongoose.model('Post');
  }
}

export default PostModel;
