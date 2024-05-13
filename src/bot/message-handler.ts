import db from '#root/databases/store.js'
import Logger from '#root/utils/logger.js'

export default function registerMessageHandler() {
  const { bot } = db
  if (!bot)
    return
  Logger.logSuccess('Message handler registered')
}
