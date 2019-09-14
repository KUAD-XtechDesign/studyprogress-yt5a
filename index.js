//スタートセット
new Image().onload = function() {
  console.log("ページが読み込まれました！");
};

circlewidth = document.getElementById("circle").clientWidth;
circleheight = document.getElementById("circle").clientHeight;

document.getElementById("circle").style.top = 'calc(50% - ' + circleheight/2 + 'px)';
document.getElementById("circle").style.left = 'calc(50% - ' + circlewidth/2 + 'px)';

document.getElementById("one").style.top = 'calc(50% - ' + circleheight/2 + 'px)';


//スタートタイマー
startTime = new Date();

setTimeout(function() {
pagetx();
setTimeout(function() {
start();
},0)},3000);



function start(){
 document.getElementById("circle").style.top = 0;
 document.getElementById("circle-inner").setAttribute("name","to top");
 document.getElementById("circle").setAttribute("onclick","waves();topoint()");
 document.getElementById("one").style.top = 0;

 youtubestart()

}

function topoint() {
 document.getElementById("fronts").children[0].scrollIntoView({behavior:'smooth', block:'start'});
}

//ウェーブ
function waves() {
var set = document.getElementById("one");
set.innerHTML = "";

let ones = document.createElement('div');
ones.setAttribute("class","ones");
let wave =document.createElement('div');
wave.setAttribute("class","wave");

ones.appendChild(wave);
set.appendChild(ones);
}
waves();



//マウス操作関連
 document.onmousemove = function (e){
  nowTime = new Date();
  starttime = Math.floor((nowTime - startTime) / 1000)

  var rect = e.target.getBoundingClientRect();
  mouseX = Math.floor(e.clientX);
  mouseY = Math.floor(e.clientY);

  //座標
  //console.log(mouseX,mouseY);
  if (starttime >= 3) {

   document.getElementById('circle-inner').innerHTML = getelement(e.target,"name");

   //左右限界
   if (circlewidth/2 >= mouseX) {
    mouseX = circlewidth/2;
   }

   if (window.innerWidth - circlewidth/2 <= mouseX) {
    mouseX = window.innerWidth - circlewidth/2;
  }
   if (mouseY <= 130) {
    mouseY = 130;
   }
  //object move
  document.getElementById("circle").style.left = (mouseX-90) + "px";
  //Mujic move
   if (mouseX <= (window.innerWidth - 100)) {
    document.getElementById("media").style.top = (mouseY-90) + "px";
    document.getElementById("toyoutube").style.top = (mouseY-130) + "px";
    document.getElementById("reyoutube").style.top = (mouseY-50) + "px";
   }

    //drag
  if((document.getElementById("drag") != null) == true){
   var check = getelement(document.getElementById("drag"),"value");
   if (check== "1") {
    document.getElementById("drag").style.top = (mouseY-10) + "px";
    document.getElementById("drag").style.left = (mouseX-30) + "px";

    if (mouseY <= 250) {document.getElementById("drag").style.top = "250px"}
    if (mouseX <= 210) {document.getElementById("drag").style.left = "210px"}
    dragpoint = document.getElementById("drag").style.top.replace("px","") - (window.innerHeight - 270)
    console.log(dragpoint)
    document.getElementById("fronttx").style.paddingBottom = (260 - dragpoint) +"px";
    document.getElementById("chatbar").style.height = (250 - dragpoint) +"px";
   }
  }

 }
};

//drag-on
function dragon(){
var check = getelement(document.getElementById("drag"),"value");
document.getElementById("drag").setAttribute("value",check * -1);
}

//文字列-要素取得
function getelement(html,element){
 var getvalue = html.outerHTML.indexOf(element);
 var getvaluestart = html.outerHTML.indexOf('"',getvalue);
 var getvalueend = html.outerHTML.indexOf('"',getvaluestart+1);
 var gethtml = html.outerHTML.slice(getvaluestart+1,getvalueend);
 return gethtml;
}

function idDelete(id){
 if((document.getElementById(id) != null) == true){
 document.getElementById(id).remove()
 }
}
