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

// digital watch
let hour = document.getElementById("hour")
let minut = document.getElementById("minut")
let second = document.getElementById("second")
let amPM = document.getElementById("am/pm")
function dWatch(){
    let date = new Date()
    let hr = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    hour.textContent = hr
    minut.textContent = mm;
    second.textContent = ss;
    if(hr>=12){
        amPM.textContent = "PM"
    }else{
        amPM.textContent = "AM"
    };
}dWatch()
setInterval(dWatch,1000)