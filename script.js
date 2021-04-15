
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://github.com/balintAlexandru/PWA/blob/main/sw.js') ;
}



let symbol = document.querySelectorAll(".b1");
let show = document.querySelector(".show");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");

function values(x){
    
    for (let i = 0; i < x.length; i++){

        x[i].addEventListener('click', () => {
                     
              show.innerHTML += x[i].value; 
              show.value += x[i].value;     
       });
    }
     
}
function solve(){
    let x1 = eval(show.value);
    show.value = "";
    show.value += x1;
}
function clear(){
    show.value = "";
}

b2.addEventListener('click',solve);
b3.addEventListener('click',clear);
values(symbol);
 

