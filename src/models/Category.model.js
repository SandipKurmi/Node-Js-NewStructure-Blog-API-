import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class CategoryModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
          default: null,
        },
        userid:{
          type: String,
          required: true
        }
        
      },
     
    );
    schema.plugin(uniqueValidator);
    mongoose.model('Category', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('Category');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('Category');
  }
}

export default CategoryModel;
