import { CronJob } from 'cron'
import store from '#root/databases/store.js'
import Logger from '#root/utils/logger.js'

export function initCrons() {
  try {
    const botInstance = store.bot!
    const userChatId = store.env!.user_chat_id!
    const timeZone = 'Asia/Shanghai'

    const jobs: any[] = []
    jobs.forEach(job => job.start())
    Logger.logSuccess('Crons initialized')
  }
  catch (error) {
    Logger.logError(`Error while initializing crons', ${error}`)
  }
}
