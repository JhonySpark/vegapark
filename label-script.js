const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const ora = require('ora')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/* -- PARAMETROS CHAVE -- */
let loading
const configFilePath = './script-test/'
const configFileName = 'buildConfig.js'

rl.question('Digite o clientID: ', function (id) {
  start(id)
  rl.close()
})

async function start (id) {
  try {
    loading = ora('Making script great again...').start()
    const { data } = await axios.post('http://localhost:5001/vega-park/us-central1/getClients')
    const client = await data.data.find(item => item.clientId === Number(id))

    if (!client) {
      return loading.stopAndPersist({ symbol: '❌', text: 'Nenhum cliente encontrado!' })
    }

    const buildConfig = ` module.exports = {
    clientConfig: ${JSON.stringify(client.clientConfig)}
    }`

    fs.writeFile(configFilePath + configFileName, buildConfig, function (err) {
      if (err) throw err
    })

    client.imagens.forEach(element => {
      downloadFile(element.name, element.path, element.url, element.format)
    })

    client.files && client.files.forEach(element => {
      downloadFile(element.name, element.path, element.url, element.format)
    })

    loading.stopAndPersist({
      symbol: '✔',
      text: 'Script finalizado com sucesso!'
    })
  } catch (e) {
    loading.stopAndPersist({
      symbol: '❌',
      text: 'Algo deu errado!'
    })
    console.log('\x1b[31m', e + '\r\n', '\x1b[0m')
  }
}

//
async function downloadFile (fileName, path, url, format) {
  const fileRequest = await fetch(url)
  const file = await fileRequest.buffer()

  fs.writeFile(`${path}${fileName}.${format}`, file, function (err) {
    if (err) throw err
  })
}
