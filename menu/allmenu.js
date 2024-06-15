require('../batten')
const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
const fetch = require('node-fetch')
const moment = require('moment-timezone')

global.db.data = JSON.parse(fs.readFileSync('./sefuhh/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let user = global.db.data.users[m.sender]

function runtime(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

let d = new Date(new Date + 3600000)
    let locale = 'id'
    const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

global.allmenu = `
╭─ •  *ད TIMELINE ཌ*
│  ◦  Week : ${week}
│  ◦  Date : ${date}
│  ◦  Time : ${wib} WIB
╰──── •

╭─ •  *ད BOT INFO ཌ*
│  ◦  Name : ${global.namabot}
│  ◦  Uptime : ${runtime(process.uptime())}
│  ◦  Memory : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
╰──── •

————————————
(Ⓖ) = ɢʀᴏᴜᴘ
(Ⓟ) = ᴘʀᴇᴍɪᴜᴍ
(Ⓕ) = ғʀᴇᴇ
(Ⓞ) = ᴏᴡɴᴇʀ
(Ⓛ) = ʟɪᴍɪᴛ
-----  -----  ---  -----  -----


╭─ •  *ད OWNER MENU ཌ*
│  ◦ addprem (Ⓞ)
│  ◦ delprem (Ⓞ)
│  ◦ addsewa (Ⓞ)
│  ◦ delsewa (Ⓞ)
│  ◦ join (Ⓞ)
│  ◦ out (Ⓞ)
│  ◦ jpm (Ⓞ)
│  ◦ bcgc (Ⓞ)
│  ◦ ban (Ⓞ)
│  ◦ unban (Ⓞ)
│  ◦ addlimit (Ⓞ)
│  ◦ dellimit (Ⓞ)
│  ◦ resetlimit (Ⓞ)
│  ◦ addsaldo (Ⓞ)
│  ◦ minsaldo (Ⓞ)
│  ◦ addcase (Ⓞ)
│  ◦ delcase (Ⓞ)
│  ◦ listcase (Ⓞ)
│  ◦ saldoorkut (Ⓞ)
│  ◦ addmoney (Ⓞ)
│  ◦ delmoney (Ⓞ)
│  ◦ restart (Ⓞ)
│  ◦ disk (Ⓞ)
╰──── •


╭─ •  *ད GROUP MENU ཌ*
│  ◦ kick (Ⓖ)
│  ◦ antilink (Ⓖ)
│  ◦ antilink2 (Ⓖ)
│  ◦ tagall (Ⓖ)
│  ◦ hidetag (Ⓖ)
│  ◦ afk (Ⓖ)
│  ◦ opentime (Ⓖ)
│  ◦ closetime (Ⓖ)
╰──── •


╭─ •  *ད MAIN MENU ཌ*
│  ◦ daftar (Ⓕ)
│  ◦ unreg (Ⓕ)
│  ◦ ceksn (Ⓕ)
│  ◦ saweria (Ⓕ)
│  ◦ listprem (Ⓕ)
│  ◦ owner (Ⓕ)
│  ◦ saldo (Ⓕ)
│  ◦ profile (Ⓕ)
│  ◦ server (Ⓕ)
│  ◦ buyprem (Ⓕ)
│  ◦ ceklimit (Ⓕ)
│  ◦ deposit (Ⓕ)
│  ◦ bukti (Ⓕ)
│  ◦ status (Ⓕ)
│  ◦ price (Ⓕ)
│  ◦ script (Ⓕ)
│  ◦ clonebot (Ⓟ)
╰──── •


╭─ •  *ད DOWNLOAD MENU ཌ*
│  ◦ tiktok (Ⓛ)
│  ◦ ttstalk (Ⓛ)
│  ◦ Instagram (Ⓕ)
│  ◦ play (Ⓛ)
│  ◦ ytmp3 (Ⓛ)
│  ◦ ytmp4 (Ⓛ)
│  ◦ pinterest (Ⓛ)
│  ◦ tourl (Ⓕ)
│  ◦ hdr (Ⓕ)
│  ◦ capcut (Ⓕ)
│  ◦ removebg (Ⓕ)
│  ◦ gimage (Ⓕ)
╰──── •


╭─ •  *ད AI MENU ཌ*
│  ◦ openai (Ⓕ)
│  ◦ gpt4 (Ⓕ)
│  ◦ text2img (Ⓕ)
│  ◦ blackbox (Ⓕ)
│  ◦ gemini (Ⓕ)
│  ◦ bard (Ⓕ)
│  ◦ tozombie (Ⓕ)
╰──── •


╭─ •  *ད PTERODATLY MENU ཌ*
│  ◦ buyserver (Ⓕ)
│  ◦ listusr (Ⓞ)
│  ◦ reinstall (Ⓞ)
│  ◦ listsrv (Ⓞ)
│  ◦ crateadmin (Ⓞ)
│  ◦ listadmin (Ⓞ)
│  ◦ delsrv (Ⓞ)
│  ◦ delusr (Ⓞ)
╰──── •


╭─ •  *ད OTP MENU ཌ*
│  ◦ profileotp (Ⓞ)
│  ◦ layanan-otp (Ⓞ)
│  ◦ sms (Ⓞ)
│  ◦ order (Ⓞ)
│  ◦ getorder (Ⓞ)
│  ◦ cancel-otp (Ⓞ)
│  ◦ cancelsms (Ⓞ)
╰──── •


╭─ •  *ད RPG MENU ཌ*
│  ◦ inventori (Ⓕ) 
│  ◦ berkebun (Ⓕ) (Ⓖ)
│  ◦ bonus (Ⓕ) (Ⓖ)
│  ◦ merampok (Ⓕ) (Ⓖ)
│  ◦ bank (Ⓕ) 
│  ◦ nabung (Ⓕ) (Ⓖ)
│  ◦ daftar (Ⓕ)
│  ◦ tarikuang (Ⓕ) (Ⓖ)
│  ◦ petualang (Ⓕ) (Ⓖ)
│  ◦ buy (Ⓕ) (Ⓖ)
│  ◦ weekly (Ⓕ) (Ⓖ)
│  ◦ codeshortlink (Ⓕ) 
│  ◦ redeem (Ⓕ) 
│  ◦ monthly (Ⓕ) (Ⓖ)
│  ◦ nguli (Ⓕ) (Ⓖ)
│  ◦ nambang (Ⓕ) (Ⓖ)
│  ◦ mining (Ⓕ) (Ⓖ)
│  ◦ craftatm (Ⓕ) (Ⓖ)
│  ◦ mancing (Ⓕ) (Ⓖ)
│  ◦ judi (Ⓕ) (Ⓖ)
│  ◦ upgrade (Ⓕ)
│  ◦ craft (Ⓕ)
│  ◦ bansos (Ⓕ) (Ⓖ)
│  ◦ buylimit (Ⓕ)
│  ◦ cheat (Ⓞ)
│  ◦ opencreate (Ⓕ)
│  ◦ levelup (Ⓕ)
╰──── •


╭─ •  *ད GAMES MENUཌ*
│  ◦ dadu (Ⓕ) (Ⓖ)
│  ◦ suit (Ⓕ) (Ⓖ)
│  ◦ asahotak (Ⓕ) (Ⓖ)
│  ◦ caklontong (Ⓕ) (Ⓖ)
│  ◦ kuismath (Ⓕ) (Ⓖ)
│  ◦ siapakahaku (Ⓕ) (Ⓖ)
│  ◦ susunkata (Ⓕ) (Ⓖ)
│  ◦ tebakgambar (Ⓕ) (Ⓖ)
│  ◦ tebakkata (Ⓕ) (Ⓖ)
│  ◦ tebaklagu (Ⓕ) (Ⓖ)
│  ◦ tebaklirik (Ⓕ) (Ⓖ)
│  ◦ tebaktebakan (Ⓕ) (Ⓖ)
│  ◦ tekateki (Ⓕ) (Ⓖ)
│  ◦ slot (Ⓕ) (Ⓖ)
│  ◦ tebakangka (Ⓕ) (Ⓖ)
│  ◦ werewolf (Ⓕ) (Ⓖ)
│  ◦ chess (Ⓕ) (Ⓖ)
╰──── •
`

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
