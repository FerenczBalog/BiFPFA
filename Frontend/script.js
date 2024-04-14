const modal = document.querySelector("#nav-modal");
const openModal = document.querySelector("#bars");
const closeModal = document.querySelector("#close")
const overlay = document.querySelector("#overlay");
const navList = document.querySelector("#nav-bar")

//      MODAL <
openModal.onclick = () => {
    modal.style.display = "flex"
    overlay.style.display = "block"
    navList.style.display = "block"
    closeModal.style.display = "block"
    openModal.style.display = "none"
}
overlay.onclick = () => {
    modal.style.display = "none"
    overlay.style.display = "none"
    openModal.style.display = "block"
}
modal.onclick = () => {
    modal.style.display = "none"
    overlay.style.display = "none"
    openModal.style.display = "block"
}
//      MODAL >