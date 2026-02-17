
const popup = document.getElementById("betaal-popup");
const openBtn = document.getElementById("open-betaal-Popup");
const closeBtn = document.getElementById("closePopup");

const groentePopup = document.getElementById("groente-popup");
const closeGroenteBtn = document.getElementById("close-groente-popup");
const openGroenteBtn = document.getElementById("open-groente-popup");

const broodjesPopup = document.getElementById("broodjes-popup");
const closeBroodjesBtn = document.getElementById("close-broodjes-popup");
const openBroodjesBtn = document.getElementById("open-broodjes-popup");

openBtn.addEventListener("click", () => {
    popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});

openGroenteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    groentePopup.classList.add("active");
});

openBroodjesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    broodjesPopup.classList.add("active");
});

closeGroenteBtn.addEventListener("click", () => {
    groentePopup.classList.remove("active");
});

closeBroodjesBtn.addEventListener("click", () => {
    broodjesPopup.classList.remove("active");
});
