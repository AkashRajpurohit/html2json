const mkdirp = require('mkdirp')
const { join } = require('path')

const scraper = require('./utils/scraper')

const baseUrl = 'http://localhost:4000'

const dirName = baseUrl.replace(/^(https|http).\/\//i, '')

const pathToOutputDir = join(__dirname, 'outputs', dirName)

mkdirp(pathToOutputDir, (err, done) => {
  if (err) throw err
})

// Later get links from crawler
const links = ['/page1.html', '/page2.html', '/page3.html', '/page4.html']

links.forEach(link => {
  const url = baseUrl + link
  scraper(url, pathToOutputDir)
})
