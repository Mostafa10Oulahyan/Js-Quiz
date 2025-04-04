
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let text = "Choose Your Language";
let index = 0
let x = 0
function drawLetter() {
    if (index < text.length) {
        ctx.font = "40px Pacifico "
        ctx.fillStyle = "rgb(0, 255, 157)"; 
        ctx.fillText(text[index], x, 150)
        x += 22
        index++
    } else {
        clearInterval(interval)
        Start_Second_line()
    }
}
let interval = setInterval(drawLetter, 200)

function Start_Second_line(){
        let text1 = "You W ant!";
        let index1 = 0
        let x1 = 120   
        function drawLetter1() {
            if (index1 < text1.length) {
                ctx.font = "40px Pacifico "
                ctx.fillStyle = "rgb(0, 255, 157)" 
                ctx.fillText(text1[index1], x1, 200)
                x1 += 22
                index1++
            }
            else {
            clearInterval(interval1)
            }
        }
        let interval1 = setInterval(drawLetter1, 200)
}
//--------------------------------------------------------------------------
let Html=document.getElementById("html")
let Css=document.getElementById("css")
let Js=document.getElementById("js")
document.querySelectorAll("input[type=button]").forEach(button=>{
    button.addEventListener("click",function(){
            if (this.parentNode.querySelector(".start")){//bax ytzad mara whda
                return
            }
           let newInput=document.createElement("input")
           newInput.type = "button";
           newInput.value = "Start Your Quiz";
           newInput.classList.add("start");
           this.parentNode.appendChild(newInput)
           newInput.onclick = function(){
            alert(`Starting the ${button.value} Quiz!`);
            newInput.remove()  
        }
    })
})
//             Theme Mode
const checkbox = document.getElementById('themeCheckbox');
checkbox.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', this.checked);
});