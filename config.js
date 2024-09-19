//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ramadhanyusuf346:uKT03cWXNhcy5pny@cluster0.a8hwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "256788028745";
global.sudo = process.env.SUDO || "2348039834364";
global.owner = process.env.OWNER_NUMBER || "2348039834364";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1DZFQ4V3U5NENMRUZ0SjF0TFEwbzE3bE5lUVdRNUlNc1VUZlFQdjhsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXJwMW5WTzRqQWZQRGRjSTRXNUVIWlRjemo1QjBScjQ5ZzIrd200YUUxTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRExnTjhkVU1CYVRTOWUzaHRMZmxXVmIzTjBiNkFlU2MxcDdTdnRudkVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEMGFuWUM1ZWNKc2RaUEtMaWVhSnlWaU44enAyME0reGJrSktRRmpheURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFcEFOQWVYNGIzdzFDdGhRZTVySnBEQ2QxWm00RDJKOERaZURhaTk2bW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8xZDE5Zi84ZHdhaVJuNjBoNms5QTJDN3JISnh4UUtqOWgwL2JkcXoyR1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0kzVUk4S1dzakUxdkZkUnAvUU1xVEM3dzl2aXVqcEd3cHAyS1RCNVRWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNm1qNmh3YThLbXhTSlJsSHpJejcvWHIwWVlaL1lGWWJsd2FnME1QUDFucz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlDVGFCVXQyQ05LOVZKMUE2aEtnSStDd3VwT1ZCb0Vib3RGaUM3ZXNQWTF5UUNBcWZUejBpTFNabk1mdVptRk00eEdKcm5td1NhcmlYWnU3ODEyYkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJsNVFCTXpYTjAvK2VQT09BNTJCbklQQ0dJYzNZb08wQ290VVlDbDVRWCtNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6blVKR2I1NVRlRzdwdDZnUzRKeFd3IiwicGhvbmVJZCI6ImQ3NDdmZDljLTA4MzQtNDI5Ni05Yzc5LWM2OGNjMGQwMzUyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxbmQ0MUE3NW84QlFHTWg5emIzMlBHclEyUFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2NrWi9Vc2UzQjJqaU5JTklqRGZZdVJ2T3gwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg5WEo1MVlZIiwibWUiOnsiaWQiOiIyNTY3ODgwMjg3NDU6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFBwdWZJQkVMN2ZyTGNHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTU1WTmk4UG9rUDdsMFQzMnlKdk5EaFZnU3FCTXh5ZWlLV1gxaGkyajZWYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT1IybDEwdk50OTd2cTNJSWh5V3lXeWV2cy9IanU1a1ZCemVEektVOHEvOWtNbmhWQ3dHMW5ZOU5QTW9hR3JZeFFYT2NycGZXZXJLOGtHSkZZNVFURFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkwrdUtiMXdWYUplVjF1YmZwVEZUb2pnYi9tRWZaZG5WV0hxVlFqUnFhSm5OUmluQ2orUUJjd0VnY1BjV1FJRWMyb3B3ZGw4cGtWVWFnS3p4OWtLVkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2Nzg4MDI4NzQ1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVERGVFl2RDZKRCs1ZEU5OXNpYnpRNFZZRXFnVE1jbm9pbGw5WVl0bytsWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjY4OTIyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJL0cifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING RAMAH™`",
  author: process.env.PACK_AUTHER || "KING RAMAH",
  packname: process.env.PACK_NAME || "R A M A H",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "KING RAMAH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
