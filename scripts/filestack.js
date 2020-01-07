var apiKey = "AzOa2BjoCRqov0LZHBNJNz";
var imageURL = "";
$("#original-image").on("click", "img", function () {

	imageURL = $(this).attr("src");

	var transformURL = "https://process.filestackapi.com/" + apiKey + "/ascii=colored:true,background:black,size:50,reverse:true/" + imageURL;
	$.ajax({
		url: transformURL,
		method: "GET"
	})
		.then(function (image) {
			var imgString = JSON.stringify(image);
			var imgDisp = imgString.replace(/<html>|<\/html>|<body>|<\/body>|<head>|<\/head>|<body style="background: #000000">|<body style=\"background: #000000\">/ig, "");

			$("#text-image").html(imgDisp);
			// var results = response.data;

			// for (var i = 0; i < results.length; i++) {
			// 	var textImgDiv = $("<div>");

			// 	var image = $("<img>");
			// 	image.attr("src", results[i].images.original_still.url);
			// 	image.attr("alt", "image of " + search);
			// 	textImgDiv.prepend(image);

			// 	$("#text-image").prepend(textImgDiv);
			// }
		});
});

