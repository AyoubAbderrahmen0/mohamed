
//require mongoose
const mongoose=require("mongoose")

//create schema(structure du base de donnees)
const schema=mongoose.Schema


const product= new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        default:1000
    },
    imgUrl:{
        type:String,
        required:true
        //required means need to be inserted
    }
})

module.exports =  mongoose.model('product',product)



