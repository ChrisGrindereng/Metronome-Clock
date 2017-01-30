
//function to return the time formated for use
function getTime(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var d = Math.floor(time.getMilliseconds() / 100 );
    var c = Math.floor(time.getMilliseconds() / 10);
    var hours = 23-time.getHours();
	var minutes = 59-time.getMinutes();
	var seconds = 59-time.getSeconds();
    var deciseconds = 9-Math.floor(time.getMilliseconds() / 100 );

    return {
        'time': time,
        'h': h,
        'm': m,
        's': s,
        'd': d,
        'c': c,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'deciseconds': deciseconds
    };
}

//fuction to initialize the clock
function initializeClock(id) {
  //normal clock
  var clock = document.getElementById(id);
  var hSpan = clock.querySelector('.h');
  var mSpan = clock.querySelector('.m');
  var sSpan = clock.querySelector('.s');
  var dSpan = clock.querySelector('.d');
  var cSpan = clock.querySelector('.c');
 //reverse clock
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var decisecondsSpan = clock.querySelector('.deciseconds');

//setting the updated function and formating 
  function updateClock(){
    var time = getTime(); 
    cSpan.innerHTML = (time.c - time.d *10);
    dSpan.innerHTML = time.d;
    sSpan.innerHTML = ('0' + time.s).slice(-2);
    mSpan.innerHTML = ('0' + time.m).slice(-2);
    hSpan.innerHTML = ('0' + time.h).slice(-2);
    // reserse clock
    decisecondsSpan.innerHTML = time.deciseconds;
    secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
    minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
    hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 10);
}

initializeClock('clockdiv');

