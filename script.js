const db = [
    ["신호등", "이무진","","",""],
    ["바라만 본다", "MSG워너비","","",""],
    ["Next Level", "aespa","","",""],
    ["낙하 (with 아이유)", "AKMU (악뮤)","","",""],
    ["Weekend", "태연","","",""],
    ["Queendom", "레드벨벳","","",""],
    ["Permission to Dance", "방탄소년단","","",""],
    ["좋아좋아", "조정석","","",""],
    ["Peaches", "Justin Bieber","","",""],
    ["Dun Dun Dance", "오마이걸","","",""],
    ["라일락", "아이유","","",""],
    ["롤린", "브레이브걸스","","",""],
    ["Celebrity", "아이유","","",""],
    ["Alcohol-Free", "트와이스","","",""],
    ["안녕", "조이","","",""],
]

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

    var pl = document.getElementById("PlayList");
    if (isitsearch == true) {   //찾아보기
        var str = document.getElementById("SearchInput").value;
        var arr = searchDB(str);
        var parent = document.getElementById("SearchResult");
       

        while(SearchResult.firstChild){
            SearchResult.removeChild(SearchResult.lastChild);
        }
    }
    else {                      //재생목록
        var arr = [];
        var target = document.getElementById("savedpl");
        var selectedpl = savedpl.options[target.selectedIndex].text;
     

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
        while (pl.firstChild) {  
           pl.removeChild(PlayList.lastChild);
        }
    }

    for (let i = 0; i <arr.length; i++) {
        var divnode = document.createElement("div");
        divnode.className = "seriesSearchResultChild";
        var anode = document.createElement("a");
        var bnode = document.createElement("b");
        var marknode = document.createElement("div");
        marknode.className = "mark";
        marknode.id = db[arr[i]][0];
        let addr = db[arr[i][2]];

        var getvideo = function(){
            //jwplayer("video").setup(...); 영상 가져오기
        

            if (this.parentElement.parentElement == pl) {
                while (true){
                    var tmp = pl.firstElementChild;
                    pl.appendChild(tmp);
                    if (pl.firstElementChild == this.parentElement) {
                        break;
                    }
                }   
            var tmp = pl.firstElementChild;
            while (tmp) {
                tmp.firstElementChild.nextSibling.firstElementChild.firstElementChild.className="nonplaying";
                tmp = tmp.nextSibling;
            }
            pl.firstElementChild.firstElementChild.nextSibling.firstElementChild.firstElementChild.className="nowplaying";

            //jwplayer("video").onplay(function(s){}); 자동재생
            }
        }
        anode.onclick = getvideo;
        marknode.onclick = getvideo;
        anode.innerHTML = "<div id='link'><div id='title'>" + db[arr[i]][0]+"</div><div id='singer'>" + db[arr[i]][1]+"</div></div>";

        if (isitsearch == true) {
            bnode.innerHTML = "+";
        } else {
            bnode.innerHTML = "x";
        }

        divnode.appendChild(marknode);
        divnode.appendChild(anode);
        divnode.appendChild(bnode);

        if (isitsearch == true) {
            parent.appendChild(divnode);
            bnode.href = "javascript:void(0)";
            bnode.onclick = function(){
                var p = this.parentElement;
                var cnode = document.createElement("b");
                cnode.innerHTML = "x";
                p.removeChild(this);
                p.appendChild(cnode);
                pl.appendChild(p);

                var count = SearchResult.childElementCount;
                var showhere = document.getElementById("howmanysongssearch");
                showhere.innerHTML = count + "곡";

                var count = PlayList.childElementCount;
                var showhere = document.getElementById("howmanysongslist");
                showhere.innerHTML = count + "곡";

                cnode.onclick = function() {
                    var a = this.parentElement;
                    a.remove();
                };
            };
        }
        else {
            pl.appendChild(divnode);
            bnode.onclick = function(){
                var a = this.parentElement;
                a.remove();
                var count = PlayList.childElementCount;
                var showhere = document.getElementById("howmanysongslist");
                showhere.innerHTML = count + "곡";
            }
        }   
    }
    
    if (isitsearch == true) {
        var count = SearchResult.childElementCount;
        var showhere = document.getElementById("howmanysongssearch");
        showhere.innerHTML = count + "곡";
        document.getElementById("SearchInput").value ="";
    }
    
    else {
        var count = PlayList.childElementCount;
        var showhere = document.getElementById("howmanysongslist");
        showhere.innerHTML = count + "곡";
    }
}

//이전곡 다음곡 재생목록불러오기저장 기능만 만들면 됨

function getlistarr() {
    const plist =[];
    plist.splice(0,plist.length);
    var x = document.getElementById("PlayList");
    var y = x.firstElementChild;
    while(y) {
        var z = y.firstElementChild.id;
        plist.push(z);
        y=y.nextSibling;
    }

    var copyhere = document.getElementById("copyhere");
    while (copyhere.firstChild){
        copyhere.removeChild(copyhere.lastChild);
    }

    var str = document.getElementById("listnameInput").value;

    if (str.length === 0) {
        var node = document.createElement("span");
        node.innerHTML = "생성할 재생목록 이름을 입력해주세요";
        copyhere.appendChild(node);
    }
    else if (x.childElementCount === 0) {
        var node = document.createElement("span");
        node.innerHTML = "현재 재생목록이 비어있습니다";
        copyhere.appendChild(node); 
    }
    else {
        var node = document.createElement("span");
        node.innerHTML = "[";
        copyhere.appendChild(node);
        for (let i = 0; i<=plist.length; i++) {
            var node = document.createElement("span");
        node.innerHTML = "\"" + plist[i] + "\",";
        copyhere.appendChild(node);
        }

        var titlenode = document.createElement("span");
        node.innerHTML = "\"" + str + "\"],";
        copyhere.appendChild(titlenode);
    }  
}

function loadname() {
    var optionhere = document.getElementById("savedpl");
    for (let i = 0; i < plarr.length; i++) {
        var makeoption = document.createElement("option");
        makeoption.innerHTML = plarr[i][plarr[i].length-1];
        optionhere.append(makeoption);
    }
}

function nextsong() {
    var pl = document.getElementById("PlayList");
    var next = pl.firstElementChild.nextSibling;
    next.firstElementChild.click();
}
function previoussong() {
    var pl = document.getElementById("PlayList");
    var prev = pl.lastElementChild;
    prev.firstElementChild.click();
}
function resetPlayList(){
    var p = document.getElementById("PlayList");
    while (PlayList.firstChild) {
        PlayList.removeChild(PlayList.lastChild);
    }
    var count = PlayList.childElementCount;
    var showhere = document.getElementById("howmanysongslist");
    showhere.innerHTML = count + "곡";
}