const ratingEl = document.querySelectorAll(".rate");
const submitEl = document.querySelector(".submit");
const sselectedEl = document.querySelector(".selected");
const selectedNum = document.querySelector(".selected-no");

let rateValue = 4; //default

ratingEl.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    ratingEl.forEach((btn) => {
      btn.classList.remove("active");
    });

    if (e.target.classList.contains("rate")) {
      e.target.classList.add("active");
    } else {
      e.target.parentElement.classList.add("active");
    }
  });
});
