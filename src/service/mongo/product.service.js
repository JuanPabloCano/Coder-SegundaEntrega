import {Product} from "../../models/mongo/Product.js";

export default class ProductService {

    getAllProducts(req, res) {
        Product.find()
            .then((product) => {
                res.status(200).json({product});
            }).catch((error) => {
            console.log({message: error.message})
        });
    }

    createProduct(req, res) {
        const timestamp = Date.now();
        const {name, description, code, picture, price, stock} = req.body;
        const product = new Product({timestamp, name, description, code, picture, price, stock});
        product.save()
            .then((response) => {
                res.status(201).json({response});
            })
            .then(() => console.log('Product created successfully'))
            .catch((error) => console.log({message: error.message}))
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