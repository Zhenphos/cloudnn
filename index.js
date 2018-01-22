var Koa = require('koa');
var Router = require('koa-router');
var sigmoid = require('./sigmoid');

var app = new Koa();
var router = new Router();

router.post('/', (ctx, next) => {
  ctx.body = { sigmoid: sigmoid(ctx.request.body.x) };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
