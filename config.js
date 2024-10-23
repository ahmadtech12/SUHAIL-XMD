const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923175745568";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_56_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYyLFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjI1NDJnVExoL05mbEdsTU40cFFWWEZ0N2RkVXdzcytjNFdhd25iVnZGaHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkF1NjlFX1hjUkhHbmIwbFZyaXJGbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDBkMjZhOGYtMmFiNy00ZWM1LTg3OTAtY2ZmNDcxOWU0ZDM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTkxLFxuICAgICAgMTQ0LFxuICAgICAgNSxcbiAgICAgIDEwMyxcbiAgICAgIDEzNCxcbiAgICAgIDExOSxcbiAgICAgIDEzMCxcbiAgICAgIDE3MyxcbiAgICAgIDI0NyxcbiAgICAgIDI1MSxcbiAgICAgIDE5MixcbiAgICAgIDQ3LFxuICAgICAgMjA0LFxuICAgICAgODksXG4gICAgICAyMDIsXG4gICAgICAxMSxcbiAgICAgIDg4LFxuICAgICAgNDYsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMjQ0LFxuICAgICAgNjksXG4gICAgICAxMDAsXG4gICAgICA3LFxuICAgICAgMjA4LFxuICAgICAgMTU2LFxuICAgICAgMTA5LFxuICAgICAgOTYsXG4gICAgICAyMzcsXG4gICAgICA0MyxcbiAgICAgIDEzOCxcbiAgICAgIDI0LFxuICAgICAgMjIxLFxuICAgICAgODYsXG4gICAgICAxNzMsXG4gICAgICAxNjYsXG4gICAgICA2NCxcbiAgICAgIDE0NixcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGODVLTEtENFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTc1NzQ1NTY4OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTYzNzk4MTk2MjYzOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xiVjk5b0ZFUFhoNWJnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaERGMm9MVEx0RVdmZW5yaEFFeVBqdEU3UHBuSGQvUkVMYkFQQTVxVTJFWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvZlEwU0EwNDRJTTBiTlBEWThMQkdzMmlHWnVBVllIVUNNdWp3ZXdYNjhibU9Mams0ZkRxVm9wVDhFYUF5WUxHckpQWk56ZnMvdzdnVStIRW9DSUlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4UGxpWC9QTkpDOE84TnlYUWxYT1pCSmV3dk5lWWQ5YTMwdEtPeDlrOWJ3OWlmMXIvTFVnMDlNUmIzK3psdFBDVHVNUGJ4UDlCamk1USt5TjJBY01pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNzU3NDU1Njg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTcyMDU3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVuL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW4vLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
