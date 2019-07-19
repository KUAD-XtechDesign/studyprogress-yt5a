function tt(cc){
document.getElementById("tt").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + cc + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//setTimeout("tt()", 3000);
}

var many　= {a:[],aa:[],aaa:[]};
var jaz = [many.a,many.aa,many.aaa]
var end = "";

for(let start = 'a'.charCodeAt(),  end = 'z'.charCodeAt(); start <= end; start++) {
  many.a.push(String.fromCharCode(start));
}
for(let start = 'A'.charCodeAt(),  end = 'Z'.charCodeAt(); start <= end; start++) {
  many.aa.push(String.fromCharCode(start));
}
for(let start = '0'.charCodeAt(),  end = '9'.charCodeAt(); start <= end; start++) {
  many.aaa.push(String.fromCharCode(start));
}
  many.aaa.push("_")

  console.log(many.a);
  console.log(many.aa);
  console.log(many.aaa);
  for (var i = 0; i < 11; i++) {
  var ons = jaz[Math.floor(Math.random()*3)];
  var ons = ons[Math.floor(Math.random()*ons.length)]
  end = end + ons;
  }
  dd = end
  tt(dd)
  console.log(dd)
//setTimeout("tt()", 1000);
