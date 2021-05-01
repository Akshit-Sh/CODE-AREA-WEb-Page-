alert("Welcome to Akshit's site");

let name = prompt(" for security reasons what is your name buddy..?", "guest");
console.log(name);

function togglehide(){
    let buttonJ = document.getElementById('buttonJ');
    let paraJ = document.getElementById('paraJ');
    if(paraJ.style.display != 'none'){
        paraJ.style.display='none';
    }
    else{
        paraJ.style.display = 'block';
    }
}
function togglehide(){
    let buttonP = document.getElementById('buttonP');
    let paraP = document.getElementById('paraP');
    if(paraP.style.display != 'none'){
        paraP.style.display='none';
    }
    else{
        paraP.style.display = 'block';
    }
}
function togglehide(){
    let buttonC = document.getElementById('buttonC');
    let paraC = document.getElementById('paraC');
    if(paraC.style.display != 'none'){
        paraC.style.display='none';
    }
    else{
        paraC.style.display = 'block';
    }
}