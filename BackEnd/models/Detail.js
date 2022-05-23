const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    fname : { type : String, required : true },
    email : { type : String, required : true },
    tpnumber : { type : String, required : true },


    address : { type : String, required : true },
    city : { type : String, required : true },
    stpnumber : { type : String, required : true },
    status : { type : String},

})

const Detail = mongoose.model("detail",detailSchema);

module.exports = Detail;