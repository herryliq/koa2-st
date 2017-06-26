import mongoose from 'mongoose'
import config from '../../config/default'

mongoose.Promise = global.Promise
mongoose.connect(config.mongodb.url, config.mongodbSecret)

mongoose.connection.on('connected', function() {
  console.info('Mongoose connection open to ' + config.mongodb.url)
})
mongoose.connection.on('error', function(err) {
  console.error('Mongoose connection error: ' + err)
  process.exit(1)
})
mongoose.connection.on('disconnected', function() {
  console.info('Mongoose connection disconnected')
})
