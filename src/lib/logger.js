import pino from 'pino'
import {isProd} from '@lib/environment'
import {DateTime} from 'luxon'

const name = process.env.APP_NAME

const getDate = timestamp => {
  const parsed = parseInt(timestamp)
  if (isNaN(parsed)) return ''
  const date = DateTime.fromMillis(parsed)
  return date.toFormat('yyyy-MM-dd')
}

const getLoggerInfo = req => {
  const ip = req.headers['X-Real-IP']

  const {channel, username, text, startingDate, endingDate} = req.query
  return {
    ip,
    channel,
    username,
    text,
    startingDate: getDate(startingDate),
    endingDate: getDate(endingDate),
  }
}

const pinoOptions = {
  name,
  base: {name},
  level: process.env.LOG_LEVEL,
  prettyPrint: !isProd(),
  serializers: {
    req(req) {
      return {
        ...getLoggerInfo(req),
      }
    },
  },
}

export const logger = pino(pinoOptions)
