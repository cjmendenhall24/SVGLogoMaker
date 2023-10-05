const {Square, Circle, Triangle} = require("/shapes")

describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`);
    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="50, 50 150, 200 250, 50" fill="${this.shapeColor}" />`);
    });
});

describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="40" y="30" width="80" height="80" fill="${this.shapeColor}" />`);
    });
});