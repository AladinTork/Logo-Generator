const {Circle, Rectangle, Triangle} = require('./shapes.js');

function renderLogo(input){
    if (input.shape === "Circle"){
        const shape = new Circle(input.bgcolor);
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${shape.render()}
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${input.textcolor}">${input.text}</text>
          
          </svg>`);
    } if (input.shape === "Triangle"){
        const shape = new Triangle(input.bgcolor);
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${shape.render()}
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${input.textcolor}">${input.text}</text>
          
          </svg>`);
    } else {
        const shape = new Rectangle(input.bgcolor);
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${shape.render()}
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${input.textcolor}">${input.text}</text>
          
          </svg>`);
    }
};

module.exports = renderLogo;