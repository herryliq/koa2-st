import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from 'kcors'
import compress from 'koa-compress'
import json from 'koa-json'
import logger from 'koa-logger'
import onerror from 'koa-onerror'
import serve from 'koa-static'
import views from 'koa-views'
import path from 'path'

import './models'
import router from './routes'
import middleware from './middlewares'
import config from '../config/default'

const PORT = process.env.PORT || config.app.port
const isProduction = process.env.NODE_ENV === 'production'

const app = new Koa()

// 自定义 header
app.use(async (ctx, next) => {
  var start = new Date().getTime(),
    execTime
  await next()
  execTime = new Date().getTime() - start
  ctx.response.set('X-Response-Time', `${execTime}ms`)
  ctx.response.set('X-Powered-By', 'Koa2')
})

onerror(app)

// 请求方式 和 响应时间
app.use(logger())

// gzip 压缩
app.use(
  compress({
    filter: function(content_type) {
      return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  })
)

// body 解析
app.use(bodyParser())

// 跨域支持
app.use(cors())

// JOSN
app.use(json())

// 渲染引擎
app.use(views(__dirname + '/views', { extension: 'pug' }))

// 静态资源(线上环境 nginx 直接代理)
if (!isProduction) {
  app.use(
    serve(path.join(__dirname, 'static'), {
      maxage: 1000 * 60 * 60 * 24 * 365, // 1年，默认为0
      hidden: false, // 能否返回隐藏文件（以`.`打头），默认false不返回
      index: 'index.js', // 默认文件名
      gzip: true
      // 允许传输gzip，如静态文件夹下有两个文件，index.js和index.js.gz，
      // 会优先传输index.js.gz，默认开启
    })
  )
}

// 中间件组合 (支持 RESTful)
app.use(middleware())

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`app started at port ${PORT}!`)
})

export default app
