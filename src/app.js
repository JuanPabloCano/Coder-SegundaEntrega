import express from 'express';
import Error from './middleware/error.js';
import morgan from "morgan";
import {router} from './routes/router.js'
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);

app.use(Error.PageNotFound);

export default app;