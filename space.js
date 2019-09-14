

function two(){
var menu = "";

for (var i = 0; i < 5; i++) {
var menupp = "<div class = 'menus'>メニュー" + i + "</div>"
var menu = menu + menupp;
}

document.getElementById("submenu").innerHTML = menu;

for (var i = 0; i < 5; i++) {
  document.getElementById("submenu").children[i].setAttribute("value","aaa");
 }
}
//setTimeout("two()",2200)




// プログレスバーの進捗値
 var val;
 // 一定間隔で処理を行うintervalのIDを保持
 var intervalID;

 // ボタンを押した時に動く関数
 function func1() {
   val = 0;
   // ボタンを無効にする(何回も押せないように)
   document.getElementById("myButton").disabled = true;
   // 50msおきにプログレスバーを更新する
   intervalID = setInterval("updateProgress()", 50);
 }

 // プログレスバーを更新する
 function updateProgress() {
   // プログレスバーの進捗値を更新し、プログレスバーに反映させる
   val += 1;
   document.getElementById("myProgress").value = val;
   document.getElementById("myProgress").innerText = val + "%";
   console.log("progress:", val, "%");

   // 最大値まで達したら終了
   if (val == 100) {
     clearInterval(intervalID);
     document.getElementById("myButton").disabled = false;
   }
 }
