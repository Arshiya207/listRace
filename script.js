const hamburgerBtn=document.querySelector(".hamburger-btn")
const toggledNav=document.querySelector(".bottomNav-list")
hamburgerBtn.addEventListener("click",()=>{
    hamburgerBtn.classList.toggle("active")
    toggledNav.classList.toggle("toggled")
})

