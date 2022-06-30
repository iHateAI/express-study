'use strict';

// 모듈
const express = require('express');
const app = express();

const PORT = 3000;

// 라우팅
const home = require('./src/routes/home/index');

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home);

app.listen(PORT, () => {
  console.log('서버 가동');
});
