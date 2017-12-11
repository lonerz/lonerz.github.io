var level_index = 1;
var currentLevel;

function validateLevel(index) {
    return index >= 1 && index <= Object.keys(levels).length;
}

function nextLevel() {
    if (!validateLevel(level_index + 1)) {
        console.log("Invalid next level");
        return false;
    }

    level_index++;
    if(!init()) {
        level_index--;
        return false;
    }
    
    return true;
}

function prevLevel() {
    if (!validateLevel(level_index - 1)) {
        console.log("Invalid prev level");
        return false;
    }

    level_index--;
    if(!init()) {
        level_index++;
        return false;
    }
    
    return true;
}

function goToLevel(index) {
    if (!validateLevel(index)) {
        console.log("Invalid specified level");
        return false;
    }
    
    level_index = index;
    return init();
}

function resetCurrentLevel() {
    reset();
    
    colorPicker(ctx, currentLevel);
    currentLevel.graph.drawGraph(ctx);
}

function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $("#level").text("Level: " + level_index);
    $("#level").text("Level: CAT");
    $("#moves").text("Moves: 0");
    $("#colorsused").text("Colors Used: 0");
    levels[level_index].reset();
}

function init() {
    if (levels[level_index].locked) {
        console.log("Trying to access locked level");
        return false;
    }
    
    currentLevel = levels[level_index];
    reset();
    
    colorPicker(ctx, currentLevel);
    currentLevel.graph.drawGraph(ctx);
    
    return true;
}

$("#start").show()