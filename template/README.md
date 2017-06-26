# koa2-app
使用 koa2 快速构建 web 服务

## Note
- Node.js 7.6+ 
- Babel-es2017 (无需对 Node.js 7.x 已支持的特性转码)
- RESTful, template engine, nodemon, pm2, nginx 

## Usage
```
npm i 

sh ./db.sh (启动 mongoDB 服务, 需要 password)

npm run dev
```

## stack
```
npm i babel-plugin-transform-es2015-modules-commonjs babel-preset-es2017 babel-register bluebird koa  koa-bodyparser koa-compose koa-compress kcors@2 koa-json koa-logger koa-onerror koa-router koa-views pug koa-static mongoose --save

npm i nodemon --save-dev
npm i pm2 -g
brew install nginx
```

## License
MIT