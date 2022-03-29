/* import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

export default router; */

import express from 'express';
import userRoutes from './userRoute';
import categoryRoutes from './categoryRoute';
import postRoutes from './postRoute';

const router = express.Router();

userRoutes(router);
categoryRoutes(router);
postRoutes(router);



export default router;
