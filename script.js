class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;


        if (this.width > 550 && this.height > 550) {
            alert('Shape is too big! Try again!');
        } else if (this.height > 550) {
            alert('Height is too big! Try again!');
        } else if (this.width > 550) {
            alert('Width is too big! Try again!');
        } else {
            this.div = $('<div class="shape"></div>');
            this.randomPos();
            this.div.dblclick(() => this.div.remove());
            this.div.dblclick(() => $('.inputs').val(''));
            this.div.click(() => this.describe());
        }
    }
    randomVal(min, max) {
        return Math.floor(Math.random() * (max - min));
    }
    randomPos() {
        this.div.css({
            top: `${this.randomVal(this.height, 600)}px`,
            left: `${this.randomVal(this.width, 600)}px`,
            height: this.height,
            width: this.width,
        });
        $('#canvas').append(this.div);
    }
    describe() {
        $('#output-height').val(this.height);
        $('#output-width').val(this.width);
    }
    getArea() {
        let area = this.width * this.height;
        $('#output-area').val(area);
    }
    getPerimeter() {
        let perimeter = (this.width + this.height) * 2;
        $('#output-perimeter').val(perimeter);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = Number(sideLength);
        this.div.attr('id', 'square');
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#output-shape').val('Square'));
    }
    getArea() {
        let area = this.sideLength * this.sideLength;
        $('#output-area').val(area);
    }
    getPerimeter() {
        let perimeter = (this.sideLength * 2) * 2;
        $('#output-perimeter').val(perimeter);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
        this.height = Number(height);
        this.width = Number(width);
        this.div.attr('id', 'rectangle');
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#output-shape').val('Rectangle'));
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius);
        this.radius = Number(radius);
        this.div.attr('id', 'circle');
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#output-shape').val('Circle'));
        this.div.click(() => $('#output-radius').val(this.radius));
    }
    getArea() {
        let radius = this.width / 2;
        let area = Math.PI * Math.pow(radius, 2);
        $('#output-area').val(area);
    }
    getPerimeter() {
        let perimeter = 2 * Math.PI * this.radius;
        $('#output-perimeter').val(perimeter);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.height = Number(height);
        this.div.attr('id', 'triangle');
        this.triStyles();
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#output-shape').val('Triangle'));
    }
    getArea() {
        let area = 0.5 * this.height * this.height;
        $('#output-area').val(area);
    }
    getPerimeter() {
        let perimeter = 2 * this.height + Math.SQRT2 * this.height;
        $('#output-perimeter').val(perimeter);
    }
    triStyles() {
        this.div.css({
            height: '0',
            width: '0',
            borderBottom: `${this.height}px solid yellow`,
            borderRight: `${this.height}px solid transparent`,
        })
    }
}

$('#recBtn').click(function () {
    let rectWidth = $('#recW-input').val();
    let rectHeight = $('#recH-input').val();
    new Rectangle(rectWidth, rectHeight);
    $('#recW-input').val('');
    $('#recH-input').val('');

});


$('#sqBtn').click(function () {
    let sidePx = $('#sides-input').val();
    new Square(sidePx, sidePx);
    $('#sides-input').val('');
})

$('#triBtn').click(function () {
    let triHeight = $('#tri-input').val();
    new Triangle(triHeight);
    $('#tri-input').val('');
})

$('#cirBtn').click(function () {
    let radius = $('#radius-input').val();
    new Circle(radius);
    $('#radius-input').val('');
})
