
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

 part = callnumber;

 //一列約41文字、四列まで
 var chatbar=[
 //chat1
   {
   word:
   [["準備中","div"],
    ["準備中","div"],
    ["準備中","div"],
    ["準備中","div"],
    ["準備中","div"],
    ["準備中","div"]],
  },

 ];

 word =[
  //["テキスト","属性","値"]
  //info-1
   [["info1",""]],
  //info-2
   [["info2",""]],
  //info-3
   [["info3",""]],
  //info-1
   [["info4",""]],
  //info-2
   [["info5",""]],
  //info-3
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
  var front = document.createElement("div");
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
