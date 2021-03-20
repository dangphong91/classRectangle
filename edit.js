let myRectangle = function(length, width) {
    this.length = length;
    this.width = width;
    this.getArea = function() {
        return length * width;
    }
    this.getPerimeter = function() {
        return (length + width) * 2;
    }
    this.showRectangle = function() {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(length,0);
        ctx.stroke();
        ctx.moveTo(length,0);
        ctx.lineTo(length,width);
        ctx.stroke();
        ctx.moveTo(length,width);
        ctx.lineTo(0,width);
        ctx.stroke();
        ctx.moveTo(0,width);
        ctx.lineTo(0,0);
        ctx.stroke();
    }
};
let rect1 = new myRectangle(100,50);
let area = rect1.getArea();
let peri = rect1.getPerimeter();
document.write(`Area :${area} <br> Perimeter :${peri} <br> Show : <br> <canvas id="myCanvas" width="1000" height="500"></canvas>`);
rect1.showRectangle();