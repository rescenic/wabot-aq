<<<<<<< refs/remotes/origin/master
let handler = async function (m, { conn }) {
  let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
    let name = db.data.users[i] ? db.data.users[i].name : conn.getName(i)
    list.push({
      "displayName": name,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
    })
  }
  await conn.sendMessage(m.chat, {
    "displayName": `${list.length} Contact`,
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m })
||||||| ancestor
function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '6281334177340', 'Nurutomo', m)
=======
function handler(m) {
    // Ini cuma contoh, jgn di uncomment -_-
    // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
    this.sendContact(m.chat, "6281394483625", "Rescenic", m);
>>>>>>> Update Agustus 2021
}
<<<<<<< refs/remotes/origin/master
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
||||||| ancestor
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i
=======
handler.help = ["owner", "creator"];
handler.tags = ["info"];

handler.command = /^(owner|creator)$/i;
>>>>>>> Update Agustus 2021

<<<<<<< refs/remotes/origin/master
module.exports = handler
||||||| ancestor
module.exports = handler
=======
module.exports = handler;
>>>>>>> Update Agustus 2021
