jQuery(function (t) {
	var i = t("#m-sidebar-list li"),
		e = t("#m-content-list .m-content-list-item");
	i.each(function () {
		0 == t(this).children("a").length && t(this).wrapInner("<a></a>").find("a").attr("href", function () {
			return "#" + t(this).text()
		}).attr("target", "_self")
	}), e.attr("id", function () {
		return t(this).find("h3").children("b").text()
	}), i.on("click", function () {
		i.removeClass("current"), t(this).addClass("current");
		var n = t(this).index("#m-sidebar-list li");
		e.eq(n).addClass("active");
		var r = setTimeout(function () {
			e.eq(n).removeClass("active"), clearTimeout(r)
		}, 1e3)
	}), hljs.initHighlightingOnLoad()
});