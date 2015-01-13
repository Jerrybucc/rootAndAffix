$(function() {
	$("#removeHis").click(function() {
		while(review.length>0) {
			review.pop();
		}
		window.location.hash="#Hint-his";
		refresh();
	})
});