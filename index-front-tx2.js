
function threefront(callnumber){
 //outscroll()
  //idの消去
 idDelete("chatbar")

 document.getElementById("fronttx").innerHTML = ""
 document.getElementById("fronttx").style.textAlign = "left"
 document.getElementById("fronttx").style.paddingLeft = "10px"
 document.getElementById("fronttx").style.paddingBottom = "260px"

 var chatbar = document.createElement("div");
 chatbar.innerHTML = "";
 chatbar.setAttribute("name","chatbar");
 chatbar.setAttribute("id","chatbar");
 document.getElementById("fronts").appendChild(chatbar)

 var drag = document.createElement("div");
 drag.innerHTML = "";
 drag.setAttribute("name","dragbar");
 drag.setAttribute("id","drag");
 drag.setAttribute("value","-1");
 drag.setAttribute("onclick","dragon()");
 document.body.appendChild(drag)

 //一列約41文字、四列まで
 var chatbar=[
 //chat1
   {word:
   [["","div"],
    ["クロステックデザイン応用3","div"],
    ["設計演習2","div"],
    ["ソフトウェア・ネットワーク応用2","div"],
    ["プレゼンテーション演習3","div"],
    ["スタートアップ演習2","div"],
    ["準備中","div"]],
   },

 ];

 word =[
   [["授業ノート",""]],
  //["テキスト","属性","値"]
  //info-1
   [["・9月25日　大阪市立大学杉本町にて",""],
    [" ","width","52vh","height","40vh","font-style","oblique","float","left"].concat(frontimg("study/study1.jpg")),
    [" ","width","52vh","height","40vh","font-style","oblique","float","left"].concat(frontimg("study/study2.jpg"))],
  //info-2
   [["・9月26日~10月2日　スケボー構想",""],
    [" ","width","auto","height","40vh","font-style","oblique"].concat(frontimg("study/study3.jpg"))],
  //info-3
   [["・9月27日 バックエンドとサイトの構想",""],
    ["XDで作成","width","auto","height","40vh","font-style","oblique"].concat(frontimg("study/study4.png")),
    ["・10月4日 前回の続きとJSONの勉強",""],
    ["https://jsonlint.com　JSON構文作成サイト",""]],
  //info-4
   [["info4",""]],
  //info-5
   [["10月3日　構想日",""],
    ["現段階でのイメージとしては「敷居の低いゲーム作成キット」。",""],
    ["要素としては六角柱を使って空間を作る。",""],
  　["しばらくはUnityの学習をする。",""]],
  //info-6
   [["info6",""]],

  ];

//関数再計算
var wordpart = 0;
for (var i = 0; i < callnumber; i++) {
wordpart += chatbar[callnumber - (i+1)].word.length;
}
part = wordpart;
console.log(part);

//文章表示
 for (var i = 0; i < word[part].length; i++) {
  var front = document.createElement("div");
  front.innerHTML = word[part][i][0];
  front.setAttribute("name",(i + 1) + "列目");
//CSSread
  if ((word[part][i][1] != null) == true) {
    for (var ii = 0; ii < (word[part][i].length-1)/2; ii++) {
    var iii = ii*2;
    css = css + word[part][i][iii+1] + ":" + word[part][i][iii+2] + ";";
    }
    front.setAttribute("style",css);
//CSSreset
    css = "";
  }

  document.getElementById("fronttx").appendChild(front);
 }

//chatbar文章
 for (var i = 0; i < chatbar[callnumber].word.length; i++) {
  var front = document.createElement(chatbar[callnumber].word[i][1]);
  front.innerHTML = chatbar[callnumber].word[i][0];
  front.setAttribute("name",(i + 1) + "番目");
  document.getElementById("chatbar").appendChild(front);
 }

 for (var i = 0; i < chatbar[callnumber].word.length; i++) {
 document.getElementById('chatbar').children[i].setAttribute("onclick","chatfront2(" + (part + i) + ");waves()");
 }
}


function chatfront2(callnumber){
  //frontのトップに
  document.getElementById("fronts").children[0].scrollIntoView(true);

  document.getElementById("fronttx").innerHTML = "";
  var chatpart = callnumber;
//文章表示
  for (var i = 0; i < word[chatpart].length; i++) {
   front = document.createElement("div");
   front.innerHTML = word[chatpart][i][0];
   front.setAttribute("name",(i + 1) + "列目");
//CSSread
   if ((word[chatpart][i][1] != null) == true) {
   for (var ii = 0; ii < (word[chatpart][i].length-1)/2; ii++) {
   var iii = ii*2;
   css = css + word[chatpart][i][iii+1] + ":" + word[chatpart][i][iii+2] + ";";
   }
   front.setAttribute("style",css)
//CSSreset
   css = "";
   }

   document.getElementById("fronttx").appendChild(front);
  }
  //drugset()
}
