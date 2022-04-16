let name = document.getElementById("name");
let btn = document.getElementById("btn");

let colors = ["red", "crayon", "blue", "yellow", "violet","lime","magenta","cyan"];
let names= ["Loise","Essy","Ez","Lucy","Aaar"]



const changeColor = () => {
    // alert("Hello World! ")
     let randNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randNum];
    let randNameNum=Math.floor(Math.random()*names.length);
    document.getElementById("name").innerHTML=names[randNameNum];
   }

btn.addEventListener('click', changeColor)