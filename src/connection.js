// require mongoose to connect with mongodb atlas 

const mongoose =require('mongoose');

// requiring dotenv to hide our crendentials 

require ("dotenv").config();


// defining connection params 


const connectionParams ={
useNewUrlParser:true,
useUnifiedTopology:true

}


const uri = 'mongodb+srv://'+process.env.MONGO_USER+':'+process.env.MONGO_PASSWORD+'@7nandy.zjwykvv.mongodb.net/maitAuthentication?retryWrites=true&w=majority'


const connexion =mongoose.connect(uri,connectionParams).then(()=>console.log("connected"))
.catch((err)=> console.log(err));

module.exports= connexion;