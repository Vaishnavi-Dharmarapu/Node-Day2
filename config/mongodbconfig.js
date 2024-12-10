const mongoose = require('mongoose')
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connection is succesful");
    }catch(error){
        console.log("Database connection failed",error.message);
        
    }

}
module.exports = connectDB