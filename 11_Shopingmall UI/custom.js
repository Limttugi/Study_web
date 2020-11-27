$('.size span').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})
$('.color span').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})
$('.like').click(function(){
    $(this).toggleClass('active')
})