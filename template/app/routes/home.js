import Router from 'koa-router'
import Home from '../controllers/home'

const router = new Router({
  prefix: ''
})
router.get('/index', Home.index).get('', async ctx => {
  ctx.redirect('/index')
})

module.exports = router
