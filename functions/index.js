const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.getClients = functions.https.onRequest((request, response) => {
  const db = admin.firestore()
  const clients = []

  db.collection('clients').get().then(snapshot => {
    snapshot.forEach(doc => {
      clients.push(doc.data())
    })
    return response.send(res(200, 'Dados retornados com sucesso!', clients))
  }).catch(e => {
    console.log(e)
    return response.send(res(400, 'falha na requisição dos dados. D:', e))
  })
})

function res (code, msg, data) {
  return {
    status: code,
    msg: msg,
    data: data
  }
}
