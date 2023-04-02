let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*Bot dedicado para Charlie🖤* ${pesan}`
let teks = `╭┄〔 *${wm}* 〕┄⊱\n┆⺀𝐍𝐚𝐭𝐢𝐱𝐂𝐡𝐚𝐫𝐥𝐢𝐞 los invoca 🍃⺀*\n┆\n┆❏ ${oi}\n┆\n┆❏ *𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨:*\n`
for (let mem of participants) {
teks += `💝 @${mem.id.split('@')[0]}\n`}
teks += `*└* 24 NyE\n\n*<3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
