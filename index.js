//////// SECTION ONE(1)////////
//variables declared
let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let seconds = document.getElementById("secs");
let milli = document.getElementById("millisecs");
    /////////SECTION 2//////////
let count = 0
let minscount = 0
let hourscount = 0
let millicount = 0
let clickcount = 0;
let reset = true;
let milliId, secondsId, minsId, hoursId;

function startTimer(){
    
    clickcount=+1
    
    milliId = setInterval(()=>{
    if(millicount === 9){
        millicount = 0;
    }else{
        millicount++
    }
    milli.innerHTML = millicount;
},100)


// The code below is responsible for keeping track of the seconds
    secondsId = setInterval(()=>{
    if(count === 59){
        count = 1;
    }else{
        count++
    }
    seconds.innerHTML = count
},1000)

// the code below keeps track of the minutes
    minsId = setInterval(()=>{
    if(minscount === 59){
        minscount = 0;
    }else{
        minscount++
    }
    mins.innerHTML = minscount
},60000)
// The code below is responsible for counting the hours///
    hoursId = setInterval(()=>{
    if(hourscount === 24){
        hourscount = 1;
    }else{
        hourscount++
    }
    hrs.innerHTML = hourscount
},360000)
// function startTimer
}

function resetFunction(){
    hrs.innerHTML = "00";
    mins.innerHTML = "00"
    seconds.innerHTML = "00"
    milli.innerHTML = "00"
}



// SECTION 3//
//the codes for the buttons

//declaring button variables
let startBtn = document.getElementById("timer_start");
let resetBtn = document.getElementById("timer_reset");
let stopBtn = document.getElementById("timer_stop");

startBtn.addEventListener("click", function(){
    if(clickcount === 0){
        if(reset){
        startTimer()
        console.log("timer jst started")
    }else if(clickcount >1){
        console.log("timer already running")
    }
    clickcount++
        
    }
})

resetBtn.addEventListener("click", function(){
    clearInterval(minsId);
    clearInterval(secondsId);
    clearInterval(milliId);
    clearInterval(hoursId);
    
    milli.innerHTML = "00";
    seconds.innerHTML = "00";
    mins.innerHTML = "00";
    hrs.innerHTML = "00"
    
    clickcount = 0
    minscount = 0
    hourscount = 0
    millicount = 0
    count = 0
})
    
stopBtn.addEventListener("click", function(){
    clearInterval(minsId);
    clearInterval(secondsId);
    clearInterval(milliId);
    clearInterval(hoursId);
    clickcount = 0
})