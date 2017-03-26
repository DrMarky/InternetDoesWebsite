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
