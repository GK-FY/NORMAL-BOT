const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V2Y6rOBD9F78mPRdCIBCppWHJRgLZE8hoHgwYYsIWbAhwlX8fkdyebs3cpUcaHpBl8KlTVaeOv4IkxQTNUQ2GX0GW4xJS1C5pnSEwBErh+ygHXeBBCsEQBDNohTKt9Lo+GJcT9lTZXUp6pJzsgm7Yq7zOY02RYvHAvIJ7F2SFE2H3J4ATY+X4VQrFi2vvRvP9bEy4G1pdyASeNmVY5QdDPsBImMT2K7i3iBDnOAlG2RnFKIfRHNUriPPP0Z9rVi+Qt+sC3caVsD/p5szE9HaLiti7sJjJRpq2mK7w7mJ8jn511rLyDBv9dspJPjvz1hdpK22PyLLE5tipD3B9FDY6b1rukz7BQYK8mYcSimn96br3FlXVuRwuSt/2Vjc+WpajqaIdYCpKsayi0+W0W+440yn3nyTuVqK5WTBX3ilJmZZJmHrHxJmX1tZxs3lPXfbE/akpvX4gfiS+yt+0cvkvdY9Nd7M3xsq1bKZeNR8njV9URXWIbUlRmuxy1n1puzOXHTb4HP3FtLPP4vBss0gPGDPYxZx5MhRNgxa/FwwZm/HKKvmr0qzf6UNa5D9jaa7dVWOOmsNkUF9m1UXtlMppbU4L0XWSyjY8Kb3WV+QOjLGMgpqy4zFrS7p+rLztoZe5/PyYC8J5eZtUekNW3O3MscHt9ZHRBdUzDwzZexfkKMCE5pDiNHnsCUIXQK/cIjdH9FFeIA2YvtO5ZuKptDjCd/RCmB+XmjLjlKUkRb1jePB54eCEh9Er6IIsT11ECPKmmNA0rw1ECAwQAcM/Hp1qk85RnFKkY6+VE98f8O1LkrjfyW+3M6QEZtlvCaKgC/w8jQ0EhjQvUBc8DiiKqGj9sciNNJWXxMGYG43ZHs+KLNvTNE1sU4yfQXc4RoTCOANDdtBnub4gSey9+//wUMWWhKaxPMdzsqSqvMqxI05ghJ4wFhj1lzz+7IIEVfSp47b6HNsFPs4J3SdFFqXQexP520foummR0G2duGq7QDkYfthGlOIkIG1mRQJz94xLpLZ5gKEPI4LuXeChEruoxQNyRVZLN6y3XL1jRmzsYy1sbm0Hz2ny/IXzvL4vIeeF95H70udc7sVh+MGL4HkCLzA932EGoC3H00LaMz9UtHpk19axP1aNMu5Yu0CDC4doK6l2yUOVTymiHHlvVXageymyXXpByU9wN7HiEbY6EtZsHErrRh1U8872mJTyB9ynxMHw67ttq6nX4qmywu2MwxS03Wrj/EsNQ/aferj/XfP2gIcoxBFpsYzQaXhGHc3V6jroTybyKJDVQAbvPXqb/edspQwUdS+bWv6YDBzdX228lN94IWI7ldrhQ/u0MuvIwwaWX78DAoYAdTAraIv1VU2jcsqKWaboS5X/glyFyFE/ar7cxLScXXvYyAxe1YzdujnxxWkjbEJmq51ntOoZVDyyvjluDm65y0+F3BrFm1Y+BluPAktfbMWR7qoDW8azeLZPZlP57CI7X3lrErqXzqCUFLNh6r08C6/8bcpNFqqon+NQIyo0FslZNEM36NilZFvmBr+50sMVo2+3Ef7mF09l+Rg9zD2BbYd+0ZuPGmfu3Q8Q326LH+hIgeakVC24YbnKWfZqq2EsuNxbNkd9si4LuzfZNW5m2eEsAPd2eLMIUj/NYzAEMPHyFHugCyJIqPw+pt+ZfFHsgriWs2xLIX2bbiC3z8wwwP0vHy5GxwgJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "GK-FY🕊️",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254701339573",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'FYS-PROPERTY🌹',
    URL : process.env.BOT_MENU_LINKS || 'https://iili.io/3KG5xt9.webp',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





