import { conversations } from '@grammyjs/conversations'
import type { MyContext } from '#root/types/bot.js'
import type Command from '#root/types/commands.js'
import store from '#root/databases/store.js'
import Logger from '#root/utils/logger.js'
import { showMCServerStatus } from '#root/modules/mc.js'

export const commandList: Command[] = [
  {
    command: 'start',
    description: 'Welcome! Up and running.',
    handler: async (ctx: MyContext) => {
      await ctx.reply('Welcome, up and running')
    },
  },
  { command: 'help', description: 'Show help text', handler: async (ctx: MyContext) => {
    await ctx.reply('Help text')
  } },
  {
    command: 'hello',
    description: 'Greet the bot',
    handler: async (ctx: MyContext) => {
      const { menus } = store
      if (!menus) {
        Logger.logError('Menus not loaded')
        return
      }
      await ctx.reply(':', {
        reply_markup: menus['greet-new'],
      })
    },
  },
  {
    command: 'settings',
    description: 'Open settings',
    handler: async (ctx: MyContext) => {
      await ctx.conversation.enter('editAddressConversation')
    },
  },
  { command: 'about', description: 'Show information about the bot', handler: (ctx: MyContext) => {
    const me = ctx.me
    ctx.reply(`<b>Hi!</b> <i>Welcome</i> to <a href="https://t.me/${me.username}">${me.first_name}</a><span class="tg-spoiler"> id:${me.id}</span>`, { parse_mode: 'HTML' })
  } },
  {
    command: 'id',
    description: 'Show your id',
    handler: async (ctx: MyContext) => {
      await ctx.reply(`Your id is:\`${ctx?.from?.id}\``, { parse_mode: 'MarkdownV2' })
    },
  },
  {
    command: 'mc',
    description: 'Show Minecraft server status',
    handler: async (ctx: MyContext) => {
      await ctx.reply('✨ Checking Minecraft server status...')
      showMCServerStatus(ctx)
    },
  },

]
