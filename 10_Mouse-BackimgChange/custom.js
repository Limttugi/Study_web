$('.navi li').mouseenter(function(){
    var changeimg = $(this).attr('data-img')
    $('.photo').css({
        'background-image': 'url('+ changeimg +')'
    })
})
$('.navi li').mouseleave(function(){
    $('.photo').css({
        'background-image': 'url(portrait-initial.jpg)'
    })
})