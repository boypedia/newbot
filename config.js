const fs = require('fs')
const chalk = require('chalk')
const axios = require('axios');
const moment = require('moment-timezone')
const version = require("@whiskeysockets/baileys/package.json").version 
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const shun = packageJson.version
const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
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

//=== Edit Disini 👇
const payment = {
    dana: {
      nomer: "081264116045",
      atas_nama: "L*****"
    }
}

global.namabot = "BOYPEDIA"
global.namaowner = "Muhammad Yasin"
global.owner = ['6281264116045','6282267645720'] // ubah aja pake nomor lu
global.premium = ['6281264116045','6283857711023','6282267645720']
global.sgc = 'https://chat.whatsapp.com/'
global.sessionName = 'sessions'
global.mail = 'awaking756@gmail.com'
global.sourceUrl = "https://instagram.com/sen27.nf"
global.thumb = fs.readFileSync('./media/img/riooxdzz.png')
global.packname = "Sticker By"
global.author = "SenOfc"
global.wlcm = []
global.usePairingCode = true // True/Buat Menampilkan Pairing Code
global.autoRestart = true
global.ORDERKUOTA = 'https://okeconnect.com'
global.ORDERKUOTA_WEB = 'https://h2h.okeconnect.com' 
global.ORDERKUOTA_PIN = 'masukan pin orderkuota lu'
global.ORDERKUOTA_ID = '.' //masukan id contoh:OK1272169
global.ORDERKUOTA_PASSWORD = '.'
global.domainotp = "https://tokoclaude.com/api"
global.apikeyotp = "b2d498f2157a70ae322b9255e3d8691e"
global.ytname = "RiooOfficial" // Bisa Diubah
global.socialm = "Instagram: sen27.nf" // Bisa Diubah
global.location = "Indonesia, Dimana Aja Yang Penting Hidup" // Bisa Diubah

// PANEL SETTING
global.domain = 'https://cloud.banditsad.online' // isi domain panel anda
global.apicred = 'ptla_nhok8951at3Wl9l4pQEYaJjmzOwFvBaLCNemYl4p3f8'
global.apiuser = 'ptlc_Nzhk1BcKDeBi1G3nUPdLseoeo8ZLw25QFAQmVeiFVEj'
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.mess = {
 done: 'Sukses!',
 wait: 'Sedang diproses',
 admin: 'Fitur Khusus Admin grup!',
 botNotAdmin: 'Saya bukan Admin grup',
 owner: 'Fitur Khusus Owner!',
 group: 'Fitur Khusus Group!',
 premium: 'Fitur ini hanya dapat digunakan oleh premium user, ketik *.price* untuk melihat list harga.',
 endLimit: 'Limit Harian Kamu Telah Habis Silakan Lapor Owner..',
 notregist: 'Untuk Melanjutkan Bermain Bot, Tolong Register Terlebih Dulu Penggunan\n◦ *Manual:* .daftar namakamu.umurkamu',
 daftardone: 'Anda Sudah Terdaftar Sudah Terdalam Database 📢',
 error: '*Maaf fitur sedang Error*',
}


/*============== RPG ==============*/
global.rpg = {
  emoticon(string) {
      string = string.toLowerCase()
      let emot = {
          Fox: "🦊",
          agility: "🤸‍♂️",
          anggur: "🍇",
          apel: "🍎",
          aqua: "🥤",
          arc: "🏹",
          armor: "🥼",
          bank: "🏦",
          batu: "🧱",
          berlian: "💎",
          bibitanggur: "🍇",
          bibitapel: "🍎",
          bibitjeruk: "🍊",
          bibitmangga: "🥭",
          bibitpisang: "🍌",
          botol: "🍾",
          bow: "🏹",
          bull: "🐃",
          cat: "🐈",
          centaur: "🎠",
          chicken: "🐓",
          coal: "⚱️",
          common: "📦",
          cow: "🐄",
          crystal: "🔮",
          darkcrystal: "♠️",
          diamond: "💎",
          dog: "🐕",
          dragon: "🐉",
          eleksirb: "🧪",
          elephant: "🐘",
          emasbatang: "🪙",
          emasbiasa: "🥇",
          emerald: "💚",
          exp: "✉️",
          atm: "🏧",
          fishingrod: "🎣",
          foodpet: "🍱",
          fox: "🦊",
          gardenboc: "🗳️",
          gardenboxs: "📦",
          gems: "🍀",
          giraffe: "🦒",
          gold: "👑",
          griffin: "🦒",
          health: "❤️",
          healtmonster: "❤‍🔥",
          horse: "🐎",
          intelligence: "🧠",
          iron: "⛓️",
          jeruk: "🍊",
          kaleng: "🥫",
          kardus: "📦",
          kayu: "🪵",
          ketake: "💿",
          keygold: "🔑",
          keyiron: "🗝️",
          knife: "🔪",
          koinexpg: "👛",
          kucing: "🐈",
          kuda: "🐎",
          kyubi: "🦊",
          legendary: "🗃️",
          level: "🧬",
          limit: "🌌",
          lion: "🦁",
          magicwand: "⚕️",
          makanancentaur: "🥗",
          makanangriffin: "🥙",
          makanankyubi: "🍗",
          makanannaga: "🍖",
          makananpet: "🥩",
          makananphonix: "🧀",
          mana: "🪄",
          mangga: "🥭",
          money: "💵",
          mythic: "🗳️",
          mythic: "🪄",
          naga: "🐉",
          pancingan: "🎣",
          pet: "🎁",
          petFood: "🍖",
          phonix: "🦅",
          pickaxe: "⛏️",
          pisang: "🍌",
          pointxp: "📧",
          potion: "🥤",
          rock: "🪨",
          rubah: "🦊",
          sampah: "🗑️",
          serigala: "🐺",
          snake: "🐍",
          stamina: "⚡",
          strength: "🦹‍♀️",
          string: "🕸️",
          superior: "💼",
          sword: "⚔️",
          tiger: "🐅",
          tiketcoin: "🎟️",
          trash: "🗑",
          umpan: "🪱",
          uncommon: "🎁",
          upgrader: "🧰",
          wood: "🪵"
      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
      if (!results.length) return ""
      else return emot[results[0][0]]
  }
}
