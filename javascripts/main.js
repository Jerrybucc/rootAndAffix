function match(val) {
	$("#results").empty();
	var hasWord = false;
	for (var i =0; i < affix.length; i++) {
		for (var j =0; j < affix[i].length; j++) {
			for (var k = 0; k < affix[i][j].length+1; k++) {
				if(val==affix[i][j].substring(k,k+val.length) && val.length>0){
					$("#results").append("<span>\""+affix[i][j]+"\""+"&nbsp;—————&nbsp;"+affix_meanings[i][j]+"</span");
					results.innerHTML+="<br />"
					review.push(affix[i][j]);
					// hasWord = true;
				};
			};
		};	
	};
	refresh();
}

function refresh() {
	var results = document.getElementById("results");
	var cata = document.getElementById('cata');
	var reviewAera = document.getElementById("reviewAera");
	$("#cata").empty();
	for (var i =0; i < affix.length; i++) {
		cata.innerHTML+=("<h1>Class&nbsp;"+(i+1)+"</h1><br/>");
		for (var j =0; j < affix[i].length; j++) {
			this.cata.innerHTML+=("<span>\""+affix[i][j]+"\""+"&nbsp;—————&nbsp;"+affix_meanings[i][j]+"</span><br/>");
		};	
		cata.innerHTML+=("<a href=\"\" data-role=\"button\">test&nbsp;"+(i+1)+"</a><br/>");
	};

	for (var i =0; i < review.length; i++) {
		reviewAera.innerHTML+=(review[i]+"<br/>");
	};
}

$(function() {
	$("#searchAera").change(function () {
		match($(this).val().toLocaleLowerCase());
	})
});
$(function() {
	refresh()
});