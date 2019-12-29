$("button").on("click", function () {
	event.preventDefault();
	var search = $("#image-search").val();
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		search + "&api_key=0MjmS6h9ogtPWtK6B3SV3vVy1PfZbR9y&limit=1";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
		.then(function (response) {
			var results = response.data;

			for (var i = 0; i < results.length; i++) {
				var originalImgDiv = $("<div>");

				var image = $("<img>");
				image.attr("src", results[i].images.original_still.url);

				originalImgDiv.prepend(image);

				$("#original-image").prepend(originalImgDiv);
			}
		});
});