$('.btn li').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    var tab = $(this).attr('data-alt')
    $('#' + tab).addClass('active')
    $('#' + tab).siblings().removeClass('active')
})