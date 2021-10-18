
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const OpenBtn = document.querySelector('.Menu-Btn')
const CloseBtn = document.querySelector('.close-btn')
const Menu = document.querySelector('.Menu')
var x = window.matchMedia("(max-width:700px)")
const sound = document.getElementById('audio')

OpenBtn.addEventListener('click' , () =>{
    if(Menu){
        Menu.classList.toggle('open')
        sound.play()
        console.log("hal");
    }else{
        Menu.classList.toggle('close')
        console.log("bal3");
    }
    
})
CloseBtn.addEventListener('click' , () =>{
    
    if(!Menu){
        Menu.classList.toggle('close')
        console.log("bal3");
        
    }else{
        Menu.classList.toggle('open')
        console.log('hal');
        sound.play()
    }
});

