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