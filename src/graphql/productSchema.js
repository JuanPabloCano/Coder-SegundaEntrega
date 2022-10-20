import { buildSchema } from "graphql";

const productSchema = buildSchema(`
    input ProductInput {
        name: String!,
        description: String,
        code: Int!,
        picture: String,
        price: Float!,
        stock: Int!
    }
    
    type Product {
        name: String!,
        description: String,
        code: Int!,
        picture: String,
        price: Float!,
        stock: Int!
    }
    
    type Query {
        getProducts(name: String, description: String, code: Int, picture: String, price: Float, stock: Int): [Product],
        getProductById(id: ID!): Product
    }
    
    type Mutation {
        createProduct(data: ProductInput): Product,
        deleteProductById(id: ID): Product
    }
`);

export default productSchema;