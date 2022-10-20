import express from 'express';
import Error from './middleware/error.js';
import morgan from 'morgan';
import { router } from './routes/router.js';
import cors from 'cors';
import { graphqlHTTP } from "express-graphql";
import productSchema from "./graphql/productSchema.js";
import ProductDao from "./handlers/dao/mongo/productDao.js";

const app = express();

const productDao = new ProductDao();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);

app.use('/graphql', graphqlHTTP({
  productSchema,
  rootValue: {
    getProducts: productDao.getAllProducts,
    getProductById: productDao.getProductById,
    createProduct: productDao.createProduct,
    deleteProductById: productDao.deleteProductById
  },
  graphiql: true
}));

app.use(Error.PageNotFound);

export default app;