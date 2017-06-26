class homeController {
  static async index(ctx, next) {
    await ctx.render('index', { title: '首页 title', msg: '首页 msg' })
  }
}

export default homeController
