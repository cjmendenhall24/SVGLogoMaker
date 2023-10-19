const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <g>${this.shapeElement}</g>
        <g>${this.textElement}</g>
    </svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape, color) {
    if (shape && typeof shape.render === 'function') {
      this.shapeElement = shape.render(color);
    }
  }
}

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'What 3 letters do you want on your logo?',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the letters to be?',
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color would you like the shape to be?',
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'What shape would you like for your logo?',
    choices: ['Circle', 'Square', 'Triangle'],
  },
];

function writeToFile(fileName, data) {
  console.log(`Writing SVG to file: ${fileName}`);
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Congratulations, you have generated a logo.svg!');
  });
}

async function init() {
  console.log('Starting init');

  const svg_file = 'logo.svg';

  const answers = await inquirer.prompt(questions);

  const user_text = answers.text;
  const user_font_color = answers.textColor;
  const user_shape_color = answers.shapeColor;
  const user_shape_type = answers.shapeType;

  let user_shape;

  if (user_shape_type === 'Square') {
    user_shape = new Square();
    console.log('User selected Square shape');
  } else if (user_shape_type === 'Circle') {
    user_shape = new Circle();
    console.log('User selected Circle shape');
  } else if (user_shape_type === 'Triangle') {
    user_shape = new Triangle();
    console.log('User selected Triangle shape');
  } else {
    console.log('Invalid shape!');
    return;
  }

  const svg = new Svg();
  svg.setTextElement(user_text, user_font_color);
  svg.setShapeElement(user_shape, user_shape_color);
  const svgString = svg.render();

  console.log('Shape generation complete!');
  console.log('Writing shape to file...');
  writeToFile(svg_file, svgString);
}

init();
