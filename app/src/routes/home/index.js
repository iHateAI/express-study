'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

// 그냥 화면 보여주는 곳
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);

// 기능
router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);

module.exports = router;