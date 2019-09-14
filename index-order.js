
var unknown = document.createElement("input");
unknown.setAttribute("id","unknown");
unknown.setAttribute("name","");
unknown.setAttribute("type","text");
unknown.setAttribute("onblur","orderdelete()");
unknown.setAttribute("onFocus","orderdelete()");
unknown.setAttribute("onChange","getorder(this.value)");

unknown.style.opacity = "0";
document.body.appendChild(unknown);

 function orderdelete(){
 document.getElementById("unknown").value = "";
 }


 function getorder(getcode){
  console.log("check code")

  //フォーム表示/非表示
  if (getcode.slice(0,5) == "hello") {
   unknown.style.opacity = "1";
  }
  if (getcode.slice(0,6) == "goodby") {
   unknown.style.opacity = "0";
  }

  if (getcode.slice(0,3) == "eye") {
  document.getElementById('circle-inner').innerHTML =
  "<div style='position:relative;" +
  "width:50%;" +
  "height:50%;" +
  "border-radius:50%;" +
  "background:black;" +
  "'></div>"
  }

  //時間表示
  if (getcode.slice(0,4) == "time") {
   var to = "<br>";
   var date = new Date();
   var year = date.getYear() + 1900;
   var month = date.getMonth() + 1;
   var day = date.getDate();
   var hours = date.getHours();
   var minutes = date.getMinutes();

   document.getElementById('circle-inner').innerHTML =
   year + "年" + to +
   month + "月" +
   day + "日" + to +
   hours + "時" +
   minutes + "分" + to;
  }

  //タグ追加
  //to index-tx.js
  if (getcode.slice(0,4) == "info") {
  plustx(1);
  }

  //リロード
  if (getcode.slice(0,6) == "reload") {
  location.reload();
  }

  //コンソール
  if (getcode.slice(0,7) == "console") {

  //開く
   if (getcode.slice(7,11) == "open") {
    if((document.getElementById("console") != null) == false){
     var order = document.createElement('textarea');
     order.setAttribute("id","console");
     order.setAttribute("name","console");
     document.body.appendChild(order);
     document.getElementById('console').style.position = "fixed";
     document.getElementById('console').style.top = "210px";
     document.getElementById('console').style.left = "calc((50% + 90px)";
     document.getElementById('console').style.width = "calc((50% - 90px) - 100px)";
     document.getElementById('console').style.height = "calc(50% - 230px)";
     document.getElementById('console').style.backgroundColor = "rgba(255,255,255,0.6)";
     document.getElementById('console').style.fontSize = "24px";
     }
    }

   //閉じる
   if (getcode.slice(7,12) == "close") {
    idDelete("console");
    }
   }

  //back-img
  if (getcode.slice(0,4) == "back") {
   if (getcode.slice(4,8) == "mini") {
   document.getElementById('fronts-back-set').style.width = "calc(50% - 100px)";
   document.getElementById('fronts-back-set').style.height = "calc(50% - 110px)";
   }
   if (getcode.slice(4,7) == "set") {
   document.getElementById('fronts-back-set').style.width = "calc(100% - 210px)";
   document.getElementById('fronts-back-set').style.height = "calc(100% - 220px)";
   }
   if (getcode.slice(4,8) == "none") {
   document.getElementById('fronts-back-set').style.width = "0";
   document.getElementById('fronts-back-set').style.height = "0";
   }
  }

  //fontsize
  if (getcode.slice(0,8) == "fontsize") {
   if (isFinite(getcode.slice(8)) == true) {
    console.log("#")
    document.getElementById('fronttx').style.fontSize = getcode.slice(8)+"px";
   }
  }
  //mujic
  if (getcode.slice(0,6) == "mujic0") {
   if((document.getElementById("fronts") != null) == true){
    idDelete("select");
    idDelete("toyoutube");
    idDelete("reyoutube");
    var[u,s] = mujicdate(0);
    mmc(u,s);
   }
  }
  if (getcode.slice(0,6) == "mujic1") {
   if((document.getElementById("fronts") != null) == true){
    idDelete("select");
    idDelete("toyoutube");
    idDelete("reyoutube");
    var[u,s] = mujicdate(1);
    mmc(u,s);
   }
  }
 }
