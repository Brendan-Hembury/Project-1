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
			$("#text-image").empty();
			for (var i = 0; i < results.length; i++) {
				var originalImgDiv = $("<div>");
				originalImgDiv.attr("class", "col s12 m4 l3")
				var image = $("<img>");
				image.attr("src", results[i].images.fixed_width_still.url);
				image.attr("alt", "image of " + search);
				image.attr("data-image", results[i].images.fixed_width_still.url);
				var convert = $("<button>");
				convert.attr("class", "btn grey");
				convert.attr("data-image", results[i].images.fixed_width_still.url);
				convert.text("Convert to ASCII Art");
				var card = $("<div>");
				card.attr("class", "align-center");
				card.prepend(image, convert);
				originalImgDiv.prepend(card);

				$("#original-image").prepend(originalImgDiv);
			}
		});
});