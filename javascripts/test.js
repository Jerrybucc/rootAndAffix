function whichTest(test,yes) {
	if (test==0){
		total:{
		for (var i = 0; i < affix.length; i++) {
			for (var j = 0; j < affix[i].length; j++) {
				$("#testAera").append(affix[i][j]);
				var opts = getOpts(settings.opts);
				for (var x = 0; x < opts; x++) {
					var optsLength = getOptsLength(i);
					if (affix_meanings[i][j]==affix_meanings[i][optsLength]) {
						x--;
					} else{
						$("#testAera").append("<a href=\"\" data-role=\"button\" onlick=\"isAnswer($(this));\">"+affix_meanings[i][optsLength]+"</a>");	
					};
				};
					$("#testAera").append("<a href=\"\" data-role=\"button\" onlick=\"isAnswer($(this));\">"+affix_meanings[i][j]+"</a>");
				for (var x = 0; x < settings.opts-1-opts ; x++) {
					var optsLength = getOptsLength(i);
					if (affix_meanings[i][j]==affix_meanings[i][optsLength]) {
						x--;
					} else{
						$("#testAera").append("<a href=\"\" data-role=\"button\" onlick=\"isAnswer($(this));\">"+affix_meanings[i][optsLength]+"</a>");	
					};
				};
				break total;
			};
		};
		}
	} else{
		for (var i = 0; i < affix[test-1].length; i++) {
			$("#testAera").append(affix[test-1][i]);
			var opts = getOpts(settings.opts);
			for (var x = 0; x < opts; x++) {
				var optsLength = getOptsLength(test-1);
				if (affix_meanings[test-1][i]==affix_meanings[test-1][optsLength]) {
					x--;
				} else{
					$("#testAera").append("<a href=\"\" data-role=\"button\" onlick=\"isAnswer($(this));\">"+affix_meanings[test-1][optsLength]+"</a>");	
				};
			};
				$("#testAera").append("<a href=\"\" data-role=\"button\" onlick=\"isAnswer($(this));\">"+affix_meanings[test-1][i]+"</a>");
			for (var x = 0; x < settings.opts-1-opts ; x++) {
				var optsLength = getOptsLength(i);
				if (affix_meanings[test-1][i]==affix_meanings[i][optsLength]) {
					x--;
				} else{
					$("#testAera").append("<a href=\"\" data-role=\"button\" onlick=\"isAnswer($(this));\">"+affix_meanings[test-1][optsLength]+"</a>");	
				};
			};
			break;
		};
	};
}
function getOpts(num) {
	var opts = Math.floor(Math.random()*(num-1));
	alert(opts)
	return opts;
}
function getOptsLength(i) {
	var optsLength = Math.floor(Math.random()*affix_meanings[i].length);
	return optsLength;
}

function test() {
	$("#cata a").click(function() {
		$("#testAera").empty();
		var test = $(this).index("#cata a");
		var yes = false;
		window.location.hash="#Test";
		whichTest(test,yes);
	});
}
function isAnswer(thisBtn) {
	// thisBtn.css("transparent-color","transparent");
	alert("a");
}
$(function() {
	test();
});