const Product = require("../Model/Product")


exports.addProduct=async(req,res)=>{
    try {
        const {name,description,price,imgUrl}=req.body
        if(price<0){
            res.status(400).send({msg:"price not valid!!"})
        }else {
            const newProduct= new Product ({name,description,price,imgUrl})
            await newProduct.save()
            res.status(200).send({msg:"product added successfully!",newProduct})
        }
    } catch (error) {
        res.status(500).send({msg:"error on adding product",error})
    }
}

exports.getProducts=async(req,res)=>{
    try {
        const productList= await Product.find()
        res.status(200).send({msg:"products found successfully!",productList})
    } catch (error) {
        res.status(500).send({msg:"error on getting products",error})
    }
}

exports.deleteProduct=async(req,res)=>{
    try {
        const {_id}=req.body
        await Product.deleteOne({_id})
        res.status(200).send({msg:"product deleted successfully!"})
    } catch (error) {
        res.status(500).send({msg:"error on deleting product",error})
    }
}

exports.updateProduct=async(req,res)=>{
    try {
        const {_id} = req.params
        const {price}=req.body
        const updatedProduct=await Product.updateOne({_id},{$set:{price}})
        res.status(200).send({msg:"product updated successfully!",updatedProduct})
    } catch (error) {
        res.status(500).send({msg:'error on updating product',error})
    }
}


exports.getProduct=async(req,res)=>{
    try {
        // const price = req.body.price
        const {price} =req.body
        const ourProduct= await Product.find({ price: price })
        res.status(200).send({msg:"product found successfully!",ourProduct})
    } catch (error) {
        res.status(500).send({msg:"error on getting the product",error})
    }
}

