//create body element and it's settings //
var body = document.querySelector('body');
body.style.backgroundColor = '#8f866d';
//creating grid container//
var gridContainer = document. createElement('div');
gridContainer.classList.add('.gridContainer');
gridContainer.style.border = ' 0.2em solid black';
body.appendChild(gridContainer);
//placing head tag and head item//
var itemHead = document.createElement('div');
gridContainer.appendChild(itemHead);
itemHead.classList.add('.itemHead');
itemHead.classList.add('.items');
itemHead.style.border = ' 0.5em  solid brown';
var headElement = document.createElement('h1');
headElement.textContent = ' Disco metal playlist';
headElement.classList.add('.itemHead');
headElement.style.color = 'black';
headElement.style.border = '0.2em dashed red';
itemHead.appendChild(headElement);
//styling head tag//
headElement.style.textTransform = ' uppercase';
headElement.style.textShadow = '-3px 4px 2px rgba(53, 16, 0, 0.81) ';
headElement.style.textAlign = 'center';
// time in the left corner//
var datum = document.createElement('p');
datum.setAttribute('id','date');
body.appendChild(datum);
//time function//
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
//css to <p id='date'>//
datum.style.position = 'fixed';
datum.style.top = '1.8em';
datum.style.left = '1.07em';
datum.style.maxWidth = '10em';
datum.style.padding = '0.18em 0.42em';
datum.style.backgroundColor = '#7d8a9e ';
datum.style.border = ' 0.2em outset rgb(12,155,74)';
datum.style.borderRadius = '25em';
datum.style.opacity = "0.58";
datum.style.zIndex = -30;
//hr line//
var HrLine =  document.createElement('hr');
body.appendChild(HrLine);
HrLine.style.lineHeight = '1.5em';
HrLine.style.color = 'black';
//input fields grid-item//
var itemInp = document.createElement('div');
itemInp.classList.add('.itemInp');
itemInp.classList.add('.items');
itemInp.style.border = ' 3px solid green';
gridContainer.appendChild(itemInp);
//adding an input fields-first bandname//
var inpBand = document.createElement('input');
inpBand.setAttribute('id','bandName');
inpBand.setAttribute('placeholder','Enter band name');
inpBand.setAttribute('class','inputClass');
inpBand.setAttribute('type','text');
itemInp .appendChild(inpBand);
//adding an input fields-second, song name//
var inpSong = document.createElement('input');
inpSong.setAttribute('id','songName');
inpSong.setAttribute('placeholder','Enter song name');
inpSong.setAttribute('class','inputClass');
inpSong.setAttribute('type','text');
itemInp .appendChild(inpSong);
//adding an input fields-third, album name//
var inpAlb = document.createElement('input');
inpAlb.setAttribute('id','albumName');
inpAlb.setAttribute('placeholder','Enter album name');
inpAlb.setAttribute('class','inputClass');
inpAlb.setAttribute('type','text');
itemInp .appendChild(inpAlb);
//adding an input fields-fourth, Country//
var inpState = document.createElement('input');
inpState.setAttribute('id','stateName');
inpState.setAttribute('placeholder','Enter country band is from');
inpState.setAttribute('class','inputClass');
itemInp .appendChild(inpState);
//adding an input fields-fifth, year released//
var inpYear = document.createElement('input');
inpYear.setAttribute('id','publishYear');
inpYear.setAttribute('placeholder','Year song was released ');
inpYear.setAttribute('class','inputClass');
inpYear.type = 'number';
itemInp .appendChild(inpYear);
//adding an submit button//
var subBtn = document.createElement('button');
subBtn.setAttribute('id','subSongBtn');
subBtn.classList.add('.BtnClass');
subBtn.textContent  = 'Submit song ';
subBtn.addEventListener('click',songAdder);
itemInp.appendChild(subBtn);
//adding songsaving button//
 var savBtn = document.createElement('button');
savBtn.setAttribute('id','savSongBtn');
savBtn.classList.add('.BtnClass');
savBtn.textContent  = 'Save song? ';
savBtn.addEventListener('click', songSaver )
itemInp.appendChild(savBtn); 
//clear button//
var clearBtn= document.createElement('button');
clearBtn.setAttribute('id','clearBtn');
clearBtn.classList.add('.BtnClass');
clearBtn.textContent  = ' List reset ';
itemInp.appendChild(clearBtn);
//clearBtn.addEventListener('click',songFilter);
// filter btn
var filtBtn= document.createElement('button'); 
filtBtn.setAttribute('id','filtBtn');
filtBtn.classList.add('.BtnClass');
filtBtn.textContent  = ' songfilter ';
filtBtn.addEventListener('click',songFilter);
itemInp.appendChild(filtBtn); 

// local storage button//
var localBtn = document.createElement('button');
localBtn.setAttribute('id','localBtn');
localBtn.classList.add('.BtnClass');
localBtn.textContent  = ' Local storage';
itemInp.appendChild(localBtn); 
//adding songcharter  array lists//
var itemWanted = document.createElement('div');
gridContainer.appendChild(itemWanted);
itemWanted.classList.add('.items', '.wantedRecords');
itemWanted.setAttribute('id','wanted')
//unwanted lists//
var itemUnwanted = document.createElement('div');
gridContainer.appendChild(itemUnwanted);
itemUnwanted.classList.add('.items');
itemUnwanted.setAttribute('id','unwanted');
//creating function of adding songs//
 function songAdder(){
    var record = document.createElement('p');
     record.classList.add('.records');
      itemWanted.appendChild(record);
       var savItem = inpBand.value +' ' + inpSong.value;
       record.innerHTML = savItem;
     localStorage.setItem('name',record.innerHTML);
             }
  //creating function of filtering songs//
var songFilterDiv = document.createElement('div');
    songFilterDiv.classList.add('.songFilter');
    songFilterDiv.style.visibility = 'hidden';
    songFilterDiv.style.zIndex = -40;
itemInp.appendChild(songFilterDiv);
console.log(songFilterDiv);
function songFilter(){
       songFilterDiv.style.visibility = 'visible';
   songFilterDiv.style.zIndex = 30;
   songFilterDiv.style.height = '10em';
    songFilterDiv.style.transform = 'translate(0,-6em)';
  var savItem = inpBand.value +' ' + inpSong.value;
    songFilterDiv.innerHTML = savItem;
    console.log(songFilterDiv);
}
//creating function of saving to local storage//
function songSaver(){
    var papa = document.querySelectorAll('.records');
       localStorage.setItem('record', papa.innerHTML);
    var hura = localStorage.itemValue;
    itemUnwanted.appendChild(hura);
    console.log(papa);
    console.log(record)
    console.log(hura);
    console.log(localStorage);
}
// showing local storage to html//
function showStore(){
    var hura = document.createElement('p');
    var gugu = localStorage.getItem('name');
    console.log(gugu);
    hura.innerHTML = gugu;
        itemWanted.appendChild(hura);
    
   }
localBtn.addEventListener('click',showStore);