module.exports = (tag) => {
	return tag.filter(x => x.type === "text" && (!x.data.includes("\n") || !x.data.includes("\t")))
}