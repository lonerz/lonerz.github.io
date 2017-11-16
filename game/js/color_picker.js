function colorPicker(ctx, level) {
    ctx.rect(0, 680, 700, 250);

    for (var i = 1; i <= level.colors; ++i) {
        circle(ctx, 700 - 50*(level.colors - i + 1), 720, 20, DEFAULT_COLORS[i], 3, (i === level.activeColor) ? "black" : undefined);
        ctx.font = '25px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(i, 700 - 50*(level.colors - i + 1)-8, 730);
    }

    makeCursor(DEFAULT_COLORS[level.activeColor]);
}

function onKeyDown(e) {
    var keys = ["", "1", "2", "3", "4", "5", "6", "7"];

    var index = keys.indexOf(e.key);
    if (index <= 0 || index > currentLevel.colors) {
        return;
    }

    currentLevel.activeColor = index;
    colorPicker(ctx, currentLevel);
}

window.addEventListener('keydown', onKeyDown, false);

function makeCursor(color) {

    // create off-screen canvas
    var cursor = document.createElement('canvas'),
        ctx1 = cursor.getContext('2d');

    cursor.width = 16;
    cursor.height = 16;

    // draw some shape for sake of demo
    ctx1.strokeStyle = color;

    ctx1.lineWidth = 5;
    ctx1.moveTo(2, 10);
    ctx1.lineTo(2, 2);
    ctx1.lineTo(10, 2);
    ctx1.moveTo(2, 2);
    ctx1.lineTo(30, 30);
    ctx1.stroke();

    var canvas = document.getElementById("myCanvas");
    // set image as cursor (modern browsers can take PNGs as cursor).
    canvas.style.cursor = 'url(' + cursor.toDataURL() + '), auto';
}
