let q=document.getElementById('hr');
let w=document.getElementById('min');
let e=document.getElementById('sec');


function update(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    q.innerHTML=h%12;
    w.innerHTML=m;
    e.innerHTML=s;
}
setInterval(update,1);