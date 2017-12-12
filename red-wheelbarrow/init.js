var thesaurus = {};
var id = {};
var words = [];

var createHTML = function () {
    var poem = "so much depends\nupon\n\na red wheel\nbarrow\n\nglazed with rain\nwater\n\nbeside the white\nchickens";
    var html = "";
    var cur = "";
    var count = 0;

    for (var i=0; i<poem.length; ++i) {
        if (poem[i] !== " " && poem[i] !== "\n") {
            cur += poem[i];
        } else if (cur !== "" || poem[i] === "\n") {
            if (cur != "") {
                html += "<div class=\"w\" id=\"" + count + "\"><span>" + cur + "</span>\n<span></span></div>\n";
                id[count] = cur;
                words.push(cur);
                cur = "";
                ++count;
            }
            if (poem[i] === "\n") {
                html += "<br/>";
            }
        }
    }

    if (cur !== "") {
        html += "<div class=\"words w\" id=\"" + count + "\"><span>" + cur + "</span>\n<span>hens</span></div>";
        id[count] = cur;
        words.push(cur);
    }
    
    return html;
};

console.log(createHTML());

var add_thesaurus = function (word, syn) {
    thesaurus[id[words.indexOf(word)]] = syn;
}

add_thesaurus("so", ["so", "extreme", "indeterminate", "infinite"]);
add_thesaurus("much", ["much", "abundance", "magnitude", "mass"]);
add_thesaurus("depends", ["depends", "relies", "rests", "hinges"]);
add_thesaurus("upon", ["upon", "amidst", "atop", "on"]);
add_thesaurus("a", ["a", "the"]);
add_thesaurus("red", ["red", "carmine", "maroon", "crimson", "vermilion"]);
add_thesaurus("wheel", ["wheel", "disk", "hoop", "tire", "cycle"]);
add_thesaurus("barrow", ["barrow", "buggy", "pushcart", "tumbrel", "wagon"]);
add_thesaurus("glazed", ["glazed", "burnished", "enameled", "shiny", "varnished"]);
add_thesaurus("with", ["with", "amidst", "among", "beside"," near"]);
add_thesaurus("rain", ["rain", "drizzle", "flood", "mist", "serein"]);
add_thesaurus("water", ["water", "dilution", "fluid", "H2O", "serum", "tears"]);
add_thesaurus("beside", ["beside", "alongside", "neighboring"]);
add_thesaurus("the", ["the", "a"]);
add_thesaurus("white", ["white", "alabaster", "frosted", "ivory", "waxen"]);
add_thesaurus("chickens", ["chickens", "capons", "fowls", "chanticleers", "cowards"]);




