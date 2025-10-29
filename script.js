let color=document.querySelector("#color");
let button=document.querySelector("#btn");
let currentcolor="#ffffff";
button.addEventListener("click",()=>{
   let randomcolor=getRandomColor();
   document.body.style.backgroundColor=randomcolor;
   color.textContent=randomcolor;

   currentcolor=randomcolor;
})
function getRandomColor(){
    let letters="0123456789ABCDEF";
    let hex="#";
    for(let i=1;i<=6;i++){
        hex=hex+ letters[Math.floor(Math.random()*16)];

    }
    return hex;
}

let copy=document.querySelector("#copy");
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(currentcolor);
    alert("Color Copied : "+ currentcolor);
})

