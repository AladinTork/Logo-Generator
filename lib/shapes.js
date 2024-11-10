//defining the parent class Shape
class Shapes {
    render(){
        //do nothing
    };
}

//defining inherited class Circle
class Circle extends Shapes {
    constructor(bgcolor) {
        super();
        this.bgcolor = bgcolor;
    }
    render(){
        return (`<circle cx="150" cy="100" r="80" fill="${this.bgcolor}" />`);
    }
}

//defining inherited class Rectangle
class Rectangle extends Shapes {
    constructor(bgcolor) {
        super();
        this.bgcolor = bgcolor;
    }
    render(){
        return (`<rect x="50" y="50" width="200" height="100" fill="${this.bgcolor}"/>`)
    }
}

//defining inherited class Triangle
class Triangle extends Shapes {
    constructor(bgcolor) {
        super();
        this.bgcolor = bgcolor;
    }
    render(){
        return (`<polygon points="150,10 260,190 40,190" style="fill:${this.bgcolor}" />`)
    }
}

module.exports = {Circle, Rectangle, Triangle};
