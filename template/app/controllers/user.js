import User from '../models/user'

class UserController {
  static async signin(ctx, next) {
    // const { email, password } = ctx.request.body
    // const user = new User({
    //   email,
    //   password,
    //   token: email
    // })
    // const doc = await User.findOne({
    //   email: user.email
    // })
    // if (doc) {
    //   // compare password
    //   console.log('compare password')
    // } else {
    //   // flash message
    //   console.log('flash message')
    // }
    await ctx.render('signin', { title: '登录 title', msg: '登录页面' })
    await next()
  }
}

export default UserController
