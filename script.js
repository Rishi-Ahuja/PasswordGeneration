var x="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var y="abcdefghijklmnopqrstuvwxyz";
var z="0123456789";
var a="!@#$%^&*_-";
var ps="";
var b=document.getElementById('UP');
var c=document.getElementById('lp');
var d=document.getElementById('num');
var e=document.getElementById('sc');
if (b.checked=true){
  var r=Math.floor(Math.random()*25);
  ps=ps+x[r];
}
if (c.checked=true){
  var r=Math.floor(Math.random()*25);
  ps=ps+y[r];
}
if (d.checked=true){
  var r=Math.floor(Math.random()*9);
  ps=ps+z[r];
}
if (e.checked=true){
  var r=Math.floor(Math.random()*9);
  ps=ps+a[r];
}
function generate(){
  document.getElementById('rt').innerHTML(ps); 
}
