function colorPicker(ctx, level) {
    ctx.rect(0, 680, 700, 250);
    
    for (var i = 1; i <= level.colors; ++i) {
        circle(ctx, 700 - 50*(level.colors - i + 1), 720, 20, DEFAULT_COLORS[i], 3, (i === level.activeColor) ? "black" : undefined);
    }
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
