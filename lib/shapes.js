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
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect x="40" y="30" width="80" height="80" fill="${this.shapeColor}" />`
    }
}
 module.exports = { Circle, Triangle, Square };