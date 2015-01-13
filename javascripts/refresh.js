function Rcata(results,cata,reviewAera) {
	$("#cata").empty();
	cata.innerHTML="<a href=\"\" data-role=\"button\">Total&nbsp;Test"+"</a><br/>";
	for (var i =0; i < affix.length; i++) {
		cata.innerHTML+=("<h1>Class&nbsp;"+(i+1)+"</h1><br/>");
		for (var j =0; j < affix[i].length; j++) {
			this.cata.innerHTML+=("<span>\""+affix[i][j]+"\""+"&nbsp;—————&nbsp;"+affix_meanings[i][j]+"</span><br/>");
		};	
		cata.innerHTML+=("<a href=\"\" data-role=\"button\">Test&nbsp;"+(i+1)+"</a><br/>");
	};
	$("a").buttonMarkup("refresh");
}
function Rhistory(results,cata,reviewAera) {
	$("#reviewAera").empty();
	if (review.length==0) {
		reviewAera.innerHTML+=("There is no history&nbsp;&nbsp;<a href=\"#Search\" data-role=\"button\">Search&nbsp;now</a>");
	} else{
		for (var i = review.length-1; i > -1; i--) {
			reviewAera.innerHTML+=(review[i]+"<br/>");
		};
	};
	$("a").buttonMarkup("refresh");
}
function refresh() {
	var results = document.getElementById("results");
	var cata = document.getElementById("cata");
	var reviewAera = document.getElementById("reviewAera");
	Rcata(results,cata,reviewAera);
	Rhistory(results,cata,reviewAera);
}
$(function() {
	refresh();
});