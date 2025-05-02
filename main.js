document.querySelector(".decrement").onclick = () => {
    const decrement = document.querySelector("#count").textContent--;
    if (decrement <= 0) {
        decrement.style.color = "red"
    }
};
document.querySelector(".reset").onclick = () => {
  document.querySelector("#count").textContent = 0;
};
document.querySelector(".increment").onclick = () => {
  document.querySelector("#count").textContent++;
};

document.querySelector("#date").textContent = new Date().getFullYear();
