const axios = require('axios')
const cheerio = require('cheerio')

const { cleanRows, createArrayOfArrays, fillArray, convertArrayToObject } = require('./functions')

axios.defaults.headers.get['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'

async function socialblade (username) {
  const html = await axios(`https://socialblade.com/instagram/user/${username}/monthly`)
  const $ = cheerio.load(html.data)
  const table = $('#socialblade-user-content > div:nth-child(5)').text()
  const tableRows = cleanRows(table.split('\n'))
  const itemsPerRow = 7
  let arrays = createArrayOfArrays(tableRows.length / itemsPerRow)
  arrays = fillArray(arrays, tableRows, itemsPerRow)
  const array2obj = convertArrayToObject(arrays)
  return array2obj
}

exports.socialblade = socialblade
