$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    if($(window).scrollTop()){
        $('#js').removeClass('js');
        $('#js').addClass('jsS');
    } 
    else {
        $('#js').removeClass('jsS');
        $('#js').addClass('js');
    }
});

$("#carousel").on('click', function() {
    $(this).toggle(1500)
});

// $('.tabs a').click(function(e){
//     var $a = $(this);
//     var $li = $a.parent();
    
//     if($li.hasClass('active')){
//         return false;
//     }
    
//     var $target = $($a.attr('href'));
//     $li.siblings('.active').removeClass('active');
//     $li.addClass('active');

//     $target.siblings(':visible').fadeOut(500, function(){
//         $target.fadeIn(500);
//     })

// });


// $(document).ready(function(){

//     $('#send_email').click(function(e){
//     e.preventDefault();
//     var data = {
//       email: $('#email').val(),
//       name: $('#name').val(),
//       objet: $('#object').val(),
//       message: $('#message').val()
//     };
//     $.ajax({
//       url: "get_mail.php",
//       type: 'POST',
//       data: data,
//       success: function(data) {
//         $('#js_alert_success').css({'display' : 'block'});
//         setTimeout(function(){
//           $('#js_alert_success').css({'display' : 'none'});
//           $('#email').val("");
//           $('#name').val("");
//           $('#object').val("");
//           $('#message').val("")
//         }, 3000);
//       },
//       error: function(data) {
//         $('#js_alert_danger').css({'display' : 'block'});
//         setTimeout(function(){
//           $('#js_alert_danger').css({'display' : 'none'});
//           $('#email').val("");
//           $('#name').val("");
//           $('#object').val("");
//           $('#message').val("")
//         }, 3000);
//       }
//     });
//   });

// });