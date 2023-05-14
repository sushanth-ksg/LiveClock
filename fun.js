setInterval(function() {
    var title = document.getElementById("change");
    const colors = [
        "#ff3cac", "#784ba0", "#2b86c5",
        "#ee0979", "#ff6a00",
        "#fc4a1a", "#f7b733",
        "#007991", "#78ffd6",
        "#f12711", "#f5af19"
      ];
      
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    title.style.color = randomColor;
}, 100);
h=document.getElementById("h1");
m=document.getElementById("m1");
s=document.getElementById("s1");
setInterval(function(){
    h.innerHTML=new Date().getHours();
    m.innerHTML=new Date().getMinutes();
    s.innerHTML=new Date().getSeconds();
},1)