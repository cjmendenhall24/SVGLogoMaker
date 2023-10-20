const {Square, Circle, Triangle} = require("./shapes.js")

describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`circle cx="150" cy="110" r="70" fill="${this.shapeColor}" />`);
    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 5 244, 178 56, 178" fill="${this.shapeColor}" />`);
    });
});

describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="100" y="60" width="100" height="100" fill="${this.shapeColor}" />`);
    });
});