//mujic-set
var[u,s] = mujicdate(0);
url = u;
urllength = url.length;
songname = s;

mujicact = 0;
thismode = ["Cool","Hot","Sour","Machine"]
modecolor = ["skyblue","red","yellow","gray"]
freeback = ["rBoA9cHG8z8","ejTgl3cCyDo","0PW5ZrZ3JCw"]

function youtubestart(){
console.log(url+","+songname)

spass = 0;
spasss = url[spass];
document.getElementById('media').setAttribute("name","");

//ランダム枠
url.push("");songname.push("ランダム");

//next&reset
buttona ='<button type="button" name="Reset" id="reyoutube"onclick="reyoutube();waves()">reset</button>'
buttonb ='<button type="button" name="Next" id="toyoutube"onclick="toyoutube();waves()">next Mujic</button>'

//selectbar
select = '<div id = "select" name=" "></div>'
songset = "";
for (var i = 0; i < songname.length; i++){songset = songset + "<option>" + songname[i] + "</option>"};
//selectmujic = '<p><select id="selectmujic" name="SelectMujic"onChange="selectedmujic()">'+songset +'</select></p>';

var selectmujic = document.createElement('select');
selectmujic.setAttribute("id","selectmujic");
selectmujic.setAttribute("name","SelectMujic");
selectmujic.setAttribute("onChange","selectedmujic()");
selectmujic.innerHTML = songset;

var modeset = "";
for (var i = 0; i < thismode.length; i++){modeset = modeset + "<option>" + thismode[i] + "</option>"};
var selectmm = document.createElement('select');
selectmm.setAttribute("id","mujicmode");
selectmm.setAttribute("name","mujicmode");
selectmm.setAttribute("onChange","selectmode()");
selectmm.innerHTML = modeset;

//back-img
var setback = '<div id=fronts-back-set></div>'
var backimg = '<img src="http://img.youtube.com/vi/' + spasss + '/mqdefault.jpg" id=fronts-back>';

document.getElementById('media').insertAdjacentHTML("beforebegin",buttona);
document.getElementById('media').insertAdjacentHTML("beforebegin",buttonb);
document.getElementById('media').insertAdjacentHTML("beforebegin",select);
document.getElementById('select').appendChild(selectmm);
document.getElementById('select').appendChild(selectmujic);

document.getElementById('fronts').insertAdjacentHTML("beforebegin",setback);
document.getElementById('fronts-back-set').innerHTML = backimg;

document.getElementById('selectmujic').options[spass].selected = true;
document.getElementById('mujicmode').options[mujicact].selected = true;
document.getElementById("mujicmode").style.backgroundColor = modecolor[mujicact];

reyoutube()
}

//YouTube読み込み
function reyoutube(){
//ランダムセット
url[urllength] = url[Math.floor(Math.random() * urllength)];

document.getElementById('media').innerHTML = '<img id="covermujic"' + 'src="picture/mujic.png" alt="">' +
 '<iframe id="you" height="500" name="' + songname[(url.indexOf(spasss))] + '"' +
 'src="https://www.youtube.com/embed/' + spasss + '?' +
 'showinfo=0' +
 'loop=1' +
 'modestbranding=1' +
 'controls=0&rel=0"' +
 'frameborder="0"' +
 'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>'

 //document.getElementById("fronts").style.backgroundImage = "url(http://img.youtube.com/vi/" + spasss + "/mqdefault.jpg)"
 document.getElementById('selectmujic').options[spass].selected = true;

document.getElementById('fronts-back-set').innerHTML = '<img src="http://img.youtube.com/vi/' + spasss + '/mqdefault.jpg" id=fronts-back>';
console.log(spasss)
//back-free-img
for (var i = 0; i < freeback.length; i++) {
 if (spasss == freeback[i]) {
  document.getElementById('fronts-back-set').innerHTML = '<img src="' + freebackurl(thismode.indexOf(document.getElementById("mujicmode").value)) + '" id=fronts-back>';
 }
}

  checkwidth(spass)
}

function toyoutube(){
 //for (var i = 0; i < 2; i++) {
 spass += 1;if (spass >= url.length) {spass=0;}
 spasss = url[spass];
 //spasss = url[Math.floor( Math.random()* url.length)];
 reyoutube();
}

function selectedmujic(){
  spass = songname.indexOf(document.getElementById("selectmujic").value);
  spasss = url[spass]

 reyoutube();
}

function selectmode(){
  var selectmode =  thismode.indexOf(document.getElementById("mujicmode").value);
  mujicact = selectmode;
  idDelete("select");
  idDelete("toyoutube");
  idDelete("reyoutube");
  var[u,s] = mujicdate(selectmode);
  mmc(u,s);
}


function checkwidth(calltx){
  //内部テキストに幅を合わせる。
  var checkwidth = document.createElement("div");
  checkwidth.setAttribute("id","checkwidth");
  document.body.appendChild(checkwidth);
  document.getElementById('checkwidth').innerHTML = songname[calltx].replace(/ /g, "");

  document.getElementById("checkwidth").setAttribute("style","position:fixed;font-size:20px;width:auto");
  document.getElementById("checkwidth").style.width = "auto";
  console.log(document.getElementById('checkwidth').clientWidth)
  var setwidth = document.getElementById('checkwidth').clientWidth;

  document.getElementById("selectmujic").style.width = (setwidth/23*13 + 40) + "px";
  document.getElementById('checkwidth').remove()
}



function mujicdate(num){
 var urls = [
  //1
  ["bbwGv197QF0","kHZGsL8sV2Q","IOz7xI7mofw",
   "9xokIPFFcUo","VQACxWe9yzc","HhRBn_4iFvc",
   "b4_CAqZKBU4","ya3yxTbkh5s","w6NDpF5UBp8",
   "YxV-3Jcw91s","LP9lHPaW2WU","SQFmQYv15Gc",
   "FpSKWhmx3w8","dYZkO6NQWqw","QW4x6Sv7FiE",
   "Xkq8VcxORmM","VWgOxMijbhc","Z5QOP98Hj9A",
   "uTK6FhKTIJw","6YCUjoBqpSc","jIlPjyXQPBY",
   "D2-W-qHG1ro","oBxABTpl5tQ","a-_pVXV1wsM",
   "VueJOmJe5Z8","fTyrBv8f9eo","8mP3ax-vyCA",
   "0PW5ZrZ3JCw"],
  //2
  ["1lNK9kWmUqk","x8YW7INN7Z4","RvaKJXWY4x4",
   "lBmPvWyQ-HY","JpxLaTsylBU","xIIYt5lcq3A",
   "Fc2t7R4lIvo","S39DPu7oIx8","Ic1hxXrhEKU",
   "l-hUsYmjDZ4","KtSpk2pMZrs","cD8l-eCFwXs",
   "_za61uzOmnE","sKh006SYF2c","6kcsqNFnccY",
   "eB6GytZ9c1A","ejTgl3cCyDo","0xLpWQ0us54",
   "4-BamISde_M"],
  //3
  ["UIYUL_ixE4k","2fOmk6pUob4","9Y9H_wFhMeg",
   "bV0D38nFUhU","BPcqAFjtM8Q","iPXxrYcg_GA",
   "UfrMELcvi8k","Gi4RXuH2hj4","jdLVqyXuU3o",
   "8JVnSfrqj0w","rBoA9cHG8z8","RWX8NRIOf64"],
  //4
  ["-fz_cIXi8OY","2k4Te7jmwLY","jQmYZWjLwzw",
   "Y6ljFaKRTrI","wKCAgoV8RPg","QHwaJVLtQrM",
   "2msp_bmAtCk","QHkbU3e-tIw"]];
 var songnames = [
  //1
  ["bone","冬の踊り子","Rainy Waltz",
   "Wasteland","walla walla jammin","Gwyn, Lord of Cinder",
   "暉映の戦場","太陽は昇る","Represent",
   "Tactics","Ready to Fight","pianoxforte",
   "すべての人へ","Bravado","vent",
   "Water Forest","St Xevs Comm Tower","希望与えし '戌吠の神楽'",
   "for+","Heal","富士樹海",
   "Caligula","書を愛して 狂う者曰く、紙は常に我らと共に","Fatigas Del Querer",
   "FOR THE RECORD.B","虚構の地","mid night summer magic",
   "Tractatus Logico philosophicus"],
  //2
  ["NeKoMaJiN vs","防来/ゾフィエル","OVERDOSE",
   "Mechanized Memories in the end","Brotherswing","Shall Never Surrender",
   "Dille","To Be More","THE DEEP STRIKER",
   "99 Glooms","115","Festivo",
   "Decisive Battle","Bondage head","From Shadows",
   "Assign Monk","Fly Away","Twister (Kingdom Remix)",
   "shining"],
  //3
   ["Heaven's Place","Gentleman","星巡りの詩",
    "Because","The Sore Feet Song","未来予報",
    "another dawn","時空のたもと","Speedracer",
    "Key To My Heart","VON","Opium"],
  //4
   ["paranoia","弾けないギターを片手に。","Alice in 冷凍庫",
    "'Still Alive'","HeavenZ-ArmZ","0259 in my room",
    "Kidz","月光"]];

 var url = urls[num]
 var songname = songnames[num]
 return[url,songname]
}

function mmc(call1,call2){
url = call1;
songname = call2;
urllength = url.length;
youtubestart()
}

function freebackurl(num){
 var url =[
         //cool
         ["https://img.gifmagazine.net/gifmagazine/images/1266140/original.gif",
          "https://img.gifmagazine.net/gifmagazine/images/2623591/original.gif",
          "https://img.gifmagazine.net/gifmagazine/images/1280207/original.gif"],
         //Hot
         ["https://img.gifmagazine.net/gifmagazine/images/3015626/original.gif",
          "https://img.gifmagazine.net/gifmagazine/images/3016474/original.gif",
          "https://img.gifmagazine.net/gifmagazine/images/3299019/original.gif"],
         //Sour
         ["https://img.gifmagazine.net/gifmagazine/images/3633173/original.gif",
          "https://img.gifmagazine.net/gifmagazine/images/3106894/original.gif",
          "https://img.gifmagazine.net/gifmagazine/images/87697/original.gif"],
         ]
 var select = url[num]
 var length = Math.floor(Math.random() * select.length);
 return url[num][length];
}
