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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "Bhadboi";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_20_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUyLFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkM0TGkxRngvUjY5bXVhaVZJK1NxTzVCL2k0SVByaWR2cHJiMFZ4d0hpc0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlEtbWxveGZJUWRtTUtTbGtjZ1pCNVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGYzNjBlOGUtNGEyYi00ZjBkLTlmNjYtZTYwNzBkMGEwMmFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDE1NSxcbiAgICAgIDExNixcbiAgICAgIDIxMyxcbiAgICAgIDE5NyxcbiAgICAgIDI0NyxcbiAgICAgIDE3NCxcbiAgICAgIDkwLFxuICAgICAgNTIsXG4gICAgICAzNSxcbiAgICAgIDQsXG4gICAgICA5MCxcbiAgICAgIDE4MCxcbiAgICAgIDIxLFxuICAgICAgNTMsXG4gICAgICAyMjYsXG4gICAgICAyNDYsXG4gICAgICAyMDMsXG4gICAgICAxNDIsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTgzLFxuICAgICAgMTk1LFxuICAgICAgMjI1LFxuICAgICAgMjE4LFxuICAgICAgODAsXG4gICAgICAyMjQsXG4gICAgICAxMTYsXG4gICAgICA4OCxcbiAgICAgIDQwLFxuICAgICAgMTg3LFxuICAgICAgOTgsXG4gICAgICAzMixcbiAgICAgIDY5LFxuICAgICAgMjQzLFxuICAgICAgMTU1LFxuICAgICAgNjcsXG4gICAgICA0NixcbiAgICAgIDE4MSxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTVFA2TFk4SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQyMTgzMTAwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDnywgc3DDr8Onw6pcIixcbiAgICBcImxpZFwiOiBcIjI3NTgyMzIzNTk1Njc1Mjo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wrdDdZZ0VFSmJLbjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaEFJOHBBNklXZVNvVjN6eXRGVVMyRnRtVGxoTkk3OGJYK0pBOFd5K25HOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUNGNxU2NuaFpzZTZFbUR0L0IrVjhYeW9ockRDSDJrSjZIQ2NIa3pnbTY5RktzUlVRTnVUbmJjNHM4NlFaMW9oaytWbnB2QWMrby9uUEZqWlVjeG9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2UlFiUXlVV1NYQkM4U0hhRXdocHZmR1RIY2hzYllZWEJzajlHZmR2V0RiZ05BQzBKckZmWjRiUFhnV1U4UWxBeHFHV251TlZRVWNlZktFay9oMFhndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDIxODMxMDA6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTgyMDQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHZIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdkguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1K21zMlN1OUxPOWpINk8xbC9KZThCSTBNRWVOc2lUT1ZJSnBlakhnQ1FnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTIzMTA3MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU3MTc0OTU1NzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
