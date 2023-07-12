const openingTL = gsap.timeline();
openingTL
.to('.opening__logo',{//ロゴ出現
    clipPath:'inset(0 0% 0 0)',
    duration:4,
    ease:"power4.out",
    delay:.5,
    scale:1,
    autoAlpha:1
})
.to('.opening__mask',{//幕が開く
    y:'-100%',
    duration:2,
    ease:"power4.inOut",
})
.to('.mainVisual img',{//背景画像が元の大きさへ戻る
    scale:1,
    duration:2,
    ease:"power4.out",
},'<')
.to('.opening__logo',{//最後ロゴを消す
    autoAlpha:0,
    duration:1
},'>-1')