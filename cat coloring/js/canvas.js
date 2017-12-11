var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function circle(ctx, cx, cy, r, fillStyle, lineWidth, strokeStyle) {
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle || fillStyle;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawEdge(ctx, x1, y1, x2, y2) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#D0D0D0";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
}

function inCircle(x, y, cx, cy, r) {
    return (x - cx)*(x - cx) + (y - cy)*(y - cy) <= r*r;
}

