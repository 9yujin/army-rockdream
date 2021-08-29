function searchenterkey(){
    if (window.event.keyCode == 13) {
        searchButton()
    }
}
function searchenterkey(){
    if (window.event.keyCode == 13) {
        getlistarr();
    }
}

function searchDB(str) {
    var elem = [];
    for (var i=0; i<db.length; i++) {
        if(db[i][0].includes(str) || db[i][1].includes(str)){
            elem.push(i);
        }
    }
    return elem;
}

function searchButton(isitsearch) {

    if (isitsearch == true) {
        var str = documnet.getElementById("SearchInput").value;
        var arr = searchDB(str);
        var parent = document.getElementById("SearchResult");
        var pl = document.getElementById("PlayList");

        while(SearchResult.firstChild){
            SearchResult.removeChild(SearchResult.lastChld);
        }
    }
    else {
        var arr = [];
        var target = document.getElementById("savedpl");
        var selectedpl = savedpl.options[target.selectedIndex].text;
        var pl = document.getElementById("PlayList");
    }
}