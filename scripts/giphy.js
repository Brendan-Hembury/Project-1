$("form").on("submit", function () {
	event.preventDefault();
	var search = $("#search").val();
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		search + "&api_key=0MjmS6h9ogtPWtK6B3SV3vVy1PfZbR9y&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
		.then(function (response) {
			var results = response.data;
			$("#original-image").empty();
			for (var i = 0; i < results.length; i++) {
				var originalImgDiv = $("<div>");
				originalImgDiv.attr("class", "col s12 l4")
				var image = $("<img>");
				image.attr("src", results[i].images.fixed_width_still.url);
				image.attr("alt", "image of " + search);
				image.attr("data-image", results[i].images.fixed_width_still.url);
				originalImgDiv.prepend(image);

				$("#original-image").prepend(originalImgDiv);
			}
		});
});