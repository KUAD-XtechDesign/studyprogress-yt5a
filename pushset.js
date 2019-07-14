var push1 = ["ホーム画面","授業","メモ"];
var push1link = ["aaaa","abbb","accc"];

var push2 = [
  ["ホーム","X tech"],
  ["one","two","three","four"],
  ["一","二","三"]
];
var push2url = [
  ["index.html","https://xtd-shira.github.io/subject_index/"],
  ["index.html","index.html","index.html","index.html"],
  ["index.html","index.html","index.html"]
];

pin = '"';
start2 = 0;
xxx = "<div class = 'top'></div>"+"<p>" + push2[start2][i] + "</p>" + "<div class = 'bottom'></div>"



var inners = "";
for (var i = 0; i < push1.length; i++) {
inners +=
"<div type='button' class='button1' onclick='" + push1link[i] + "(" + pin + push1[i] + pin + ")'>" + push1[i]+ "</div>" +
"<span>&nbsp;<span>"
}
document.getElementById("push1").innerHTML = inners;

pushtwo();

function pushtwo(s2){
start2 = 0;
if (s2) {
start2 = s2;
}
//console.log(s2)
//console.log(start2)
var left = 100;
var top = 300;
var inner = "";
for (var i = 0; i < push2[start2].length; i++) {
inner +=
"<a  href='" + push2url[start2][i] +
"' class='button2' style = 'top:" + top + "px;left:" + left + "px'>" + "<div class = 'top'></div>"+"<div class = 'bottom'>"+"<p>" + push2[start2][i] + "</p>" + "</div>" + "</a>"
left += 200;
top -= 40;
}
document.getElementById("push2").innerHTML = inner;
}
