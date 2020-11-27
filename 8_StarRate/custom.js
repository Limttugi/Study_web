$('.stars .fa').click(function(){
    $(this).addClass('active')
    $(this).prevAll().addClass('active')
    $(this).nextAll().removeClass('active')

    var num = $(this).index()
    var starRate = num + 1
    if(starRate==1){
        $('.print').text('별로에요')
    }
    else if(starRate==2){
        $('.print').text('나쁘지않아요')
    }
    else if(starRate==3){
        $('.print').text('보통이에요')
    }
    else if(starRate==4){
        $('.print').text('좋아요')
    }
    else if(starRate==5){
        $('.print').text('아주좋아요')
    }
    else{}
})