const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://images.wallpapersden.com/image/download/pokemon-detective-pikachu-4k_a2lrZmWUmZqaraWkpJRsZ2WtbGdl.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ᴀʏɪꜱʜᴜ-ᴍᴡᴏʟ_ᴠ2 bot created by ꜰᴀꜱɪʟ*
*Creator number : wa.me/919947430792?text=Hi%20Fasil%20Ayishubot.%20*

*𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 : https://youtube.com/c/AFTROLLSS* 

*Githublink (Setup)  :    https://github.com/Ayishu74/Ayishu-Mwol_V2*

*Audio commads :   https://github.com/Ayishu74/Ayishu-Mwol_V2/tree/master/uploads*

*Sticker commads : https://github.com/Ayishu74/Ayishu-Mwol_V2/tree/master/uploads*

*𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 : https://youtube.com/c/AFTROLLSS* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
