jQuery(function(t) {
	t(".m-note a:not([href^=http])").each(function() {
		t(this).click(function(t) {
			t.preventDefault()
		})
	}), t(".m-note a[href^='http']").each(function() {
		t(this).attr("target", "_blank"), t(this).click(function(t) {
			t.stopPropagation()
		})
	});
	var i = t("#m-note"),
		n = t("h3").add("h4");
	n.on("click", function() {
		t(this).next("div,ul").slideToggle("slow");
		var i = t(this).children("span").html();
		"-" == i ? t(this).children("span").html("+") : "+" == i && t(this).children("span").html("-")
	}), i.on("mouseover", "h4+ul>li", function(i) {
		t(this).children("span").css({
			left: i.pageX + 12 + "px",
			top: i.pageY + 8 + "px",
			display: "block"
		})
	}).on("mouseout", "h4+ul>li", function() {
		t(this).children("span").hide()
	}), t("#closebox").click(function() {
		t("#snippet").hide()
	}), i.on("click", "h4+ul>li", function() {
		var i = t(this).children("a:first-child").html();
		i || (i = "CSSLAB CARD");
		var n = t(this).children("span").html();
		t("#snippet").show(), t("#box-title").html(i), t("#box").html(n)
	})
});