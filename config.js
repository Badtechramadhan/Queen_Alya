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
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxLeGhVSjZuaUt2a0dZWHZnaWpuelovenVOZ3pydUhXWUhobHdDNmYxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzh3aXBDTS9qZmRoZnN1T09hYmo2Ky9TM1ZTNWUvVDZGalRSMzdpR0VUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRGdLT2laK2d0b2pJMnlVT1RHNXBQRmwvSk93QlJHMnlEUUVyUnlkekhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Lzl3MjE4akdGWEJjNytlenRNSjZZWmVxZW5KWUpQc3dMRlErSE9jYUQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNLeStybzNxTzZ2MVRHb0c3RFhUaHNmU2hyVFNaVkZrbzZ1MUJrbjhyMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw3VURJR3d0ZGk0VUFzYkhIZGRZaERqZUtFR1lBNWMxbldaYmwxZjhHWHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhEMlVNSWFMaFN0SmI5YTN6UmYxeGQ2U2dzWEhHYnRTVklscDBhZjczdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRi9HMzZtM3FhNGtsdkZaNXlsUUpiTWp0bDgvZXZzTlUwaEhPZDVWcm16Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1wakpUZ256dGV1L1NDWnE5aUo4RCtsVE1NdUwwMUpRYzdnRERUbDUrZU5VRzlJcWxmZWZrdmpZM0RpRGNFQ2JGZEVIZnZaeEdxZW51OFRZUVhBemd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IlExMEcxT21jRU5xaTUzK2ZBVUZHd1JyMURLdDBBWUtLN0VMZmY0ZUNYakU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODAzOTgzNDM2NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMjEyNDM1NEFFRjNDQzk2NEI1MEJDMjk3REQ4MTM3NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NjkwNjM1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDM5ODM0MzY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ4NDg1MjA1NTU2RjY3MDRFNjI1REM4RDIyOUZBRkM1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY2OTA2MzZ9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjI5cFVVWkI1UWdHeEdhaUhmeFRLYlEiLCJwaG9uZUlkIjoiZTFhMTBiMDAtZDkzZi00NjAzLWI4MjEtZTU2MjUyM2UyOWQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVYYUYzMGhtRG80QVltcU1oeDRyMXAzTUozUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1VGNhVE9SS0tYUkFvTEtqTjJPYzUySTdJeEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRENLTkw0Q0giLCJtZSI6eyJpZCI6IjIzNDgwMzk4MzQzNjQ6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZWE8J2UvPCdlL7wnZWM8J2VhPCdlYAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09yanY3Y0hFTHZxckxjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNJdE1WMXJrelBWL2w1UDZ0NU1jTi9PbnhETXhTYkZUdjJZdHhMTGE0Z3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVGZTBmT1pkWndwOGVjRFMxbXppZVlLdWVndW5waW1Gck8rTUxYazRYb1RxMFpqSHVXdWdEQ1FIV21TK0FMZ1V4RUc1RnNyVWRxeHFhc3RWWWNPbURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6citCcVpqdDMvRGpaT0JCMUhCOGwzNXNsUWsvalZqSWZ0RVcrM1dsd0I4YzhPMHJBNFVpaElRMzV5MTdxU3o3ampnZGdHd0YreThBQk51Y3ZwVjNndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMzk4MzQzNjQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYQ0xURmRhNU16MWY1ZVQrcmVUSERmenA4UXpNVW14VTc5bUxjU3kydUlNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NjkwNjMyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUk5dCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
