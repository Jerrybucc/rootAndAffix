function match(val) {
back:
	{
		$("#results").empty();
		for (var i =0; i < affix.length; i++) {
			for (var j =0; j < affix[i].length; j++) {
				for (var k = 0; k < affix[i][j].length+1; k++) {
					if(val==affix[i][j].substring(k,k+val.length) && val.length>0){
						$("#results").append("<span>\""+affix[i][j]+"\""+"&nbsp;—————&nbsp;"+affix_meanings[i][j]+"</span");
						document.getElementById("results").innerHTML+="<br />"
						// break back;
					};
				};
			};	
		};
	}
}

$(function  () {
	for (var i =0; i < affix.length; i++) {
		document.getElementById("cata").innerHTML+=("<b>Class&nbsp;"+(i+1)+"<b/><br/>");
		for (var j =0; j < affix[i].length; j++) {
			document.getElementById("cata").innerHTML+=("<span>\""+affix[i][j]+"\""+"&nbsp;—————&nbsp;"+affix_meanings[i][j]+"</span><br/>");
		};	
	};
});
$(document).ready(function() {
	$("#searchAera").change(function () {
		match($(this).val().toLocaleLowerCase());
	})
});