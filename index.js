
let clock = document.getElementById("clock");
let start = document.getElementById("start").addEventListener("click",starting)
let stop = document.getElementById("stop").addEventListener("click",stopped);
let clear = document.getElementById("clear").addEventListener("click",cleared);

let hours = 0;
let minutes = 0;
let seconds = 0;
let active = false;

let timer;
clock.innerHTML = hours+":"+minutes+":"+seconds;


function mill(){
  if(milliseconds<99){
    milliseconds++;
  }else{
    milliseconds = 0;
    sec();
  }
  clock.innerHTML = hours+":"+minutes+":"+seconds;
}

function sec(){
  if(seconds<59)
  {
    seconds++;
  }else
  {
    seconds = 0;
    min();
  }
  
  clock.innerHTML = hours+":"+minutes+":"+seconds;
  
}
function min(){
  if(minutes<60){
    minutes++;
  }else{minutes = 0;hou();}
  
  clock.innerHTML = hours+":"+minutes+":"+seconds;
}

function hou(){
  hours++;
  clock.innerHTML = hours+":"+minutes+":"+seconds;
}

function starting(){
  if(!active){
  timer = setInterval(sec,1000);
  active = true
}
  
}

function stopped(){
  active = false;
  clearInterval(timer);
}

function cleared(){
active = false;
clearInterval(timer);
hours = 0;
minutes = 0;
seconds = 0;


clock.innerHTML = hours+":"+minutes+":"+seconds;
}