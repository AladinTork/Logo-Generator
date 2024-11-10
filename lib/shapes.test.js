const {Circle, Triangle, Rectangle} = require('./shapes');

//a unit test is created for render() prototype of Cricle class
describe("Circle", () => {
    it("should take a color (string) and return the appropriate SVG tag", () => {
        const svgTag = `<circle cx="150" cy="100" r="80" fill="white" />`;
        const circle = new Circle("white");
        expect(circle.render()).toEqual((svgTag));
    });
});

//a unit test is created for render() prototype of Rectangle class
describe("Rectangle", () => {
    it("should take a color (string) and return the appropriate SVG tag", () => {
        const svgTag = `<rect x="50" y="50" width="200" height="100" fill="black"/>`;
        const rectangle = new Rectangle("black");
        expect(rectangle.render()).toEqual((svgTag));
    });
});

//a unit test is created for render() prototype of Triangle class
describe("Triangle", () => {
    it("should take a color (string) and return the appropriate SVG tag", () => {
        const svgTag = `<polygon points="150,10 260,190 40,190" style="fill:green" />`;
        const triangle = new Triangle("green");
        expect(triangle.render()).toEqual((svgTag));
    });
});