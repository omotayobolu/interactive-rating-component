const ratingEl = document.querySelectorAll(".rate");
const submitEl = document.querySelector(".submit");
const sselectedEl = document.querySelector(".selected");
const selectedNum = document.querySelector(".selected-no");

ratingEl.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    ratingEl.forEach((btn) => {
      btn.classList.remove("active");
    });

    if (e.target.classList.contains("rate")) {
      e.target.classList.add("active");
      sessionStorage.setItem("selectedNum", e.target.innerText);
    } else {
      e.target.parentElement.classList.add("active");
    }
  });
});

if (selectedNum != null) {
  selectedNum.textContent = parseInt(sessionStorage.getItem("selectedNum"));
}
