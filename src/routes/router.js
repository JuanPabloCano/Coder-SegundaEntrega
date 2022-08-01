import {Router} from 'express';
import {shoppingCartRoutes} from './router/shoppingCart.routes.js';
import {productRoutes} from './router/product.routes.js';

export const router = Router();

router.use('/', productRoutes);
router.use('/', shoppingCartRoutes);

