
// const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let my_btn = document.getElementById("my_btn");
let my_jumbotron = document.getElementById("my_jumbotron");

// Add zeros and colons to display the time:
let addZero = (i) => {
    if (i < 10) i = "0" + i
    return i;
}


setInterval(() => {
    let d = new Date();

    let time = addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());
    let date = addZero(d.getDate()) + "/" + addZero((d.getMonth() + 1)) + "/" + d.getFullYear();

    // gives language sensitive representation 
    // date = d.toLocaleDateString(undefined, options);

    let day = weekday[d.getDay()];

    document.getElementById("time").innerHTML = time + "<br>on " + day + ", " + date;
}, 1000);

// /////////
document.getElementById("my_btn").addEventListener("click", () => {
    my_jumbotron.classList.toggle("changeColor");
});