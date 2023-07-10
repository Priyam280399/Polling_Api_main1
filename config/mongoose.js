// const mongoose = require('mongoose');
// // mongoose.connect('mongodb+srv://Priyam1:1234@cluster0.zmlw3me.mongodb.net/', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// mongoose.connect('mongodb://127.0.0.1:27017/Polling_Api', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// mongodb://127.0.0.1:27017/HOSPITAL_API
// // Code for using the cloud mongodb atlas 
// // const connectParams={
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true
// // }

// // Code for manually using the mongodb of local system

// const db = mongoose.connection

// db.on('error', console.error.bind(console, 'error connecting to database'));

// db.once('open', ()=>{
//     console.log("successfully connected to database : mongoDB");
// });

// module.exports = mongoo
             
            
const mongoose = require("mongoose");
              
mongoose.connect("mongodb+srv://Priyam:123@cluster0.aisyttu.mongodb.net/", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});  

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});        

module.exports = db;
        


