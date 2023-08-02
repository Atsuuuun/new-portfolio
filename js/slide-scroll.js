  // 横スクロール
  let pages = document.querySelectorAll('.slide__item').length;
  let moveX = -100 + (100 / pages)
  let horizontalScroll = gsap.to('.slide__list',{xPercent:moveX,ease:'none',scrollTrigger:{
    trigger:'.slide',
    start:'center center',
    end:'bottom -600%',
    pin:true,
    scrub:1,
  }})
  
  // 横スクロール中にアニメーション発火
  gsap.utils.toArray('.slide__item').forEach((item)=>{
    let img = item.querySelector('img')
    let contents = item.querySelectorAll('.slide__container > *')
    let tl = gsap.timeline({scrollTrigger:{
      trigger:item,
      start:'top center',
      containerAnimation:horizontalScroll,//横スクロールするアニメーションTweenを指定
    }})
    tl
    .fromTo(img,{filter:'brightness(100%)'},{filter:'brightness(50%)'})
    .fromTo(contents,{y:20,autoAlpha:0},{y:0,autoAlpha:1,stagger:.1},'<')
  })