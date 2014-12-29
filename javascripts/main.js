$(function  () {
	for (var i =0; i < affix.length; i++) {
		document.getElementById('asd').innerHTML+=("<b>Class&nbsp;"+(i+1)+"<b/><br/>");
		for (var j =0; j < affix[i].length; j++) {
			document.getElementById('asd').innerHTML+=("\""+affix[i][j]+"\""+"&nbsp;means:&nbsp;"+affix_meanings[i][j]+"<br/>");
		};	
	};
});