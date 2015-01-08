function match(val) {
	$("#results").empty();
	for (var i = 0; i < affix.length; i++) {
		for (var j = 0; j < affix[i].length; j++) {
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
$(function() {
	$("#searchAera").change(function () {
		match($(this).val().toLocaleLowerCase());
	});
});
