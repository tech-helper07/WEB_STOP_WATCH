let starbtn =document.querySelector(".start_btn");
let stopbtn =document.querySelector(".stop_btn");
let resetbtn =document.querySelector(".reset_btn");

let hour =document.querySelector(".hour");
let minute =document.querySelector(".minute");
let second =document.querySelector(".second");

let time=[0,0,0];
let timerid = 0;


starbtn.addEventListener("click",function(){
    if(timerid != 0){
        return;
    }
    starbtn.classList.add("disable");
    timerid = setInterval(() => {

        time[2]++;
        if(time[2] == 60){
            time[1]++;
            time[2] = 0;
        }
        if(time[1] == 60){
            time[0]++;
            time[1] = 0;

        }
        console.log(time);
        displayTime();
        // var key = prompt('Hi! Welcome by #SANJAI  // PRESS OK');
        // if(key==ok){
        //     key.classList.add("disable");
        // }
    }, 1000);
    
})

stopbtn.addEventListener("click",function(){
    stopbtn.classList.add("disable");
    clearInterval(timerid);
})

resetbtn.addEventListener("click",function(){
    starbtn.classList.remove("disable");
    stopbtn.classList.remove("disable");
    clearInterval(timerid);
    time = [0,0,0];
    timerid = 0;

    displayTime();
})

function displayTime(){

    hour.innerText = time[0].toString().padStart(2,"0").padEnd(4," :");
    minute.innerText = time[1].toString().padStart(2,"0").padEnd(4," :");
    second.innerText= time[2].toString().padStart(2,"0");
}