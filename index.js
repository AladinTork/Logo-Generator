const inquirer = require('inquirer');
const fs = require('fs');
const renderLogo = require('./lib/generateLogo.js');
const { type } = require('os');

//list of prompt questions
const questions = [
        {
            type: "list",
            name: "shape",
            message: "Please choose between the following shapes",
            choices: ["Circle", "Triangle", "Rectangle"],
        },
        {
            type: "input",
            name: "textcolor",
            message: "Please enter the text color keyword or hexadecimal",
        },
        {
            type: "input",
            name: "bgcolor",
            message: "Please enter the background color keyword or hexadecimal",
        },
        {
            type: "input",
            name: "text",
            message: "Please enter the text for the logo (up to 3 characters)",
        },
        
];

//function to write a SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      err ? console.error(err) : console.log("Success!");
    });
  }

//function to initialize the app
function init(){
    return inquirer.prompt(questions).then((answers) => {
        if (answers.text.length <= 3){
            writeToFile("logo.svg", renderLogo(answers));
        } else {
            return init();
        }
    });
};

//app init
init();
