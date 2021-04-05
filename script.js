var seconds = 0;
var interval;
pomodoro = (mins) => {
     clearInterval(interval);
     seconds = mins * 60 || 0;
     interval = setInterval(function () {
          seconds--;
          var sec = seconds % 60
          var minutes = Math.floor(seconds / 60);
          var elem = document.getElementById("myBar");
          var width = Math.abs((seconds / (mins * 60)) - 1) * 100;

          elem.style.width = width + "%";
          elem.innerHTML = Math.round(width * 100) / 100 + "%";
          document.getElementById('timer').innerHTML = minutes.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0');
          document.title = minutes.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0');
          if (!seconds) {
               clearInterval(interval);
               alert("🚨 Time to break 😎");
          }
     }, 1000)
}

stop = () => {
     seconds = 1;
}

