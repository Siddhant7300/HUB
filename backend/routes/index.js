const router = require('express').Router();
const authRouter = require('./authRouter');
const verifyUser = require('../middleware/verifyUser');

router.use('/auth', authRouter);
// router.use('/posts', verifyUser, postRouter);
module.exports = router;