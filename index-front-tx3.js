
function fourfront(callnumber){
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
   {
   word:
   [["","div"],
    ["大阪府高槻市","div"],
    ["大阪府茨城市、摂津市","div"],
    ["準備中","div"]],
  },

 ];

 word =[
  //["テキスト","属性","値"]
   [["",""]],
  //大阪府高槻市
   [["　",""],
    ["店舗1","width","auto","height","40vh","font-style","oblique"].concat(frontimg("picture/bookstore1.jpg")),
    ["店舗名:BOOKOFF 高槻栄店",""],
    ["住所:〒569-0825 大阪府高槻市栄町２丁目１９−１",""],
    ["最寄りの駅:阪急京都線　富田駅　徒歩約18分",""],
    ["　",""],
    ["補足:",""],
    ["この建物は住宅地の中の大通り沿いに面して拠点を構えている。",""],
    ["駐車場が少々狭く、自転車を用いる近隣に住む人が主な客だと考えらえる。",""],
    ["　",""],
    ["特徴としては、本棚のグループの内の入り口に近いグループだけ幅が違う事だろうか。",""],
    ["これが人の流れに方向性を生み、スムーズに店の奥に誘導する事を可能としている。",""],
    ["また、道と道が合流する点に「隙間」が生じる事により視線が通りやすくなり、次の",""],
    ["棚へと興味を促す要因となっている。",""],
    ["　",""],
    ["店舗2","width","auto","height","40vh","font-style","oblique"].concat(frontimg("picture/bookstore2.jpg")),
    ["店舗名:駿河屋高槻店",""],
    ["住所:〒569-0803 大阪府高槻市高槻町１３−５",""],
    ["最寄りの駅:JR京都線　高槻駅　徒歩約3分",""],
    ["　",""],
    ["補足:",""],
    ["この建物は阪急高槻駅とJR高槻駅との経路沿いに拠点を構えている。",""],
    ["雑貨屋のような店で、フィギュア、ストラップ、ゲーム等といったサブカルチャー系",""],
    ["の中古品を販売している。",""],
    ["商店街の中に存在するため近隣のデパートに用がある人、または電車を乗り換える人",""],
    ["といった歩行者が主な客となるだろう。",""],
    ["　",""],
    ["補足:",""],
    ["よくあるケージではなく簡易的な本棚を用いて外に並べているのが特徴的である。",""],
    ["そのため歩行者が足を止めずともざっくりと蔵書を見る事ができる。",""],
    ["足早な仕事や学校帰りの人を狙うならばこういった工夫が必要なのだ。",""],
    ["　",""],
    ["店舗3","width","auto","height","40vh","font-style","oblique"].concat(frontimg("picture/bookstore3.jpg")),
    ["店舗名:BOOKOFF 高槻別所店",""],
    ["住所:〒569-1113 大阪府高槻市別所中の町１−１",""],
    ["最寄りの駅:JR京都線　高槻駅　徒歩約15分",""],
    ["　",""],
    ["補足:",""],
    ["この建物は山沿いの幅が広い車線と国道170号線が交わる場所に拠点を構えている。",""],
    ["また駐車場が広いため車で行きやすい。",""],
    ["近くに関西大学、高槻北高等学校があり、学生が寄りやすい。",""],
    ["　",""],
    ["特徴としては、店内のコーナーの配置の入れ替えの頻度が多い事だろうか。",""],
    ["推測ではあるが、学生が来やすい事と国道からのアクセスのしやすさから通常の店舗",""],
    ["よりも、本またはその他を売りに来る客が多い事が考えられる。",""],
    ["そうなると適切に売らなければ大量の在庫を抱える事が予想できる。",""],
    ["過剰な在庫は同系列の所へ振り分ければいいが、それ以外の物を捌く工夫が必要だ。",""],
    ["その為、在庫状況と客の購買のデータなどから細かくレイアウトを変えているのでは",""],
    ["ないかと考える。",""]],
  //info-2
   [["　",""],
    ["店舗1","width","auto","height","40vh","font-style","oblique"].concat(frontimg("picture/bookstore4.jpg")),
    ["店舗名:お宝家 茨木店",""],
    ["住所:〒567-0031 大阪府茨木市春日５丁目５−３４",""],
    ["最寄りの駅:JR京都線　茨木駅　徒歩約17分",""],
    ["　",""],
    ["店舗2","width","auto","height","40vh","font-style","oblique"].concat(frontimg("picture/bookstore5.jpg")),
    ["店舗名:古本市場千里丘店",""],
    ["住所:〒566-0001 大阪府摂津市千里丘５丁目７−３",""],
    ["最寄りの駅:阪急京都線　摂津市駅　徒歩約14分",""]],
  //info-3
   [["info3",""]],

  ];
console.log(word[0][1])
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


function chatfront3(callnumber){
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
