var page = 0;
document.getElementById("pages").style.width = (document.getElementById("pages").childElementCount * 450 + "px");

function nextPage() {
	if(page < document.getElementById("pages").childElementCount-1) {
		page = page + 1;
		document.getElementById("pages").style.transform = "translate("+ (page*-450) +"px, 0)";
	}
}

function lastPage() {
	if(page > 0) {
		page = page - 1;
		document.getElementById("pages").style.transform = "translate("+ (page*-450) +"px, 0)";
	}
}

function switchTo(targetPage) {
	if(page != targetPage) {
		page = targetPage;
		document.getElementById("pages").style.transform = "translate("+ (page*-450) +"px, 0)";
	}
}