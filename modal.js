const btn = document.querySelector('.modal-box')
const modal = document.querySelector('.modal-container')
const closeModal = document.querySelector('#close-modal')

btn.addEventListener('click', ()=>{
    modal.style.display="block"
})
closeModal.addEventListener("click", ()=>
    modal.style.display="none"
)
