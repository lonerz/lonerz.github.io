var levels = {};

var sampleGraph1 = new Graph();
var a1 = new Vertex(0, 349, 306);
sampleGraph1.addVertex(a1);

levels[1] = new Level(sampleGraph1, 5, 1);
levels[1].locked = false;

var sampleGraph2 = new Graph();
var a2 = new Vertex(0, 251, 378);
var b2 = new Vertex(1, 486, 257);
sampleGraph2.addVertex(a2);
sampleGraph2.addVertex(b2);
sampleGraph2.addEdge(a2, b2);

levels[2] = new Level(sampleGraph2, 5, 2);
//levels[2].locked = false;

var sampleGraph3 = new Graph();
var a3 = new Vertex(0, 182, 162);
var b3 = new Vertex(1, 481, 209);
var c3 = new Vertex(2, 381, 478);
sampleGraph3.addVertex(a3);
sampleGraph3.addVertex(b3);
sampleGraph3.addVertex(c3);
sampleGraph3.addEdge(a3, b3);
sampleGraph3.addEdge(b3, c3);

levels[3] = new Level(sampleGraph3, 5, 2);
//levels[3].locked = false;

var sampleGraph4 = new Graph();
var a4 = new Vertex(0, 220, 240);
var b4 = new Vertex(1, 500, 240);
var c4 = new Vertex(2, 500, 450);
var d4 = new Vertex(3, 220, 450);
sampleGraph4.addVertex(a4);
sampleGraph4.addVertex(b4);
sampleGraph4.addVertex(c4);
sampleGraph4.addVertex(d4);
sampleGraph4.addEdge(a4, b4);
sampleGraph4.addEdge(b4, c4);
sampleGraph4.addEdge(a4, d4);
sampleGraph4.addEdge(b4, d4);
sampleGraph4.addEdge(a4, c4);

levels[4] = new Level(sampleGraph4, 5, 3);
//levels[4].locked = false;

