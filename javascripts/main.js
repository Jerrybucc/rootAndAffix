function match(val) {
	$("#results").empty();
	// var hasWord = false;
	for (var i =0; i < affix.length; i++) {
		for (var j =0; j < affix[i].length; j++) {
			for (var k = 0; k < affix[i][j].length+1; k++) {
				if(val==affix[i][j].substring(k,k+val.length) && val.length>0){
					$("#results").append("<span>\""+affix[i][j]+"\""+"&nbsp;—————&nbsp;"+affix_meanings[i][j]+"</span");
					results.innerHTML+="<br />"
				};
			};
		};	
	};
	review.push($("#searchAera").val());
	refresh();
}

function refresh() {
	var results = document.getElementById("results");
	var cata = document.getElementById("cata");
	var reviewAera = document.getElementById("reviewAera");
	$("#reviewAera").empty();
	$("#cata").empty();
	cata.innerHTML="<a href=\"\" data-role=\"button\">Total&nbsp;Test"+"</a><br/>";
	for (var i =0; i < affix.length; i++) {
		cata.innerHTML+=("<h1>Class&nbsp;"+(i+1)+"</h1><br/>");
		for (var j =0; j < affix[i].length; j++) {
			this.cata.innerHTML+=("<span>\""+affix[i][j]+"\""+"&nbsp;—————&nbsp;"+affix_meanings[i][j]+"</span><br/>");
		};	
		cata.innerHTML+=("<a href=\"\" data-role=\"button\">Test&nbsp;"+(i+1)+"</a><br/>");
	};

	for (var i = review.length-1; i > -1; i--) {
		reviewAera.innerHTML+=(review[i]+"<br/>");
	};
}

$(function() {
	refresh();
});

$(function() {
	$("#searchAera").change(function () {
		match($(this).val().toLocaleLowerCase());
	});
});

$(function() {
	$("#cata a").click(function() {
		$("#testAera").empty();
		var test = $(this).index("#cata a");
		var yes = false;
		window.location.hash="#Test";
		if (test==0){
total:
{
			for (var i = 0; i < affix.length; i++) {
				for (var j = 0; j < affix[i].length; j++) {
					$("#testAera").append(affix[i][j]);
					if(yes){
					continue;
					}else{
						break total;
					};
				};
			};
}
		} else{
			for (var i = 0; i < affix[test].length; i++) {
				$("#testAera").append(affix[test-1][i]);
				if(yes){
					continue;
				}else{
					break;
				};
			};
		};
	});
});
