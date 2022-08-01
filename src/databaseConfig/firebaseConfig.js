import admin from 'firebase-admin';
import Config from '../config/config.js'

export default class FirebaseConfig {
    #db;
    #Product;
    #ShoppingCart;

    constructor() {
        this.#db = admin.firestore();
        this.#Product = this.#db.collection('products');
        this.#ShoppingCart = this.#db.collection('shoppingCart');
    }

    static init() {
        admin.initializeApp({
            credential: admin.credential.cert({
                "type": Config.TYPE,
                "project_id": Config.PROJECT_ID,
                "private_key_id": Config.PRIVATE_KEY,
                "private_key": Config.PRIVATE_KEY,
                "client_email": Config.CLIENT_EMAIL,
                "client_id": Config.CLIENT_ID,
                "auth_uri": Config.AUTH_URI,
                "token_uri": Config.TOKEN_URI,
                "auth_provider_x509_cert_url": Config.AUTH_PROVIDER_X509_CERT_URL,
                "client_x509_cert_url": Config.CLIENT_X509_CERT_URL
            })
        });
    }

    get Product() {
        return this.#Product;
    }

    set Product(value) {
        this.#Product = value;
    }

    get ShoppingCart() {
        return this.#ShoppingCart;
    }

    set ShoppingCart(value) {
        this.#ShoppingCart = value;
    }
}


