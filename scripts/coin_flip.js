$(document).ready(function(){
    $('#toss').click(function(){
        $.ajax({
            'url' : 'http://localhost:8001',
            'method' : 'POST',
            success : function(data){
                console.log(data);
                $('#heads_coin').addClass('flip1');
                $('#tails_coin').addClass('flip2');
                $('#coin').addClass('flip');
                $('#heads_coin').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
                  $('#heads_coin').removeClass('flip1');
                });
                $('#tails_coin').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
                    $('#tails_coin').removeClass('flip2');
                  });
                $('#coin').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
                    $('#coin').removeClass('flip');
                    if(data==1)
                    {
                      
                      $('#heads_coin').css({
                          'transform': 'perspective(600px) rotateX(0deg)',
                          'transition': 'transform 1s linear'
                      });
                      $('#tails_coin').css({
                          'transform': 'perspective(600px) rotateX(180deg)',
                          'transition': 'transform 1s linear'
                      });
                      $('#message > p').text('Hurray!! You got Heads');
                      $('#message').fadeIn(800).delay(800);
                      $('#message').css({'display' : 'flex'});
                      setTimeout(function(){
                        $("#message").fadeOut(800);
                    }, 800);
                    }
                    else
                    { 
                      $('#heads_coin').css({
                          'transform': 'perspective(600px) rotateX(-180deg)',
                          'transition': 'transform 1s linear'
                      });
                      $('#tails_coin').css({
                          'transform': 'perspective(600px) rotateX(0deg)',
                          'transition': 'transform 1s linear'
                      });
                      $('#message > p').text('Hurray!! You got Tails');
                      $('#message').fadeIn(800).delay(800);
                      $('#message').css({'display' : 'flex'});
                      setTimeout(function(){
                        $("#message").fadeOut(800);
                    }, 800);
                    }
                  });
                  
            }
        });
        
    });
});