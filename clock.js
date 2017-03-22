
//function to return the time formated for use
function getTime(){
    var time = new Date();
    // variables for the normal clock
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var d = Math.floor(time.getMilliseconds() / 100 );
    var c = Math.floor(time.getMilliseconds() / 10);
   //variables for the reserse clock
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
        //for reserse clock
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
  var h1Span = clock.querySelector('.h1');
  var hSpan = clock.querySelector('.h');
  var m1Span = clock.querySelector('.m1');
  var mSpan = clock.querySelector('.m');
  var s1Span = clock.querySelector('.s1');
  var sSpan = clock.querySelector('.s');
  var dSpan = clock.querySelector('.d');
  var cSpan = clock.querySelector('.c');

 //reverse clock
  var hours1Span = clock.querySelector('.hours1');
  var hoursSpan = clock.querySelector('.hours');
  var minutes1Span = clock.querySelector('.minutes1');
  var minutesSpan = clock.querySelector('.minutes');
  var seconds1Span = clock.querySelector('.seconds1');
  var secondsSpan = clock.querySelector('.seconds');
  var decisecondsSpan = clock.querySelector('.deciseconds');

//setting the updated function and formating 
  function updateClock(){
    var time = getTime(); 
    cSpan.innerHTML = (time.c - time.d *10);
    dSpan.innerHTML = time.d;
    sSpan.innerHTML = ('0' + time.s).slice(-1);
    s1Span.innerHTML = ('0' + time.s).slice(-2, -1);
    mSpan.innerHTML = ('0' + time.m).slice(-1);
    m1Span.innerHTML = ('0' + time.m).slice(-2, -1);
    hSpan.innerHTML = ('0' + time.h).slice(-1);
    h1Span.innerHTML = ('0' + time.h).slice(-2, -1);
    // reserse clock
    decisecondsSpan.innerHTML = time.deciseconds;
    secondsSpan.innerHTML = ('0' + time.seconds).slice(-1);
    seconds1Span.innerHTML = ('0' + time.seconds).slice(-2, -1);
    minutesSpan.innerHTML = ('0' + time.minutes).slice(-1);
    minutes1Span.innerHTML = ('0' + time.minutes).slice(-2, -1);
    hoursSpan.innerHTML = ('0' + time.hours).slice(-1);
    hours1Span.innerHTML = ('0' + time.hours).slice(-2, -1);
  }

//setting the time interval to centiseconds for the updated function to run
  updateClock();
  var timeinterval = setInterval(updateClock, 10);
}


//starting the clock
initializeClock('clockdiv');

