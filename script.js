const toggleCheckbox = document.querySelector(".toggle-checkbox");
const body = document.querySelector("body");
const head = document.querySelector(".header");
const h1 = document.querySelector(".head h1");
const cards = document.querySelectorAll(".card");
const allH1s = document.querySelectorAll(".card h1");
const allPs = document.querySelectorAll(".facebook");
const stats = document.querySelectorAll(".stat");
const secondPs = document.querySelectorAll(".outer");

toggleCheckbox.addEventListener("change", function () {
  if (this.checked) {
    // Perform action when toggle is on
    body.style.backgroundColor = " hsl(230, 17%, 14%)";
    head.style.backgroundColor = " hsl(232, 19%, 15%)";
    h1.style.color = "white";
    cards.forEach((card) => {
      card.style.backgroundColor = " hsl(228, 28%, 20%)";
    });
    allH1s.forEach((h1) => {
      h1.style.color = "white";
    });
    allPs.forEach((p) => {
      p.style.color = "hsl(228, 34%, 66%)";
    });
    stats.forEach((stat) => {
      stat.style.backgroundColor = "hsl(228, 28%,20%)";
    });
    secondPs.forEach((p) => {
      p.style.color = "white";
    });
    console.log("Toggle is on");
  } else {
    // Perform action when toggle is off
    body.style.backgroundColor = "";
    head.style.backgroundColor = "";
    h1.style.color = "";
    cards.forEach((card) => {
      card.style.backgroundColor = "";
      //   h1All.style.color = "";
    });
    allH1s.forEach((h1) => {
      h1.style.color = "";
    });
    allPs.forEach((p) => {
      p.style.color = "";
    });

    stats.forEach((stat) => {
      stat.style.backgroundColor = "";
    });
    secondPs.forEach((p) => {
      p.style.color = "";
    });
    console.log("Toggle is off");
  }
});
