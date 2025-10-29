let color=document.querySelector("#color");
let button=document.querySelector("#btn");
button.addEventListener("click",()=>{
   let randomcolor=getRandomColor();
   document.body.style.backgroundColor=randomcolor;
   color.textContent=randomcolor;
})
function getRandomColor(){
    let letters="0123456789ABCDEF";
    let hex="#";
    for(let i=1;i<=6;i++){
        hex=hex+ letters[Math.floor(Math.random()*16)];

    }
    return hex;
}

