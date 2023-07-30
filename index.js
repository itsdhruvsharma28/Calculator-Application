let screen="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
           screen=eval(screen);
     document.querySelector('.screen').value=screen;
        }
        else if(e.target.innerHTML == "C"){
            screen="";
        document.querySelector('.screen').value=screen;   
        }
        else{
        console.log(e.target);
        screen= screen + e.target.innerHTML;
        document.querySelector('.screen').value=screen;
        }
    })
})

