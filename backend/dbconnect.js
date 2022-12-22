const mongoose = require("mongoose");
const db =
  "mongodb+srv://mohammed:IcVEN5NbKdJNmItb@cluster0.qdl5pcq.mongodb.net/topicMERN";

const connectToDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
      
    });
   
    console.log("Connected online to mongoDB");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
mongoose.set('strictQuery', true);
module.exports = connectToDb;