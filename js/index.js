// nav 스크롤
window.addEventListener('scroll',function (){
    let n_nav =document.querySelector('.nav_top');
    let sc_nav = document.querySelector(".nav_scroll");
    let d_sc_top =document.scrollingElement.scrollTop;
    
    
    if(d_sc_top ==0){
        n_nav.classList.remove('off');
        n_nav.classList.add('on');
        sc_nav.classList.remove('on');
        sc_nav.classList.add('off')
    }else{
        sc_nav.classList.remove('off');
        sc_nav.classList.add('on');
        n_nav.classList.remove('on');
        n_nav.classList.add('off')
    }
})

//타이핑 효과
var dev = ["Frontend developer","Backend develper","Fullstack developer에 도전하는"];

var text = document.querySelector('.front');
var index = 0;
var i =1;
var a_front = dev[index].split("");

function deleting(a_front) {
    if(text.innerHTML.length > 0){
        console.log(text.innerHTML);
        text.textContent.substr(0,-i);
        i++;
        setTimeout(() => {
            deleting(a_front);
        }, 100);
    }
}

function typing(a_front) {
    if(a_front.length > 0){
        text.innerHTML += a_front.shift();
        setTimeout(() => {
            typing(a_front);
        }, 100);
    }else{
        // deleting(a_front);
    }
}

typing(a_front);
// 프로젝트 선택

var sp = document.querySelectorAll('.s_project');
var bp = document.querySelectorAll('.b_project');

function bpchange(e) {
    
    switch (e) {
        case 0:
            if(bp[0].classList.contains('off')){
                bp[0].classList.replace('off','on');
                bp[1].classList.replace('on','off');
                bp[2].classList.replace('on','off');
                rotate(0);
            }
            break;
        case 1:
            if(bp[1].classList.contains('off')){
                bp[0].classList.replace('on','off');
                bp[1].classList.replace('off','on');
                bp[2].classList.replace('on','off');
                rotate(1);
            }
            break;
        case 2:
            if(bp[2].classList.contains('off')){
                bp[0].classList.replace('on','off');
                bp[1].classList.replace('on','off');
                bp[2].classList.replace('off','on');
                rotate(2);
            }
            break;
    
        default:
            break;
    }
}

    $('#left').on('click',function(){
        if($('.b_project').eq(0).hasClass('on')){
            bpchange(2);
            rotate(2)
        }else if($('.b_project').eq(1).hasClass('on')){
            bpchange(0);
            rotate(0)
        }else if($('.b_project').eq(2).hasClass('on')){
            bpchange(1);
            rotate(1)
        }
    })

    $('#right').on('click',function(){
        if($('.b_project').eq(0).hasClass('on')){
            bpchange(1);
            rotate(1);
        }else if($('.b_project').eq(1).hasClass('on')){
            bpchange(2);
            rotate(2);
        }else if($('.b_project').eq(2).hasClass('on')){
            bpchange(0);
            rotate(0);
        }
    })

var rotate = (e) =>{
    switch (e) {
        case 0:
            $('.pos3').animate({
                left: "0", opacity: "0.5",borderWidth : '0'
            })
            $('.pos1').animate({opacity: "1",
            left: "175px",borderWidth : '4px'
            })
            $('.pos2').animate({
                left: "350px", opacity: "0.5",borderWidth : '0'
            })
            break;

        case 1:
            $('.pos1').animate({
                left: "0", opacity: "0.5",borderWidth : '0'
            })
            $('.pos2').animate({opacity: "1",
                left: "175px",borderWidth : '4px'
            })
            $('.pos3').animate({
                left: "350px", opacity: "0.5",borderWidth : '0'
            })
            break;

        case 2:
            $('.pos2').animate({
                left: "0", opacity: "0.5" ,borderWidth:'0'
            })
            $('.pos3').animate({opacity: "1",
                left: "175px",borderWidth : '4px'
            })
            $('.pos1').animate({
                left: "350px", opacity: "0.5",borderWidth : '0'
            })
            
            break;
    
        default:
            break;
    }
}
// 스크롤 메뉴
$(function(){
    var menu = $('#nav > li');
    var contents = $('#wrap > .box_class');
    
    menu.click(function(event){
        event.preventDefault();
    
        var tg = $(this);
        var i = tg.index();

        var section = contents.eq(i);
        var tt = section.offset().top;
    
        $('html, body').stop().animate({scrollTop:tt});
    });
    
});
