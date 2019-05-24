module.exports = (children) => {
	return children.filter(x => x.type === "tag")
}