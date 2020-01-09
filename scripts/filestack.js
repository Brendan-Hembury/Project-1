var apiKey = "AzOa2BjoCRqov0LZHBNJNz";
var imageURL = "";


function display() {
	var transformURL = "https://process.filestackapi.com/" + apiKey + "/ascii=colored:true,background:black,size:50,reverse:true/" + imageURL;
	$.ajax({
		url: transformURL,
		method: "GET"
	})
		.then(function (image) {
			var imgString = JSON.stringify(image);
			var imgDisp = imgString.replace(/\"|\\|<html>|<\/html>|<body>|<\/body>|<head>|<\/head>|<body style="background: #000000">|<body style=\"background: #000000\">/ig, "");
			$("#text-image").attr("class", "grey darken-4");
			$("#text-image").html(imgDisp);

		});
};
$("#original-image").on("click", "img", function () {
	imageURL = $(this).attr("data-image");
	display();
});

$("#original-image").on("click", "button", function () {
	imageURL = $(this).attr("data-image");
	display();
});