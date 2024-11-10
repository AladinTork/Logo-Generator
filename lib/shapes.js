class Shapes {
    render(){
        //do nothing
    };
}

class Circle extends Shapes {
    constructor(bgcolor) {
        super();
        this.bgcolor = bgcolor;
    }
    render(){
        return (`<circle cx="150" cy="100" r="80" fill="${this.bgcolor}" />`);
    }
}

class Rectangle extends Shapes {
    constructor(bgcolor) {
        super();
        this.bgcolor = bgcolor;
    }
    render(){
        return (`<rect width="100" height="100" fill="${input.bgcolor}"/>`)
    }
}

class Triangle extends Shapes {
    constructor(bgcolor) {
        super();
        this.bgcolor = bgcolor;
    }
    render(){
        return (`<polygon points="100,10 170,190 30,190" style="fill:${input.bgcolor}" />`)
    }
}

module.exports = {Circle, Rectangle, Triangle};
