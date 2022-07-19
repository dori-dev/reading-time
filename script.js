function readingTime() {
  const text = document.getElementById("text").value;
  const wpm_input = document.getElementById("wpm").value;
  if (wpm_input) {
    var wpm = wpm_input;
  } else {
    var wpm = 183;
  }
  if (text) {
    const words = text.trim().split(/\s+/).length;
    var time = Math.ceil((words / wpm) * 60);
    var hour = parseInt(time / 3600);
    if (hour) {
      var min = parseInt((time - hour * 3600) / 60);
      var sec = time - (min * 60 + hour * 3600);
      minutes = min < 10 ? "0" + min : min;
      seconds = sec < 10 ? "0" + sec : sec;
      if (hour > 1) {
        document.getElementById(
          "time"
        ).innerText = `${hour} hours, ${minutes}:${seconds} minutes`;
      } else {
        document.getElementById(
          "time"
        ).innerText = `${hour} hour, ${minutes}:${seconds} minutes`;
      }
    } else {
      var min = parseInt(time / 60);
      var sec = time - min * 60;
      minutes = min < 10 ? "0" + min : min;
      seconds = sec < 10 ? "0" + sec : sec;
      document.getElementById(
        "time"
      ).innerText = `${minutes}:${seconds} minutes`;
    }
  }
}
