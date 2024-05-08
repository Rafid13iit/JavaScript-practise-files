//placing head tag//
const body = document.body;
let headElement = document.createElement('h1');
headElement.textContent = ' Heavy metal disco playlist';
headElement.classList.add('.headContainer');
headElement.style.color = 'black';
console.log( headElement);
body.appendChild(headElement);
//change background-color//
body.style.backgroundColor = '#8f866d';
//styling head tag//
headElement.style.textTransform = ' uppercase';
headElement.style.textShadow = '-3px 4px 2px rgba(53, 16, 0, 0.81) ';
headElement.style.textAlign = 'center';
// time in the left corner//
let datum = document.createElement('p');
datum.setAttribute('id','date');
body.appendChild(datum);
function clockTick() {
  var currentTime = new Date(),
      day = currentTime.getDate(),
      month = currentTime.getMonth() + 1,
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      text = (day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds);
 
  document.getElementById('date').innerHTML = text;
}
setInterval(clockTick, 1000);
//css to <p id='date'>
datum.style.position = 'fixed';
datum.style.top = '1.8em';
datum.style.left = '1.07em';
datum.style.maxWidth = '10em';
datum.style.padding = '0.18em 0.42em';
datum.style.backgroundColor = '#7d8a9e ';
datum.style.border = ' 0.2em outset rgb(12,155,74)';
datum.style.borderRadius = '25em';
datum.style.opacity = "0.58 ";
datum.style.zIndex = -2;

