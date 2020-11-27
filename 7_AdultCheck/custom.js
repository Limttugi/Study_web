$('.login button').click(function(){
    var num = $('#id').val()
    if(num == '') {
        alert('나이를 입력하세요')
    }
    else if(num < 20) {
        alert('성인이 아닙니다')
    }
    else{
        alert('성인입니다')
    }
})