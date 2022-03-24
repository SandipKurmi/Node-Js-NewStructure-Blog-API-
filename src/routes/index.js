/* import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

export default router; */

import express from 'express';
import userRoutes from './userRoute';


const router = express.Router();

userRoutes(router);
export default router;
