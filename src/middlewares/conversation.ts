import { createConversation } from '@grammyjs/conversations'
import type { MyContext, MyConversation } from '#root/types/bot.js'
import store from '#root/databases/store.js'
import Logger from '#root/utils/logger.js'
import { createNewPost, editPost, findOrCreateUser } from '#root/models/Post.js'

async function editAddressConversation(conversation: MyConversation, ctx: MyContext) {
  await ctx.reply('请输入新的MC服务器地址: ')
  const typed = await conversation.waitFor(':text')
  const text = typed.message?.text
  if (!text)
    return await ctx.reply('输入不能为空')
  const { env } = store
  if (!env)
    return await ctx.reply('env not loaded')
  env.MCServerAddress = text
  await ctx.reply('MC服务器地址已更新')
}

const conversations = [editAddressConversation]

export default conversations

export function createAllConversations() {
  const { bot } = store
  if (!bot)
    return
  for (const conversation of conversations)
    bot.use(createConversation(conversation))
  Logger.logSuccess('All conversations initialized')
}
