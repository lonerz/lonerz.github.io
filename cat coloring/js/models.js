///// MODELS /////

var DEFAULT_COLORS = ["#666666", "#FF6347", "#2ADCCB", "#9ACD32", "#FFA500", "#6A5ACD"];
var circleR = 5, borderR = 3;

function Vertex(index, x, y) {
    // init
    this.index = index;
    this.neighbors = {};  // {neighbor index: neighbor color}
    this.neighboringColors = {};
    this.color = -1;

    this.x = x || 0;
    this.y = y || 0;

    // functions
    this.addNeighborColor = function (color) {
        if (color === -1) {
            return;
        }
        
        if (this.neighboringColors[color] === undefined) {
            this.neighboringColors[color] = 0;
        }
        this.neighboringColors[color]++;
    };
    
    this.removeNeighborColor = function (color) {
        if (color === -1) {
            return;
        }
        
        if (this.neighboringColors[color] === undefined || this.neighboringColors[color] === 0) {
            throw ("Color wasn't set, but tried to remove");
        }
        this.neighboringColors[color]--;
    };
    
    this.reset = function () {
        for (var v in this.neighbors) {
            this.neighbors[v] = -1;
        }
        this.neighboringColors = {};
        this.color = -1;
    }
}

function Graph() {
    // init
    this.V = 0;
    this.vertices = [];
    this.verticesMap = {};
    this.edgeList = [];

    // functions
    this.addVertex = function (vertex) {
        this.vertices.push(vertex);
        this.V++;
        if (this.verticesMap[vertex.index]) {
            throw ("Multiple vertices with same index");
        }
        this.verticesMap[vertex.index] = vertex;
    };

    this.addEdge = function (v1, v2) {
        v1.neighbors[v2.index] = -1;
        v2.neighbors[v1.index] = -1;
        this.edgeList.push([v1.index, v2.index]);
    };

    this.drawPoints = function (ctx) {
        for (var i = 0; i < this.V; ++i) {
            circle(ctx, this.vertices[i].x, this.vertices[i].y, circleR, DEFAULT_COLORS[0], borderR);
        }
    };

    this.drawEdges = function (ctx) {
        for (var i = 0; i < this.edgeList.length; ++i) {
            var edge = this.edgeList[i];
            var p1 = this.verticesMap[edge[0]];
            var p2 = this.verticesMap[edge[1]];
            drawEdge(ctx, p1.x, p1.y, p2.x, p2.y);
        }
    };

    this.drawGraph = function (ctx) {
        this.drawEdges(ctx);
        this.drawPoints(ctx);
    };
    
    this.colorsUsed = function () {
        var colors = new Set();
        for (var i = 0; i < this.vertices.length; ++i) {
            if (this.vertices[i].color == -1) {
                continue;
            }
            colors.add(this.vertices[i].color);
        }
        return colors.size;
    };
    
    this.reset = function () {
        for (var i = 0; i < this.V; ++i) {
            this.vertices[i].reset();
        }
    };
}

function Level(graph, colors, goal) {
    this.activeColor = 1;
    this.graph = graph;
    this.colors = colors;
    this.colored = 0;
    this.moves = 0;
    this.goal = goal;
    this.inplay = true;
    this.locked = true;
    
    this.reset = function () {
        this.activeColor = 1;
        this.graph.reset();
        this.colored = 0;
        this.moves = 0;
        this.inplay = true;
    };
}

