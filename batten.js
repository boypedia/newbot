/**
 * Script By BOYPEDIA
 * Created On 28/3/2024
 * Contact Me on wa.me/6281264116045
 * Supported By Gpt Assistant 

SAYA ( BOYPEDIA ) TIDAK BERTANGGUNG JAWAB JIKA SCRIPT INI DI SALAH GUNAKAN 
DILARANG KERAS MENJUAL SCRIPT INI KEPADA KEPADA KRANG LAIN ( Karna Script ini Saya Akan Share Free )
JIKA ADA YANG MENJUAL NYA, SAYA PERSILAHKAN BULLY DIA + BEBAS KENON
KALAU MAU COLONG FITUR, MINIMAL MASUKIN NAMA GW DI TQTO KALIAN AJG

DAH ITU DARI GW AJA
Last Author : BOYPEDIA

Jangan Lupa Subscribe: https://youtube.com/@riooofficial?si=oPVZ7DiqfnxALTT3
*/
require('./config');
require(`./Xzyroo`)
require(`./menu/allmenu`)
require('./sefuhh/functions');
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const fsx = require("fs-extra")
const { fromBuffer } = require('file-type')
const util = require('util')
const toMS = require("ms");
const ms = require("parse-ms");
const fetch = require('node-fetch')
const QRCode = require('qrcode');
const cheerio = require('cheerio')
const cron = require('node-cron')
const crypto = require('crypto')
const { createHash } = require('crypto')
const { performance } = require("perf_hooks");
const didYouMean = require('didyoumean');
const jsobfus = require('javascript-obfuscator');
const moment = require('moment-timezone');
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const speed = require('performance-now')
const { JSDOM } = require('jsdom')
const _data = require('./batten.js')
const PhoneNumber = require('awesome-phonenumber')
const uploadFile = require('./lib/uploadFile')
const uploadImage = require('./lib/uploadImage')
const Func = require('./lib/functions')
const ytdl = require("ytdl-core")
const path = require('path')
const colors = require('@colors/colors/safe')
const canva = require('knights-canvas')
const threshold = 0.72
const chalk = require('chalk')
const checkDiskSpace = require('check-disk-space').default;
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, getRandom } = require('./lib/simple')
const { uptotelegra } = require('./lib/upload')
const _sewa = require("./lib/sewa");
const { color, bgcolor } = require('./lib/color')
const { jadibot, stopjadibot, listjadibot } = require('./clonebot/jadibot')   
const afk = require("./lib/afk");
const { payment } = ('./config')
const levelling = require("./lib/levelling");
let riooaja = JSON.parse(fs.readFileSync('./database/user.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let depositPath = "./database/deposit/"
let topupPath = "./database/topup/"
const { Saweria } = require('./lib/saweria')

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


const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
/*============== JAM  ==============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const Owner = global.owner + '@s.whatsapp.net'
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const Kalender010 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = Styles(`Good Night`)
 }
 if(time2 < "19:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "18:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "15:00:00"){
var stime = Styles(`Good Afternoon`)
 }
 if(time2 < "11:00:00"){
var stime = Styles(`Good Morning`)
 }
 if(time2 < "05:00:00"){
var stime = Styles(`Good Morning`)
 }




let caklontong = db.data.game.caklontong = []
let asahotak = db.data.game.asahotak = []
let kuismath = db.data.game.math = []
let siapakahaku = db.data.game.siapakahaku = []
let susunkata = db.data.game.susunkata = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebaklagu = db.data.game.tebaklagu = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tekateki = db.data.game.tekateki = []
//  Base
module.exports = rioo = async (rioo, m, msg, chatUpdate, type, store) => {
require("./sefuhh/handler")(rioo, m)
    try {
    const { type, quotedMsg, msg, mentioned, fromMe } = m
    if (m.isBaileys) return
    const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, "").slice(1).trim()
const content = JSON.stringify(m.message)
const pushname = m.pushName || "No Name"
const from = m.key.remoteJid
const tag = m.sender.split("@")[0]
const nomore = m.sender.replace(/[^0-9]/g, '')
const botNumber = await rioo.decodeJid(rioo.user.id)
const isOwner = [botNumber, ...global.owner].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const isBan = banned.includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const date = moment().tz("Asia/Jakarta").format("dddd, ll")
const text = q = args.join(" ")
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const listblock = await rioo.fetchBlocklist()
const timeout = 300000
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage' || type === 'textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
const isQuotedText1 = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedText2 = type === 'extendedTextMessage' && content.includes('conversation')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isViewOnce = (type == 'viewOnceMessageV2')

let _datauser = JSON.parse(fs.readFileSync('./database/registered.json'))
/*============== GROUP ==============*/

const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await rioo.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const sender = m.key.fromMe ? (rioo.user.id.split(":")[0] + "@s.whatsapp.net" || rioo.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
const isAntiLink = antilink.includes(m.chat) ? true : false
const isAntiLink2 = antilink2.includes(m.chat) ? true : false
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const welcm = m.isGroup ? wlcm.includes(from) : false
async function sendImageMentionsBuffer(url, texts, quoted){

await rioo.sendMessage(m.chat, { image: url , caption: texts, mentions: [...texts.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted })

}

// FUNCTION SALDO & DATA
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./database/deposit")
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
// BATAS SALDO
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 15;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}

let ban = JSON.parse(fs.readFileSync('./database/banned.json'))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return rioo.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
function getRandomColor() {
  return Math.floor(Math.random() * 256); // Menghasilkan warna acak dari 0-255
}
const randomColor1 = getRandomColor(); // Warna acak untuk namabot
const randomColor2 = getRandomColor(); // Warna acak untuk pushname
const randomColor3 = getRandomColor(); // Warna acak untuk groupName | Private Chat
const randomBgColor1 = getRandomColor(); // Warna acak untuk latar belakang ShunAi
const randomBgColor2 = getRandomColor(); // Warna acak untuk latar belakang Time
const randomBgColor3 = getRandomColor(); // Warna acak untuk latar belakang Cmd
const randomBgColor4 = getRandomColor(); // Warna acak untuk latar belakang From
const randomBgColor5 = getRandomColor(); // Warna acak untuk latar belakang In

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
rioo.sendPresenceUpdate('available', m.chat)
console.log(
  `\x1b[48;5;${randomBgColor1}m|\x1b[1;37m${namabot}\x1b[0m|\n` +  // Latar belakang acak untuk ShunAi dengan teks putih tebal di dalam tanda | |
  `\x1b[48;5;${randomBgColor2}m\x1b[1;37m|Time| ${time}\x1b[0m\n` +  // Latar belakang acak untuk |Time| dengan teks putih tebal
  `\x1b[48;5;${randomBgColor3}m\x1b[1;36m|Cmd| \x1b[38;5;${randomColor1}m${budy || m.mtype}\x1b[0m\n` +  // Latar belakang acak untuk |Cmd| dengan warna cyan untuk teks, warna acak untuk budy || m.mtype
  `\x1b[48;5;${randomBgColor4}m\x1b[38;5;${randomColor2}m|From| ${pushname}\x1b[0m\n` +  // Latar belakang acak untuk |From| dengan warna acak untuk teks pushname
  `\x1b[48;5;${randomBgColor5}m${groupName ? `\x1b[38;5;${randomColor3}m|In| ${groupName}` : `\x1b[38;5;${randomColor3}m|In| Private Chat`}\x1b[0m`  // Latar belakang acak untuk |In| dengan warna acak untuk teks groupName atau Private Chat
);
}
let ppUrl = await rioo.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                // REPLY WITH CONTACT
const fkontak2 ={ key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

async function reply(txt) {
const RiooAjahhh = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Author : Mhd Yasin",
newsletterJid: "120363187276222423@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: namabot,
body: hariini,
thumbnailUrl: 'https://telegra.ph/file/6b5207f5ee8221826ad46.png',
sourceUrl: 'https://instagram.com/sen27.nf',
},
},
text: txt,
}
return rioo.sendMessage(from, RiooAjahhh, {
quoted: fkontak2,
})
}

let cron = require('node-cron')
        cron.schedule('02 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = 30
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Ke Reset')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
let list = []
for (let i of owner) {
list.push({
	    	displayName: await rioo.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await rioo.getName(i)}\nFN:${await rioo.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}	
const doc = await fs.readFileSync('./sessions/creds.json')

let teks_format =`*Berikut ini cara order kode otp*

_Example_
.order id

_Contoh_
.order 14

untuk melihat id layanan
silahkan ketik .layanan`

let teks_format2 = `Format Salah !!

_Example_
.getorder <order_id>

_Contoh_
.getorder 55778888
`
const parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

let caption = ''
  const changelogs = global.db.data.changelog || []
  const shopincly = global.db.data.store || {}
  
 if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
reply(`Jangan ditag, dia sedang AFK\n\n*Alasan :* ${getReason2}\n*Sejak :* ${heheh2.hours} Jam, ${heheh2.minutes} Menit, ${heheh2.seconds} Detik yang lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
rioo.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari AFK\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} Jam ${heheh.minutes} Menit ${heheh.seconds} Detik\n`, m)
}
}

async function getGcName(groupID) {
try {
let data_name = await rioo.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}



const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}

rioo.autoshalat = rioo.autoshalat ? rioo.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? rioo.user.id : m.sender
	let id = m.chat 
    if(id in rioo.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:52',
    terbit: '06:13',
    dhuha: '07:00',
    dzuhur: '12:27',
    ashar: '15:53',
    magrib: '18:36',
    isya: '19:51',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat😁.\n\n*${waktu}*\n_untuk wilayah Medan dan sekitarnya._`
    rioo.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete rioo.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
    
    
async function igdl2(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }    
    
    
if (body === "payment_ovo") {
if (!fs.existsSync(depositPath + m.sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: m.sender,
payment: "OVO",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + m.sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
} else if (body === "payment_qris") {
if (!fs.existsSync(depositPath + m.sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: m.sender,
payment: "QRIS",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + m.sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
} else if (body === "payment_dana") {
if (!fs.existsSync(depositPath + m.sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: m.sender,
payment: "DANA",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + m.sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
}

if (fs.existsSync(depositPath + m.sender.split("@")[0] + ".json")) {
if (!m.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + m.sender.split("@")[0] + ".json"))
if (data_deposit.session === "amount") {
if (isNaN(body)) return reply("Masukan hanya angka ya")
data_deposit.data.amount_deposit = Number(body);
if (data_deposit.data.amount_deposit < 1500) return reply(`Deposit Minimal Rp1.500`)
data_deposit.session = "konfirmasi_deposit";
fs.writeFileSync(depositPath + m.sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`「 𝙆𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙎𝙄-𝘿𝙀𝙋𝙊𝙎𝙄𝙏 」

▪ ID : ${data_deposit.ID}
▪ Nomer : ${data_deposit.number.split('@')[0]}
▪ Payment : ${data_deposit.payment}
▪ Jumlah Deposit : Rp${toRupiah(data_deposit.data.amount_deposit)}
▪ Pajak Admin : Rp500
▪ Total Pembayaran : Rp${toRupiah(data_deposit.data.amount_deposit+500)}

_Deposit akan dibatalkan otomatis apabila terdapat kesalahan input._

_Ketik Lanjut untuk melanjutkan_
_Ketik Batal untuk membatalkan_`)
} else if (data_deposit.session === "konfirmasi_deposit") {
if (body.toLowerCase() === "lanjut") {
if (data_deposit.payment === "OVO") {
var py_ovo=`༆━━[ *PAYMENT OVO* ]━━࿐
 
*Nomer :* ${payment.ovo.nomer}
*AN :* ${payment.ovo.atas_nama}

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
reply(py_ovo)
} else if (data_deposit.payment === "QRIS") {
var qr_fexf =`༆━━[ *PAYMENT QRIS* ]━━࿐
 
*Url :* https://telegra.ph/file/91b6c40a2aa00b1239399.jpg
*AN :* SEN CELL

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
rioo.sendMessage(from, {image:{url: 'https://telegra.ph/file/91b6c40a2aa00b1239399.jpg'}, caption:qr_fexf}, {quoted: fkontak2})
} else if (data_deposit.payment === "DANA") {
var py_dana =`༆━━[ *PAYMENT DANA* ]━━࿐
 
*Nomer :* ${payment.dana.nomer}
*AN :* ${payment.dana.atas_nama}

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
reply(py_dana)
}} else if (body.toLowerCase() === "batal") {
reply(`Baik kak, Deposit Dengan ID : ${data_deposit.ID} dibatalkan Ya 😁🙏`)
fs.unlinkSync(depositPath + m.sender.split('@')[0] + '.json')
}}}}

if (global.autoRestart) {
cron.schedule('0 0 23 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await rioo.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}status`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })
cron.schedule('0 0 2 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await rioo.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}status`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })
}
// Anti Link
if (isAntiLink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await rioo.groupInviteCode(m.chat))
await rioo.sendMessage(m.chat, { delete: m.key })
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Gajadi, Karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isOwner) return m.reply(`Gajadi, Kamu ownerku`)
await rioo.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
rioo.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (isAntiLink2) {
if (budy.match(`tiktok.com`)) {
m.reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link tiktok, maaf kamu akan di kick`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
if (isAdmins) return m.reply(`Gajadi, kamu admin`)
if (isOwner) return m.reply(`Gajadi, kamu owner ku`)
await rioo.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
rioo.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
//total fitur
const totalFitur = () =>{
var mytext = fs.readFileSync("./batten.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
// Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: rioo.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, rioo.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        rioo.ev.emit('messages.upsert', msg)
        }

/*============== APA RPG ATAU EXP ==============*/
const items = {
buy: {
limit: {
exp: 999
},
potion: {
money: 1250,
},
trash: {
money: 4,
},
wood: {
money: 700
},
rock: {
money: 850
},
string: {
money: 400
},
iron: { 
	money: 3000
}
},
sell: {
potion: {
money: 125,
},
trash: {
money: 2
},
wood: {
money: 600
},
rock: {
money: 750
},
string: {
money: 300
},
iron: {
money: 2500
},
gold: {
money: 4700
},
diamond: {
money: 9000
},
emerald: {
money: 15000
}
}
}
//
const rewards = {
  exp: 15000,
  money: 35999,
  potion: 9,
}
const rewardss = {
exp: 50000,
money: 49999,
potion: 10,
mythic: 3,
legendary: 1
}
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}

 if (db.data.users[m.sender].autolevelup) {
let user = global.db.data.users[m.sender]
if (!user.autolevelup) return !0
let before = user.level * 1
while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (user.level <= 1) {
user.role = 'Petualangan Awal 🌄'
} else if (user.level <= 11) {
user.role = 'Pertarungan Melawan Kegelapan 🗡️'
} else if (user.level <= 21) {
user.role = 'Kemunculan Ancaman Baru ☠️'
} else if (user.level <= 31) {
user.role = 'Kehancuran Dunia yang Terancam 🌍'
} else if (user.level <= 41) {
user.role = 'Revolusi Pahlawan ⚔️'
} else if (user.level <= 51) {
user.role = 'Era Kedamaian yang Rapuh 🕊️'
} else if (user.level <= 61) {
user.role = 'Masa Depan yang Tidak Pasti 🌌'
} else if (user.level <= 71) {
user.role = 'Kembalinya Ancaman Kuno 🔮'
} else if (user.level <= 81) {
user.role = 'Misi Keselamatan Galaksi 🚀'
} else if (user.level <= 91) {
user.role = 'Perang Besar: Awal dari Semua 🌟'
} else if (user.level <= 100) {
user.role = 'Perang Besar: Akhir dari Semua 💥'
}
let role = user.role
if (before !== user.level) {
let naiklevell = `乂  L E V E L  U P

┌  ◦ Progress : *${before} -> ${user.level}*
└  ◦ Role : *${db.data.users[m.sender].role}* 


*Hadiah Level Up:*
+1 Pangkat Yang Terbuka`.trim()
try {
	let image, data, pp
				try { pp = await rioo.profilePictureUrl(m.sender, 'image') }
				catch { pp = 'https://telegra.ph/file/6b5207f5ee8221826ad46.png' }
				image = await new can.Up().setAvatar(pp).toAttachment()
				data = await image.toBuffer()
				await rioo.sendMessage(m.chat, { image: data, caption: txt }, { quoted : fkontak2 })
} catch {
reply(naiklevell)
}
}
}       

if (global.db.data.users[m.sender].level === 900 && m.isGroup) {
let user = global.db.data.users[m.sender]
reply(`*🥳 Selamat Untuk Kamu ${pushname}*
- Kamu Mendapatkan Gratis Premium! 7 Hari Karna Kamu Naik Level 900!!!!!!, Selamat Untuk Pencapaian Mu Aku Menghargainya 🙇`)
user.level = 0

  var jumlahHari = 86400000 * 7; 
  var now = new Date() * 1;

  global.db.data.users[m.sender].premium = true
  
  if (now < global.db.data.users[m.sender].premiumDate) {
  global.db.data.users[m.sender].premiumDate += jumlahHari;
   } else {
   global.db.data.users[m.sender].premiumDate = now + jumlahHari;
   }
}

function formatCurrency(amount) {
  return `${amount.toLocaleString()}zm`; 
}
let formattedMoneyZ;
if (global.db.data.users[m.sender].money && global.db.data.users[m.sender]) {
formattedMoneyZ = formatCurrency(global.db.data.users[m.sender].money);
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}
const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./batten.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
async function progres(avatar, nama, expneed, expnow, levelnow, ){

const image = await new canva.Rank()

    .setAvatar(avatar)

    .setUsername(nama)

    .setBg("https://telegra.ph/file/6b5207f5ee8221826ad46.png")

    .setNeedxp(expneed)

    .setCurrxp(expnow)

    .setLevel(levelnow)

    .setRank("https://i.ibb.co/Wn9cvnv/FABLED.png") 

    .toAttachment();

  data = image.toBuffer();

  return data

  }
const isPremium = global.db.data.users[m.sender].premium

function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await rioo.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: fkontak2 })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await rioo.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: fkontak2 })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
let benar = `*Benar 🥳*\n_Selamat ya!_`
let salah = `*Salah ❌*\n_Ayo coba lagi!_`

if (caklontong[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == caklontong[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}\n\nAlasannya adalah ${json.deskripsi}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
} else {
if (--caklontong[m.chat][2] == 0) {
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${caklontong[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${caklontong[m.chat][2]} kesempatan`)
}
}
}
if (asahotak[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == asahotak[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
} else {
if (--asahotak[m.chat][2] == 0) {
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${asahotak[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${asahotak[m.chat][2]} kesempatan`)
}
}
}

if (kuismath[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == kuismath[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(kuismath[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(kuismath[m.chat][3])
delete kuismath[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text == json.jawaban) {
global.db.data.users[m.sender].exp += json.hadiah
global.db.data.users[m.sender].tiketcoin += 1
clearTimeout(kuismath[m.chat][3])
delete kuismath[m.chat]
reply(`*Jawaban Benar!*\n\n+${json.hadiah} Xp\n+1 Tiketcoin`)
} else {
if (--kuismath[m.chat][2] == 0) {
clearTimeout(kuismath[m.chat][3])
delete kuismath[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else reply(`*Jawaban Salah!*\n\nMasih ada ${kuismath[m.chat][2]} kesempatan`)
}
}
}
if (siapakahaku[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == siapakahaku[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(siapakahaku[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(siapakahaku[m.chat][3])
delete siapakahaku[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(siapakahaku[m.chat][3])
delete siapakahaku[m.chat]
} else {
if (--siapakahaku[m.chat][2] == 0) {
clearTimeout(siapakahaku[m.chat][3])
delete siapakahaku[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${siapakahaku[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${siapakahaku[m.chat][2]} kesempatan`)
}
}
}
if (susunkata[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == susunkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
} else {
if (--susunkata[m.chat][2] == 0) {
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${susunkata[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${susunkata[m.chat][2]} kesempatan`)
}
}
}
if (tebakkata[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
} else {
if (--tebakkata[m.chat][2] == 0) {
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${tebakkata[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${tebakkata[m.chat][2]} kesempatan`)
}
}
}
if (tebaklagu[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaklagu[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklagu[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebaklagu[m.chat][3])
delete tebaklagu[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.judul}`)
} else if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += tebaklagu[m.chat][2]
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+${tebaklagu[m.chat][2]} Xp\n+1 Tiketcoin`)
clearTimeout(tebaklagu[m.chat][3])
delete tebaklagu[m.chat]
} else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}


if (tebaklirik[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
answer = json.jawaban.toLowerCase().trim()
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
return reply(`*Kamu menyerah!*\n\nJawabannya adalah ${answer}`)
} else if (m.text.toLowerCase() == answer) {
reply(benar)
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
} else if (similarity(m.text.toLowerCase(), answer) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}
if (tebakgambar[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
answer = json.jawaban.toLowerCase().trim()
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
return reply(`*Kamu menyerah!*\n\nJawabannya adalah ${answer}`)
} else if (m.text.toLowerCase() == answer) {
reply(benar)
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
} else if (similarity(m.text.toLowerCase(), answer) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}
if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
answer = json.jawaban.toLowerCase().trim()
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
return reply(`*Kamu menyerah!*\n\nJawabannya adalah ${answer}`)
} else if (m.text.toLowerCase() == answer) {
reply(benar)
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
} else if (similarity(m.text.toLowerCase(), answer) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}
if (tekateki[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tekateki[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
answer = json.jawaban.toLowerCase().trim()
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
return reply(`*Kamu menyerah!*\n\nJawabannya adalah ${answer}`)
} else if (m.text.toLowerCase() == answer) {
reply(benar)
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
} else if (similarity(m.text.toLowerCase(), answer) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}
function formatter(value) {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculatePPN(value) {
  return value * 0.1;
}

function removeItem(array, item) {
  return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}
//=================================================//
switch (command) {
case 'help':
case 'menu': {
let apalahh = `ʜɪ, ɪ'ᴍ *BOYPEDIA* ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴅᴇꜱɪɢɴᴇᴅ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ᴡɪᴛʜ ᴛʜᴇ ꜰᴇᴀᴛᴜʀᴇꜱ ɪ ʜᴀᴠᴇ

乂  *I N F O - B O T* 乂
  
  ° *NamaBot* : ${namabot}
  ° *NamaKamu* : ${pushname}
  ° *Runtime* : ${runtime(process.uptime())}
  ° *Totalfeature* : ${totalFitur()}
  
`
let sections = [{
title: 'LIST MENU',
highlight_label: 'ALL MENU LISTS',
rows: [{
title: 'MENU ALLMENU',
description: `DISPLAYS MENU ALLMENU`, 
id: '.allmenu'
},
{
title: 'MENU MENUV2',
description: `DISPLAYS MENUV2 MENU`, 
id: '.menuv2'
},
{
title: 'MENU PTERODATLY',
description: `DISPLAYS MENU PTERODATLY`, 
id: '.menupanel'
},
{
title: 'MENU OTP',
description: `DISPLAYS MENU OTP`, 
id: '.otpmenu'
},
{
title: 'MENU RPG',
description: `DISPLAYS MENU RPG`, 
id: '.rpgmenu'
},
{
title: 'MENU GAMES',
description: `DISPLAYS MENU GAMES`, 
id: '.gamesmenu'
}]
},
{
title: 'SYSTEM INFORMATION 🤖', 
highlight_label: 'SYSTEM INFORMATION',
rows: [{
title: 'OWNER BOT',
description: `DISPLAYS OWNER BOT`, 
id: '.owner'
},
{
title: 'PROFILE ANDA',
description: `DISPLAYS PROFILE ANDA`, 
id: '.me'
}]
},
{
title: 'TOPUP 🛒', 
highlight_label: 'New',
rows: [{
title: 'Top-Up Dana',
description: `Displays Top-Up Dana`, 
id: '.topup-dana'
},
{
title: 'Top-Up Gopay',
description: `Displays Top-Up Gopay`, 
id: '.topup-gopay'
},
{
title: 'Top-Up Ovo',
description: `Displays Top-Up Ovo`, 
id: '.topup-ovo'
    }]
     }]
let listMessage = {
    title: 'MENU DISINI', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363187276222423@newsletter',
 newsletterName: 'Author : Mhd Yasin', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rioo.decodeJid(rioo.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: apalahh
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "BOYPEDIA",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/6b5207f5ee8221826ad46.png" } }, { upload: rioo.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6281264116045\",\"merchant_url\":\"https://wa.me/6281264116045\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await rioo.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'menuv2':
let battenn = `ʜɪ, ɪ'ᴍ *BOYPEDIA* ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴅᴇꜱɪɢɴᴇᴅ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ᴡɪᴛʜ ᴛʜᴇ ꜰᴇᴀᴛᴜʀᴇꜱ ɪ ʜᴀᴠᴇ

   乂  *I N F O - B O T* 乂
  
  ° *NamaBot* : ${namabot}
  ° *NamaKamu* : ${pushname}
  ° *Runtime* : ${runtime(process.uptime())}
  ° *Totalfeature* : ${totalFitur()}
  

`
let mek = generateWAMessageFromContent(m.chat, {    
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: battenn
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./media/img/riooxdzz.png')}, { upload: rioo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"Klick Menu",
"sections":[{"title":"MENU LIST",
"rows":[{"header":"ANTILINK GROUP",
"title":"ANTILINK",
"description":"Displays The List Of ANTILINK The Features",
"id":".antilink"},
{"header":"KICK GROUP",
"title":"KICK",
"description":"Displays The List Of KICK Features",
"id":".kick"},
{"header":"ANTILINK2 GROUP",
"title":"ANTI LINK2",
"description":"Displays The List Of ANTILINK2 Features",
"id":".antilink2"},
{"header":"OPENTIME GROUP",
"title":"OPENTIME",
"description":"Displays The List Of OPENTIME Features",
"id":".opentime"},
{"header":"CLOSETIME GROUP",
"title":"CLOSETIME",
"description":"Displays The List Of CLOSETIME Features",
"id":".closetime"},
{"header":"AFK GROUP",
"title":"AFK",
"description":"Displays The List Of AFK Features",
"id":".afk"},
{"header":"TAGALL GROUP",
"title":"TAGALL",
"description":"Displays The List Of TAGALL Features",
"id":".tagall"},
{"header":"HIDETAG GROUP",
"title":"HIDETAG",
"description":"Displays The List Of HIDETAG Features",
"id":".hidetag"},
{"header":"JPM OWNER",
"title":"JPM",
"description":"Displays The List Of JPM Features",
"id":".jpm"},
{"header":"JOIN OWNER",
"title":"JOIN",
"description":"Displays The List Of JOIN Features",
"id":".join"},
{"header":"OUT OWNER",
"title":"OUT",
"description":"Displays The List Of OUT Features",
"id":".out"},
{"header":"DISK OWNER",
"title":"DISK",
"description":"Displays The List Of DISK Features",
"id":".disk"},
{"header":"ADDPREMIUM OWNER",
"title":"ADDPREMIUM",
"description":"Displays The List Of ADDPREMIUM Features",
"id":".addprem"},
{"header":"DELETEPREMIUM OWNER",
"title":"DELETEPREMIUM",
"description":"Displays The List Of DELETEPREMIUM Features",
"id":".delprem"},
{"header":"ADDSEWA OWNER",
"title":"ADDSEWA",
"description":"Displays The List Of ADDSEWA Features",
"id":".addsewa"},
{"header":"DELSEWA OWNER",
"title":"DELSEWA",
"description":"Displays The List Of DELSEWA Features",
"id":".delsewa"},
{"header":"RESTART OWNER",
"title":"RESTART BOT",
"description":"Displays The List Of RESTART Features",
"id":".restart"},
{"header":"BANNED OWNER",
"title":"BANNED",
"description":"Displays The List Of BANNED Features",
"id":".ban"},
{"header":"SALDOORKUT OWNER",
"title":"ORKUT",
"description":"Displays The List Of ORKUT Features",
"id":".saldoorkut"},
{"header":"UNBANNED OWNER",
"title":"UNBANNED",
"description":"Displays The List Of UNBANNED Features",
"id":".unban"},
{"header":"ADDSALDO OWNER",
"title":"ADDSALDO",
"description":"Displays The List Of ADDSALDO Features",
"id":".addsaldo"},
{"header":"ADDLIMIT OWNER",
"title":"ADDLIMIT",
"description":"Displays The List Of ADDLIMIT Features",
"id":".addlimit"},
{"header":"DELETELIMIT OWNER",
"title":"DELETELIMIT",
"description":"Displays The List Of DELETELIMIT Features",
"id":".dellimit"},
{"header":"RESETLIMIT OWNER",
"title":"RESETLIMIT",
"description":"Displays The List Of RESETLIMIT Features",
"id":".resetlimit"},
{"header":"ADDCASE OWNER",
"title":"ADDCASE SALDO",
"description":"Displays The List Of ADDCASE Features",
"id":".addcase"},
{"header":"DELETECASE OWNER",
"title":"DELETECASE",
"description":"Displays The List Of DELETECASE Features",
"id":".delcase"},
{"header":"LISTCASE OWNER",
"title":"LISTCASE",
"description":"Displays The List Of LISTCASE Features",
"id":".listcase"},
{"header":"ADDMONEY OWNER",
"title":"ADDMONEY",
"description":"Displays The List Of ADDMONEY Features",
"id":".addmoney"},
{"header":"DELMONEY OWNER",
"title":"DELMONEY",
"description":"Displays The List Of DELMONEY Features",
"id":".delmoney"},
{"header":"RESETMONEY OWNER",
"title":"RESETMONEY",
"description":"Displays The List Of RESETMONEY Features",
"id":".resetmoney"},
{"header":"BERKURANG SALDO OWNER",
"title":"BERKURANG SALDO",
"description":"Displays The List Of BERKURANG SALDO Features",
"id":".minsaldo"},
{"header":"BROADCAST OWNER",
"title":"BROADCAST",
"description":"Displays The List Of BROADCAST Features",
"id":".bcgroup"},
{"header":"LIST SEWA",
"title":"LISTSEWA",
"description":"Displays The List Of LISTSEWA Features",
"id":".listsewa"},
{"header":"BUY SEWA",
"title":"BUYSEWA",
"description":"Displays The List Of BUYSEWA Features",
"id":".buysewa"},
{"header":"TOTAL FEATURE",
"title":"TOTALFEATURE",
"description":"Displays The List Of TOTALFEATURE Features",
"id":".totalfeature"},
{"header":"GATEWAY SAWERIA",
"title":"GATEWAY",
"description":"Displays The List Of GATEWAY SAWERIA Features",
"id":".saweria"},
{"header":"LISPREMIUM ALL",
"title":"LISTPREMIUM",
"description":"Displays The List Of LISTPREMIUM Features",
"id":".listprem"},
{"header":"SALDO ANDA",
"title":"SALDO",
"description":"Displays The List Of SALDO ANDA Features",
"id":".saldo"},
{"header":"PROFILE ANDA",
"title":"PROFILE",
"description":"Displays The List Of PROFILE ANDA Features",
"id":".profile"},
{"header":"LIMIT ANDA",
"title":"LIMIT",
"description":"Displays The List Of LIMIT ANDA Features",
"id":".ceklimit"},
{"header":"SERVER BOT",
"title":"SERVER",
"description":"Displays The List Of SERVER BOT Features",
"id":".server"},
{"header":"DEPOSIT MENU",
"title":"DEPOSIT",
"description":"Displays The List Of DEPOSIT OTOMATIS Features",
"id":".deposit"},
{"header":"BUKTI TRX ANDA",
"title":"BUKTI",
"description":"Displays The List Of BUKTI TRX Features",
"id":".bukti"},
{"header":"STATUS BOT",
"title":"STATUS",
"description":"Displays The List Of STATUS BOT Features",
"id":".status"},
{"header":"UNREGISTER ANDA",
"title":"UNREGISTER",
"description":"Displays The List Of UNREGISTER ANDA Features",
"id":".unreg"},
{"header":"CEKSN ANDA",
"title":"CEKSN",
"description":"Displays The List Of CEKSN ANDA Features",
"id":".ceksn"},
{"header":"OWNER BOT",
"title":"OWNER",
"description":"Displays The List Of OWNER BOT Features",
"id":".owner"},
{"header":"BUYPREMIUM OTOMATIS",
"title":"BUYPREMIUM",
"description":"Displays The List Of BUYPREMIUM OTOMATIS Features",
"id":".buyprem"},
{"header":"LIST PRICE",
"title":"PRICE",
"description":"Displays The List Of LIST PRICE Features",
"id":".price"},
{"header":"SCRIPT BOT",
"title":"SCRIPT",
"description":"Displays The List Of SCRIPT Features",
"id":".script"},
{"header":"YOUTUBE PLAY",
"title":"YOUTUBEPLAY",
"description":"Displays The List Of YOUTUBEPLAY Features",
"id":".play"},
{"header":"YOUTUBE MP4",
"title":"YTMP4",
"description":"Displays The List Of YOUTUBE MP4Features",
"id":".ytmp4"},
{"header":"YOUTUBE MP3",
"title":"YTMP3",
"description":"Displays The List Of YOUTUBE MP3 Features",
"id":".ytmp3"},
{"header":"INSTAGRAM DOWNLOAD",
"title":"INSTAGRAM",
"description":"Displays The List Of INSTAGRAM Features",
"id":".instagram"},
{"header":"TIKTOK STALK",
"title":"TIKTOK",
"description":"Displays The List Of TIKTOK STALK Features",
"id":".ttstalk"},
{"header":"TIKTOK DOWNLOAD",
"title":"TIKTOK",
"description":"Displays The List Of TIKTOK Features",
"id":".tiktok"},
{"header":"TOURL MEDIA",
"title":"TOURL",
"description":"Displays The List Of TOURL Features",
"id":".tourl"},
{"header":"HDR MEDIA",
"title":"HDR",
"description":"Displays The List Of HDR Features",
"id":".hdr"},
{"header":"CAPCUT DOWNLOAD",
"title":"CAPCUT",
"description":"Displays The List Of CAPCUT Features",
"id":".capcut"},
{"header":"REMOVEBG DOWNLOAD",
"title":"REMOVEBG",
"description":"Displays The List Of REMOVEBG Features",
"id":".removebg"},
{"header":"PINTEREST SEARCH",
"title":"PINTEREST",
"description":"Displays The List Of PINTEREST Features",
"id":".pinterest"},
{"header":"GIMAGE SEARCH",
"title":"GIMAGE",
"description":"Displays The List Of GIMAGE Features",
"id":".gimage"},
{"header":"TEXT2IMG SEARCH",
"title":"TEXT2IMG",
"description":"Displays The List Of TEXT2IMG Features",
"id":".text2img"},
{"header":"OPENAI AI",
"title":"OPENAI",
"description":"Displays The List Of OPENAI Features",
"id":".openai"},
{"header":"JADIZOMBIE AI",
"title":"JADIZOMBIE",
"description":"Displays The List Of JADIZOMBIE Features",
"id":".tozombie"},
{"header":"GPT4 AI",
"title":"GPT4",
"description":"Displays The List Of GPT4 Features",
"id":".gpt4"},
{"header":"BLACKBOX AI",
"title":"BLACKBOX",
"description":"Displays The List Of BLACKBOX Features",
"id":".blackbox"},
{"header":"GEMINI AI",
"title":"GEMINI",
"description":"Displays The List Of GEMINI Features",
"id":".gemini"},
{"header":"BARD AI",
"title":"BARD",
"description":"Displays The List Of BARD Features",
"id":".bard"},
{"header":"SHORTLINK TINYURL",
"title":"SHORTLINK",
"description":"Displays The List Of SHORTLINK TINYURL Features",
"id":".shortlink"}]
}]
}`
              }
],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363187276222423@newsletter',
                  newsletterName: 'Author : Mhd Yasin',
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await rioo.relayMessage(mek.key.remoteJid, mek.message, {
        messageId: mek.key.id
        })
break  

case 'menupanel':
let menuptero = `*list menu pterodatly 👇*

  乂  *I N F O - B O T* 乂
  
  ° *NamaBot* : ${namabot}
  ° *NamaKamu* : ${pushname}
  ° *Runtime* : ${runtime(process.uptime())}
  ° *Totalfeature* : ${totalFitur()}
  
  
`

let tsrh = generateWAMessageFromContent(m.chat, {    
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: menuptero
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./media/img/riooxdzz.png')}, { upload: rioo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"Klick Sini",
"sections":[{"title":"PTERODATLY",
"rows":[{"header":"BUYSERVER",
"title":"BUYSERVER",
"description":"Displays The List Of BUYSERVER The Features",
"id":".buyserver"},
{"header":"LISTUSER",
"title":"LISTUSER",
"description":"Displays The List Of LISTUSER Features",
"id":".listusr"},
{"header":"REINSTALL",
"title":"REINSTALL",
"description":"Displays The List Of REINSTALL Features",
"id":".reinstall"},
{"header":"LISTSERVER",
"title":"LISTSERVER",
"description":"Displays The List Of LISTSERVER Features",
"id":".listsrv"},
{"header":"CREATE ADMIN",
"title":"CREATE ADMIN",
"description":"Displays The List Of CREATE ADMIN Features",
"id":".crateadmin"},
{"header":"LIST ADMIN",
"title":"LIST ADMIN",
"description":"Displays The List Of LIST ADMIN Features",
"id":".listadmin"},
{"header":"DELETE SERVER",
"title":"DELETE SERVER",
"description":"Displays The List Of DELETE SERVER Features",
"id":".delsrv"},
{"header":"DELETE USER",
"title":"DELETE USER",
"description":"Displays The List Of DELETE USER Features",
"id":".delusr"}]
}]
}`
              }
],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363187276222423@newsletter',
                  newsletterName: 'Author : Mhd Yasin',
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await rioo.relayMessage(tsrh.key.remoteJid, tsrh.message, {
        messageId: tsrh.key.id
        })
break
case 'buyserver':
let hargasrv = `*INFO ANDA*

 • Name : ${pushname}
 • Nomor : ${tag}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
Lakukan pembelian secara otomatis

${prefix}1GB Nama,Nomor   > Rp. 1,500
${prefix}2GB Nama,Nomor   > Rp. 2,000
${prefix}4GB Nama,Nomor   > Rp. 3,000
${prefix}4GB Nama,Nomor   > Rp. 4,000
${prefix}5GB Nama,Nomor   > Rp. 5,000
${prefix}6GB Nama,Nomor   > Rp. 6,000
${prefix}7GB Nama,Nomor   > Rp. 7,000
${prefix}8GB Nama,Nomor   > Rp. 8,000
${prefix}9GB Nama,Nomor   > Rp. 9,000
${prefix}0GB Nama,Nomor   > Rp. 15.000

Contoh cara penggunaan
• Example : 1gb ${pushname},${nomore}`
let tol = generateWAMessageFromContent(m.chat, {    
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: hargasrv
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./media/img/riooxdzz.png')}, { upload: rioo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"Klick Sini",
"sections":[{"title":"1GB-UNLIMITED",
"rows":[{"header":"1GB",
"title":"1GB",
"description":"Displays The List Of 1GB The Features",
"id":".1gb"},
{"header":"2GB",
"title":"2GB",
"description":"Displays The List Of 2GB Features",
"id":".2gb"},
{"header":"3GB",
"title":"3GB",
"description":"Displays The List Of 3GB Features",
"id":".3gb"},
{"header":"4GB",
"title":"4GB",
"description":"Displays The List Of 4GB Features",
"id":".4gb"},
{"header":"5GB",
"title":"5GB",
"description":"Displays The List Of 5GB Features",
"id":".5gb"},
{"header":"6GB",
"title":"6GB",
"description":"Displays The List Of 6GB Features",
"id":".6gb"},
{"header":"7GB",
"title":"7GB",
"description":"Displays The List Of 7GB Features",
"id":".7gb"},
{"header":"8GB",
"title":"8GB",
"description":"Displays The List Of 8GB Features",
"id":".8gb"},
{"header":"9GB",
"title":"9GB",
"description":"Displays The List Of 9GB Features",
"id":".9gb"},
{"header":"UNLIMITED",
"title":"UNLIMITED",
"description":"Displays The List Of UNLIMITED Features",
"id":".unlimited"}]
}]
}`
              }
],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363187276222423@newsletter',
                  newsletterName: 'Author : Mhd Yasin',
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await rioo.relayMessage(tol.key.remoteJid, tol.message, {
        messageId: tol.key.id
        })
break
case 'otpmenu':
let otpmu = `*list menu otp 👇*

  乂  *I N F O - B O T* 乂
  
  ° *NamaBot* : ${namabot}
  ° *NamaKamu* : ${pushname}
  ° *Runtime* : ${runtime(process.uptime())}
  ° *Totalfeature* : ${totalFitur()}
  
`

let idiot = generateWAMessageFromContent(m.chat, {    
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: otpmu
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./media/img/riooxdzz.png')}, { upload: rioo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"Klick Sini",
"sections":[{"title":"LAYANAN OTP",
"rows":[{"header":"PROFILE OTP",
"title":"PROFILE",
"description":"Displays The List Of PROFILEOTP The Features",
"id":".profileotp"},
{"header":"LAYANAN OTP",
"title":"LAYANAN",
"description":"Displays The List Of LAYANAN OTP Features",
"id":".layanan-otp"},
{"header":"SMS OTP",
"title":"SMS",
"description":"Displays The List Of SMS OTP Features",
"id":".sms"},
{"header":"ORDER LAYANAN",
"title":"ORDER",
"description":"Displays The List Of ORDER LAYANAN Features",
"id":".order"},
{"header":"GETORDER LAYANAN",
"title":"GETORDER",
"description":"Displays The List Of GETORDER LAYANAN Features",
"id":".getorder"},
{"header":"CANCEL OTP",
"title":"CANCEL",
"description":"Displays The List Of CANCEL OTP Features",
"id":".cancel-otp"},
{"header":"CANCEL SMS",
"title":"CANCEL",
"description":"Displays The List Of CANCEL SMS Features",
"id":".cancelsms"}]
}]
}`
              }
],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363187276222423@newsletter',
                  newsletterName: 'Author : Mhd Yasin',
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await rioo.relayMessage(idiot.key.remoteJid, idiot.message, {
        messageId: idiot.key.id
        })
break
case 'rpgmenu':
let menurpg = `*cek fitur RPG dibawah ini 👇*

   乂  *I N F O - B O T* 乂
  
  ° *NamaBot* : ${namabot}
  ° *NamaKamu* : ${pushname}
  ° *Runtime* : ${runtime(process.uptime())}
  ° *Totalfeature* : ${totalFitur()}
  
  
`

let hdeh = generateWAMessageFromContent(m.chat, {    
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: menurpg
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./media/img/riooxdzz.png')}, { upload: rioo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"Klick Sini",
"sections":[{"title":"MENU RPG",
"rows":[{"header":"INVENTORI ANDA ",
"title":"INVENTORI",
"description":"Displays The List Of INVENTORI ANDA The Features",
"id":".inventori"},
{"header":"BERKEBUN RPG",
"title":"BERKEBUN",
"description":"Displays The List Of BERKEBUN RPG Features",
"id":".berkebun"},
{"header":"BONUS RPG",
"title":"BERKEBUN",
"description":"Displays The List Of BONUS RPG Features",
"id":".bonus"},
{"header":"MERAMPOK RPG",
"title":"MERAMPOK",
"description":"Displays The List Of MERAMPOK RPG Features",
"id":".merampok"},
{"header":"BANK ANDA",
"title":"BANK",
"description":"Displays The List Of BANK ANDA Features",
"id":".bank"},
{"header":"NABUNG MONEY",
"title":"NABUNG",
"description":"Displays The List Of NABUNG MONEY Features",
"id":".nabung"},
{"header":"DAFTAR RPG",
"title":"DAFTAR",
"description":"Displays The List Of DAFTAR RPG Features",
"id":".daftar"},
{"header":"TARIK MONEY RPG",
"title":"TARIKMONEY",
"description":"Displays The List Of TARIK MONEY RPG Features",
"id":".tarikuang"},
{"header":"PETUALANG RPG",
"title":"PETUALANG",
"description":"Displays The List Of TARIK PETUALANG RPG Features",
"id":".petualang"},
{"header":"BUY RPG",
"title":"BUY",
"description":"Displays The List Of TARIK MONEY RPG Features",
"id":".buy"},
{"header":"WEEKLY RPG",
"title":"WEEKLY",
"description":"Displays The List Of WEEKLY RPG Features",
"id":".weekly"},
{"header":"CODESHORTLINK RPG",
"title":"CODESHORTLINK",
"description":"Displays The List Of CODESHORTLINK RPG Features",
"id":".codeshortlink"},
{"header":"REDEEM RPG",
"title":"REDEEM",
"description":"Displays The List Of REDEEM RPG Features",
"id":".redeem"},
{"header":"MONTHLY RPG",
"title":"MONTHLY",
"description":"Displays The List Of MONTHLY RPG Features",
"id":".monthly"},
{"header":"NGULI RPG",
"title":"NGULI",
"description":"Displays The List Of NGULI RPG Features",
"id":".nguli"},
{"header":"MULUNG RPG",
"title":"MULUNG",
"description":"Displays The List Of MULUNG RPG Features",
"id":".mulung"},
{"header":"NAMBANG RPG",
"title":"NAMBANG",
"description":"Displays The List Of NAMBANG RPG Features",
"id":".nambang"},
{"header":"MINING RPG",
"title":"MINING",
"description":"Displays The List Of MINING RPG Features",
"id":".mining"},
{"header":"ATM RPG",
"title":"ATM",
"description":"Displays The List Of ATM RPG Features",
"id":".craftatm"},
{"header":"MANCING RPG",
"title":"MANCING",
"description":"Displays The List Of MANCING RPG Features",
"id":".mancing"},
{"header":"JUDI RPG",
"title":"JUDI",
"description":"Displays The List Of JUDI RPG Features",
"id":".judi"},
{"header":"UPGRADE RPG",
"title":"UPGRADE",
"description":"Displays The List Of UPGRADE RPG Features",
"id":".upgrade"},
{"header":"CRAFT RPG",
"title":"CRAFT",
"description":"Displays The List Of CRAFT RPG Features",
"id":".craft"},
{"header":"BANSOS RPG",
"title":"BANSOS",
"description":"Displays The List Of BANSOS RPG Features",
"id":".bansos"},
{"header":"BUYLIMIT RPG",
"title":"BUYLIMIT",
"description":"Displays The List Of BUYLIMIT RPG Features",
"id":".buylimit"},
{"header":"CHEAT RPG",
"title":"CHEAT",
"description":"Displays The List Of CHEAT RPG Features",
"id":".cheat"},
{"header":"CREATESUMMON RPG",
"title":"CREATESUMMON",
"description":"Displays The List Of CREATESUMMON RPG Features",
"id":".opencreate"},
{"header":"LEVELUP RPG",
"title":"LEVELUP",
"description":"Displays The List Of LEVELUP RPG Features",
"id":".levelup"}]
}]
}`
              }
],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363187276222423@newsletter',
                  newsletterName: 'Author : Mhd Yasin',
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await rioo.relayMessage(hdeh.key.remoteJid, hdeh.message, {
        messageId: hdeh.key.id
        })
        
break
case 'gamesmenu':
let menugames = `*cek fitur Games dibawah ini 👇*

   乂  *I N F O - B O T* 乂
  
  ° *NamaBot* : ${namabot}
  ° *NamaKamu* : ${pushname}
  ° *Runtime* : ${runtime(process.uptime())}
  ° *Totalfeature* : ${totalFitur()}
  
`
let pokek = generateWAMessageFromContent(m.chat, {    
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: menugames
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./media/img/riooxdzz.png')}, { upload: rioo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"Klick Sini",
"sections":[{"title":"GAMES MENU",
"rows":[{"header":"DADU GAMES ",
"title":"DADU",
"description":"Displays The List Of DADU GAMES The Features",
"id":".dadu"},
{"header":"SUIT GAMES",
"title":"SUIT",
"description":"Displays The List Of SUIT GAMES Features",
"id":".suit"},
{"header":"ASAHOTAK GAMES",
"title":"ASAHOTAK",
"description":"Displays The List Of ASAHOTAK GAMES Features",
"id":".asahotak"},
{"header":"CAKLONTONG GAMES",
"title":"CAKLONTONG",
"description":"Displays The List Of CAKLONTONG GAMES Features",
"id":".caklontong"},
{"header":"KUISMATH GAMES",
"title":"KUISMATH",
"description":"Displays The List Of KUISMATH GAMES Features",
"id":".kuismath"},
{"header":"SIAPAKAHAKU GAMES",
"title":"SIAPAKAHAKU",
"description":"Displays The List Of SIAPAKAHAKU GAMES Features",
"id":".siapakahaku"},
{"header":"SUSUNKATA GAMES",
"title":"SUSUNKATA",
"description":"Displays The List Of SUSUNKATA GAMES Features",
"id":".susunkata"},
{"header":"TEBAKGAMBAR GAMES",
"title":"TEBAKGAMBAR",
"description":"Displays The List Of TEBAKGAMBAR GAMES Features",
"id":".tebakgambar"},
{"header":"TEBAKKATA GAMES",
"title":"TEBAKKATA",
"description":"Displays The List Of TEBAKKATA GAMES Features",
"id":".tebakkata"},
{"header":"TEBAKLAGU GAMES",
"title":"TEBAKLAGU",
"description":"Displays The List Of TEBAKLAGU GAMES Features",
"id":".tebaklagu"},
{"header":"TEBAKLIRIK GAMES",
"title":"TEBAKLIRIK",
"description":"Displays The List Of TEBAKLIRIK GAMES Features",
"id":".tebaklirik"},
{"header":"TEBAKTEBAKAN GAMES",
"title":"TEBAKTEBAKAN",
"description":"Displays The List Of TEBAKTEBAKAN GAMES Features",
"id":".tebaktebakan"},
{"header":"TEKATEKI GAMES",
"title":"TEKATEKIIK",
"description":"Displays The List Of TEKATEKI GAMES Features",
"id":".tebakteki"},
{"header":"SLOT GAMES",
"title":"SLOT",
"description":"Displays The List Of SLOT GAMES Features",
"id":".slot"},
{"header":"TEBAKANGKA GAMES",
"title":"TEBAKANGKA",
"description":"Displays The List Of TEBAKANGKA GAMES Features",
"id":".tebakangka"},
{"header":"WEREWOLF GAMES",
"title":"WEREWOLF",
"description":"Displays The List Of WEREWOLF GAMES Features",
"id":".werewolf"},
{"header":"CHESS GAMES",
"title":"CHESS",
"description":"Displays The List Of CHESS GAMES Features",
"id":".chess"}]
}]
}`
              }
],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363187276222423@newsletter',
                  newsletterName: 'Author : Mhd Yasin',
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await rioo.relayMessage(pokek.key.remoteJid, pokek.message, {
        messageId: pokek.key.id
        })
        
break
case 'allmenu': {
let user = global.db.data.users[m.sender]
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
let wak = `

╭─ •  *ད PROFILE ཌ*
│  ◦  Name : ${pushname}
│  ◦  Level : ${user.level}
│  ◦  Role : ${user.role}
│  ◦  Limit : ${user.limit}
╰──── •
${allmenu}`

    rioo.sendMessage(m.chat, {
      document: doc, 
          mimetype: 'application/txt', 
          pageCount: 2024,
          fileName: `Halo ${pushname}`,
          fileLength: 1000000000000000,
          caption: wak,
          contextInfo: {
          externalAdReply: {
          title: `2024 © ${namabot}`,
          body: ``,
          thumbnailUrl: `https://telegra.ph/file/6b5207f5ee8221826ad46.png`,
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
      }, { quoted: m })
      }
break
case 'gimage':{
if (!text) return reply(`Usage: ${prefix}gimage orang jomok`);
rioo.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await rioo.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
rioo.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
rioo.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case 'removebg': case 'nobg':{
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await rioo.sendMessage(m.chat, {image: {url: data.url.result}, caption: mess.done}, {quoted: fkontak2})
}
break
case'tozombie':{
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await rioo.sendMessage(m.chat, {image: {url: data.url}, caption: mess.done}, {quoted: fkontak2})
}
break
case 'capcut':{
if (!text) return reply(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await rioo.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
rioo.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: mess.done}, {quoted: m})
await rioo.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await rioo.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 
case 'remini':
case 'hd':
case 'hdr':{
if (!m.quoted) return reply(`Reply gambar ${prefix}${command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
rioo.sendMessage(m.chat, { image: proses, caption:mess.done}, { quoted: fkontak2})
}
break 
case 'topup-gopay': {
let [nomor, total] = text.split`|`
if (!text) return reply(`Contoh: Topup-gopay nomor|jumlah\n\nContoh Command: topup-gopay 0857xxxxx|20000`)
reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-gopay?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rioo.sendMessage(m.chat, { image: buffer, caption: `Id_Transaction: ${hasil.id}\nNumber: ${hasil.number}\nTotal_Amount: ${hasil.price_format}\nExpired At: ${hasil.expired_at}\n> • © BOYPEDIA` }, { quoted: fkontak2 })
}
} catch (err) {
console.log(err)
reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break
case 'topup-ovo': {
let [nomor, total] = text.split`|`
if (!text) return reply(`Contoh: Topup-ovo nomor|jumlah\n\nContoh Command: topup-ovo 0857xxxxx|10000`)
reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-ovo?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rioo.sendMessage(m.chat, { image: buffer, caption: `Id_Transaction: ${hasil.id}\nNumber: ${hasil.number}\nTotal_Amount: ${hasil.price_format}\nExpired At: ${hasil.expired_at}\n> • © BOYPEDIA` }, { quoted: fkontak2 })
}
} catch (err) {
console.log(err)
reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break
case 'topup-dana': {
let [nomor, total] = text.split`|`
if (!text) return reply(`Contoh: Topup-dana nomor|jumlah\n\nContoh Command: topup-dana 0857xxxxx|10000`)
reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-dana?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rioo.sendMessage(m.chat, { image: buffer, caption: `Id_Transaction: ${hasil.id}\nNumber: ${hasil.number}\nTotal_Amount: ${hasil.price_format}\nExpired At: ${hasil.expired_at}\n> • © BOYPEDIA` }, { quoted: fkontak2 })
}
} catch (err) {
console.log(err)
reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break
case 'addowner':{
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat 
    if (!who) return reply(`*example*: .addowner @user`)
    if (global.owner.includes(who.split`@`[0])) return reply('Him already the owner.')
    global.owner.push(`${who.split`@`[0]}`)
    rioo.reply(m.chat, `@${who.split`@`[0]} now owners.`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
break
case 'welcome':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === 'on') {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await rioo.groupMetadata(from)
var members = groupe['participants']
var mems = []
rioo.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:fkontak2})
} else if (args[0] === 'off') {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
} else reply('on / off')
break
case 'bard': case 'bardai': {
    try {
        if (!text) return reply('Huh? Insert the command, example: .bard search me porn');
         
        // Make a GET request to the API
        const response = await axios.get(`https://aemt.me/bard?text=${text}`);

        // Check if the response status is 200 (OK)
        if (response.status === 200) {
            // Extract the result from the response data
            const gege = response.data.status ? response.data.result : '_Failed to fetch valid data from the API._';

            rioo.sendMessage(m.chat, {
      text: gege,
      contextInfo: {
externalAdReply: {
title: "BARD GOGGLE",
body: namabot,
thumbnailUrl: 'https://telegra.ph/file/6b5207f5ee8221826ad46.png',
sourceUrl: "https://bard.google.com",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
        } else {
            return reply( '_Failed to fetch data from the API._');
        }
    } catch (error) {
        console.error(error);
        reply(error)
    }
}
break
case 'gpt4':{
if (!text) return reply(`Example : ${command} Halo ai`)
            reply(mess.wait)
            let gpt4 = await fetchJson(`https://aemt.me/v2/gpt4?text=${text}`)
rioo.sendMessage(m.chat, { text: gpt4.result }, { quoted: m })
}
break

case 'blackbox':
case 'bbox':{
if (!text) return reply(`Example : ${command} Text`)
            reply(mess.wait)
            let blackbox = await fetchJson(`https://aemt.me/blackbox?text=${text}`)
rioo.sendMessage(m.chat, { text: blackbox.result }, { quoted: m })
}
break

case 'gemini':{
if (!text) return reply(`Example : ${command} Text`)
            reply(mess.wait)
            let gemini = await fetchJson(`https://aemt.me/gemini?text=${text}`)
rioo.sendMessage(m.chat, { text: gemini.result }, { quoted: m })
}
break
case 'ai': case 'openai': {
if (!q) return reply(`${command} Apa itu Coding`)
reply(mess.wait)
let pepek = await fetchJson(`https://aemt.me/v2/gpt4?text=${q}`)
rioo.sendMessage(m.chat, {
text: pepek.result,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `O P E N - A I`,
body: '',
thumbnailUrl: "https://telegra.ph/file/6b5207f5ee8221826ad46.png",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return reply(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return reply(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `Tuh Ya ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      rioo.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: fkontak2})
    } else if (mediaType === 'image') {
      rioo.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: fkontak2})
    }
  }
}
break
case 'buyprem': {
try {
let now = new Date() * 1
         let package = [{
            _id: '1D',
            name: 'PREMIUM 1 DAY',
            money: 100_000,
            limit: 30,
            duration: 86400000 * 1
         }, {
            _id: '3D',
            name: 'PREMIUM 3 DAY',
            money: 300_000,
            limit: 100,
            duration: 86400000 * 3
         }, {
            _id: '7D',
            name: 'PREMIUM 7 DAY',
            money: 700_000,
            limit: 250,
            duration: 86400000 * 7
         }, {
            _id: '30D',
            name: 'PREMIUM 30 DAY',
            money: 1_000_000,
            limit: 1000,
            duration: 86400000 * 30
         }]
         let p = `乂  *B U Y P R E M*\n\n`
         package.map((v, i) => {
            p += `${(i+1)}. ${v.name}\n`
            p += `◦  *money* : ${Func.formatter(v.money)} Money\n`
            p += `◦  *Command* : ${prefix + command} ${v._id}\n\n`
         })
         p += global.namaowner
         if (!args || !args[0]) return rioo.sendMessage(m.chat, {
text: p,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | ${namabot}`,
body: '',
thumbnailUrl: "https://telegra.ph/file/6b5207f5ee8221826ad46.png",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
let user = global.db.data.users[m.sender]
         const pkg = package.find(v => v._id == (args[0]).toUpperCase())
         if (!pkg) return reply(`🚩 Package not found.`)
         if (Number(pkg.money) > user.money) return reply(`🚩 Your Money are not enough to be exchanged for a ${pkg.name} package.`)
         user.limit += pkg.limit
         user.premiumDate += user.premium ? (pkg.duration) : (now + pkg.duration)
         user.money -= Number(pkg.money)
         reply(`✅ Succesfully buying ${pkg.name} package.`).then(() => user.premium = true )
      } catch (e) {
         m.reply(Func.jsonFormat(e))
      }
      }
break
case 'text2img': {
  if (isBan) return reply(mess.bann)
  if (!text) return reply(`Example: ${prefix + command} Cat`)
  // Check if the version is between 1 and 7
  const versionRegex = /^v[1-7]$/;
  if (args[0] && versionRegex.test(args[0])) {
    reply(mess.wait)
    let cap = `${mess.done}`
    let imgg;

    switch (args[0]) {
      case 'v1':
        imgg = `https://aemt.me/ai/text2img?text=${text}`;
        break;
      case 'v2':
        imgg = `https://aemt.me/v1/text2img?text=${text}`;
        break;
      case 'v3':
        imgg = `https://aemt.me/v2/text2img?text=${text}`;
        break;
      case 'v4':
        imgg = `https://aemt.me/v3/text2img?text=${text}`;
        break;
      case 'v5':
        imgg = `https://aemt.me/v4/text2img?text=${text}`;
        break;
      case 'v6':
        imgg = `https://aemt.me/v5/text2img?text=${text}`;
        break;
      case 'v7':
        imgg = `https://aemt.me/v6/text2img?text=${text}`;
        break;
    }

    rioo.sendMessage(from, { image: { url: imgg }, caption: cap }, { quoted: m });
    return;
  }

  let sections = [
    {
      title: 'Text To Image',
      rows: [
        { title: 'Version 1', description: `Text To Image Version 1`, id: `${prefix}text2img v1 ${text}` },
        { title: 'Version 2', description: `Text To Image Version 2`, id: `${prefix}text2img v2 ${text}` },
        { title: 'Version 3', description: `Text To Image Version 3`, id: `${prefix}text2img v3 ${text}` },
        { title: 'Version 4', description: `Text To Image Version 4`, id: `${prefix}text2img v4 ${text}` },
        { title: 'Version 5', description: `Text To Image Version 5`, id: `${prefix}text2img v5 ${text}` },
        { title: 'Version 6', description: `Text To Image Version 6`, id: `${prefix}text2img v6 ${text}` },
        { title: 'Version 7', description: `Text To Image Version 7`, id: `${prefix}text2img v7 ${text}` },
      ]
    }
  ];

  let listMessage = {
    title: 'List Menu',
    sections
  };

  let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Silahkan pilih *option* di bawah ini`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            gifPlayback: true,
            subtitle: namabot,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              }
            ],
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: 'Author : Mhd Yasin',
              newsletterJid: '120363187276222423@newsletter',
              serverMessageId: 143
            }
          }
        })
      }
    }
  }, {});

  await rioo.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
}
break

case 'price':{
let caption = `— *G R O U P*

┌  ◦  Joining Group
│  ◦  Access Antilink
│  ◦  Access Rpg Games
│  ◦  And Manymore
└  ◦  IDR 7.000/Group

— *P R E M I U M*

┌  ◦  Get Unlimited Limit
│  ◦  Access Premium Menu
│  ◦  Access Rpg Menu
│  ◦  Access Jadibot (Pairing Code)
│  ◦  Get 50K Ballance / Day
│  ◦  And Manymore
└  ◦  IDR 12.000/Number

— *M O D E R A T O R*

┌  ◦  Access Broadcast
│  ◦  Access Addprem (waktu)
│  ◦  Acces Cheat Rpg
│  ◦  Acces All Feature Accept 
│  ◦  Get Unlimited Limit
│  ◦  And Manymore
└  ◦  IDR 30.000/Number

price sewaktu-waktu akan berubah, silahkan konfirmasi terlebih dahulu kepada ${owner} untuk membeli planning.`

 await rioo.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {  
title: 'P r i c e - P l a n n i n g',
body: hariini,
thumbnailUrl: `https://link.sazumiviki.me/FqtEbf`,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak2})
}
break
case 'ambilcase': case 'getcase':
            try{
                if (!isOwner) return reply(mess.owner)
                if (!q) return reply(`Example: ${prefix + command} menu`)
                let caseget = await getCase(q)
                reply(caseget)
            } catch(err){
            console.log(err)
            reply(`Tidak Menemukan Case Dengan Nama ${q}.!`)
        }
        break 
case "clonebot": {
if (!isPremium) return reply(mess.premium)
huuuuu = `Silahkan pilih *option* di bawah ini`

let sections = [{
title: 'Selection',
highlight_label: 'Clone Bot',
rows: [{
title: 'Start',
description: `Getting started as a bot`, 
id: '.jadibot'
},
{
title: 'Stop',
description: `Stop being a bot`, 
id: '.stopjadibot'
},
{
title: 'List',
description: `Displays a list of bot users`, 
id: '.listjadibot'
}]
}]

let listMessage = {
    title: 'Selection', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: 'Author : Mhd Yasin',
 newsletterJid: '120363187276222423@newsletter',
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: rioo.decodeJid(rioo.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: huuuuu
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}\n`,
 subtitle: "BOYPEDIA",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/6b5207f5ee8221826ad46.png" } }, { upload: rioo.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 ],
 })
 })
 }
 }
}, {})

await rioo.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "jadibot":{
if (!isPremium) return reply(mess.premium)
  //if (m.isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  jadibot(rioo, m, from)
  await sleep(4000)
  //m.reply(`mess.wait`)
  const jsonData = JSON.parse(fs.readFileSync(`./session/${m.sender.split("@")[0]}/creds.json`));
// Membaca pairingCode dari file JSON
const pairingCode = jsonData.pairingCode;
// Membagi pairingCode menjadi kelompok-kelompok berisi empat karakter
let formattedPairingCode = '';
for (let i = 0; i < pairingCode.length; i += 4) {
  if (i > 0) {
    formattedPairingCode += '-';
  }
  formattedPairingCode += pairingCode.substring(i, i + 4);
}
// Mengirimkan Pesan
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `You Pairing Code : *${formattedPairingCode}*\n\n*How To Install*\n1. Enter the *linked device*\n2. Click *link device*\n3. Click enter *with phone number only*\n4. Enter your *code*"\n\nYour code will *expire* in *20* seconds`
          }),
          header: proto.Message.InteractiveMessage.Header.create({ 
                  title: ``,
                  gifPlayback: true,
                  subtitle: `test`,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copy code",
                "copy_code": `${formattedPairingCode}`
                })
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterName: 'Author : Mhd Yasin',
				  newsletterJid: '120363187276222423@newsletter',
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await rioo.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case "stopjadibot":{
if (!isPremium) return reply(mess.premium)
  //if (m.isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  stopjadibot(rioo, from)
}
break
case "mas": case "mass": case "masss":
m.reply('iyaa cintaku, knp sayanggg😚')
break

case "Assalamualaikum": case "assalamu'alaikum": case "p":
m.reply('Waalaikumsalam')
break

case "bot": case "bott": case "admin":
m.reply('Haii kk👋, Untuk menampilkan list ketik .menu')
break

case "main lagii": case "main lagi": case "main lagi?": case "main lagii?":
m.reply('main lgi dongg, cupu luu gk berani main lagi..., pasti kalah trusss, huuuuu💃')
break

case "ewe": case "bangsad": case "mmk": case "koncol": case "puki": case "kojtol": case "kintil": case "momok": case "nigga": case "ajg": case "ewean": case "yatim": case "anjing": case "kontol": case "memek": case "bangsat": case "babi": case "goblok": case "goblog": case "kntl": case "pepek": case "ppk": case "ngentod": case "ngentd": case "ngntd": case "kentod": case "kntd": case "bgst": case "anjg": case "anj": case "fuck": case "hitam": case "ireng": case "jawir": case "gay": case "asw": case "ktl": case "ngentot": case "ngewe": case "bokep": case "bkp":
m.reply('Astaghfirullah, gk boleh blng gtu dosa tauu, 1x lagi gw pijak lu nanti yaa🦶')
break

case "jawaban": case "kuncijawaban": case "kunci": case "petunjuk":
m.reply('Meminta petunjuk dan jawaban hanya kepada Allah SWT')
break

case "hi": case "hai": case "halo": case "hallo": case "helo": case "hello": case "haii": case "hii": case "hlo": case "haloo": case "hiii":
m.reply('Haii kk 👋')
break
case "listjadibot":{
if (!isPremium) return reply(mess.premium)
  //if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  listjadibot(rioo, m)
}
break
case 'saldoorkut':{
const web = global.ORDERKUOTA_WEB;
         const id = global.ORDERKUOTA_ID;
         const pin = global.ORDERKUOTA_PIN;
         const psswd = global.ORDERKUOTA_PASSWORD;
         const apiUrl = `${web}/trx/balance?memberID=${id}&pin=${pin}&password=${psswd}`;

         const requestOptions = {
            method: 'GET',
            redirect: 'follow'
         };

         const response = await fetch(apiUrl, requestOptions);
         const result = await response.text();

         await rioo.reply(m.chat, result, m);
         }
         break;
case 'ping': case 'server': {
            var os = require("os");
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            var { totalmem,
freemem
 } = require('os')

    let ownert = '6281264116045@s.whatsapp.net'
            let respon = `乂 *I N F O R M A T I O N   S E R V E R*\n\n`
respon += `╭ Respon ${latensi.toFixed(4)} Second\n`
respon += `│ Memory: ${Math.round(require('os').totalmem / 1024 / 1024)}MB\n`
respon += `│ Hostname: ${os.hostname()}\n`
respon += `╰ Platform: ${os.platform()}\n\n`
respon += `Server Runtime By @${ownert.split('@')[0]}`
rioo.sendMessage(m.chat, { text: respon, mentions: [ownert] }, { quoted: fkontak2 })
        }
        break        

case 'disk':{
const cp = require('child_process')
const { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
	await rioo.reply(m.chat, `Please Wait`, m)
    let o
    try {
        o = await exec('cd && du -h --max-depth=1')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim())
        m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
break
case 'levelup': {
let user = global.db.data.users[m.sender]
try {
ppexp = await rioo.profilePictureUrl(m.sender, 'image')
} catch {
ppexp = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}

  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let expneed = xp
let expnow = user.exp - min
let levelnow = user.level
  let prog = `@${m.sender.split('@')[0]} Membutuhkan *${max - user.exp}* Exp Lagi Untuk Ke Level *${user.level} (${user.exp - min}/${xp}*)`
sendImageMentionsBuffer(await progres(ppexp, pushname, expneed, expnow, levelnow), prog, m)
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
user.money -= 10000
let asa = `Selamat @${m.sender.split`@`[0]} anda telah naik level!\n*${before}* ➠ *${user.level}*\n\nAnda mendapatkan ${user.money} money\n\ngunakan *.my* untuk mengecek`
sendImageMentionsBuffer(await levelUp(ppexp), asa, m)
        }
        }
break
case 'ban': {
if (!isOwner) return reply(mess.owner)
if (args.length === 0) return reply(`Ex: <tag> <alasan>`)
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : args[0] + '@s.whatsapp.net'
    else who = args[0] + '@s.whatsapp.net'
let alasan = args[1]
const isBane = banned.includes(who)
if (isBane) return reply('*Pengguna Sudah Di Ban Sebelumnya*')
banned.push(who)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
reply(`Pengguna Berhasil Di Ban`)
rioo.sendMessage(who, { text: `Halo Kamu Telah Di Ban Oleh Owner , Karna Melakukan ${alasan ? `${alasan}` : 'Hal Yang Buruk.'}`}, { quoted: fkontak2 })
}
break
case 'unban': {
if (!isOwner) return reply(mess.owner)
if (!args[0] === 0) return reply(`Tag Pengguna, Atau Masukan Nomer Pengguna, *.ban (nomer atau tag)*`)
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : args[0] + '@s.whatsapp.net'
    else who = args[0] + '@s.whatsapp.net'
const isBane = banned.includes(who)  
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(who)
banned.splice(delbans, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
reply(`*Pengguna Berhasil Di Unban*`)
}
break
case 'profile': case 'me': {
let sender = m.sender;
    let ppUrl = await rioo.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/6b5207f5ee8221826ad46.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[sender];
    let username = user.name;
    let tag = '+62 ' + sender.split('@')[0].slice(2, 6) + '-' + sender.split('@')[0].slice(6);
    let api = `wa.me/${sender.split('@')[0]}`;

    let limit = user.limit;
    let money = user.money || 0;
    let level = user.level;
    let exp = user.exp;
    let age = user.age;
    let isPremium = user.premium ? "Premium" : "Belum Premium";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Belum Premium";

    let yyye = `
—  *P R O F I L E*

┌  ◦  *Name* : ${username}
│  ◦  *Tag* : ${tag}
│  ◦  *Api* : ${api}
│  ◦  *Limit* : ${limit}
│  ◦  *Balance* : ${money}
│  ◦  *Level* : ${level}
│  ◦  *Exp* : ${exp}
│  ◦  *Premium* : ${isPremium}
│  ◦  *Expired* : ${premiumExpired}
└  ◦  *Age* : ${age}
    `.trim();

await rioo.sendMessage(m.chat, {
text: yyye,
contextInfo: {
externalAdReply: {  
title: namabot,
body: hariini,
thumbnailUrl: ppUrl,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak2})
}
break
case 'opencreate': {
if (!text) return reply(`*Use:* ${command} uncommon/legendary/mythic 10/100/1000 hanya support  sampe 10/100/1000 saja`)
let opencreate = args[0]
let jumlah = args[1]
    let Lmao = `Hanya support 10, 100, 1000\nContoh penggunaan: *${prefix}opencreate ${args > 2 ? args[0] : pickRandom(['uncommon', 'mythic', 'legendary'])} 10*`
switch (opencreate) {
case 'uncommon':
switch (jumlah) {
case '10': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cu >= 10) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
case '100': {
                    let _cm1 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce1 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm1 = (_cm1 * 1)
                    let cc1 = (_cc1 * 1)
                    let cp1 = (_cp1 * 1)
                    let ce1 = (_ce1 * 1)
                    let cu1 = (_cu1 * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm1 > 0 ? `\n💵balance: ${cm1}` : ''}${ce1 > 0 ? `\n⚜️Exp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\n🥤Potion: ${cp1} *potion*` : ''}${cu1 > 0 ? `\n📦Uncommon crate: ${cu1} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cu >= 100) {
                        global.db.data.users[m.sender].balance += cm1 * 1
                        global.db.data.users[m.sender].exp += ce1 * 1
                        global.db.data.users[m.sender].potion += cp1 * 1
                        global.db.data.users[m.sender].cu += cu1 * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
                    case '1000': {
                                        let _cm2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc2 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp2 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce2 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu2 = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm2 = (_cm2 * 1)
                    let cc2 = (_cc2 * 1)
                    let cp2 = (_cp2 * 1)
                    let ce2 = (_ce2 * 1)
                    let cu2 = (_cu2 * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm2 > 0 ? `\n💵balance: ${cm2}` : ''}${ce2 > 0 ? `\n⚜️Exp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\n🥤Potion: ${cp2} *potion*` : ''}${cu2 > 0 ? `\n📦Uncommon crate: ${cu2} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cu >= 1000) {   
                        global.db.data.users[m.sender].balance += cm2 * 1
                        global.db.data.users[m.sender].exp += ce2 * 1
                        global.db.data.users[m.sender].potion += cp2 * 1
                        global.db.data.users[m.sender].cu += cu2 * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
default:
return reply(Lmao)
            }
case 'mythic':
if (!jumlah) return reply(`Masukan Jumlah 10/100/1000`)
switch (jumlah) {
case '10': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cm >= 10) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
case '100': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cm >= 100) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
                    case '1000': {
                                        let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cm >= 1000) {   
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
default:
return reply(Lmao)
            }                 
case 'legendary':
if (!jumlah) return reply(`Masukan Jumlah 10/100/1000`)
switch (jumlah) {
case '10': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cl >= 10) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
case '100': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cl >= 100) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
                    case '1000': {
                                        let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${opencreate} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cl >= 1000) {   
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${opencreate} crate anda tidak cukup`)
                    }
                    break
default:
return reply(Lmao)
            }
default:
                    return reply(Lmao)
            }
            }
break
case 'addprem': {
   let { MessageType } = require('@adiwajshing/baileys');
function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
  }

  var hl = [];
  hl[0] = text.split('|')[0];
  hl[0] = no(hl[0]) + "@s.whatsapp.net";
  hl[1] = text.split('|')[1];
    
	rioo.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

if (!isOwner) return reply(mess.owner)
  if (!text) return m.reply(`*Example*: .addprem @tag | 100`);
  if (typeof db.data.users[hl[0]] == 'undefined') return m.reply('User No Database.');

  var jumlahHari = 86400000 * hl[1];
  var now = new Date() * 1;

  global.db.data.users[hl[0]].premium = true;

  if (now < global.db.data.users[hl[0]].premiumDate) global.db.data.users[hl[0]].premiumDate += jumlahHari;
  else global.db.data.users[hl[0]].premiumDate = now + jumlahHari;

  let username = `@${hl[0].split('@')[0]}`;
 	let days = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (60 * 1000))) % 60;

rioo.sendMessage(m.chat, {
		react: {
			text: '🍟',
			key: m.key,
		}
	})
  rioo.sendMessage(hl[0], { text: `Kamu Sekarang Premium!!, Jangka Waktu ${days} Hari ${hours} Jam ${minutes} Menit `, mentions: [hl[0]] }, { quoted: fkontak2 })
  let rs = `sukses ${username} Sudah Premium, Masa Waktu/Jangka Waktu Sudah Terkirim Ke Private Chat ${username}`
  rioo.sendMessage(m.chat, { text: rs, mentions: [hl[0]] }, { quoted: fkontak2 })
}
        break
        
        case 'delprem': {

function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  if (!isOwner) return replycus(mess.owner)
  if (!text) {
    reply(`*Example*: .delprem @mention/tag`)
    return
  }

  let mentionedJid = m.mentionedJid[0]
  if (!mentionedJid) {
    let annjay = no(text) + "@s.whatsapp.net"
    if (!global.db.data.users[annjay]) {
      reply('User Tidak Ditemukan')
      return
    }
    mentionedJid = annjay
  }

  let user = global.db.data.users[mentionedJid]
  if (!user) {
    reply('User Tidak Ditemukan.')
    return
  }
  
  if (!user.premium) {
    reply('User Tidak Premium!')
    return
  }

  user.premium = false
  user.premiumDate = 0
  let message = `@${mentionedJid.split('@')[0]} Sudah Tidak Premium.`
  rioo.sendMessage(m.chat, { text: message, mentions: [mentionedJid] }, { quoted: fkontak2 })
}
        break

        case 'listprem': {
let response = "乂 *L I S T  P R E M I U M:*\n\n";
	let totalPremium = 0;

	for (let user in global.db.data.users) {
		if (global.db.data.users[user].premium) {
			let number = user.split("@")[0];
			
			let days = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (60 * 1000))) % 60;

			response += `╭ @${number}\n╰ Expired: ${days} Hari ${hours} Jam ${minutes} Menit\n\n`;

			totalPremium++;
		}
	}

	response += `♻️Total Premium : *${totalPremium}*`;

rioo.sendMessage(m.chat, { text: response, mentions: Object.keys(global.db.data.users).filter(jid => global.db.data.users[jid].premium) }, { quoted: fkontak2 })
}

        break
break
case 'cheat': {

if (!isOwner) return reply(mess.owner)
let input = args[0]            
if (!input) return reply(`乂 *C H E A T*
╭── ◦ Command Input
│${command} limit          
│${command} exp
│${command} money
│${command} level
╰─ ◦
*Example: ${command} level*`)
if (input === 'limit') {
db.data.users[m.sender].limit += 1000000000000
reply(`Succesfully Cheat Your Limit`)
} else if (input === 'money') {
db.data.users[m.sender].money += 1000000000000
reply(`Succesfully Cheat Your Balance`)
} else if (input === 'level') {
db.data.users[m.sender].level += 1000000000000
reply(`Succesfully Cheat Your Level`)
} if (input === 'exp') {
db.data.users[m.sender].exp += 1000000000000
reply(`Succesfully Cheat Your Exp`)
}
}
break
case 'buylimit':{
if (!args[0] || isNaN(args[0])) {
		return reply('*Example*: .buylimit 10');
	}

	rioo.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	let count = parseInt(args[0]);
	let price = count * 100;
	let users = global.db.data.users;
	let user = users[m.sender];
	if (price > user.money) {
		return reply(`Maaf, uang kamu tidak cukup untuk membeli ${count} limit. Harga 1 limit adalah 100 balance.`);
	}
	user.money -= price;
	user.limit += count;
	return rioo.reply(m.chat, `Berhasil membeli ${count} limit dengan harga ${price} balance.`, m);
};
break;
case 'delcase': {
if (!isOwner) return reply(mess.owner)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./batten.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By © BOYPEDIA')
}
break
case 'addcase': {
 if (!isOwner) return reply(mess.owner);
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'batten.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
if (!isOwner) return reply(mess.owner)
fs.readFile('./batten.js', 'utf8', (err, data) => {
if (err) throw err
let regex = /case\s'(\w+)'/g
let match,
caseNames = []
while ((match = regex.exec(data)) !== null) {
caseNames.push(match[1])
}
let output = '• ' + caseNames.join('\n• ')
reply(output + `\n\nTotal case : ${caseNames.length}`)
})
}
break
case 'addmoney': {
if (!isOwner) return reply(mess.owner)
if (args.length === 2 && args[0] === 'all') {
    let users = global.db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return reply('Jumlah money yang dimasukkan harus berupa angka. Contoh: .addmoney all 100')
    }
    for (let user in users) {
      users[user].money += pointsToAdd;
    }
    rioo.reply(m.chat, `Berhasil menambahkan ${pointsToAdd} money untuk semua pengguna.`, m);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
      return reply('Tag pengguna yang ingin diberikan money. Contoh: .addmoney @user 100');
    }

    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
     return reply('Jumlah money yang dimasukkan harus berupa angka. contoh: .addmoney ⧼@user⧽ ⧼100⧽');
    }

rioo.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	
    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
        exp: 0,
        lastclaim: 0,
        money: 0
      };
    }

    users[mentionedJid].money += pointsToAdd

    rioo.reply(m.chat, `Berhasil menambahkan ${pointsToAdd} money untuk @${mentionedJid.split('@')[0]}.`, m, {
      mentions: [mentionedJid]
    });
  } else {
   return reply('Jumlah money yang dimasukkan harus berupa angka. contoh: .addmoney @user 100 atau .addmoney all 100');
  }
};
break;
case 'delmoney':{
if (!isOwner) return reply(mess.owner)
  if (!text) {
    return reply(m.chat, '• *Example :* .delmoney @user 10', m)
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
     return reply(m.chat, 'Tag pengguna yang ingin dikurangi moneynya. Contoh: .delmoney @user 10', m)
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    return rioo.reply(m.chat, 'Jumlah money yang dimasukkan harus berupa angka. Contoh: .delmoney @user 10', m)
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      money: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].money -= pointsToSubtract;
  if (users[mentionedJid].money < 0) {
    users[mentionedJid].money = 0;
  }

  rioo.reply(m.chat, `Berhasil mengurangi ${pointsToSubtract} money untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};
break;
case 'resetmoney':{
if (!isOwner) return reply(mess.owner)
let kunyuk = Object.entries(global.db.data.users)
	let mon = !args || !args[0] ? 10000 : isNumber(args[0]) ? parseInt(args[0]) : 10000
	mon = Math.max(1, mon)
	kunyuk.map(([user, data], i) => (Number(data.money = mon)))
		rioo.reply(m.chat, `*berhasil direset ${mon} / user*`, m)
}
break
case 'chess':{
if (!m.isGroup) return reply(mess.group)
const key = m.chat;
  rioo.chess = rioo.chess || {};
  let chessData = rioo.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  rioo.chess[key] = chessData;
  const { gameData, fen, currentTurn, players, hasJoined } = chessData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'delete') {
    delete rioo.chess[key];
    return rioo.reply(m.chat, '🏳️ *Permainan catur dihentikan.*', m);
  }

  if (feature === 'create') {
    if (gameData) {
      return rioo.reply(m.chat, '⚠️ *Permainan sudah dimulai.*', m);
    }
    chessData.gameData = { status: 'waiting', black: null, white: null };
    return rioo.reply(m.chat, '🎮 *Permainan catur dimulai.*\nMenunggu pemain lain untuk bergabung.', m);
  }

  if (feature === 'join') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return rioo.reply(m.chat, '🙅‍♂️ *Anda sudah bergabung dalam permainan ini.*', m);
    }
    if (!gameData || gameData.status !== 'waiting') {
      return rioo.reply(m.chat, '⚠️ *Tidak ada permainan catur yang sedang menunggu.*', m);
    }
    if (players.length >= 2) {
      return rioo.reply(m.chat, '👥 *Pemain sudah mencukupi.*\nPermainan otomatis dimulai.', m);
    }
    players.push(senderId);
    hasJoined.push(senderId);
    if (players.length === 2) {
      gameData.status = 'ready';
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gameData.black = black;
      gameData.white = white;
      chessData.currentTurn = white;
      return rioo.reply(m.chat, `🙌 *Pemain yang telah bergabung:*\n${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}\n\n*Hitam:* @${black.split('@')[0]}\n*Putih:* @${white.split('@')[0]}\n\nSilakan gunakan *'chess start'* untuk memulai permainan.`, m, { mentions: hasJoined });
    } else {
      return rioo.reply(m.chat, '🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.', m);
    }
  }

  if (feature === 'start') {
    if (gameData.status !== 'ready') {
      return rioo.reply(m.chat, '⚠️ *Tidak dapat memulai permainan. Tunggu hingga dua pemain bergabung.*', m);
    }
    gameData.status = 'playing';
    const senderId = m.sender;
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      chessData.fen = fen;
      const encodedFen = encodeURIComponent(fen);
      const giliran = `🎲 *Giliran:* Putih @${gameData.white.split('@')[0]}`;
      const flipParam = senderId === gameData.black ? '' : '&flip=true';
      const flipParam2 = senderId === gameData.black ? '' : '-flip';
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
      try {
        await rioo.sendFile(m.chat, boardUrl, '', giliran, m, false, { mentions: [gameData.white] });
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        await rioo.sendFile(m.chat, boardUrl2, '', giliran, m, false, { mentions: [gameData.black] });
      }
      return;
    } else {
      return rioo.reply(m.chat, '🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.', m);
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender;
    if (!gameData || gameData.status !== 'playing') {
      return rioo.reply(m.chat, '⚠️ *Permainan belum dimulai.*', m);
    }
    if (currentTurn !== senderId) {
      return rioo.reply(m.chat, `⏳ *Sekarang giliran ${chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam'} untuk bergerak.*`, m, {
        contextInfo: {
          mentionedJid: [currentTurn]
        }
      });
    }
    const chess = new Chess(fen);
    if (chess.isCheckmate()) {
      delete rioo.chess[key];
      return rioo.reply(m.chat, `⚠️ *Game Checkmate.*\n🏳️ *Permainan catur dihentikan.*\n*Pemenang:* @${m.sender.split('@')[0]}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    if (chess.isDraw()) {
      delete rioo.chess[key];
      return riok.reply(m.chat, `⚠️ *Game Draw.*\n🏳️ *Permainan catur dihentikan.*\n*Pemain:* ${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}`, m, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
    const [from, to] = args;
    try {
      chess.move({ from, to, promotion: 'q' });
    } catch (e) {
      return rioo.reply(m.chat, '❌ *Langkah tidak valid.*', m);
    }
    chessData.fen = chess.fen();
    const currentTurnIndex = players.indexOf(currentTurn);
    const nextTurnIndex = (currentTurnIndex + 1) % 2;
    chessData.currentTurn = players[nextTurnIndex];
    const encodedFen = encodeURIComponent(chess.fen());
    const currentColor = chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam';
    const giliran = `🎲 *Giliran:* ${currentColor} @${chessData.currentTurn.split('@')[0]}\n\n${chess.getComment() || ''}`;
    const flipParam = senderId === gameData.black ? '' : '&flip=true';
    const flipParam2 = senderId === gameData.black ? '' : '-flip';
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
    try {
      await rioo.sendFile(m.chat, boardUrl, '', giliran, m, false, { mentions: [chessData.currentTurn] });
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
      await rioo.sendFile(m.chat, boardUrl2, '', giliran, m, false, { mentions: [chessData.currentTurn] });
    }
    chess.deleteComment();
    return;
  }

  if (feature === 'help') {
    return rioo.reply(m.chat, `
      🌟 *Perintah Permainan Catur:*

*chess create* - Mulai permainan catur
*chess join* - Bergabung dalam permainan catur yang sedang menunggu
*chess start* - Memulai permainan catur jika ada dua pemain yang sudah bergabung
*chess delete* - Menghentikan permainan catur
*chess [dari] [ke]* - Melakukan langkah dalam permainan catur

*Contoh:*
Ketik *chess create* untuk memulai permainan catur.
Ketik *chess join* untuk bergabung dalam permainan catur yang sedang menunggu.
    `, m);
  }
  return rioo.reply(m.chat, '❓ Perintah tidak valid. Gunakan *"chess help"* untuk melihat bantuan.', m);
};
break;
case 'ww':
case 'werewolf': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let jimp = require('jimp')
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./lib/werewolf')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    rioo.werewolf = rioo.werewolf ? rioo.werewolf : {};
    const ww = rioo.werewolf ? rioo.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        rioo.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.sgc}`,
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(rioo. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(rioo. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(rioo. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${rioo.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await rioo.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${rioo.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await rioo.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${rioo.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await rioo.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${rioo.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await rioo.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${rioo.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await rioo.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await rioo.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: `${global.sgc}`,
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(rioo. chat, ww);
    } else      if (value === "kill") { 
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return m.reply("Peran ini bukan untuk kamu"); 
         if (byId.db.role === "sorcerer") 
             return m.reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
      reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return m.reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                rioo.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.sgc}`,
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        rioo.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.sgc}`,
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        rioo.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.sgc}`,
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: fkontak2
            }
        );
    }
}
break  
case 'tebakangka': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let bonusExp = Math.floor(Math.random() * 100)
let bonusMoney = Math.floor(Math.random() * 1000)
if (!args[0]) return rioo.sendText(m.chat, `Harap masukkan angka tebakanmu`, m)
if (args[0] < 1 || args[0] > 100) return rioo.sendText(m.chat, `Harap masukkan angka antara 1 dan 100`, m)
let number = Math.floor(Math.random() * 100) + 1
let userGuess = parseInt(args[0])
let result = (userGuess === number) ? `*Selamat Anda menang!*\n+${bonusExp} XP\n+Rp${bonusMoney}` : `Maaf Anda kalah\nAngka yang benar adalah ${number}`
if (userGuess === number) {
user.exp += bonusExp
user.money += bonusMoney
}
reply(result)
}
break
case "dadu": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
const da = [ "https://tinyurl.com/gdd01", "https://tinyurl.com/gdd02", "https://tinyurl.com/gdd003", "https://tinyurl.com/gdd004", "https://tinyurl.com/gdd05", "https://tinyurl.com/gdd006" ];
rioo.sendFile(m.chat, pickRandom(da), "dado.webp", "", m)
}
break
case "slot": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
try {
let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
let spin1 = (_spin1 * 1)
let spin2 = (_spin2 * 1)
let spin3 = (_spin3 * 1)
let spin4 = (_spin4 * 1)
let spin5 = (_spin5 * 1)
let spin6 = (_spin6 * 1)
let spin7 = (_spin7 * 1)
let spin8 = (_spin8 * 1)
let spin9 = (_spin9 * 1)
let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '' )
let WinOrLose
if (spin1 == 1 && spin2 == 1 && spin3 == 1 && spin4 == 1 && spin5 == 1 && spin6 == 1 && spin7 == 1 && spin8 == 1 && spin9 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 && spin4 == 2 && spin5 == 2 && spin6 == 2 && spin7 == 2 && spin8 == 2 && spin9 == 2 || spin1 == 3 && spin2 == 3 && spin3 == 3 && spin4 == 3 && spin5 == 3 && spin6 == 3 && spin7 == 3 && spin8 == 3 && spin9 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 && spin4 == 4 && spin5 == 4 && spin6 == 4 && spin7 == 4 && spin8 == 4 && spin9 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 && spin4 == 5 && spin5 == 5 && spin6 == 5 && spin7 == 5 && spin8 == 5 && spin9 == 5) {
WinOrLose = "Kamu menang lagi dan mendapatkan Mega Jackpot!"
} else if (spin4 == 1 && spin5 == 1 && spin6 == 1 || spin4 == 2 && spin5 == 2 && spin6 == 2 || spin4 == 3 && spin5 == 3 && spin6 == 3 || spin4 == 4 && spin5 == 4 && spin6 == 4 || spin4 == 5 && spin5 == 5 && spin6 == 5) {
WinOrLose = "Kamu menang dan mendapatkan Jackpot!"  
} else if (spin1 == 1 && spin2 == 1 && spin3 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 || spin1 == 3 && spin2 == 4 && spin3 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 || spin1 == 6 && spin2 == 6 && spin3 == 6 || spin1 == 7 && spin2 == 7 && spin3 == 7 || spin1 == 8 && spin2 == 8 && spin3 == 8 || spin1 == 9 && spin2 == 9 && spin3 == 9) { 
WinOrLose = "Kamu menang dalam Pertandingan ini!"
} else {
WinOrLose = "Kamu kalah dalam Pertandingan ini!"
}
reply(`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
${spins7} ${spins8} ${spins9}

_*${WinOrLose}*_`.trim(), )
} catch (e) {
reply(mess.error.api)
}
}
break
case "suit": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let salah = `Example: ${prefix+command} gunting\n\n*Pilihan yang tersedia :*\nBatu, Gunting, Kertas`
if (!text) return reply(salah)
var astro = Math.random()
if (astro < 0.34) {
astro = "batu"
} else if (astro > 0.34 && astro < 0.67) {
astro = "gunting"
} else {
astro = "kertas"
}
if (text == astro) {
reply(`*── 「 SUIT 」 ──*\n\n*Seri!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
} else if (text == "batu") {
if (astro == "gunting") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else if (text == "gunting") {
if (astro == "kertas") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else if (text == "kertas") {
if (astro == "batu") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else {
return reply(salah)
}
}
break
case "asahotak": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (asahotak[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: asahotak[m.chat][0] })
var anu = await bochil.asahotak()
console.log("Jawaban : " + anu.jawaban)
asahotak[m.chat] = [
await reply(`*── 「 ASAH OTAK 」 ──*

• Soal : ${anu.soal}
• Reward : +1000 Xp
• Timeout : ${(240000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (asahotak[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete asahotak[m.chat]
}
}, 240000)
]
}
break
case 'caklontong': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (caklontong[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: caklontong[m.chat][0] })
var anu = await bochil.caklontong()
console.log("Jawaban : " + anu.jawaban)
caklontong[m.chat] = [
await rioo.sendText(m.chat, `*── 「 CAK LONTONG 」 ──*

• Soal : ${anu.soal}
• Reward : +1000 Xp
• Timeout : ${(240000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`, m),
anu, 4,
setTimeout(() => {
if (caklontong[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*\n\nAlasannya adalah *${anu.deskripsi}*`)
delete caklontong[m.chat]
}
}, 240000)
]
}
break
case "kuismath": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (kuismath[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: kuismath[m.chat][0] })
let { genMath, modes } = require("./lib/math");
if (!text) return reply(`*Example: ${prefix+command} noob*\n\nMode : ${Object.keys(modes).join(" | ")}`.trim(), )
let src = await genMath(text.toLowerCase())
console.log("Jawaban : " + src.jawaban)
kuismath[m.chat] = [
await reply(`*── 「 KUIS MATH 」 ──*

• Soal : Berapa hasil dari ${src.soal} ?
• Mode : ${src.mode}
• Reward : +${src.hadiah} Xp
• Timeout : ${(src.waktu / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
src, 4,
setTimeout(() => {
if (kuismath[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${src.jawaban}*`)
delete kuismath[m.chat]
}
}, src.waktu)
]
}
break
case "siapakahaku": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (siapakahaku[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: siapakahaku[m.chat][0] })
var anu = await bochil.siapakahaku()
console.log("Jawaban : " + anu.jawaban)
siapakahaku[m.chat] = [
await reply(`*── 「 SIAPAKAH AKU 」 ──*

• Soal : ${anu.soal}
• Reward : +1000 Xp
• Timeout : ${(240000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (siapakahaku[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete siapakahaku[m.chat]
}
}, 240000)
]
}
break
case "susunkata": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (susunkata[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: susunkata[m.chat][0] })
var anu = await bochil.susunkata()
console.log("Jawaban : " + anu.jawaban)
susunkata[m.chat] = [
await reply(`*── 「 SUSUN KATA 」 ──*

• Soal : ${anu.soal}
• Tipe : ${anu.tipe}
• Reward : +1000 Xp
• Timeout : ${(240000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (susunkata[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete susunkata[m.chat]
}
}, 240000)
]
}
break
case "tebakgambar": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (tebakgambar[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebakgambar[m.chat][0] })
var anu = await bochil.tebakgambar()
console.log("Jawaban : " + anu.jawaban)
tebakgambar[m.chat] = [
await rioo.sendMessage(m.chat, { image: { url: anu.img }, caption: `*── 「 TEBAK GAMBAR 」 ──*\n\n🎁 Gift :\n📖 Question : ${anu.deskripsi}\n⏳ Timeout : ${(240000 / 1000).toFixed(2)} Detik\n\n📌 *Rules :*\n• *Reply dan ketik jawaban untuk menjawab.*\n• *Reply dan ketik nyerah untuk menyerah.*`}, { quoted: m }), anu, 4999,
setTimeout(() => {
if (tebakgambar[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tebakgambar[m.chat]
}
}, 240000)
]
}
break
case "tebakkata": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (tebakkata[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebakkata[m.chat][0] })
var anu = await bochil.tebakkata()
console.log("Jawaban : " + anu.jawaban)
tebakkata[m.chat] = [
await reply(`*── 「 TEBAK KATA 」 ──*

• Soal : ${anu.soal}
• Reward : +1000 Xp
• Timeout : ${(240000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (tebakkata[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tebakkata[m.chat]
}
}, 240000)
]
}
break
case "tebaklagu": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (tebaklagu[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebaklagu[m.chat][0] })
let poin = 1000
let src = await fetchJson("https://raw.githubusercontent.com/Aiinne/scrape/main/tebaklagu.json")
let json = src[Math.floor(Math.random() * src.length)]
let msg = await rioo.sendMessage(m.chat, { audio: { url: json.lagu }, mimetype: "audio/mpeg" }, { quoted: m })
console.log("Jawaban : " + json.judul)
tebaklagu[m.chat] = [
await reply(`*── 「 TEBAK LAGU 」 ──*

• Artis : ${json.artis}
• Judul : _____
• Reward : +${poin} Xp
• Tiketcoin : +1 Tiketcoin
• Timeout : ${(240000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`), json, poin,
setTimeout(() => {
if (tebaklagu[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${json.judul}*`)
delete tebaklagu[m.chat]
}
}, 240000)
]
}
break
case "tebaklirik": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (tebaklirik[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebaklirik[m.chat][0] })
var anu = await bochil.tebaklirik()
console.log("Jawaban : " + anu.jawaban)
tebaklirik[m.chat] = [
await reply(`*── 「 TEBAK LIRIK 」 ──*\n\n🎁 Gift :\n📖 Question : ${anu.soal}\n⏳ Timeout : ${(240000 / 1000).toFixed(2)} Detik\n\n📌 *Rules :*\n• *Reply dan ketik jawaban untuk menjawab.*\n• *Reply dan ketik nyerah untuk menyerah.*`), anu, 4999,
setTimeout(() => {
if (tebaklirik[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tebaklirik[m.chat]
}
}, 240000)
]
}
break
case "tebaktebakan": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (tebaktebakan[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebaktebakan[m.chat][0] })
var anu = await bochil.tebaktebakan()
console.log("Jawaban : " + anu.jawaban)
tebaktebakan[m.chat] = [
await reply(`*── 「 TEBAK TEBAKAN 」 ──*\n\n🎁 Gift :\n📖 Question : ${anu.soal}\n⏳ Timeout : ${(240000 / 1000).toFixed(2)} Detik\n\n📌 *Rules :*\n• *Reply dan ketik jawaban untuk menjawab.*\n• *Reply dan ketik nyerah untuk menyerah.*`), anu, 4999,
setTimeout(() => {
if (tebaktebakan[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tebaktebakan[m.chat]
}
}, 240000)
]
}
break
case "tekateki": {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (tekateki[m.chat]) return rioo.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tekateki[m.chat][0] })
var anu = await bochil.tekateki()
console.log("Jawaban : " + anu.jawaban)
tekateki[m.chat] = [
await reply(`*── 「 TEKA TEKI 」 ──*\n\n🎁 Gift :\n📖 Question : ${anu.soal}\n⏳ Timeout : ${(240000 / 1000).toFixed(2)} Detik\n\n📌 *Rules :*\n• *Reply dan ketik jawaban untuk menjawab.*\n• *Reply dan ketik nyerah untuk menyerah.*`), anu, 4999,
setTimeout(() => {
if (tekateki[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tekateki[m.chat]
}
}, 240000)
]
}
break
case 'saweria':{
rioo.saweria = rioo.saweria || '';
  rioo.gateway = rioo.gateway || [];

  const Pay = new Saweria(rioo.saweria);

  if (args[0] === 'payment' || args[0] === 'unban' || args[0] === 'unblock') {
    const itemName = args[0].toUpperCase();
    const price = 5000; // You can change this to 10000 if necessary
    const pending = rioo.gateway.find(v => v.jid === m.sender && v.state === 'PENDING');
    const process = rioo.gateway.find(v => v.jid === m.sender && v.state === 'PROCESS');

    if (pending || process) {
      return m.reply(`🚩 Selesaikan terlebih dahulu proses sebelumnya atau kirim *${prefix}saweria n* untuk membatalkan.`);
    }

    const formattedPrice = formatter(price);
    const formattedPPN = formatter(calculatePPN(price));

    let teks = `Anda akan melakukan pembelian ${itemName} dengan rincian sebagai berikut:\n\n`;
    teks += `• Nomor: ${PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')}\n`;
    teks += `• Harga: Rp. ${formattedPrice},-\n`;
    teks += `• PPN: Rp. ${formattedPPN},-\n\n`;
    teks += `Kirim *${prefix}saweria y* untuk melanjutkan proses pembayaran atau kirim *${prefix}saweria n* untuk membatalkan.`;

    m.reply(teks).then(() => {
      rioo.gateway.push({
        state: 'PENDING',
        jid: m.sender,
        amount: price,
        admin: calculatePPN(price),
        package: itemName,
        created_at: Date.now(),
        receipt: ''
      });
    });
  } else if (args[0] === 'y') {
    const gateway = rioo.gateway.find(v => v.jid === m.sender && v.state === 'PENDING');
    if (!gateway) return;

    m.reply('Menghasilkan QR Code pembayaran...');
    const total = parseInt(gateway.amount) + parseInt(gateway.admin);
    const json = await Pay.createPayment(total, gateway.package);

    if (!json.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${json.msg}`);

    let teks = `Info Pembayaran\n\n`;
    teks += `Pembayaran sebelum ${json.data.expired_at} WIB\n\n`;
    teks += `• ID Pembayaran: ${json.data.id}\n`;
    teks += `• Total Pembayaran: Rp. ${formatter(json.data.amount_raw)},-\n\n`;
    teks += `Catatan:\n`;
    teks += `- Kode QR hanya valid untuk 1 kali transfer.\n`;
    teks += `- Setelah pembayaran, tunggu sebentar lalu kirim *${prefix}saweria check* untuk cek status pembayaran.\n`;
    teks += `- Jika pembayaran berhasil, status akan diperbarui otomatis\n`;
    teks += `- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`;

    rioo.sendFile(m.chat, Buffer.from(json.data.qr_image.split(',')[1], 'base64'), 'qr.png', teks, m).then(() => {
      gateway.state = 'PROCESS';
      gateway.receipt = json.data.id;
    });
  } else if (args[0] === 'n') {
    const pending = rioo.gateway.find(v => v.jid === m.sender && v.state === 'PENDING');
    const process = rioo.gateway.find(v => v.jid === m.sender && v.state === 'PROCESS');

    if (!pending && !process) {
      return m.reply(`🚩 Pembelian berhasil dibatalkan.`);
    }

    m.reply(`🚩 Pembelian berhasil dibatalkan.`);
    if (pending) {
      rioo.gateway = removeItem(rioo.gateway, pending);
    }
    if (process) {
      rioo.gateway = removeItem(rioo.gateway, process);
    }
  } else if (args[0] === 'check') {
    const gateway = rioo.gateway.find(v => v.jid === m.sender && v.state === 'PROCESS');
    if (!gateway) return;

    m.reply('Memeriksa status pembayaran...');
    const json = await Pay.checkPayment(gateway.receipt);

    if (!json.status) return m.reply(`Terjadi kesalahan saat memeriksa status pembayaran:\n${json.msg}`);

    m.reply(`Status Pembayaran: ✅ ${json.msg}`).then(() => {
      let data = global.db.users.find(v => v.jid === gateway.jid);

      if (gateway.package === 'PREMIUM') {
        data.limit += 5000;
        data.expired += data.premium ? (86400000 * 30) : (Date.now() + (86400000 * 30));
        data.premium = true;
      } else if (gateway.package === 'UNBAN') {
        data.banned = false;
        data.banTemp = 0;
        data.banTimes = 0;
      } else if (gateway.package === 'UNBLOCK') {
        rioo.updateBlockStatus(gateway.jid, 'unblock');
      } else if (gateway.package === 'DEPOSITO') {
        data.balance += gateway.amount;
      }

      rioo.gateway = removeItem(rioo.gateway, gateway);
    });
  } else if (args[0] === 'login') {
    if (!isOwner) return m.reply('Hanya owner yang dapat menggunakan perintah ini.');
    if (!args[1] || !args[2]) return m.reply('Penggunaan: *' + prefix + 'login email@mail.com password*');

    let email = args[1];
    let password = args[2];

    m.reply('Sedang login...');
    const json = await Pay.login(email, password);

    if (!json.status) return m.reply(`Terjadi kesalahan saat login:\n${json.msg}`);

    m.reply(`✅ Login Sukses : ${json.data.user_id}`).then(() => {
      rioo.saweria = json.data.user_id;
    });
  } else {
    m.reply(`Penggunaan:\n• *${prefix}saweria payment* - Memulai pembelian\n• *${prefix}saweria unban* - Membuka banned\n• *${prefix}saweria unblock* - Membuka block\n• *${prefix}saweria y* - Melanjutkan pembayaran\n• *${prefix}saweria n* - Membatalkan pembelian\n• *${prefix}saweria check* - Memeriksa status pembayaran\n• *${prefix}saweria login email@mail.com password* - Login ke akun Saweria`);
  }
}
break;
case 'addlimit': {
if (!isOwner) return reply(mess.owner)
    if (!text) return reply('Format salah!\n\nTambah limit: addlimit <tag orang> <jumlah limit>\nKurangi limit: remlimit <tag orang> <jumlah limit>')
    
    // Extracting the mentioned user and the limit value from the command text
    let [who, limitValue] = text.split(' ')
    if (!who) return reply('Tag orang yang akan diubah limitnya!')
    if (isNaN(limitValue)) return reply('Jumlah limit harus angka!')

    // Converting limitValue to a number
    limitValue = parseInt(limitValue)

    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let users = global.db.data.users

    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[user]) users[user] = { limit: 0 }

    // Determining whether to add or remove limit based on the command
    if (command === 'addlimit') {
        // Adding the specified limit to the user's account
        users[user].limit += limitValue
        rioo.reply(m.chat, `Berhasil menambahkan ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
    } else if (command === 'remlimit') {
        if (limitValue > users[user].limit) {
            // Set the user's limit to 0 if the specified limit is greater than the user's current limit
            users[user].limit = 0
            rioo.reply(m.chat, `Berhasil mengurangi limit untuk @${user.split('@')[0]}. Limit kini menjadi 0!`, m)
        } else {
            // Removing the specified limit from the user's account
            users[user].limit -= limitValue
            rioo.reply(m.chat, `Berhasil mengurangi ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
        }
    }
}
break
case 'dellimit':{
if (!isOwner) return reply(mess.owner)
  if (!text) {
    return rioo.reply(m.chat, '• *Example :* .dellimit @user 10', m)
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
     return rioo.reply(m.chat, 'Tag pengguna yang ingin dikurangi limitnya. Contoh: .dellimit @user 10', m)
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    return rioo.reply(m.chat, 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .dellimit @user 10', m)
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      limit: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].limit -= pointsToSubtract;
  if (users[mentionedJid].limit < 0) {
    users[mentionedJid].limit = 0;
  }

  rioo.reply(m.chat, `Berhasil mengurangi ${pointsToSubtract} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};
break;
case 'resetlimit': {
let listt = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 30 : isNumber(args[0]) ? parseInt(args[0]) : 10
	lim = Math.max(1, lim)
	listt.map(([user, data], i) => (Number(data.limit = lim)))
rioo.reply(m.chat, `*Limit berhasil direset ${lim} / user*`, m)
}
            break 
case 'bansos': {
const cooldown = 864000000
let user = db.data.users[m.sender]
		let timers = (cooldown - (new Date - user.lastbansos))
		let aku = Math.ceil(Math.random() * 101)
		let kamu = Math.floor(Math.random() * 76) //hehe Biar Susah Menang :v
		let kbansos = 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg'
		let mbansos = 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg'
		if (new Date - user.lastbansos <= cooldown) return m.reply(`Kamu sudah Melakukan Korupsi Bansos 💰\nCooldown *🕐${timers.toTimeString()}*`)
		if (user.atm < 2000000) return m.reply(`[ ! ] Minimal memiliki tabungan *💵 2000000*`)
		if (aku > kamu) {
			await rioo.sendMessage(m.chat, { image: { url: kbansos }, caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰\nMembayar denda *💵 3000000*` }, { quoted: fkontak2 })
			user.money -= 3000000
		} else if (aku < kamu) {
			let p = ranNumb(1500000, 2450000)
			user.money += p
			await rioo.sendMessage(m.chat, { image: { url: mbansos }, caption: `Kamu berhasil  korupsi dana bansos🕴️💰\nMendapatkan *💵 ${p}*` }, { quoted: fkontak2 })
		} else {
			m.reply(`Tidak berhasil korupsi, namun berhasil *kabur keluar negeri 🏃*`)
		}
		user.lastbansos = new Date * 1
}
break
case 'craft':{
let CreateRioo = `
⛊ Pickaxe ⛏️
⛊ Fishingrod 🎣
⛊ Atm 💳

*「 RECIPE 」*

⬡ Pickaxe ⛏️
│• 10 Kayu
│• 5 Batu
│• 5 Iron
│• 20 String
╰────┈⭑
⬡ Fishingrod 🎣
│• 10 Kayu
│• 2 Iron
│• 20 String
╰────┈⭑
⬡ Atm 💳
│• 3 Emerald
│• 6 Diamond
│• 10k Money
╰────┈⭑
Contoh: *${prefix}craftatm*
`
rioo.sendMessage(m.chat, {
text: CreateRioo,
contextInfo: {
externalAdReply: {
title: namabot,
thumbnailUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak2}) 
}
break
case 'upgrade':{
let lmao1 = `Gunakan Format *${prefix}${command} [type]*
contoh *${prefix}upgfishingrod*
*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('atm')}Atm
`
rioo.sendMessage(m.chat, {
text: lmao1,
contextInfo: {
externalAdReply: {
title: namabot,
thumbnailUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak2}) 
}
break
case 'craftpickaxe': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (user.pickaxe > 0) return m.reply('Kamu sudah memilik ini')
if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : \n10 wood🪵 \n5 iron⛓\n20 String🕸️\n5 Batu 🪨`)
global.db.data.users[m.sender].wood -= 10
global.db.data.users[m.sender].iron -= 5
user.rock -= 5
global.db.data.users[m.sender].string -= 20
global.db.data.users[m.sender].pickaxe += 1
user.pickaxedurability = 40
m.reply("Sukses membuat 1 pickaxe 🔨")
}
break
case 'craftfishingrod':{
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
          if (user.fishingrod > 0) return m.reply('Kamu sudah memilik ini')
            if(user.wood < 20 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :${user.wood < 20 ? `\n${20 - user.wood} kayu🪵` : ''}${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}`)
            user.wood -= 10
            user.iron -= 2
            user.string -= 20
            user.fishingrod += 1
            user.fishingroddurability = 30
            m.reply("Sukses membuat 1 Pancingan 🎣")
            }
            break
case 'craftatm':{
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (user.atm > 0) return m.reply('Kamu sudah memilik ini')
if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return m.reply(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :${user.money < 10000 ? `\n${10000 - user.money} Money 💹` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
            user.emerald -= 3
            user.money -= 10000
            user.diamond -= 6
            user.atm += 1
            user.fullatm = Infinity
            reply("Sukses membuat 1 Atm 💳")
            }
            break
case 'upgfishingrod':{
let user = global.db.data.users[m.sender];
if (user.registered === false) return reply(mess.notregist);;
let amount = args[0];
  if (!amount || isNaN(amount)) {
    return reply(`*example*: ${prefix}upgfishingrod 10000`);
  }

  amount = parseInt(amount);
  if (amount <= 0) {
    return reply('the diamond number must be greater than 0');
  }

  if (amount > user.diamond) {
    return reply('Sorry, your diamond is insufficient');
  }

  user.diamond -= amount;
  user.fishingrod += amount;
  m.reply(`Successfully saved *${amount}* diamond to your Fishingrod.`);
};
break;        
        break
case 'upgpickaxe':{
let user = global.db.data.users[m.sender];
if (user.registered === false) return reply(mess.notregist);;
let amount = args[0];
  if (!amount || isNaN(amount)) {
    return reply(`*example*: ${prefix}upgpickaxe 10000`);
  }

  amount = parseInt(amount);
  if (amount <= 0) {
    return reply('the money number must be greater than 0');
  }

  if (amount > user.money) {
    return reply('Sorry, your money is insufficient');
  }

  user.money -= amount;
  user.pickaxe += amount;
  m.reply(`Successfully saved *${amount}* money to your PickAxe.`);
};
break;        
        break
case 'upgatm':{        
let user = global.db.data.users[m.sender];
if (user.registered === false) return reply(`Kamu telah terdaftar dalam database, ketik *.unreg ⧼sn⧽* untuk menghapus datamu.`);;;
let amount = args[0];
  if (!amount || isNaN(amount)) {
    return reply(`*example*: ${prefix}upgatm 10000`);
  }

  amount = parseInt(amount);
  if (amount <= 0) {
    return reply('the money number must be greater than 0');
  }

  if (amount > user.money) {
    return reply('Sorry, your money is insufficient');
  }

  user.money -= amount;
  user.atm += amount;
  m.reply(`Successfully saved *${amount}* money to your ATM.`);
};
break;        
case 'judi':{
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
    let count = (args[0] && Number(args[0]) ? Math.max(parseInt(args[0]), 1) : 1) * 1
    if ((user.money * 1) < count) return m.reply('💹 Uang kamu tidak cukup!!')
    let Bot = (Math.ceil(Math.random() * 91)) * 1
    let Kamu = (Math.floor(Math.random() * 71)) * 1
    let status = 'Kalah'
    if (Bot < Kamu) {
        user.money += count * 1
        status = 'Menang'
    } else if (Bot > Kamu) {
        user.money -= count * 1
    } else {
        status = 'Seri'
        user.money += (Math.floor(count / 1.5)) * 1
    }
    m.reply(`
| *PLAYERS* | *POINT* |
*🤖 BOT:*      ${Bot}
*👤 KAMU:*    ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*` : status == 'Kalah' ? `Kehilangan *-${count * 1}*` : `Mendapatkan *+${Math.floor(count / 1.5)}*`} Money 💹
`.trim())
}
break
case 'mancing':{
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let __timers = (new Date - global.db.data.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers) 
    let name = rioo.getName(m.sender)
    let id = m.sender
    let kerja = 'Memancing'
    rioo.misi = rioo.misi ? rioo.misi : {}
    if (id in rioo.misi) {
        m.reply(m.chat, `Selesaikan Misi ${rioo.misi[id][0]} Terlebih Dahulu`, m)
        throw false
    }
    if (user.umpan == 0) return m.reply('Kamu Membutuhkan Umpan 🪱 Untuk Memancing!')
    if (user.fishingrod == 0 ) return m.reply('Kamu Harus Mempunyai ketik .craftfishingrod 🎣 Terlebih Dahulu Jika Ingin Memancing')
    if (new Date - user.lastmisi > 3600000) {
		let ikan1 = Math.floor(Math.random() * 5)
		let ikan2 = Math.floor(Math.random() * 5)
		let ikan3 = Math.floor(Math.random() * 5)
		let ikan4 = Math.floor(Math.random() * 5)
		let ikan5 = Math.floor(Math.random() * 5)
		let ikan6 = Math.floor(Math.random() * 5)
		let ikan7 = Math.floor(Math.random() * 5)
		let ikan8 = Math.floor(Math.random() * 5)
		let ikan9 = Math.floor(Math.random() * 5)
		let ikan10 = Math.floor(Math.random() * 5)
		let ikan11 = Math.floor(Math.random() * 5)
        let ikan12 = Math.floor(Math.random() * 5)   
        
		let hsl = `   
*📮 Hasil tangkapan Mu*
${ikan1 ? `
🦀 Kepiting: ${ikan1}` : ''} ${ikan2 ? `
🦞 Lobster: ${ikan2}` : ''} ${ikan3 ? `
🦐 Udang: ${ikan3}` : ''} ${ikan4 ? `
🦑 Cumi: ${ikan4}` : ''} ${ikan5 ? `
🐙 Gurita: ${ikan5}` : ''} ${ikan6 ? `
🐡 Buntal: ${ikan6}` : ''} ${ikan7 ? `
🐠 Dory: ${ikan7}` : ''} ${ikan8 ? `
🐳 Orca: ${ikan8}` : ''} ${ikan9 ? `
🐬 Lumba: ${ikan9}` : ''} ${ikan10 ? `
🐋 Paus: ${ikan10}` : ''} ${ikan11 ? `
🦈 Hiu: ${ikan11}` : ''} ${ikan12 ? `
🐟 Ikan: ${ikan12}` : ''}
`.trim()
        
		user.kepiting += ikan1
		user.lobster += ikan2
		user.udang += ikan3
		user.cumi += ikan4
		user.gurita += ikan5
		user.buntal += ikan6
		user.dory += ikan7
		user.orca += ikan8
		user.lumba += ikan9
		user.paus += ikan10
		user.hiu += ikan11
		user.ikan += ikan12
		user.fishingroddurability -= 10
		user.umpan -= 1
		
		rioo.misi[id] = [
        kerja,
        setTimeout(() => {
            delete rioo.misi[id]
        }, 20000)
    	]
    
		setTimeout(() => {
			m.reply(hsl)
		}, 20000)

		setTimeout(() => {
			m.reply(`Ini Dia Hasil Tangkapanmu`)
		}, 18000)

		setTimeout(() => {
			m.reply('Kamu Berhasil Menarik Ikan Keluar Dari Air')
		}, 15000)

		setTimeout(() => {
			m.reply('Kamu Menarik Kailmu')
		}, 12000)
		
		setTimeout(() => {
			m.reply('Kail Mu Di Tarik Ikan...')
		}, 9000)

		setTimeout(() => {
			m.reply('Kamu Sedang Memancing...')
		}, 0)
		user.lastmisi = new Date * 1
	} else m.reply(`Mohon Tunggu Selama ${timers} Sebelum Memulai Misi Kembali`)
}
break
case 'nambang':{
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
    let __timers = (new Date - user.lastnambang)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers)
    let penambang = await rioo.getName(m.sender)
    
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${prefix}eat8`)
    if (user.lastnambang > 10800000) return m.reply(`Kamu masih kelelahan\nHarap tunggu ${timers} lagi`)
    
    
    let rndm1 = `${Math.floor(Math.random() * 5)}`
		let rndm2 = `${Math.floor(Math.random() * 10)}`
		let rndm3 = `${Math.floor(Math.random() * 7)}`
		let rndm4 = `${Math.floor(Math.random() * 4)}`
		let rndm5 = `${Math.floor(Math.random() * 200)}`
		let rndm6 = `${Math.floor(Math.random() * 200)}`
		let rndm7 = `${Math.floor(Math.random() * 20)}`
		let rndm8 = `${Math.floor(Math.random() * 100)}`
		let rndm9 = `${Math.floor(Math.random() * 100)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)
let ran4 = (rndm4 * 10)
let ran5 = (rndm5 * 10)
let ran6 = (rndm6 * 10)
let ran7 = (rndm7 * 10)
let ran8 = (rndm8 * 10)
let ran9 = (rndm9 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`
let hmsil4 = `${ran4}`
let hmsil5 = `${ran5}`
let hmsil6 = `${ran6}`
let hmsil7 = `${ran7}`
let hmsil8 = `${ran8}`
let hmsil9 = `${ran9}`

let jln = `
⬛⬛⬛⬛⬛⬛⬛⬛🚶⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

✔️ ${penambang} Wait....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛🚶
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

➕ ${penambang} Menemukan Area....
`

let jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🚶

➕ ${penambang} Mulai Menambang....
`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🚶

➕ ${penambang}
💹 Menerima gaji....
`

let hsl = `
*《 Hasil Nambang ${penambang} 》*

 *💎 = [ ${hmsil1} ] Diamond*
 *⛓️ = [ ${hmsil2} ] Iron*
 *🪙 = [ ${hmsil3} ] Gold*
 *💚 = [ ${hmsil4} ] Emerald*
 *🪨 = [ ${hmsil5} ] Rock*
 *🌕 = [ ${hmsil6} ] Clay*
 *🕳️ = [ ${hmsil7} ] Coal*
 *🌑 = [ ${hmsil8} ] Sand*
 *✉️ = [ ${hmsil9} ] Exp*
 
 Stamina anda berkurang -20
`

user.diamond += hmsil1
		user.iron += hmsil2
		user.gold += hmsil3
		user.emerald += hmsil4
		user.rock += hmsil5
		user.clay += hmsil6
		user.coal += hmsil7
		user.sand += hmsil8
		user.exp += hmsil9
		user.stamina -= 20
		
		user.berlian += hmsil2
		user.emas += hmsil2
		user.tiketcoin += hmsil2

setTimeout(() => {
                     rioo.reply(m.chat, hsl, m)
                     }, 27000) 
               
                     setTimeout(() => {
                     rioo.reply(m.chat, jln4, m)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(m.chat, jln3, m)
                     }, 20000) 
                        
                     setTimeout(() => {
                     rioo.reply(m.chat, jln2, m)
                     }, 15000) 
                    
                     setTimeout(() => {
                     rioo.reply(m.chat, jln, m)
                     }, 10000) 
                     
                     setTimeout(() => {
                     rioo.reply(m.chat, `🔍 ${penambang} Mencari Area Nambang.....`, m)
                     }, 0) 
  user.lastnambang = new Date * 1
}
break
case 'mining':{
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
   if (user.pickaxe == 0) return m.reply('Harus Membutuhkan pickaxe ketik .pickaxe untuk mendapatkan nya')
	let time = global.db.data.users[m.sender].lastnambang + 28800000
  if (new Date - global.db.data.users[m.sender].lastnambang< 28800000) return reply(`Anda sudah menambang\nMohon tunggu hasil pertambangan mu\nTunggu selama ${msToTime(time - new Date())} lagi`)
   // if (global.db.data.users[m.sender].aqua > 9) {
   // let aquah = `${Math.floor(Math.random() * 5)}`.trim()
    let berlians = `${Math.floor(Math.random() * 7)}`.trim()
    let emasbiasas = `${Math.floor(Math.random() * 6)}`.trim()
    let emasbatangs = `${Math.floor(Math.random() * 10)}`.trim()
    // global.db.data.users[m.sender].aqua -= aquah * 1
    global.db.data.users[m.sender].berlian += berlians * 20
    global.db.data.users[m.sender].emas += emasbiasas * 10
    global.db.data.users[m.sender].diamond += emasbatangs * 15
    global.db.data.users[m.sender].tiketcoin += 1
	/*let pisangnye = `${Math.floor(Math.random(global.db.data.users[m.sender].pisang = pisangpoin) * 1)}`.trim()
	let jeruknye = `${Math.floor(Math.random(global.db.data.users[m.sender].jeruk = jerukpoin) * 1)}`.trim()
	let mangganye = `${Math.floor(Math.random(global.db.data.users[m.sender].mangga = manggapoin) * 1)}`.trim()
	let anggurnye = `${Math.floor(Math.random(global.db.data.users[m.sender].anggur = anggurpoin) * 1)}`.trim()
	let apelnye = `${Math.floor(Math.random(global.db.data.users[m.sender].apel = apelpoin) * 10000)}`.trim()*/
	global.db.data.users[m.sender].lastnambang = new Date * 1
 // else rioo.reply(m.chat, 'Minimal 10 Aqua untuk kamu menambang, karena menambang membutuhkan energi, seperti mendapat dia >,,<', m)
 rioo.reply(`Selamat kamu mendapatkan : \n+${berlians} Berlian\n+${emasbiasas} Emas\n+${emasbatangs} Diamond\n\n+1 Tiketcoin`)
  setTimeout(() => {
				reply(m.chat, `Waktunya nambang lagi kak 😅`, m)
					}, timeout)
}
break
case 'nguli': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (new Date - global.db.data.users[m.sender].lastnguli > 1800000) {
global.db.data.users[m.sender].limit += 10
m.reply('_Selamat kamu mendapatkan +10 limit_')
global.db.data.users[m.sender].lastnguli = new Date * 1
} else m.reply('Anda sudah mengklaim upah nguli hari ini')
}
break
case 'mulung': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);

let time = global.db.data.users[m.sender].lastmulung + 1800000
if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) return reply(`Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`)
let botolnye = `${Math.floor(Math.random() * 1000)}`.trim()
let kalengnye = `${Math.floor(Math.random() * 1000)}`.trim()
let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
global.db.data.users[m.sender].botol += botolnye * 1
global.db.data.users[m.sender].kaleng += kalengnye * 1
global.db.data.users[m.sender].kardus += kardusnye * 1
global.db.data.users[m.sender].lastmulung = new Date * 1
m.reply(`Selamat kamu mendapatkan : \n+${botolnye} Botol\n+${kardusnye} Kardus\n+${kalengnye} Kaleng`)
setTimeout(() => {
rioo.sendText(m.chat, `Yuk waktunya mulung lagi 😅`, m)
}, timeout)
}
break
case 'monthly': {
const free = 20000
const prem = 40000
const limitfree = 25
const limitprem = 45
const moneyfree = 20000
const moneyprem = 40000
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);

let time = global.db.data.users[m.sender].lastmonthly + 2592000000
  if (new Date - global.db.data.users[m.sender].lastmonthly < 2592000000) return m.reply(`Anda sudah mengklaim, klaim bulanan ini\ntunggu selama ${msToTime(time - new Date())} lagi`)
    global.db.data.users[m.sender].exp += isPremium ? prem : free
        global.db.data.users[m.sender].money += isPremium ? moneyprem : moneyfree
        global.db.data.users[m.sender].limit += isPremium ? limitprem : limitfree
       // global.db.data.users[m.sender].pet += 3
        rioo.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPremium ? prem : free} Exp\n+${isPremium ? moneyprem : moneyfree} Money\n+${isPremium ? limitprem : limitfree} Limit`, m)
        global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
break
case 'redeem':{
const cooldown = 86800000
let user = global.db.data.users[m.sender]
let ctimer = (new Date - user.lastcode)
let _ctimer = (cooldown - ctimer)
let timers = clockString(_ctimer)
    if (args.length == 0) return rioo.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    let kodes = args[0] == '085213' || args[0] == '443321' || args[0] == '662522' || args[0] == '322929' || args[0] == '562622' || args[0] == '432282' || args[0] == '002819' || args[0] == '715611' || args[0] == '882910' || args[0] == '882010' || args[0] == '937100' || args[0] == '736390' || args[0] == '762837' || args[0] == '028393' || args[0] == '625529' || args[0] == '727638' || args[0] == '992719' || args[0] == '092739' || args[0] == '727269' || args[0] == '629461' || args[0] == '239210'
    if (kodes) {
   if (user.lastcode < cooldown) {
    rioo.reply(m.chat, `*SELAMAT!*\n\nKamu telah mendapatkan\n+25000 XP✨\n+250000 Money💵\n+25000 Bank🏦\n+25 Limit🌌`, m)
    user.exp += 25000
    user.limit += 25
    user.bank += 6500000
    user.money += 250000000
   user.lastcode = new Date * 1
   } else {
   return m.reply(`Hei Anda sudah mengambill code gift, Code gift anda sudah kadaluarsa..\nTunggu besok iya kak..\n${timers}`.trim())
   }
   } else {
   return m.reply(htki + ' KODE SALAH ' + htka)
   }
}
break
case 'codeshortlink':{
let user = global.db.data.users[m.sender]
    if (args.length == 0) return rioo.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    if (args[0] == '882910' || args[0] == '443321' || args[0] == '662522' || args[0] == '322929' || args[0] == '562622' || args[0] == '432282' || args[0] == '002819' || args[0] == '715611' || args[0] == '882910' || args[0] == '882010' || args[0] == '937100' || args[0] == '736390' || args[0] == '762837' || args[0] == '028393' || args[0] == '625529' || args[0] == '727638' || args[0] == '992719' || args[0] == '092739' || args[0] == '727269' || args[0] == '629461' || args[0] == '239210') {

   if (new Date - global.db.data.users[m.sender].lastcode > 86800000) {
     if (new Date - global.db.data.users[m.sender].lastcode < 86800000) return m.reply(`Anda sudah mengambill code gift, Code gift anda sudah kadaluarsa..\nTunggu besok iya kak..`)
    rioo.reply(m.chat, `*SELAMAT!*\n\nKamu telah mendapatkan\n+25000 XP\n+25000 Money\n+25000 Nabung Money\n+25 Limit`, m)
    global.db.data.users[m.sender].exp += 25000
    global.db.data.users[m.sender].limit += 25
    global.db.data.users[m.sender].bank += 25000
    global.db.data.users[m.sender].money += 25000
   global.db.data.users[m.sender].lastcode = new Date * 1
} else rioo.reply(m.chat, 'Kode anda sudah kadaluarsa, harap transaksi kembali..', m)
   } else {
      rioo.reply(m.chat, `*「 KODE TIDAK VALID 」*`, m)
    }
}
break
case 'weekly': {
const free = 20000
const prem = 40000
const limitfree = 20
const limitprem = 40
const moneyfree = 20000
const moneyprem = 40000
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
    let time = global.db.data.users[m.sender].lastweekly + 86400000
  if (new Date - global.db.data.users[m.sender].lastweekly < 86400000) return m.reply(`Anda sudah mengklaim, klaim mingguan ini\ntunggu selama ${msToTime(time - new Date())} lagi`)
    //    rioo.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPremium ? prem : free
        global.db.data.users[m.sender].money += isPremium ? moneyprem : moneyfree
        global.db.data.users[m.sender].limit += isPremium ? limitprem : limitfree
       // global.db.data.users[m.sender].legendary += 3
       rioo.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPremium ? prem : free} Exp\n+${isPremium ? moneyprem : moneyfree} Money\n+${isPremium ? limitprem : limitfree} Limit`, m)
        global.db.data.users[m.sender].lastweekly = new Date * 1
    }
break
case 'buy': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
const info = `
Use Format *${prefix}${command} [crate] [count]*
Usage example: *${prefix}${command} potion 10*

📍Items list: 
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `${global.rpg.emoticon(v)}${v} | ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
}).join('\n')}
`.trim()
const item = (args[0] || '').toLowerCase()
const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!listItems[item]) return m.reply(info)
if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`You don't have enough ${global.rpg.emoticon(paymentMethod)}${paymentMethod} to buy *${total}* ${global.rpg.emoticon(item)}${item}. You need *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* more ${paymentMethod} to be able to buy`)
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
return m.reply(`You bought *${total}* ${global.rpg.emoticon(item)}${item}`)
} else {
if (user[item] < total) return m.reply(`You don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]} items`)
user[item] -= total
user.money += listItems[item].money * total
return m.reply(`You sold *${total}* ${global.rpg.emoticon(item)}${item}`)
}
}
break
case 'petualang': {
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!m.isGroup) return reply(mess.group)
let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (global.db.data.users[m.sender].healt > 79) {
if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
let armor = global.db.data.users[m.sender].armor
let rubah = global.db.data.users[m.sender].rubah
let kuda = global.db.data.users[m.sender].kuda
let kucing = global.db.data.users[m.sender].kucing
let anjing = global.db.data.users[m.sender].anjing
let ____health = `${Math.floor(Math.random() * 101)}`.trim()
let ___health = (____health * 1)
let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
let uang = (Math.floor(Math.random() * 400) + (anjing * 70))
let _potion = `${Math.floor(Math.random() * 2)}`.trim()
let potion = (_potion * 1)
let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
let diamond = (_diamond * 1)
let _common = `${Math.floor(Math.random() * 3)}`.trim()
let common = (_common * 1)
let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
let uncommon = (_uncommon * 1) 
let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
let mythic = (_mythic * 1)
let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
let sampah = `${Math.floor(Math.random() * 300)}`.trim()
let legendary = (_legendary * 1)
let _kayu = `${Math.floor(Math.random() * 3)}`.trim()
let kayu = (_kayu * 1)
let _batu = `${Math.floor(Math.random() * 2)}`.trim()
let batu = (_batu * 1)
let _string = `${Math.floor(Math.random() * 2)}`.trim()
let string = (_string * 1)
let _iron = `${Math.floor(Math.random() * 2)}`.trim()
let iron = (_iron * 1)
//let prefix = prefix
let str = `
${rpg.emoticon('healt')} Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${pickRandom(['🇯🇵 Jepang', '🇰🇷 Korea', '🇮🇳 India', '🇺🇲 Amerika', '🇵🇸 Palestin', '🇮🇶 Iraq', '🇸🇦 Arab', '🇵🇰 Pakistan', '🇩🇪 German', '🇫🇮 Finlandia', 'Ke bawa dunia mimpi 😱', 'Ujung dunia 🌏', 'Mars 👽', 'Bulan 🌚', 'Pluto 😱', 'Matahari 🌞', 'Hatinya dia ♥️', '...'])} dan mendapatkan
${rpg.emoticon('exp')} *exp:* ${exp} 
${rpg.emoticon('money')} *uang:* ${uang}
${rpg.emoticon('sampah')} *sampah:* ${sampah}${potion == 0 ? '' : `\n*${rpg.emoticon('potion')}Potion:* ` + potion + ''}${iron == 0 ? '' : `\n*${rpg.emoticon('iron')}Iron:* ` + iron + ''}${kayu == 0 ? '' : `\n*${rpg.emoticon('kayu')}Kayu:* ` + kayu + ''}${batu == 0 ? '' : `\n*${rpg.emoticon('batu')}Batu:* ` + batu + ''}${string == 0 ? '' : `\n*${rpg.emoticon('string')}String:* ` + string + ''}${diamond == 0 ? '' : `\n*${rpg.emoticon('diamond')}diamond:* ` + diamond + ''}${common == 0 ? '' : `\n*${rpg.emoticon('common')}common crate:* ` + common + ''}${uncommon == 0 ? '' : `\n*${rpg.emoticon('uncommon')}uncommon crate:* ` + uncommon + ''}
`.trim()
reply(str)
if (mythic > 0) {
   global.db.data.users[m.sender].mythic += mythic * 1
   reply('*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + `${rpg.emoticon('mythic')}Mythic Crate`)
}
if (legendary > 0) {
global.db.data.users[m.sender].legendary += legendary * 1
reply('*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + `${rpg.emoticon('legendary')}Legendary Crate`)
}
global.db.data.users[m.sender].healt -= healt * 1
global.db.data.users[m.sender].exp += exp * 1
global.db.data.users[m.sender].money += uang * 1
global.db.data.users[m.sender].potion += potion * 1
global.db.data.users[m.sender].diamond += diamond * 1
global.db.data.users[m.sender].common += common * 1 
global.db.data.users[m.sender].uncommon += uncommon * 1
global.db.data.users[m.sender].sampah += sampah * 1
global.db.data.users[m.sender].iron += iron * 1
global.db.data.users[m.sender].batu += batu * 1
global.db.data.users[m.sender].kayu += kayu * 1
global.db.data.users[m.sender].string += string * 1
global.db.data.users[m.sender].lastadventure = new Date * 1
} else reply(`Anda sudah bekerja keras hari ini, silahkan menunggu sampai ${timers}`)
} else reply(`Minimal 80 health untuk bisa bercocok tanam, beli obat dulu biar kuat dengan ketik *${prefix} shop buy potion <jumlah>*\ndan ketik *${prefix} use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *${prefix} claim*\nHealing ${prefix} heal\nBeli Potion ${prefix} shop buy potion`)
}
break
case 'tarik':
case 'tarikuang': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
let count = command.replace(/^tarik/i, '')
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (user.atm == 0) return m.reply('kamu belum mempuyai atm !')
if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
global.db.data.users[m.sender].bank -= xpperlimit * count
global.db.data.users[m.sender].money += count
reply(`Sukses menarik sebesar ${count} Money 💹`)
} else reply(`[❗] Uang dibank anda tidak mencukupi untuk ditarik sebesar ${count} money 💹`)
}
break
case 'nabung': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let count = command.replace(/^nabung/i, '')
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (user.atm == 0) return m.reply('kamu belum mempuyai atm !')
if (user.bank > user.fullatm) return m.reply('Uang dibankmu sudah penuh!')
if (count > user.fullatm - user.bank) return m.reply('Uangnya ga muat dibank')
if (global.db.data.users[m.sender].money >= xpperlimit * count) {
global.db.data.users[m.sender].money -= xpperlimit * count
global.db.data.users[m.sender].bank += count
reply(`Sukses menabung sebesar ${count} Money 💹`)
} else reply(`[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`)
}
break
case 'merampok': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
const timeout = 1800000
let time = global.db.data.users[m.sender].lastmulung + 1800000
if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) return reply(`*Kamu sudah merampok!*\n\nTunggu selama ${msToTime(time - new Date())} lagi`)
let botolnye = `${Math.floor(Math.random() * 30000)}`.trim()
let kalengnye = `${Math.floor(Math.random() * 999)}`.trim()
let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
global.db.data.users[m.sender].money += botolnye * 1
global.db.data.users[m.sender].exp += kalengnye * 1
global.db.data.users[m.sender].kardus += kardusnye * 1
global.db.data.users[m.sender].lastmulung = new Date * 1
reply(`*Selamat kamu mendapatkan :*\n\n• Exp : ${kalengnye}\n• Kardus : ${kardusnye}\n• Uang : ${botolnye}`)
setTimeout(() => {
reply(`*Waktunya merampok lagi kak 😄*`)
}, timeout)
}
break
case 'berkebun': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
const timeout = 1800000
let angguru = global.db.data.users[m.sender].bibitanggur
let apelu = global.db.data.users[m.sender].bibitapel
let jeruku = global.db.data.users[m.sender].bibitjeruk
let manggau = global.db.data.users[m.sender].bibitmangga
let pisangu = global.db.data.users[m.sender].bibitpisang
let time = global.db.data.users[m.sender].lastberkebon + 1800000
if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return reply(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Anggur, Bibit Jeruk, Bibit Mangga, Bibit Pisang*\n\n*Ketik :*\n${prefix}shop buy bibitmangga 500\n\n*List Bibit :*\nbibitanggur\nbibitapel\nbibitjeruk\nbibitmangga\nbibitpisang`)
if (new Date - global.db.data.users[m.sender].lastberkebon < 1800000) return reply(`*Kamu sudah berkebun!*\nSilahkan tunggu hasil panenmu dalam _${msToTime(time - new Date())}_`)
if (global.db.data.users[m.sender].bibitanggur > 499) {
if (global.db.data.users[m.sender].bibitapel > 499) {
if (global.db.data.users[m.sender].bibitjeruk > 499) {
if (global.db.data.users[m.sender].bibitmangga > 499) {
if (global.db.data.users[m.sender].bibitpisang > 499) {
let apelpoin = `${Math.floor(Math.random() * 500)}`.trim()
let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim()
let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim()
let manggapoin = `${Math.floor(Math.random() * 500)}`.trim()
let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim()
global.db.data.users[m.sender].anggur += anggurpoin * 1
global.db.data.users[m.sender].apel += apelpoin * 1
global.db.data.users[m.sender].jeruk += jerukpoin * 1
global.db.data.users[m.sender].mangga += manggapoin * 1
global.db.data.users[m.sender].pisang += pisangpoin * 1
global.db.data.users[m.sender].tiketcoin += 1
global.db.data.users[m.sender].bibitanggur -= 500
global.db.data.users[m.sender].bibitapel -= 500
global.db.data.users[m.sender].bibitjeruk -= 500
global.db.data.users[m.sender].bibitmangga -= 500
global.db.data.users[m.sender].bibitpisang -= 500
global.db.data.users[m.sender].lastberkebon = new Date * 1
reply(`Selamat kamu mendapatkan :\n\n+${apelpoin} Apel\n+${anggurpoin} Anggur\n+${jerukpoin} Jeruk\n+${manggapoin} Mangga\n+${pisangpoin} Pisang\n+1 Tiketcoin`)
setTimeout(() => {
reply(`*Waktunya berkebun lagi kak 😄*`)
}, timeout)
} else reply(`Pastikan bibit anggur kamu *500* untuk bisa berkebun`)
} else reply(`Pastikan bibit apel kamu *500* untuk bisa berkebun`)
} else reply(`Pastikan bibit jeruk kamu *500* untuk bisa berkebun`)
} else reply(`Pastikan bibit mangga kamu *500* untuk bisa berkebun`)
} else reply(`Pastikan bibit pisang kamu *500* untuk bisa berkebun`)
}
break
case 'daftar':{
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
	let user = global.db.data.users[m.sender];
	if (user.registered === true) return reply(`Kamu telah terdaftar dalam database, ketik *.unreg ⧼sn⧽* untuk menghapus datamu.`);
	if (!Reg.test(text)) return reply(`format yang kamu masukan salah, *daftar ⧼nama.umur⧽*`);
	let [_, name, splitter, age] = text.match(Reg);
	if (!name) return reply('Harap masukkan namamu');
	if (!age) return reply('Harap masukkan umurmu');
	age = parseInt(age);
	user.name = name.trim();
	user.age = age;
	user.regTime = +new Date();
	user.registered = true;
	let sn = createHash('md5').update(m.sender).digest('hex');

	user.money = getRandomInt(10, 1000);
	user.limit = getRandomInt(10, 20);
	user.exp = getRandomInt(1000, 1000);

	let lucuu =
			`
╭  • *S u c c e s s f u l l y*
│  ◦ Name: ${name}
│  ◦ Age: ${age}
│  ◦ Money: ${user.money}
│  ◦ Limit: ${user.limit}
│  ◦ Exp: ${user.exp}
╰  Ketik *.ceksn* untuk mendapatkan 
serial number milikmu`

await rioo.sendMessage(m.chat, {
text: lucuu,
contextInfo: {
externalAdReply: {  
title: namabot,
body: hariini,
thumbnailUrl: `https://telegra.ph/file/1d681780e96553bf8d771.jpg`,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak2})
}
break
break;
case 'unreg': {
let user = global.db.data.users[m.sender]
  	if (user.registered === false) return reply(mess.notregist);
  if (!args[0]) return reply('*example*: .unreg 90259a21exxxxxx')
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) return reply('Serial number yang kamu masukkan salah!')

  user.registered = false
  reply(`Berhasil menghapus datamu, sekarang kamu tidak terdaftar lagi.`)
}
break
case 'mysn': case 'ceksn': case 'sn': {
let user = global.db.data.users[m.sender]
	if (user.registered === false) return reply(mess.notregist);
const createHash = require("crypto");
let sn = crypto.createHash('md5').update(m.sender).digest('hex');
reply(`${sn}`)
}
break
case 'bonus': {
if (!m.isGroup) return reply(mess.group)
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
reply(`Selamat kamu mendapatkan :\n\n• Uang : 50000`)
global.db.data.users[m.sender].money += 50000
global.db.data.users[m.sender].lastclaim = new Date * 1
} else reply(`Bilang apa hayo ?`)
}
break
case 'bank': {
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!isPremium && global.db.data.users[m.sender].limit < 0) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 0
const caption = `
▧「 *B A N K  U S E R* 」
│ 📛 *Name:* ${user.registered ? user.name : rioo.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${user.money} 💲
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${user.premium ? "Premium" : "Free User"}
└──···
`.trim()
rioo.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: namabot,
thumbnailUrl: "https://telegra.ph/file/00ee61b555099bbfdd614.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak2}) 
}
break
case "inventori": {
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!isPremium && global.db.data.users[m.sender].limit < 0) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 0
let teks = `*── 「 INVENTORI 」 ──*

*PROFILE*
• 👋 Name : ${pushname}
• 🩸 Darah : ${db.data.users[m.sender].darah}
• 📊 Level : ${db.data.users[m.sender].level}
• 🎉 Exp : ${db.data.users[m.sender].exp}
• 🎟️ Limit : ${db.data.users[m.sender].limit}
• 🧪 Potion : ${db.data.users[m.sender].potion}
• 🎫 Tiket Coin : ${db.data.users[m.sender].tiketcoin}

*BIBIT*
• 🌱 Bibit Anggur : ${db.data.users[m.sender].bibitanggur}
• 🌱 Bibit Apel : ${db.data.users[m.sender].bibitapel}
• 🌱 Bibit Jeruk : ${db.data.users[m.sender].bibitjeruk}
• 🌱 Bibit Mangga : ${db.data.users[m.sender].bibitmangga}
• 🌱 Bibit Pisang : ${db.data.users[m.sender].bibitpisang}

*HASIL BERKEBUN*
• 🍇 Anggur : ${db.data.users[m.sender].anggur}
• 🍎 Apel : ${db.data.users[m.sender].apel}
• 🍊 Jeruk : ${db.data.users[m.sender].jeruk}
• 🥭 Mangga : ${db.data.users[m.sender].mangga}
• 🍌 Pisang : ${db.data.users[m.sender].pisang}

*HASIL BURUAN*
• 🐔 Ayam : ${db.data.users[m.sender].ayam}
• 🐑 Domba : ${db.data.users[m.sender].domba}
• 🐘 Gajah : ${db.data.users[m.sender].gajah}
• 🐇 Kelinci : ${db.data.users[m.sender].kelinci}
• 🐄 Sapi : ${db.data.users[m.sender].sapi}

*HASIL MINING*
• ⛓️ Besi : ${db.data.users[m.sender].besi}
• 👑 Emas : ${db.data.users[m.sender].emas}
• ♻️ Emerald : ${db.data.users[m.sender].emerald}
• 💎 Diamond : ${db.data.users[m.sender].diamond}

*KOLAM IKAN*
• 🐟 Ikan : ${db.data.users[m.sender].ikan}
• 🦀 Kepiting: ${user.kepiting}
• 🦞 Lobster: ${user.lobster}
• 🦐 Udang: ${user.udang}
• 🦑 Cumi: ${user.cumi}
• 🐙 Gurita: ${user.gurita}
• 🐡 Buntal: ${user.buntal}
• 🐠 Dory: ${user.dory}
• 🐳 Orca: ${user.orca}
• 🐬 Lumba: ${user.lumba}
• 🐋 Paus: ${user.paus}
• 🦈 Hiu: ${user.hiu}
• 🎏 Total Isi: *${user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu}* Jenis

*OPEN CREATE*
📦 Legendary: ${global.db.data.users[m.sender].legendary}
📦 Mythic: ${global.db.data.users[m.sender].mythic}
📦 Uncommon: ${global.db.data.users[m.sender].uncommon}
📦 Common: ${global.db.data.users[m.sender].common}`

await rioo.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {  
title: namabot,
body: hariini,
thumbnailUrl: `https://telegra.ph/file/eb026b67d45e17632a131.jpg`,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak2})
}
break
case 'ceklimit': 
case 'checklimit': 
case 'limit':{
let user = global.db.data.users[m.sender]
if (user.registered === false) return reply(mess.notregist);
if (!isPremium && global.db.data.users[m.sender].limit < 0) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 0
let ARC = `×  *Username* : ${pushname}
×  *Limit* : ${user.limit}
×  *level* : ${user.level}
×  *Status* : ${user.premium}`
await rioo.sendMessage(m.chat, {
text: ARC,
contextInfo: {
externalAdReply: {  
title: namabot,
body: hariini,
thumbnailUrl: 'https://telegra.ph/file/977f57c103336bd2072aa.jpg',
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak2})
}
break
case 'bukti':{
           let jumlah = args[0]
           if (!jumlah) return reply('Kirim Nominal trx')
reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT')
rioo.sendMessage(`${owner}@s.whatsapp.net`, { text: `*ADA YANG DEPOSIT NIH*\n*SEJUMLAH ${jumlah} DARI @${sender.split('@')[0]}*\n*INGIN ACC DEPOSIT? KETIK*\n*${prefix}acc MAU NOLAK? BIARIN AJA*`, mentions: [sender]}, { quoted: fkontak2 })
        }
        break
case 'deposit': case 'depo':{
reply(`Hallo Silakan Mau Deposit DiBawah Ini Ya

乂  Tanggal : ${hariini}
乂  Waktu : ${jam}

> • Gopay
> • Dana 
> • Qris 
> • payment_qris (NO PREFIX)
`)
}
break
case 'gopay': {
rioo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/91b6c40a2aa00b1239399.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: fkontak2 })
}
        break
case 'dana': {
rioo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/91b6c40a2aa00b1239399.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: fkontak2 })
}
        break
case 'qris': {
rioo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/91b6c40a2aa00b1239399.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: fkontak2 })
}
        break
case 'tourl':{        
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? rioo.user.jid : m.sender
let sg2alok = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            itemCoun : 99999999,
                            surface : 99999999,
                            message: 'T O U R L',
                            orderTitle: 'H A L O',
                            thumbnail: fs.readFileSync('./media/img/riooxdzz.png'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
let name = await rioo.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply('No media found')
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = `🚩 *ʟɪɴᴋ:*
${link}
☘️ *sɪᴢᴇ :* ${media.length} Byte
🍁 *ᴇxᴘɪʀᴇᴅ :* ${isTele ? 'No Expiry Date' : 'Unknown'}

– *s ʜ ᴏ ʀ ᴛ :* ${await shortUrl(link)}`
  rioo.sendMessage(m.chat, {
    text: caption, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: '', 
    mediaType: 1,
    title: '',
    body: namabot,
    thumbnailUrl: 'https://telegra.ph/file/1d681780e96553bf8d771.jpg', 
    sourceUrl: sgc,
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: sg2alok})
}
break        
case 'shortlink':
if (!text) return reply('*[ Wrong! ]* harap masukan link/url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) return reply(`*Error: Could not generate a short URL.*`)
let done = `*[ S U C C E S S   P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
reply(done);
break
case 'owner': 
        case 'creator':{
        const repf = await rioo.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
rioo.sendMessage(m.chat, { text: `Itu Nomer Owner Ak` }, { quoted: repf })
}
        break
case 'status':
await rioo.sendMessage(from, `*RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(os.totalmem / 1024 / 1024)} MB\n*CPU*: ${os.cpus()[0].model}`)
            break
case 'cancelsms':
if (!isOwner) return reply(mess.owner)
if(!fs.existsSync(`./database/nokos/${sender}.json`)) return reply('Kamu tidak melakukan pembelian')
fs.unlinkSync(`./database/nokos/${sender}.json`)
        reply('Sukses')
        break        
case "sms":{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`id yah mana?`)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
await sleep(1000)
let ress = res.data.data
reply(`*── 「 DETAIL RIWAYAT 」 ──*

_》 order id: ${ress.order_id}_
_》 aplikasi id: ${ress.aplikasi_id}_
_》 number: ${ress.number}_
_》 status: ${ress.status}_
_》 created at: ${ress.created_at}_
_》 apk name: ${ress.aplikasi_name}_`)
}
break
case "order":{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(teks_format)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}

• info selengkapnya
silahkan ketik .getorder`)
}
break
case "getorder":{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(teks_format2)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`> • Berikut Detail Orderan Anda

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}`)
}
break
case "cancel-otp":{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`id yah mana?`)
var res = await fetchJson(`${global.domainotp}/cancle-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
await sleep(1000)
let ress = res.data.data
reply(`*── 「 CANCEL BERHASIL 」 ──*

_》 id: ${q}_
_》 status : sukses cancel_
`)
}
break
case 'layanan-otp':{
if (!isOwner) return reply(mess.owner)
let kode = await fetchJson(`${global.domainotp}/get-services/${apikeyotp}`)
if (kode.succes == false) return reply2(kode.data.messages)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.order id_layanan\n\n*Contoh:* .order 14\n\n*List Layanan Kode Otp*\n\n'
let GG = 0
for (let x of kode.data.data){
teks +=`- ID layanan: ${x.id}\n- Name: ${x.name}\n- Harga: Rp${toRupiah(x.price)}\n\n`
}
reply(teks)
}
break
case 'profileotp':{
if (!isOwner) return reply(mess.owner)
let kode = await fetchJson(`${global.domainotp}/get-profile/${apikeyotp}`)
if (kode.succes == false) return reply(kode.data.messages)
let res = kode.data.data
let teks =`*GET PROFILE*
》 Username: ${res.username}
》 Saldo: Rp ${res.saldo}
》 Email: ${res.email}`
reply(teks)
}
break
case 'pinterest': case 'pin': {
  if (!text) return reply(`Mana teks nya anjay!!`);
  //try {
  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: rioo.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await rioo.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
case 'bcgc':
            case 'bcgroup': {
                if (!isOwner) return reply(mess.owner)
                if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} testing `)
                let getGroups = await rioo.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${namaowner}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    rioo.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: '',
                                sourceUrl: sgc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
case "delsrv": {
      if (!isOwner) return reply(mess.owner)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {        
      if (!isOwner) return reply(mess.owner)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "crateadmin": {
      if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = generateRandomPassword();
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": username + "@nakanonino.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await rioo.sendMessage(m.chat, listMessage)

    await rioo.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}
`,

    })

} 
        break
case "listadmin": {
      if (!isOwner) return reply(mess.owner)
let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + global.apiuser
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await rioo.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`done listadmin`);
  }
}
break;
case "listusr": {
      if (!isOwner) return reply(mess.owner)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + global.apiuser
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await rioo.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`done username`);
  }
}
break;
case 'reinstall': {
      if (!isOwner) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "listsrv": {
      if (!isOwner) return reply(mess.owner);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + global.apiuser
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + global.apiuser
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await rioo.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`done listsrv`);
  }
}
break;    
case "1gb": {
if (cekSaldo(sender,db_saldo) < 1500) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 1,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 1gb"
let egg = global.eggsnya
let loc = global.location
let memo = "1200"
let cpu = "30"
let disk = "1200"
let email = username + "1gb@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(4000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 1,500`)
minSaldo(sender, 1500, db_saldo)
break
case "2gb": {
if (cekSaldo(sender,db_saldo) < 2500) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 2,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 2gb"
let egg = global.eggsnya
let loc = global.location
let memo = "2200"
let cpu = "40"
let disk = "2200"
let email = username + "2gb@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 2,500`)
minSaldo(sender, 2500, db_saldo)
break
case "3gb": {
if (cekSaldo(sender,db_saldo) < 3500) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 3,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 3gb"
let egg = global.eggsnya
let loc = global.location
let memo = "3200"
let cpu = "70"
let disk = "3200"
let email = username + "3gb@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 3,500`)
minSaldo(sender, 3500, db_saldo)
break
case "4gb": {
if (cekSaldo(sender,db_saldo) < 4000) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 4,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 4gb"
let egg = global.eggsnya
let loc = global.location
let memo = "4200"
let cpu = "90"
let disk = "4200"
let email = username + "@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 4,000`)
minSaldo(sender, 4000, db_saldo)
break
case "5gb": {
if (cekSaldo(sender,db_saldo) < 5000) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 5,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 5gb"
let egg = global.eggsnya
let loc = global.location
let memo = "5200"
let cpu = "110"
let disk = "5200"
let email = username + "@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 5,000`)
minSaldo(sender, 5000, db_saldo)
break
case "6gb": {
if (cekSaldo(sender,db_saldo) < 6000) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 6,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 6gb"
let egg = global.eggsnya
let loc = global.location
let memo = "6200"
let cpu = "140"
let disk = "6200"
let email = username + "@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 6,000`)
minSaldo(sender, 6000, db_saldo)
break
case "7gb": {
if (cekSaldo(sender,db_saldo) < 7000) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 7,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 7gb"
let egg = global.eggsnya
let loc = global.location
let memo = "7200"
let cpu = "160"
let disk = "7200"
let email = username + "@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 7,000`)
minSaldo(sender, 7000, db_saldo)
break
case "8gb": {
if (cekSaldo(sender,db_saldo) < 8000) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 8,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 8gb"
let egg = global.eggsnya
let loc = global.location
let memo = "8200"
let cpu = "180"
let disk = "8200"
let email = username + "@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 8,000`)
minSaldo(sender, 8000, db_saldo)
break
case "9gb": {
if (cekSaldo(sender,db_saldo) < 9000) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 9,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 9gb"
let egg = global.eggsnya
let loc = global.location
let memo = "9200"
let cpu = "190"
let disk = "9200"
let email = username + "@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 15,000`)
minSaldo(sender, 9000, db_saldo)
break
case '0gb': case "unlimited": {
if (cekSaldo(sender,db_saldo) < 15000) return reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 15,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 0gb"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
if (!u) return
let d = (await rioo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

rioo.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*YOUR PANEL*

 • email: ${email}
 • username: ${username}
 • password: ${password.toString()}
 • login: ${global.domain}`,
}).catch((err) => reply(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await sleep(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 15,000`)
minSaldo(sender, 15000, db_saldo)
break
case 'saldo':{
reply(`*INFO SALDO ANDA*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${hariini}`)
}
break
//=================================================//
case 'acc': case 'addsaldo':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`「 *SALDO USER* 」
⭔Nama: @${m.sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${hariini}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
                }
        case 'kirim': {       
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
 let messageText = `DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH  ${q.split(",")[1]} TELAH DITAMBAHKAN KE SALDO ANDA CEK SALDO KETIK .SALDO TERIMAKASIH`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  rioo.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [m.sender]
  }, {
    quoted: m
  }).then(() => {
    reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    reply('Gagal mengirim pesan!');
  });
}
break;
//=================================================//
case 'minsaldo':
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`*USER SALDO*
 • ID : ${q.split(",")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${hariini}
 • Saldo : Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break  
case 'tiktok':
case 'tt':
case 'ttdl': {
const api = require('btch-downloader')
if (!isPremium && global.db.data.users[m.sender].limit < 5) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 5
if (!args[0]) return m.reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return m.reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

ʀɪᴏᴏ - ᴍᴅ ᴍᴀᴅᴇ ʙʏ ʀɪᴏᴏ xᴅᴢᴢ`;
await rioo.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await rioo.sendFile(m.chat, maximus.audio[0], 'kasar.mp3', null, m)
      } catch (e) {
		console.log(e)
		reply(eror)
	}
};
break;
case 'ttstalk':{
if (!q) return m.reply(`Example: ${prefix+command} username`)
rioo.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
if (!isPremium && global.db.data.users[m.sender].limit < 5) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 5
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
await rioo.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
await rioo.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
m.reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}
break
case 'jpm':{
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await m.reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await rioo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await rioo.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await rioo.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await rioo.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await rioo.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
m.reply("*SUCCESFUL ✅*")
}
break
case 'tagall': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return m.reply(mess.admin)
me = m.sender
let teks = `*TAGALL: ${groupName}* 
*Tagger :*  @${me.split('@')[0]}
*Message :* ${q ? q : 'Tidak ada'}\n\n*TAG NYA*\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
rioo.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fkontak2})
}
break
case 'h': case 'hidetag': {
if (!m.isGroup) return m.reply("Khusus Grup")
if (!(isAdmins || isOwner)) return m.reply(mess.admin)
let tek = m.quoted ? quoted.text : (text ? text : "")
rioo.sendMessage(m.chat, { text: `${tek}`, mentions: participants.map(a => a.id)}, {}, {quoted: fkontak2 })
}
break
case 'join':{
	if(!isOwner) return reply(mess.owner)
	let link = q.startsWith("http")
	if(!link) return m.reply(`Kirim perintah ${command} _linkgrup_`)
	var url = args[1]
	let ano = q.split('https://chat.whatsapp.com/')[1]
	await rioo.groupAcceptInvite(ano)
	m.reply("Sukses join group")
	}
	break
	case 'out':{
	if (!isOwner) return m.reply('Gak mau')
await Al.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'sc':
case 'script': {
    function generateReferenceId(length = 11) {
        return crypto.randomBytes(length).toString('hex').toUpperCase().slice(0, length);
    }

    let caption = `Tertarik? hubungi kontak di bawah\n\n- WA: https://wa.link/7l5idd\n`;
    const referenceId = generateReferenceId();

    let ngentod = await generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: caption,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: namabot,
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(
                                { image: { url: `https://telegra.ph/file/91b6c40a2aa00b1239399.jpg` } },
                                { upload: rioo.waUploadToServer },
                            )),
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "review_and_pay",
                                "buttonParamsJson": `{
                                    "currency": "IDR",
                                    "payment_configuration": "",
                                    "payment_type": "",
                                    "total_amount": {
                                        "value": 3000661,
                                        "offset": 100
                                    },
                                    "reference_id": "${referenceId}",
                                    "type": "physical-goods",
                                    "order": {
                                        "status": "payment_requested",
                                        "description": "",
                                        "subtotal": {
                                            "value": 5000000,
                                            "offset": 100
                                        },
                                        "tax": {
                                            "value": 661,
                                            "offset": 100
                                        },
                                        "discount": {
                                            "value": 2000000,
                                            "offset": 100
                                        },
                                        "order_type": "ORDER",
                                        "items": [
                                            {
                                                "retailer_id": "7537631592926009",
                                                "product_id": "7538731592926009",
                                                "name": "${namaowner}",
                                                "amount": {
                                                    "value": 450510,
                                                    "offset": 1000
                                                },
                                                "quantity": ${totalFitur()}
                                            }
                                        ]
                                    },
                                    "additional_note": "━──────────────────────━\n\n- Button\n- No Enc\n- Free Apikey\n- Free Update SC Forever\n\n━──────────────────────━",
                                    "native_payment_methods": []
                                }`
                            }],
                        }),
                        contextInfo: {
                            stanzaId: m.key.id,
                            remoteJid: m.isGroup ? m.sender : m.key.remoteJid,
                            participant: m.key.participant || m.sender,
                            fromMe: m.key.fromMe,
                            quotedMessage: m.message,
                        },
                    }),
                },
            },
        },
        {},
    );

   if (!m.isGroup) return rioo.relayMessage(ngentod.key.remoteJid, ngentod.message, {
        messageId: ngentod.key.id,
    });
    
   if (m.isGroup) return rioo.relayMessage(m.chat, {
        "requestPaymentMessage": {
            amount: {
                value: 30006610,
                offset: 100,
                currencyCode: 'IDR'
            },
            amount1000: 30006610,
            background: null,
            currencyCodeIso4217: 'IDR',
            expiryTimestamp: 1000000,
            noteMessage: {
                extendedTextMessage: {
                    text: '━────────────────────━\n\n- Button\n- No Enc\n- Free Apikey\n- Free Update SC Forever\n\n━────────────────────━',
                }
            },
            requestFrom: m.sender
        }
    }, {});
}
break
case 'closetime': {
if (!isAdmins && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return reply(mess.botNotAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Telah Close Oleh Admin\nNow Only Admins Can Send Messages`
rioo.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
case 'opentime': {
if (!isAdmins && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return reply(mess.botNotAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Telah Open Oleh Admin\n Now Members Can Send Messages`
rioo.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break
case'afk':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (isAfkOn) return reply('Afk sudah diaktifkan sebelumnya')
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
rioo.sendTextWithMentions(m.chat, `*MODE AFK*\n@${m.sender.split('@')[0]} Sedang dalam mode afk\n*Alasan :* ${reason}\n\n*GRUB :* ${groupName}`, m)
}
break
case 'restart':
if (!isOwner) return reply(mess.owner)
reply(`Restart server...`)
await sleep(3000)
process.exit()
break            
case "ytreels": case "ytmp4":{
if (!isPremium && global.db.data.users[m.sender].limit < 5) return reply(mess.endLimit) 
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.wait)
downloadMp4(text)
}
db.data.users[m.sender].limit -= 5
break
case 'ytmp3': case 'youtubemp3': {
if (!isPremium && global.db.data.users[m.sender].limit < 5) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 5
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
reply(mess.wait)
downloadMp3(text)
}
break
case 'totalfeature':{
let totalf = `
*TOTAL FEATURE*

> • Total ${totalFitur()} Fitur\n> • Tipe : Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
reply(totalf)
}
break
case 'kick':{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di kick')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rioo.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
}
break
case 'play': case 'song': {
                if (!text) return reply(`Example : ${prefix + command} Hey Daddy Home`)
                reply(mess.wait)
                if (global.db.data.users[m.sender].limit < 3) return reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                let yts = require ('yt-search')
                let search = await yts(`${text}`)
                let linknya = search.all[0].url
                let bodytextnya = `ᴛɪᴛʟᴇ : *${search.all[0].title}*\nᴠɪᴇᴡs : *${search.all[0].views}*\nᴅᴜʀᴀᴛɪᴏɴ : *${search.all[0].timestamp}*\nᴜᴘʟᴏᴀᴅᴇᴅ : *${search.all[0].ago}*\nᴜʀʟ : *${linknya}*`
               // rioo.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                
            let bokepp = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: rioo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎦","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'Author : Mhd Yasin',
                    newsletterJid: '120363187276222423@newsletter',
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await rioo.relayMessage(bokepp.key.remoteJid, bokepp.message, {
  messageId: bokepp.key.id
})
            }
            break
case'antilink':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply(mess.BotAdmin)
if (args[0] === "on") {
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
if (!isAntiLink) return reply(`Udah nonaktif`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antilink2':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply(mess.BotAdmin)
if (args[0] === "on") {
if (isAntiLink2) return reply(`Udah aktif`)
antilink2.push(m.chat)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
reply('Successfully Activate antilink2 In This Group')
} else if (args[0] === "off") {
if (!isAntiLink2) return reply(`Udah nonaktif`)
let anu = antilink2.indexOf(m.chat)
antilink2.splice(anu, 1)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
reply('Successfully Disabling antilink2 In This Group')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'buysewa':{
        reply(`Silahkan Hubungi Nomor Di Bawah
https://wa.me/${owner}?text=Bang+Mau+Sewa+Bot+Berapaan?`)
    }
        break
case'addsewa':
if (!isOwner) return reply(mess.owner)
if (text < 2) return reply(`Gunakan dengan cara ${prefix+command} *linkgc waktu*\n\nContoh : ${prefix+command} https://chat.whatsapp.com/PnwpPqn0b 30d`)
if (!isUrl(args[0])) return reply(mess.error.Iv)
var url = args[0]
url = url.split('https://chat.whatsapp.com/')[1]
if (!text) return reply(`Waktunya?`)
var data = await rioo.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(data, sewa)) return reply(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(data, args[1], sewa)
reply(`Success Add Sewa Group Berwaktu!`)
break
case'delsewa':
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
if (!isSewa) return reply(`Bot tidak disewa di Grup ini`)
sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
reply(`Sukses`)
break
case 'listsewa':
let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
if (x.expired === 'PERMANENT') {
let ceksewa = 'PERMANENT'
list_sewa_list += `*Expire :* PERMANENT\n\n`
} else {
let ceksewa = ms(x.expired - Date.now())
list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
}
}
rioo.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
break
//━━━━━━━━━━━━━━━[ BATAS AKHIR ]━━━━━━━━━━━━━━━━━//
default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}
if (prefix && command) {
const didyoumean = require('didyoumean');
const similarity = require('similarity');
let caseNames = getCaseNames();


function getCaseNames() {
    
const fs = require('fs');
    try {
        const data = fs.readFileSync('./batten.js', 'utf8');
        const casePattern = /case\s+'([^']+)'/g;
        const matches = data.match(casePattern);

        if (matches) {
            const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
            return caseNames;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return [];
    }
}

let noPrefix = m.text.replace(prefix, '').trim();
    
    let mean = didyoumean(noPrefix, caseNames);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = Styles(`Maaf, command yang Anda masukkan salah. Berikut adalah command yang mungkin sesuai:\n\n➠  *${prefix + mean}*\n➠  *Kemiripan:* ${similarityPercentage}%`, 1);

reply(response)
 }
 }
 
 let user = global.db.data.users[m.sender];
  if (user && user.premium && user.premiumDate && (new Date() >= user.premiumDate)) {
    user.premium = false;
    user.premiumDate = 0;
    user.limit = 30;
    await reply('♻️ Waktu Premium Kamu Sudah Expired/Habis');
  };            
 
if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(err)
if (stdout) return reply(stdout)
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
rioo.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
console.log(util.format(err))
let e = String(err)
rioo.sendMessage(`${global.owner}@s.whatsapp.net`, {text:e})
}
}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})