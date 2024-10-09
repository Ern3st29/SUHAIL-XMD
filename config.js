const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "IMG-20241009-WA0150.jpg" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="ern3st@gmail.com"
global.location="Nigeria,Lagos"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa,Nigeria";
global.github=process.env.GITHUB|| "https://github.com/Ern3st29/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VakMfZR4yltPyixMaK0D";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VakMfZR4yltPyixMaK0D" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "content://com.android.chrome.FileProvider/images/screenshot/17285094469911222411646.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© TAZER-MD" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349065526692";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://app-va.tiktokv.com/redirect/?redirect_url=snssdk1340%3A%2F%2Faweme%2Fdetail%2F7386711212978867488%3Finsert_feed%3D1%26params_url%3Dhttps%253A%252F%252Fwww.tiktok.com%252Fdiscover%252Fsupacell-taser-fight-krazy%26needlaunchlog%3D1%26ug_medium%3Dfe_component%26page_name%3Dkeyword_supacell-taser-fight-krazy%26enter_from%3Dkeyword_expansion_page%26wid%3D7423892436790052357%26referer%3Dorganic%26vidab%3D72725665%252C70508271%252C72422414%252C72783099%252C72787700%252C72817365%252C72854128%252C72874284%26seo_vidab%3D72703614%252C72833925%26release%3D1.0.0.2887%26gd_label%3Dclick_wap_video%26position%3Dvideo&dl=https%3A%2F%2Fsnssdk1340.onelink.me%2Fk3Nj%3Fdomain_source%3Dtiktok%26af_dp%3Dsnssdk1340%253A%252F%252Faweme%252Fdetail%252F7386711212978867488%253Finsert_feed%253D1%2526params_url%253Dhttps%25253A%25252F%25252Fwww.tiktok.com%25252Fdiscover%25252Fsupacell-taser-fight-krazy%2526needlaunchlog%253D1%2526ug_medium%253Dfe_component%2526page_name%253Dkeyword_supacell-taser-fight-krazy%2526enter_from%253Dkeyword_expansion_page%2526wid%253D7423892436790052357%2526referer%253Dorganic%2526vidab%253D72725665%25252C70508271%25252C72422414%25252C72783099%25252C72787700%25252C72817365%25252C72854128%25252C72874284%2526seo_vidab%253D72703614%25252C72833925%2526release%253D1.0.0.2887%2526gd_label%253Dclick_wap_video%2526position%253Dvideo%26pid%3Dtiktokwebseo%26c%3Dkeyword_supacell-taser-fight-krazy%26af_adset%3Dorganic%26af_siteid%3Dmobile%26af_ad_id%3Dgoogle%26wid%3D7423892436790052357%26canonical%3Dhttps%253A%252F%252Fwww.tiktok.com%252Fdiscover%252Fsupacell-taser-fight-krazy%26af_adset_id%3D%26af_channel%3D%26vidab%3D72725665%252C70508271%252C72422414%252C72783099%252C72787700%252C72817365%252C72854128%252C72874284%26seo_vidab%3D72703614%252C72833925%26release%3D1.0.0.2887%26utm_campaign%3Dtiktokwebseo_kep%26af_ad%3Dvideo&decode_once=1" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_45_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxN0dLRmhYV0JvZmFpSHVDdncwWEprOWxkS0FFRnUxM21VN20vUzFOYXRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYTmRxblJQalNYYXd3WGhlMlVqbndBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhZDZlMzhjLTJhYzMtNGM5Ny1hY2M5LWQ1YTgzNTQ2YjA1MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAyNDAsXG4gICAgICAxLFxuICAgICAgMjEwLFxuICAgICAgMjQ4LFxuICAgICAgNyxcbiAgICAgIDEzLFxuICAgICAgNyxcbiAgICAgIDE3NixcbiAgICAgIDEyOSxcbiAgICAgIDcyLFxuICAgICAgMTI1LFxuICAgICAgMjIwLFxuICAgICAgMTQsXG4gICAgICA3NixcbiAgICAgIDczLFxuICAgICAgMTU1LFxuICAgICAgMTI2LFxuICAgICAgMTI2LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDE3MixcbiAgICAgIDc3LFxuICAgICAgODksXG4gICAgICAzNyxcbiAgICAgIDE3MSxcbiAgICAgIDg3LFxuICAgICAgMjA5LFxuICAgICAgMTA3LFxuICAgICAgMjE1LFxuICAgICAgMjQwLFxuICAgICAgMTY1LFxuICAgICAgMTU3LFxuICAgICAgMjIyLFxuICAgICAgMTkzLFxuICAgICAgMTAsXG4gICAgICAyMTcsXG4gICAgICAxNyxcbiAgICAgIDQ5LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUxEQ0tXWFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjU1MjY2OTI6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NTk0NjIxOTIwODgwNjozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQblUxTHdHRU4zeW03Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1MZmNJVkp2Q3BxRGtmUnNVSUVrRUJLbE40TXBDbzNKT3l4K2tneUljd2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQm1MemtvSEdKMVdFeDVRSlRkMm1FZ1JRRFlDelNIK0kyVjlqTDA5YmUwOFNtSnI3dTcxM2NXL05EUlZQOTJ3MDg4RU1kZ0xFZWQ1Z0lKV1RDWEI2QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTk54bU1RV2pRV3NWdkhtR1p6d29UWTROUGZIUmcycEZ6R252QS9JM3JWa21VSTl6SVNIZEx4dU1LQjFvNWZlTzd4VUpnLzdhNnU4NGhkSDVIU1NwaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NTUyNjY5MjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODUxMDMwNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Ernest",
  packname: process.env.PACK_NAME || "TAZER PACK",
  botname : process.env.BOT_NAME  || "TAZER-MD",
  ownername:process.env.OWNER_NAME|| "Ernest",


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
  //userImages:process.env.USER_IMAGES|| "https://app-va.tiktokv.com/redirect/?redirect_url=snssdk1340%3A%2F%2Faweme%2Fdetail%2F7386711212978867488%3Finsert_feed%3D1%26params_url%3Dhttps%253A%252F%252Fwww.tiktok.com%252Fdiscover%252Fsupacell-taser-fight-krazy%26needlaunchlog%3D1%26ug_medium%3Dfe_component%26page_name%3Dkeyword_supacell-taser-fight-krazy%26enter_from%3Dkeyword_expansion_page%26wid%3D7423892436790052357%26referer%3Dorganic%26vidab%3D72725665%252C70508271%252C72422414%252C72783099%252C72787700%252C72817365%252C72854128%252C72874284%26seo_vidab%3D72703614%252C72833925%26release%3D1.0.0.2887%26gd_label%3Dclick_wap_video%26position%3Dvideo&dl=https%3A%2F%2Fsnssdk1340.onelink.me%2Fk3Nj%3Fdomain_source%3Dtiktok%26af_dp%3Dsnssdk1340%253A%252F%252Faweme%252Fdetail%252F7386711212978867488%253Finsert_feed%253D1%2526params_url%253Dhttps%25253A%25252F%25252Fwww.tiktok.com%25252Fdiscover%25252Fsupacell-taser-fight-krazy%2526needlaunchlog%253D1%2526ug_medium%253Dfe_component%2526page_name%253Dkeyword_supacell-taser-fight-krazy%2526enter_from%253Dkeyword_expansion_page%2526wid%253D7423892436790052357%2526referer%253Dorganic%2526vidab%253D72725665%25252C70508271%25252C72422414%25252C72783099%25252C72787700%25252C72817365%25252C72854128%25252C72874284%2526seo_vidab%253D72703614%25252C72833925%2526release%253D1.0.0.2887%2526gd_label%253Dclick_wap_video%2526position%253Dvideo%26pid%3Dtiktokwebseo%26c%3Dkeyword_supacell-taser-fight-krazy%26af_adset%3Dorganic%26af_siteid%3Dmobile%26af_ad_id%3Dgoogle%26wid%3D7423892436790052357%26canonical%3Dhttps%253A%252F%252Fwww.tiktok.com%252Fdiscover%252Fsupacell-taser-fight-krazy%26af_adset_id%3D%26af_channel%3D%26vidab%3D72725665%252C70508271%252C72422414%252C72783099%252C72787700%252C72817365%252C72854128%252C72874284%26seo_vidab%3D72703614%252C72833925%26release%3D1.0.0.2887%26utm_campaign%3Dtiktokwebseo_kep%26af_ad%3Dvideo&decode_once=1",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
