//Order.JS to create Order Schema in the application

//Including the required packages and assigning it to Local Variables
const mongoose = require("mongoose");
const deepPopulate = require("mongoose-deep-populate")(mongoose);
const Schema = mongoose.Schema;

//Creating
const ProductRequestModifySchema = new Schema({
  
  name : {
    type: String,
    default: 0
  },

  quantity : {
      type : Number,
      requires : true
  }
  
});

//Using deep-populate to facilitate rating feature
ProductRequestModifySchema.plugin(deepPopulate);

//Exporting the Order schema to reuse
module.exports = mongoose.model("ProductRequestModify", ProductRequestModifySchema);