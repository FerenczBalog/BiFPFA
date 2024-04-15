const modal = document.querySelector("#nav-modal");
const openModal = document.querySelector("#bars");
const closeModal = document.querySelector("#close");
const navList = document.querySelector("#nav-bar");

//      MODAL <
openModal.onclick = () => {
    openModal.style.display = "none"
    modal.style.display = "flex"
    navList.style.display = "block"
    closeModal.style.display = "block"    
}
closeModal.onclick = () => {
    modal.style.display = "none"
    openModal.style.display = "block"
    closeModal.style.display = "none"
}
modal.onclick = () => {
    modal.style.display = "none"
    openModal.style.display = "block"    
    closeModal.style.display = "none"
}
//      MODAL >