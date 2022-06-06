const Router = require('@koa/router');

const router = new Router();

router.get('/ping', (ctx) => {
  ctx.body = { message: 'pong' };
});

module.exports = router;
