import mcstat from 'minestat'
import BotLogger from '#root/bot/logger.js'
import store from '#root/databases/store.js'
import 'dotenv/config'

export function getMCServerAddress() {
  if (!store.env?.MCServerAddress) {
    BotLogger.sendServerMessage('MC服务器地址还没有被设置哦, 请使用/setting命令设置')
    return null
  }
  const full = store.env.MCServerAddress
  const address = full.split(':')[0]
  const port = Number(full.split(':')[1])
  return {
    full,
    address,
    port,
  }
}

export async function showMCServerStatus() {
  try {
    if (!store.env?.MCServerAddress) {
      BotLogger.sendServerMessage('MC服务器地址还没有被设置哦, 请使用/setting命令设置')
      return
    }
    const mcAddressInfo = getMCServerAddress()
    if (!mcAddressInfo)
      return
    const result = await mcstat.init({ address: mcAddressInfo.address, port: mcAddressInfo.port, timeout: 5000 })
    if (result.online) {
      const fullAddressDesc = `服务器地址: ` + `\`${mcAddressInfo.full}\``
      BotLogger.sendServerMessage(`服务器名称: ${result.motd}\n服务器状态: 在线\n在线人数: ${result.current_players}/${result.max_players}\n延迟: ${result.latency}ms\n${fullAddressDesc}`, { parse_mode: 'MarkdownV2' })
    }
    else {
      console.log('服务器不在线')
      BotLogger.sendServerMessage('MC服务器状态：离线')
    }
  }
  catch (error) {
    BotLogger.sendServerMessage(`MC服务器状态错误：', ${error}`)
  }
}
