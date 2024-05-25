const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_48_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ4LFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDkxLFxuICAgICAgICA3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTM2LFxuICAgICAgICA4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN1VPdkViRmRNODRnNEhOcDFHT3JNb0VTZUdQSWtrd3NCQnYvMlBpUWNXYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY1MzY4MzU3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkIwM0U3OEE3NUMwOEY0MDI4MUU1NzdBNDRFOEE4QUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTMzMzE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc2NTM2ODM1NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU1NTQ5REMxM0QwMDgzQzA1MjM1ODA0NThBOEREM0IxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjUzMzMxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHMlU1UEJBY1RfQ2JCYzlVNm14SkV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0MDZmMjExLTVhNTItNDUxZC1hMTJhLTFlY2I3OGJmNzhjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAxMTIsXG4gICAgICA3MixcbiAgICAgIDE5MyxcbiAgICAgIDk4LFxuICAgICAgODEsXG4gICAgICAxMTAsXG4gICAgICAxNDEsXG4gICAgICAxLFxuICAgICAgMTk5LFxuICAgICAgMTgzLFxuICAgICAgMTM4LFxuICAgICAgODQsXG4gICAgICA4MCxcbiAgICAgIDEzNyxcbiAgICAgIDE1NyxcbiAgICAgIDQyLFxuICAgICAgMTE5LFxuICAgICAgMzUsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAzLFxuICAgICAgMjQ1LFxuICAgICAgMjQ3LFxuICAgICAgMTUxLFxuICAgICAgMzEsXG4gICAgICAxNjEsXG4gICAgICAyOSxcbiAgICAgIDEzNCxcbiAgICAgIDE3OCxcbiAgICAgIDE5LFxuICAgICAgMTQxLFxuICAgICAgMzQsXG4gICAgICA5LFxuICAgICAgMTQxLFxuICAgICAgMTU2LFxuICAgICAgMTM5LFxuICAgICAgODQsXG4gICAgICA3OCxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNSjNEMVBLTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2NTM2ODM1NzA6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MjM3NzE5NjMwMjQzMzoyMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDaGFvc/CfpKFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNeUVrSWNCRUx2d3dMSUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNoOCsva0FyOFU0N0dCMG12Q3kzZUp1TExwMDg1Mk0zRzdxcWdSbitlMDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRE5vZVpZM2p4RVpHOCsvNkQ1NmtqQ2dkZHAreEZ6YW1YdUczNjZmYkZSSGVJckRQUmY5bWkvKzhDZmNRNkk0TlZzdzcwd1l2dzlrL0NGLzBDa2llQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ1pFZVBuaStBZTFJWXl1SVliN0xucStIVHFvclVGMnBRRzBJUTRWcVFsbzBSMVVZZzIrTkdIUHBweGs1eU10L2JZTmZzYmJNV0MwUmZSUnh6RVhjQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2NTM2ODM1NzA6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY1MzMzMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEVlJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURWUi5qc29uIjogIntcImtleURhdGFcIjpcIjUyVjhaV3YxNTVKUzZCV2JwU1NsaG92VHRNNFI3R1h6NnJYeGl1ZHZJZ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgzMzc4MjUxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIxNzE2MjM1MzQyNjExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
