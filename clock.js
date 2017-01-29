

function getCurrentTime(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var d = time.getMilliseconds() / 100;
    var c = time.getMilliseconds() / 10;

    return {
        'time': time,
        'h': h,
        'm': m,
        's': s,
        'd': d,
        'c': c
    };

}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  var deciseconds = Math.floor((t / 100) % 10);
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'deciseconds': deciseconds 
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hSpan = clock.querySelector('.h');
  var mSpan = clock.querySelector('.m');
  var sSpan = clock.querySelector('.s');
  var dSpan = clock.querySelector('.d');
  var cSpan = clock.querySelector('.c');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var decisecondsSpan = clock.querySelector('.deciseconds');


  function updateReverseClock() {
    var t = getTimeRemaining(endtime);
    decisecondsSpan.innerHTML = t.deciseconds;
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  function updateClock(){
    var time = getCurrentTime();
    cSpan.innerHTML = time.c;
    dSpan.innerHTML = time.d;
    sSpan.innerHTML = ('0' + time.s).slice(-2);
    mSpan.innerHTML = ('0' + time.m).slice(-2);
    hSpan.innerHTML = ('0' + time.h).slice(-2);
  }

  updateClock();
  updateReverseClock();
  var timeinterval = setInterval(updateClock, 10);
  var reversetimeinterval = setInterval(updateReverseClock, 10);
}

var deadline = new Date((Date.now() + 1 * 24 * 60 * 60 * 1000));
initializeClock('clockdiv', deadline);

