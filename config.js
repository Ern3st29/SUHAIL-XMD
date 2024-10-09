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


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


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
