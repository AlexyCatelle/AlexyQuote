import express from 'express';
import * as controllers from './controllers.js';

const router = express.Router();

router.get('/', controllers.home);

router.get('/quote/:id', controllers.quote);

export default router;