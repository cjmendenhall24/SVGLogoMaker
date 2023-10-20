class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<circle cx="150" cy="110" r="70" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<polygon points="150, 5 244, 178 56, 178" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect x="100" y="60" width="100" height="100" fill="${this.shapeColor}" />`
    }
}
 module.exports = { Circle, Triangle, Square };