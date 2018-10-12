var Koa = require('koa');
var Router = require('koa-router');
var sigmoid = require('./sigmoid');
var tanh = require('./tanh');

var app = new Koa();
var router = new Router();

router.post('/sigmoid', (ctx, next) => {
  ctx.body = { sigmoid: sigmoid(ctx.request.body.x) };
});

router.post('/tanh', (ctx, next) => {
	ctx.body = { sigmoid: tanh(ctx.request.body.x) };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
