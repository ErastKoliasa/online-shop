function currentTime() {
    const clock = document.querySelector(".clock");

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";

    hour > 12 ? session = "PM" : session;
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    clock.innerHTML = `${hour}:${minute}:${second} ${session}`;
    setTimeout(currentTime, 1000);
}

currentTime();

