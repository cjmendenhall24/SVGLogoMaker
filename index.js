const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'logoName',
        message: 'What 3 letters do you want on your logo?'
    },
    {
        type: 'input',
        name: 'letterColor',
        message: 'What color would you like the letters to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like for your logo?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?'
    },
])