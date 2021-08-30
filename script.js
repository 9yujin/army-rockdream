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

    if (isitsearch == true) {   //찾아보기
        var str = documnet.getElementById("SearchInput").value;
        var arr = searchDB(str);
        var parent = document.getElementById("SearchResult");
        var pl = document.getElementById("PlayList");

        while(SearchResult.firstChild){
            SearchResult.removeChild(SearchResult.lastChild);
        }
    }
    else {                      //재생목록
        var arr = [];
        var target = document.getElementById("savedpl");
        var selectedpl = savedpl.options[target.selectedIndex].text;
        var pl = document.getElementById("PlayList");

        for (let a=0; a<plarr.length; a++) {
            var x = plarr[a][plarr[a].length-1];
            if (x === selectedpl) {
                for (let b=0; b<plarr[a].length-1; b++) {
                    var str = plarr[a][b];
                    for (var c = 0; c<db.length; c++) {
                        if (db[c][0] === str) {
                            arr.push(c);
                        }
                    }
                }
            }
        }
        while (PlayList.firstChild) {
            PlayList.removeChild(PlayList.lastChild);
        }
    }


}