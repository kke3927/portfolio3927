const main_title_text = "신입 백엔드 개발자 \n 강경은의 포트폴리오입니다.";
const main_title = document.querySelector(".main_title");
let i = 0;
function typing(){
    let txt = main_title_text[i++];
    main_title.innerHTML += txt==="\n"?"<br/>":txt;
    if(i>main_title_text.length){
        main_title.innerHTML="";
        i=0;
    }
}
setInterval(typing, 200);

$(document).ready(function(){
    let scholar_his = $('.scholar_his');
    let height = $('#about_me').offset().top;
    
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        if(scrollTop>height-200) {
            scholar_his.css({opacity:1})
        }else {
            scholar_his.css({opacity:0})
        }
    })

})