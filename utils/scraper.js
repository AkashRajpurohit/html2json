const cheerio = require('cheerio')
const request = require('request')
const { writeFile } = require('fs')

const getData = require('./getData')

module.exports = (url, pathToOutput) => {
  console.log(`💻 Scraping ${url}\n`)

  request(url, (err, response, html) => {
    if (err)
      throw Error(
        `\nUnable to scrape 😥😥. Please check the URL: ${url} again or robots.txt file for the website being scraped\n`
      )
    const fileName =
      response.request.path
        .replace(/\//g, '_')
        .split('.')[0]
        .replace('_', '') + '.json'
    const $ = cheerio.load(html)
    const htmlTag = $('html')
    const children = htmlTag.children()
    const data = {
      tag: 'html',
      attributes: htmlTag[0].attribs,
      child: [],
    }

    const _data = []

    for (let i = 0; i < children.length; i++) {
      _data.push(getData(children[i]))
    }

    data.child = [..._data]

    const jsonData = JSON.stringify(data, null, 2)

    const outputFile = `${pathToOutput}/${fileName}`

    writeFile(outputFile, jsonData, { flag: 'w' }, err => {
      if (err) throw new Error(`Unable to write ${fileName} to file 😥😥\n`)
      console.log(`🎉 Finished with ${fileName} \n`)
    })
  })
}
