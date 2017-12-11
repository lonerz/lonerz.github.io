function win() {
    currentLevel.inplay = false;
    if (validateLevel(level_index + 1)) {
        levels[level_index + 1].locked = false;
    }
    
    $(".hotspot").fadeOut(60);
    
    if (currentLevel.graph.colorsUsed() > currentLevel.goal) {
        $("#success h1").text("Good job!");
        $("#success h3").text("Try using fewer colors.");
    } else if (currentLevel.moves > currentLevel.graph.V) {
        $("#success h1").text("Good job!");
        $("#success h3").text("Try using fewer moves.");
    } else {
        $("#success h1").text("Perfect!");
        $("#success h3").text("");
    }
    
    $("#success").fadeIn(60);
}

function updateColor(vertex, color) {
    if (vertex.neighboringColors[color]) {
        $("#invalid").fadeIn(60);
        return false;
    }
    
    if (vertex.color === -1) {
        currentLevel.colored++;
    }
    
    var original = vertex.color;
    vertex.color = color;
    for (i in vertex.neighbors) {
        currentLevel.graph.verticesMap[i].addNeighborColor(vertex.color);
        currentLevel.graph.verticesMap[i].removeNeighborColor(original);
    }
    
    currentLevel.moves++;
    $("#moves").text("Moves: " + currentLevel.moves);
    
    if (currentLevel.colored === currentLevel.graph.V) {
        win();
    }
    
    $("#colorsused").text("Colors Used: " + currentLevel.graph.colorsUsed());
    return true;
}

function onMouseDown(e) {
    if (!currentLevel.inplay) {
        return;
    }
    
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    
    console.log("[",x,",",y,"]");
    
    for (var i = 1; i <= currentLevel.colors; ++i) {
        if (inCircle(x, y, 700 - 50*(currentLevel.colors - i + 1), 720, 20) && currentLevel.activeColor !== i) {
            currentLevel.activeColor = i;
            colorPicker(ctx, currentLevel);
            
            if (level_index === 1) {
                $("#hot1").fadeOut(60);
                $("#hot2").fadeIn(60);
            }
            
            return;
        }
    }
    
    for (var i = 0; i < currentLevel.graph.V; ++i) {
        var vertex = currentLevel.graph.vertices[i];
        if (inCircle(x, y, vertex.x, vertex.y, circleR+5)) {
            if (vertex.color !== currentLevel.activeColor && updateColor(vertex, currentLevel.activeColor)) {
                circle(ctx, vertex.x, vertex.y, circleR, DEFAULT_COLORS[currentLevel.activeColor], borderR);
            }
            return;
        }
    }
}

canvas.addEventListener('mousedown', onMouseDown, false);


$(".nextlevel").click(function() {
    $(".modal").fadeOut(60);
    nextLevel();
});

$("#prevlevel").click(function() {
    prevLevel();
});

$("#resetlevel").click(function() {
    resetCurrentLevel();
});

$(".modal").click(function() {
    $(".modal").fadeOut(60);
});

$("#start").click(function() {
    //$("#hot1").fadeIn(60);
    init();
});

/*
$(".ok").click(function() {
    $("#hot1").fadeOut(60);
    $("#hot2").fadeIn(60);
});

$(".close").click(function() {
    $("#hot2").fadeOut(60);
});
*/

