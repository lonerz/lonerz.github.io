var switchword = function (elem) {
    $(elem).removeClass("t");
    $(elem).addClass("w");
    var firstchild = $(elem + " > span:first-child");
    var lastchild = $(elem + " > span:last-child");
    firstchild.text(lastchild.text());
};

var transforms = function (elem) {
    var e = elem;
    var elem = "#" + elem.toString();
    console.log(elem);
    console.log($(elem));
    $(elem).removeClass("w");
    $(elem).addClass("t");
    setTimeout(switchword, 4000, elem);
    addsynonyms(e);
};

var randomchange = function () {
    var cnt = Math.floor(Math.random()*2) + 2;
    console.log("CNT: ", cnt);
    var seen = [];
    while (cnt--) {
        var randindex = Math.floor(Math.random()*words.length);
        while (seen.includes(randindex)) {
            randindex = Math.floor(Math.random()*words.length);
        }
        console.log(cnt, randindex);
        transforms(randindex);
    }
};

var addsynonyms = function (elem) {
    var e = elem;
    var elem = "#" + elem.toString();
    var firstchild = $(elem + " > span:first-child");
    var lastchild = $(elem + " > span:last-child");
    console.log("word: " + id[e]);
    var syn = thesaurus[id[e]];
    console.log(syn);
    var randindex = Math.floor(Math.random()*syn.length);
    while (syn[randindex] === firstchild.text()) {
        randindex = Math.floor(Math.random()*syn.length);
    }
    lastchild.text(syn[randindex]);
    console.log(syn);
    console.log(syn[randindex]);
}

setInterval(function () {
    randomchange();
}, 4000);

