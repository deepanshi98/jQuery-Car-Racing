$(function(){
$('#go').click(function(){
    
    function check_if_complete(){
        if(isComplete== false)
            {
                isComplete= true;
            }
        else {
            place='second';
        }
    }
    
    var car_width = $('.car').width();
    var racetrack_width = $(window).width() - car_width ;
    var racetime1 = Math.floor ((Math.random() * 5000) + 1);
    var racetime2 = Math.floor ((Math.random() * 5000) + 1);
    
    var isComplete=false;
    var place= 'first';
    
    $('#car1').animate({
       left:racetrack_width
        }, racetime1, function(){
        check_if_complete();
        $('#raceInfo1 span').text("Finished in " + place + ' place and clocked in at '+ racetime1 + ' milliseconds.')
        
    });
    $('#car2').animate({
       left:racetrack_width
        }, racetime2, function(){
        check_if_complete();
        $('#raceInfo2 span').text("Finished in  " + place + ' place and clocked in at '+ racetime2 + ' milliseconds.')
      });
});
    
    
    $('#reset').click(function(){
        $('.car').css('left','0');
        $('.raceInfo span').text("");
    });

});


