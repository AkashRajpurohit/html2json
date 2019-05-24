const cheerio = require('cheerio')
const request = require('request')
const { writeFile } = require('fs')
const { join } = require('path')

const getData = require('./utils/getData')

const url = "http://localhost:4000"

const scraper = function(url) {
	console.log("💻💻💻 Scraping...\n")
	console.time("⏰⏰⏰ Time taken: ")

	request(url, (err, response, html) => {
		if(err) throw Error("\nUnable to scrape 😥😥. Please check the URL again or the robots.txt file for the website being scraped\n")
		const fileName = `${response.request.originalHost}.json`
		console.timeEnd("⏰⏰⏰ Time taken: ")
		const $ = cheerio.load(html)
		const htmlTag = $('html')
		const children = htmlTag.children()
		const data = {
			"tag": "html",
			"attributes": htmlTag[0].attribs,
			"child": []
		}

		const _data = []
		console.log("\n🔗🔗🔗 Converting to JSON...\n")

		for(let i = 0; i < children.length; i++) {
			_data.push(getData(children[i]))
		}

		data.child = [..._data]

		console.log("🖇️🖇️🖇️ Converted to JSON...\n")
		console.log("📋📋📋 Writing to output file...\n")

		const jsonData = JSON.stringify(data, null, 4)
		const pathToOutput = join(__dirname, "outputs")

		writeFile(`${pathToOutput}/${fileName}`, jsonData, { flag: 'w'}, (err) => {
			if(err) throw new Error("Unable to write to file 😥😥\n")
			console.log("🥳🥳🥳 Writing finished...\n")
		})
	})
}

scraper(url)
