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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_51_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXUjlwWkU1NHpESjA3RjBIclRqV0UySFExTXBCMnJKalQxZDlOZkp0YWpVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4NTY3NzEwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUE5QkExRDhDM0VGM0MzREZENzY5NTIyNjZBOEFFQjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTY5NDczXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZaVHg5R3ZuUlhXdl9ldnk1REZRbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDMzNmIwZjktN2FkOC00YTZmLWE4OGYtODNkYzcwNTU2ZWY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMTU0LFxuICAgICAgOTAsXG4gICAgICAxNzMsXG4gICAgICAxMzIsXG4gICAgICA4NyxcbiAgICAgIDE0MSxcbiAgICAgIDE0NyxcbiAgICAgIDI0MixcbiAgICAgIDIyOSxcbiAgICAgIDUzLFxuICAgICAgOTMsXG4gICAgICA4MyxcbiAgICAgIDE5NixcbiAgICAgIDIzMSxcbiAgICAgIDExNSxcbiAgICAgIDE5MixcbiAgICAgIDE4NCxcbiAgICAgIDE2MCxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICA4LFxuICAgICAgMjQ2LFxuICAgICAgMjEwLFxuICAgICAgMTE3LFxuICAgICAgMTUxLFxuICAgICAgMTE0LFxuICAgICAgNjgsXG4gICAgICAyNDcsXG4gICAgICAxODUsXG4gICAgICA0NCxcbiAgICAgIDIwMCxcbiAgICAgIDE4OSxcbiAgICAgIDQsXG4gICAgICAzNixcbiAgICAgIDE2NSxcbiAgICAgIDEyNSxcbiAgICAgIDIxLFxuICAgICAgMTE2LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUtOOVpZREVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc4NTY3NzEwMDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE0OTg1MTE2MTE5MjE5OjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDZWl0MEZFUG5ubnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTWs0U0tTYVJSa2ZHNW12VVlMVDZLdVJrK09VdWdXWHVoZnJqMFcxNzFnbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2ZTl3YWVWby83SVVuTTdwVDJlR3FzQVVFbHczV25rZXQ0NzlRMzdCbWhsTnlKaGt6YUR5cEo0Y1pIbGx3bGZjZmlOczB5T0E0a1MxaEtNQ3JSV1JBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzUlhXMzhacFNDSkpEMDR1NjAvSUY4a2VKR1Y4ZWllZzFzbzdmYUQvSmEyNFNRNHJ1QTRDYm41Vzg4TUgyOEs3SlNyUE1OLzJVV21hMW0wb1V5Q0JqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3ODU2NzcxMDA6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTY5NDY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWl1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNaXUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBbGVKOElhNnZNZUo1VG9yVFpPWHNyQnUrSHVIelQxZE56djA0MmZ6ZEtVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzczODAxNDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDA4NzI1NjQyNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "bhadboi ",
  ownername:process.env.OWNER_NAME|| "bhadboi",


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
