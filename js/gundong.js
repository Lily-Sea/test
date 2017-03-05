//滚动
var ul=document.getElementById("jietu");
var a=0;
var timer = setInterval(function(){
    a--;
    if(a<=-1888){
        a=0;
        ul.style.left=0+"px";
    }
    ul.style.left=a+"px"
},20);
ul.onmouseenter=function(){
    clearInterval(timer);
}
ul.onmouseleave=function(){
    timer = setInterval(function(){
        a--;
        if(a<=-1888){
            a=0;
            ul.style.left=0+"px";
        }
        ul.style.left=a+"px"
    },20);
}