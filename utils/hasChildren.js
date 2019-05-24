const getChildren = require('./getChildren')

module.exports = (child) => {
	return getChildren(child).length > 0
}