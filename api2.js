console.log("here");

$(document).ready(function(){
	// issue #0 = need qustion mark at end for beginning of query string
	var url1 = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&";
	var url2 = "http://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20";

	$("button").on("click", function(e){
		console.log(url1 + $("#comb").serialize());

		e.preventDefault();
		$.ajax({
			method: "GET",
			url: url1 + $("#comb").serialize(),
			dataType: "json",
			error: onError,
			success: function (data) {
							console.log(data);
							$("#pic").attr("src", data.url);
					 }
		});
		function onError(e) {
			console.log("The error is ", e);
		}

	});
	$("#quote").on("click", function(e){

	 	e.preventDefault();
		$.ajax({
			method: "GET",
			url: url2,
			dataType: "json",
			success: function (quotes) {
				var i = Math.floor(Math.random() * quotes.length);
					$("#title").append(quotes[i].title);
					$("#content").append(quotes[i].content);
				
				console.log(quotes.length);
			}
		});
	});


});