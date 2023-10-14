function randomnum()
{

    let y = Math.floor(Math.random()*256);
    return y;
}
const body=document.querySelector('body');
const randomcol=function()
{
    let r=randomnum();
    let g=randomnum();
    let b=randomnum();
    

    body.style.backgroundColor=`rgb(${r},${g},${b})`;
}
let inter;
document.querySelector('#start').addEventListener('click',function(){
    if(!inter)
    {
    inter=setInterval(randomcol,100);
    }
    
});

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(inter);
    body.style.backgroundColor="#212121";
    inter=null;
   
});

