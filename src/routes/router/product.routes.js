import express from 'express';
import ProductDao from "../../handlers/dao/mongo/productDao.js";
import ProductDaoFirebase from '../../handlers/dao/firebase/productDao.js'

const router = express.Router();

const productDao = new ProductDao();
const productDaoFirebase = new ProductDaoFirebase();

router
    .route('/productos')
    .get(productDao.getAllProducts)
    .get(productDaoFirebase.getAllProducts)
    // .post(productDao.createProduct)
    .post(productDaoFirebase.createProduct)

router.route('/productos/:id')
    .get(productDao.getProductById)
    .put(productDao.updateProduct)
    .delete(productDao.deleteProductById)


export const productRoutes = router;