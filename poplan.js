timerID = setInterval('clock()',100); //0.5秒毎にclock()を実行

function clock() {
  document.getElementById("pop").innerHTML = getNow();
}

function getNow() {
  var top = Math.floor( Math.random() * (window.innerHeight - 100)) + 100;
  var left = Math.floor( Math.random() * (window.innerWidth - 100)) + 100;
  var s = "<font size='10'><div style='position:absolute;top:" + top + "px;left:" + left + "px;color = red'>虫</div></font>";
  return s;
}
