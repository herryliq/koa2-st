import compose from 'koa-compose'
import { response } from './response'
import { restify } from './rest'

export default function middleware() {
  return compose([restify(), response])
}
