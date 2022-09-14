import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: `${__dirname}/../../environment/.env`
});

export default class Config {
    static MONGO_DB_CONNECTION = process.env.MONGO_DB_CONNECTION;
    static TYPE = process.env.TYPE;
    static PROJECT_ID = process.env.PROJECT_ID;
    static PRIVATE_KEY_ID = process.env.PRIVATE_KEY_ID;
    static PRIVATE_KEY = process.env.PRIVATE_KEY;
    static CLIENT_EMAIL = process.env.CLIENT_EMAIL;
    static CLIENT_ID = process.env.CLIENT_ID;
    static AUTH_URI = process.env.AUTH_URI;
    static TOKEN_URI = process.env.TOKEN_URI;
    static AUTH_PROVIDER_X509_CERT_URL = process.env.AUTH_PROVIDER_X509_CERT_URL;
    static CLIENT_X509_CERT_URL = process.env.CLIENT_X509_CERT_URL;
}