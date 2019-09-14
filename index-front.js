

functionset = ["frontone()","twofront(0)","threefront(0)","fourfront(0)","not()","not()","not()"]
css = "";

//before index-tx.js
function frontdate(callnumber){
  //element reset
  document.getElementById('titlelogo').innerHTML = "";
  //frontのトップに
  document.getElementById("fronts").children[0].scrollIntoView(true);

  idDelete("drag")
  idDelete("chatbar")
  //front reset
  document.getElementById("fronttx").style.paddingBottom = "0";
  document.getElementById("fronttx").style.wordBreak = "";
  document.getElementById("fronttx").innerHTML = "";
  document.getElementById("fronttx").style.textAlign = "left";
  document.getElementById("fronttx").style.paddingLeft = "10px";
  //document.getElementById("fronttx").style.paddingBottom = "250px";

  return Function('"use strict";return (' + functionset[callnumber] + ')')();
}

function frontimg(url){
var cut = "'"
var img = 'background:url('+cut+url+cut+');background-repeat:no-repeat;background-size:auto 100%;"';
return img;
}

function not(){
 document.getElementById("fronttx").style.textAlign = "center"
 document.getElementById("fronttx").style.paddingLeft = "0px"

 word = [
  ["Coming Soon…","div"],
 ];

 for (var i = 0; i < word.length; i++) {
  front = document.createElement(word[i][1]);
  front.innerHTML = word[i][0];
  front.setAttribute("name",(i + 1) + "列目");
  document.getElementById("fronttx").appendChild(front);
 }
}


function frontone(){
 document.getElementById("fronttx").style.textAlign = "center"
 document.getElementById("fronttx").style.paddingLeft = "0px"

 //文章
 word = [
  ["[当WEBページにお越しいただきありがとうございます]","padding-top","100px"],
  ["[どうぞごゆっくりご覧になってください]","padding-bottom","50px"],
 ];

 //出力
 for (var i = 0; i < word.length; i++) {
  front = document.createElement("div");
  front.innerHTML = word[i][0];
  front.setAttribute("name",(i + 1) + "列目");
  //CSSread
  if ((word[i][1] != null) == true) {
   for (var ii = 0; ii < (word[i].length-1)/2; ii++) {
   iii = ii*2;
   css = css + word[i][iii+1] + ":" + word[i][iii+2] + ";";
   }
   front.setAttribute("style",css);
  //CSSreset
   css = "";
  }

  document.getElementById("fronttx").appendChild(front);
 }
}
