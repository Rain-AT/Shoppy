const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const commonSchema = mongoose.Schema({
  _id: ObjectId,
  name: String,
  fields: Array
});

// (model name, schema name, collection name)
//const CommonModel = mongoose.model('common_collections', commonSchema, 'products');
export default const CommonModel = mongoose.model('common_collections', commonSchema);