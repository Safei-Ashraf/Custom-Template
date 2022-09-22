console.log("attached script (^_-)");

fetch("http://localhost:3000/images/meme.jpg").then((data) =>
	console.log(data)
);
