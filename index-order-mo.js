
setmovie=[
["コーヒー大好きあかりちゃん【VOICEROID劇場】","sm33857477"],
["アイドルマスター 水瀬伊織 with 勇者王 「恋せよガオガイガー」","sm424909"],
["【手描き】　正義の味方　【Fate×クレしん】","sm22669144"],
["【Fate/Zero】言峰綺礼がマーボーを熱く語る動画【麻婆アニメ】","sm17025502"],
["【ACMAD】アーマードコアライブ！ストーリー01【ラブライブ】","sm22511861"],
["【声MAD？】マクロスF最終話を演じてみた【エキサイト再翻訳】 再うｐ","sm11904685"],
["体育倉庫にグラハムが介入","sm6118698"],
["【MAD】 意識の繭 【素晴らしき日々】","sm19632817"],
["カオスな競馬ゲーム　その1","sm11298955"],
["【第14回MMD杯本選】不明な提督が着任されました","sm25569104"],
["あのアニメにちびまる子ちゃんのナレーションを付けてみた","sm13974077"]
]

function movies(){
 idDelete("chatbar")

 document.getElementById('fronttx').innerHTML = "裏口ニコニコ部"
 var chatbar = document.createElement("div");
 chatbar.innerHTML = "";
 chatbar.setAttribute("name","chatbar");
 chatbar.setAttribute("id","chatbar");
 document.getElementById("fronts").appendChild(chatbar)

 for (var i = 0; i < setmovie.length; i++) {
  var front = document.createElement("div");
  front.setAttribute("onclick","moviemenu('"+ setmovie[i][1] +"');waves()");
  front.innerHTML = setmovie[i][0];
  document.getElementById("chatbar").appendChild(front);
 }
}
function moviemenu(mo){
 document.getElementById('fronttx').innerHTML =
 '<script type="text/javascript" src="http://ext.nicovideo.jp/thumb_watch/'+mo+'?w=510&amp;h=320"></script>'+
 '<iframe allowfullscreen="allowfullscreen" allow="autoplay" frameborder="0" width="510" height="320"'+
 'src="http://embed.nicovideo.jp/watch/'+mo+'?oldScript=1&amp;'+
 'referer=http%3A%2F%2Fcly7796.net%2Fwp%2Fsample%2Fembed-a-niconico-video-player%2F&amp;'+
 'from=0&amp;allowProgrammaticFullScreen=1" style="max-width: 100%;"></iframe>'
}
