const button = document.getElementById("timer_button");
button.addEventListener("click", () => {
  getTime();
});

const startBtn = document.getElementById("timer_start");
startBtn.addEventListener("click", () => {
  timerStart();
});

const stop = () => {
  timerStop();
};
const deleteTime = () => {
  timerDelete();
};

function getTime() {
  const input = document.getElementById("timer_input");

  const time = input.value;

  if (!isNaN(time)) {
    document.getElementById("timer_seconds").innerText = time;
  } else {
    console.error("Enter numbers");
  }

  input.value = "";
}

function timerStart() {
  const stopBtn = document.getElementById("timer_stop");
  stopBtn.removeEventListener("click", deleteTime);
  stopBtn.addEventListener("click", stop);
  stopBtn.innerText = "Stop";

  timer = setInterval(function () {
    const time = document.getElementById("timer_seconds");

    let timeSeconds = Number(time.innerText);

    if (timeSeconds <= 0) {
      clearInterval(timer);

      return;
    }

    time.innerText = --timeSeconds;
  }, 1000);
}

function timerStop() {
  const stopBtn = document.getElementById("timer_stop");

  stopBtn.innerText = "Delete";
  stopBtn.removeEventListener("click", stop);
  stopBtn.addEventListener("click", deleteTime);

  clearInterval(timer);
}

function timerDelete() {
  const stopBtn = document.getElementById("timer_stop");

  stopBtn.removeEventListener("click", deleteTime);
  stopBtn.innerText = "Stop";

  document.getElementById("timer_seconds").innerText = 0;
}
