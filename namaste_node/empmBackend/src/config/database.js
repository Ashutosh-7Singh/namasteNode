const mongoose = require("mongoose");
const connectDb=async ()=>{
    await mongoose.connect(
"mongodb://localhost:27017/z_EMPM_DB"
    )
}

module.exports=connectDb;