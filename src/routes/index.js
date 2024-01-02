const express = require('express');
const router = express.Router();
const userRouter = require('./user.router')

router.use(userRouter);


module.exports = router;