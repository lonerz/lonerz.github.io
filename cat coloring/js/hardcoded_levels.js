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
levels[2].locked = false;

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
levels[3].locked = false;

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
levels[4].locked = false;

var sampleGraph5 = new Graph();
var vertices5 = [
    [ 160 , 119 ],
    [ 193 , 110 ],
    [ 217 , 138 ],
    [ 260 , 170 ],
    [ 295 , 213 ],
    [ 326 , 254 ],
    [ 397 , 257 ],
    [ 458 , 254 ],
    [ 586 , 242 ],
    [ 707 , 222 ],
    [ 759 , 189 ],
    [ 773 , 145 ],
    [ 799 , 203 ],
    [ 831 , 230 ],
    [ 788 , 255 ],
    [ 852 , 256 ],
    [ 858 , 283 ],
    [ 859 , 337 ],
    [ 806 , 305 ],
    [ 805 , 342 ],
    [ 759 , 317 ],
    [ 723 , 354 ],
    [ 731 , 385 ],
    [ 759 , 427 ],
    [ 793 , 471 ],
    [ 809 , 511 ],
    [ 820 , 546 ],
    [ 849 , 561 ],
    [ 853 , 582 ],
    [ 807 , 580 ],
    [ 773 , 530 ],
    [ 710 , 452 ],
    [ 660 , 407 ],
    [ 670 , 446 ],
    [ 706 , 533 ],
    [ 719 , 566 ],
    [ 745 , 566 ],
    [ 742 , 594 ],
    [ 688 , 585 ],
    [ 654 , 547 ],
    [ 636 , 446 ],
    [ 592 , 442 ],
    [ 507 , 434 ],
    [ 454 , 494 ],
    [ 419 , 538 ],
    [ 435 , 561 ],
    [ 448 , 584 ],
    [ 392 , 581 ],
    [ 377 , 541 ],
    [ 394 , 490 ],
    [ 345 , 468 ],
    [ 415 , 429 ],
    [ 301 , 494 ],
    [ 267 , 536 ],
    [ 294 , 558 ],
    [ 315 , 575 ],
    [ 285 , 584 ],
    [ 249 , 574 ],
    [ 216 , 555 ],
    [ 235 , 480 ],
    [ 272 , 441 ],
    [ 292 , 365 ],
    [ 305 , 310 ],
    [ 265 , 263 ],
    [ 222 , 214 ],
    [ 180 , 176 ],
    [ 156 , 150 ]
];

var m = {};

for (var i=0; i<vertices5.length; ++i) {
    var temp = new Vertex(i, vertices5[i][0], vertices5[i][1]);
    m[i] = temp;
    sampleGraph5.addVertex(temp);
}

var edges5 = [
    [67,1],
    [14,16],
    [18,20],
    [32,34],
    [51, 53],
    [2,65],
    [3,64],
    [4,66],
    [5,67],
    [6,65],
    [6,64],
    [7,63],
    [7,51],
    [8,63],
    [8,51],
    [8,22],
    [9,43],
    [9,42],
    [10,41],
    [10,21],
    [11,13],
    [22,62],
    [23,32],
    [24,31],
    [25,32],
    [25,30],
    [27,30],
    [27,31],
    [34,40],
    [34,41],
    [35,41],
    [35,40],
    [44,49],
    [46,49],
    [51,60],
    [51,63],
    [53,62],
    [54,61],
    [54,59],
    [54,57],
    [55,58],
    [58,60]
];

for (var i=1; i<vertices5.length; ++i) {
    if (i != 15 && i != 19 && i != 33 && i != 52) {
        edges5 = edges5.concat([[i, i+1]]);
    }
}

for (var i=0; i<edges5.length; ++i) {
    sampleGraph5.addEdge(m[edges5[i][0]-1], m[edges5[i][1]-1]);
}

levels[1] = new Level(sampleGraph5, 5, 4);
levels[1].locked = false;


