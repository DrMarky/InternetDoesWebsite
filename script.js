let maxIterations;
let x = 0;
let y = 0;

function setup() {
	createCanvas(1050, 600);
	background(0);
	colorMode(HSB);
	maxIterations = 25;
}

function draw() {
	let c = new Complex(map(x, 0, width, -2, 1), map(y, 0, height, -1, 1));
	// console.log(c.getMandelbrotSetIteration());
	let mbsi = c.getMandelbrotSetIteration();
	if (mbsi <= maxIterations) {
		stroke(map(mbsi, 0, maxIterations, 0, 360), 255, 255);
	} else {
		stroke(0, 0, 0);
	}
	point(x, y);

	y++;
	if (y >= height) {
		y = 0;
		x++;
	}
	if (x >= width) {
		noLoop();
	}
}

class Complex {
	constructor(re, im) {
		this.re = re;
		this.im = im;
	}
	square() {
		return new Complex(this.re * this.re - this.im * this.im, 2 * this.im * this.re);
	}
	add(c) {
		return new Complex(this.re + c.re, this.im + c.im);
	}
	getMandelbrotSetIteration() {
		let z = new Complex(0, 0);
		let currentIteration = 0;
		while (currentIteration <= maxIterations && (z.re * z.re + z.im * z.im) < 4) {
			z = z.square().add(this);
			currentIteration++;
		}
		return currentIteration;
	}
}
