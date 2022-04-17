$(document).ready(function() {


    // modal thank you
    $(".ordercall__form-btn").click(function() {
        $(".overlay").fadeIn('slow');
        $("#thanks").fadeIn(2000);
    });


    // modal close
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });


    $('form').submit(function(e) {
        e.preventDefault();
        $(this).find("input").val("");
        $(this).find("textarea").val("");
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });
});