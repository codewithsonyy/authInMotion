const mongoose =require('mongoose');


const connectToMongo=async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI,()=>{
         console.log("Connected to Mongo Successfully");
    
      })
  } catch (error) {
    handleError(error);
  }
  
}
module.exports = connectToMongo;