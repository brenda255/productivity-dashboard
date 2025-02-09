const timeElement = document.getElementById("clock");

//Digital Clock Function
function updateClock(){
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    
    timeElement.innerText = `${hours}:${minutes}:${seconds} ${amPm}`
}

setInterval(updateClock, 1000);
updateClock();


//Background Color Changer
let bgChanger = document.querySelector(".bg-color-changer");

bgChanger.addEventListener('click', function(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let redHex = red.toString(16).padStart(2, '0');
    let greenHex = green.toString(16).padStart(2, '0');
    let blueHex = blue.toString(16).padStart(2, '0');

    let hexColor = `#${redHex}${greenHex}${blueHex}`;
    document.body.style.backgroundColor = hexColor;
} )
