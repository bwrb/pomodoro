var seconds = 0;
var interval;

pomodoro = (mins) => {
  let now = new Date();
  localStorage.setItem(
    Date.now(),
    JSON.stringify({
      interval: mins,
      date: now.toLocaleDateString(),
      minutes: now.toLocaleTimeString(),
    })
  );
  data();
  // var x = document.getElementById("myAudio");
  clearInterval(interval);
  seconds = mins * 60 || 0;
  interval = setInterval(function () {
    seconds--;
    var sec = seconds % 60;
    var minutes = Math.floor(seconds / 60);
    var elem = document.getElementById("myBar");
    var width = Math.abs(seconds / (mins * 60) - 1) * 100;

    elem.style.width = width + "%";
    elem.innerHTML = Math.round(width * 100) / 100 + "%";
    document.getElementById("timer").innerHTML =
      minutes.toString().padStart(2, "0") +
      ":" +
      sec.toString().padStart(2, "0");
    document.title =
      minutes.toString().padStart(2, "0") +
      ":" +
      sec.toString().padStart(2, "0");
    if (!seconds) {
      clearInterval(interval);
      // x.play();
      var notification = new Notification("🚨 Time to break 😎");
    }
  }, 1000);
};

stop = () => {
  seconds = 1;
};

data = () => {
  Notification.requestPermission();
  document.getElementById("data").innerHTML =
    "<thead><tr><th>Interval</th><th>Date</th> <th>Time</th></tr></thead>";
  for (let i = 0; i < localStorage.length; i++) {
    tr = document.createElement("tr");
    document.getElementById("data").appendChild(tr);
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    var int = JSON.parse(localStorage.getItem(localStorage.key(i))).interval;
    var dat = JSON.parse(localStorage.getItem(localStorage.key(i))).date;
    var min = JSON.parse(localStorage.getItem(localStorage.key(i))).minutes;
    td.innerHTML += int;
    td2.innerHTML += dat;
    td3.innerHTML += min;
  }
};

cleardata = () => {
  localStorage.clear();
  data();
};
