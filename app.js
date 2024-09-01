let plusImagePath = "./images/icon-plus.svg";
let minusImagePath = "./images/icon-minus.svg";
let buttons = document.querySelectorAll(".click");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    closeAll();
    let parent = e.target.parentElement.parentElement;
    parent.classList.add("active");
    e.target.setAttribute("src", minusImagePath);
  });
});

function closeAll() {
  let active = document.querySelectorAll(".active");
  active.forEach((element) => {
    element.classList.remove("active");
    element.children[0].children[1].setAttribute("src", plusImagePath);
  });
}
