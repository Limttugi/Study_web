$('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.modal-gnb').fadeToggle()
})

var bgm = document.getElementById('myAudio')
bgm.volume = 0.1