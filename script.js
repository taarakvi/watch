let h = document.getElementById("h")
let m = document.getElementById("m")
let s = document.getElementById("s")
function time(){
let date = new Date()
let hr = date.getHours();
let mm = date.getMinutes()
let ss = date.getSeconds()
let hrRotation = 30*hr+mm/2
let mmRotation = 6*mm
let ssRotation = 6*ss
h.style.transform = `rotate(${hrRotation}deg)`;
m.style.transform = `rotate(${mmRotation}deg)`;
s.style.transform = `rotate(${ssRotation}deg)`;

}
setInterval(time,1000);