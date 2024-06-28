const share = document.querySelector('.share')

const toggleShare = document.querySelector('#toggleShare')

toggleShare.addEventListener('click',()=>{
    share.classList.toggle('visible');
    toggleShare.classList.toggle('buttonClicked')
})