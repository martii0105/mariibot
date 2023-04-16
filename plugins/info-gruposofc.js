
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Hola 👋🏻, Bienvenido a los grupos oficiales, te invito a unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de 𝐍𝐚𝐭𝐢𝐱𝐂𝐡𝐚𝐫𝐥𝐢𝐞-MD 😸

➤ Grupos oficiales del bot:
1) *${nn}*

2) *${nnn}*

➤ Grupo del Colaboracion CharlieBot, Nati-MD
 *${nnnt}*
 
➤ Grupo del col 2 (sin limite)
*${nnntt}*

➤ Infomarte sobre las nuevas actualizaciones del bot
 *${nna}*
 
➤ Grupos del ayuda sobre el bot
 *${nnntttt}*
 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Grupos del amistades donde esta el bot

*Grupo de Spam 𝐍𝐚𝐭𝐢𝐱𝐂𝐡𝐚𝐫𝐥𝐢𝐞*
https://chat.whatsapp.com/J3V9AXDtnY81vT9lENf7dq

*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*
*${nnnttt}*

*Grupo Pruebas Bot*
https://chat.whatsapp.com/C8UfYBHRzSqIvZpMrbPc2c
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

Si quieres que tu grupo aparezca aca habla con mi creador
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝐍𝐚𝐭𝐢𝐱𝐂𝐡𝐚𝐫𝐥𝐢𝐞-𝙈𝘿', 'status@broadcast')
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i

export default handler
