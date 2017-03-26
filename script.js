let maxIterations;
let x = 0;

function setup() {
	createCanvas(1050, 600);
	background(0);
	colorMode(HSB);
	maxIterations = 100;
}

new KonamiCode(function() {
	window.location.href = "https://youtu.be/9u9vlj8CgS0?t=5s";
});

function draw() {
	for (let y = 0; y < height; y++) {
		let c = new Complex(map(x, 0, width, -2, 1), map(y, 0, height, -1, 1));
		// console.log(c.getMandelbrotSetIteration());
		let mbsi = c.getMandelbrotSetIteration();
		if (mbsi <= maxIterations) {
			stroke(map(mbsi, 0, maxIterations, 0, 360), 255, 255);
		} else {
			stroke(0, 0, 0);
		}
		point(x, y);
	}
	x++;
	if (x >= width) {
		noLoop();
	}
}
