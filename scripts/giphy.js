$("#gif-search").on("submit", function () {
	event.preventDefault();
	var search = $("#search").val();
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		search + "&api_key=0MjmS6h9ogtPWtK6B3SV3vVy1PfZbR9y&limit=12";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
		.then(function (response) {
			var results = response.data;
			$("#original-image").empty();
			$("#text-image").empty();
			$("#search-container").attr("class", "container grey darken-3 section");
			for (var i = 0; i < results.length; i++) {
				var originalImgDiv = $("<div>");
				originalImgDiv.attr("class", "col s12 m4 l3")
				var image = $("<img>");
				image.attr("src", results[i].images.fixed_width_still.url);
				image.attr("alt", "image of " + search);
				image.attr("class", "hoverable responsive-img")
				image.attr("data-image", results[i].images.fixed_width_still.url);
				// var convert = $("<button>");
				// convert.attr("class", "btn transparent left");
				// convert.attr("data-image", results[i].images.fixed_width_still.url);
				// convert.html("<mark class='grey lighten-3'>Convert to Art</mark>");
				// var span = $("<span>").attr("class", "card-title left");
				// span.append(convert);

				var cardImg = $("<div>");
				cardImg.attr("class", "card-image");
				cardImg.append(image);
				var card = $("<div>");
				card.attr("class", "grey darken-3 image-height");
				card.prepend(cardImg);
				originalImgDiv.prepend(card);

				$("#original-image").prepend(originalImgDiv);
			}
		});
});