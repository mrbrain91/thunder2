$(document).ready(function() {

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });



    $('form').submit(function(e) {
        e.preventDefault();
        $('overlay, #thanks').fadeIn('slow');

        // $.ajax({
        //     type: "POST",
        //     url: "../mailer/smart.php",
        //     data: $(this).serialize()
        // }).done(function() {
        //     $(this).find("input").val("");



        //     $('form').trigger('reset');
        // });
        // return false;
    });
});