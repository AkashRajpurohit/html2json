const getChildren = require('./getChildren')
const hasChildren = require('./hasChildren')
const getContent = require('./getContent')

const getData = (tag) => {
	const attributes = tag.attribs ? tag.attribs : null
	if(hasChildren(tag.children)) {
		const children = getChildren(tag.children)
		const _data = children.map(x => {
			return getData(x)
		})
		return { tag: tag.name, attributes: attributes || null, child: _data }
	}
	const _child = getChildren(tag.children)
	const _content = getContent(tag.children)
	return { tag: tag.name, attributes: attributes, content: _content.length > 0 ? _content[0].data : null, child: _child }
}

module.exports = getData