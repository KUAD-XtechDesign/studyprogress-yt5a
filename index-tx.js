
menus = [["メイン画面","Home","frontdate(0)"],
         ["プロフィール","Profile","frontdate(1)"],
         ["授業","Lesson","frontdate(2)"],
         ["本屋巡り","Book tour","frontdate(3)"],
         ["コンテンツ4","contents4","frontdate(4)"],
         ["設定","Setting","frontdate(5)"]];

document.getElementById('titlelogo').innerHTML = "SENYOU.information";

//before insex.js
function pagetx() {
//スタート文字
//円-文字
 document.getElementById('circle-inner').innerHTML =　"start";
 document.getElementById('titlelogo').innerHTML = "";

 var front = document.createElement('div');
 front.setAttribute("id","fronts");
 front.setAttribute("name","front");
 document.getElementById("tx").appendChild(front);


 document.getElementById("fronts").onscroll = function(){
 var scroll = this.scrollTop;
 var range = this.scrollHeight - this.offsetHeight;
 //console.log(range +","+scroll );
 }


//maintag設定
//["表示名","name","共通function"]

 for (var i = 0; i < menus.length; i++) {
  var li = document.createElement( 'div' );
  li.innerHTML = menus[i][0];
  li.setAttribute("name",menus[i][1])
  li.setAttribute("value",i)
  li.setAttribute("onclick","waves();thisvalue(this);" + menus[i][2] + ";");
  document.getElementById("maintag").appendChild(li);
 }

 var startmenu = document.getElementById('maintag').children[0];
 var menuname = getelement(startmenu,"name");
 startmenu.setAttribute("style",
 "background: radial-gradient(circle, white, red 15px, black 25px);")
 startmenu.style.backgroundColor = "gray";
 startmenu.innerHTML = "[" + menuname + "]"//brow

 fronttx = document.createElement("div");
 fronttx.innerHTML = "";
 fronttx.setAttribute("id","fronttx");
 fronttx.setAttribute("name","fronttx");
 document.getElementById("fronts").appendChild(fronttx);
 frontdate(0)
}


//menu関連
var thisvalue = function (list) {
 txlength = document.getElementById('maintag').children

 for (var i = 0; i < txlength.length; i++) {
  txlength[i].innerHTML = menus[i][0];
  //txlength[i].style.position = "static";
  txlength[i].style.color = "rgba(255,255,255,1)";
  txlength[i].style.backgroundColor = "black";
  txlength[i].setAttribute("style","background:black")
  //front.setAttribute("value",i);
 }

 //menu.style
 list.style.color = "rgba(255,255,255,1)";
 list.setAttribute("style",
 "background: radial-gradient(circle, white, red 15px, black 25px);")
 //list.style.backgroundColor = "gray";
 var menuname = getelement(list,"name")

 list.innerHTML = "[" + menuname + "]"//brow
}

function plustx(number){
 var check = number;
 if (check == "1") {
 menus.push(["インフォメーション","information","frontdate(6)"])
 }
}
