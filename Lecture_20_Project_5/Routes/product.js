import express from 'express';
import { addProduct,  delteProductById,  getAllProducts ,getProductById, updateProductById} from '../Controllers/Product.js';

const router = express.Router();

//add product
//@api /api/product/add
router.post('/add',addProduct)

//get all products
router.get('/all',getAllProducts)

//get product by id
router.get('/:id',getProductById)

//update product by id
router.put('/:id',updateProductById)

//delete product by id
router.delete('/:id',delteProductById)

export default router