var maincontainer=document.querySelector('.main-container')
var registerlink=document.querySelector('.signup-link')
var signlink=document.querySelector('.signin-link')

registerlink.addEventListener('click',()=>{
    maincontainer.classList.add('active');
    
})
signlink.addEventListener('click',()=>{
    maincontainer.classList.remove(active);
})



