let btn = document.querySelector('.header-menu-trigger');
let headerMenu = document.querySelector('.header-menu');
let menuTL = gsap.timeline();
let windowHight = window.innerHeight;
let scale = windowHight / btn.clientHeight * 3;

btn.addEventListener('click',function(){
    if(btn.classList.contains('is-active')){//閉じる
        menuTL
        .to('.circle-bg',{scale:0})
        .add(()=>{
            btn.classList.toggle('is-active');
            headerMenu.classList.toggle('is-active');
        })
    }else{//開く
        btn.classList.toggle('is-active');
        headerMenu.classList.toggle('is-active');
        menuTL
        .to('.circle-bg',{scale:scale})
        .fromTo('.header-lists li',{autoAlpha:0,y:20},{autoAlpha:1,y:0,stagger:.04})
    }
})