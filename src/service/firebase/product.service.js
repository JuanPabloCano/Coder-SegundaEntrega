import FirebaseConfig from "../../databaseConfig/firebaseConfig.js";
import {Product} from "../../models/mongo/Product.js";

FirebaseConfig.init();

const firebase = new FirebaseConfig();

export default class ProductService {

    async getAllProducts(req, res) {
        const products = firebase.Product;
        const resp = await products.get();
        const respoDocs = resp.docs();
        const response = respoDocs.map((doc) => ({
            timestamp: doc.timestamp,
            description: doc.description,
            code: doc.code,
            picture: doc.picture,
            price: doc.price,
            stock: doc.stock
        }));
        res.status(200).json(response);
    }

    createProduct(req, res) {
        const timestamp = Date.now();
        const {name, description, code, picture, price, stock} = req.body;
        const product = firebase.Product;
        const tests = product.doc();
        tests.create({timestamp, name, description, code, picture, price, stock})
            .then(response => {
                res.status(200).json(response);
            }).catch(err => console.log(err.message));
    }

    updateProduct(req, res) {
        const {id} = req.params;
        const {name, description, code, picture, price, stock} = req.body;
        Product.findByIdAndUpdate(id, {
            $set: {name, description, code, picture, price, stock}
        }).then(() => {
            res.status(200).json({message: 'Product updated successfully'});
        }).catch((error) => {
            res.status(400).json('Product not found');
            console.log({message: error})
        });
    }

    getProductById(req, res) {
        const {id} = req.params;
        Product.findById(id)
            .then((product) => {
                res.status(200).json({product});
            }).catch((error) => {
            res.status(400).json('Product not found');
            console.log({message: error})
        })
    }

    deleteProductById(req, res) {
        const {id} = req.params;
        Product.findByIdAndDelete(id)
            .then(() => {
                res.status(204).json({id});
            }).catch((error) => {
            res.status(400).json('Product not found');
            console.log({message: error})

        })
    }

}