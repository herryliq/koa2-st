import Router from 'koa-router'
import User from '../controllers/user'

const router = new Router({
  prefix: 'user'
})
router.get('/signin', User.signin)

module.exports = router
