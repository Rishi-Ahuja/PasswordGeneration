var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower="abcdefghijklmnopqrstuvwxyz";
var integers="0123456789";
var special="!@#$%^&*_-";
var ps="";
var a=document.getElementById('UP');
var b=document.getElementById('lp');
var c=document.getElementById('num');
var d=document.getElementById('sc');
function generate(){
  ps=document.getElementById('keyword').value
  var g=ps.length;
  if (a.checked){
  ps=ps+upper[Math.floor(Math.random()*25)];
  }
  if (b.checked){
  ps=ps+lower[Math.floor(Math.random()*25)];
  }
  if (c.checked){
  ps=ps+integers[Math.floor(Math.random()*9)];
  }
  if (d.checked){
  ps=ps+special[Math.floor(Math.random()*9)];
  }
  document.getElementById('rt').innerHTML=ps;
}
