

const express=require("express")
const { addProduct, getProducts, deleteProduct, updateProduct, getProduct } = require("../Controller/product")


const router=express.Router()


router.post('/addProduct',addProduct)
router.get('/getProducts',getProducts)
router.delete('/deleteProduct',deleteProduct)
router.put('/updateProduct/:_id',updateProduct)
router.get('/getProduct',getProduct)


module.exports=router
