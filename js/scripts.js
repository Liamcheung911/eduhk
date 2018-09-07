$(document).ready(function () {



    window.onscroll = function () {
        var element = $('#side-menu');
        if (element.length > 0) {
            fixedHeader();
        }

        backToTop();
    };


    var element = $('#side-menu');
    console.log(element.length);
    if (element.length > 0) {
        var sticky = element.offset().top;


        function fixedHeader() {
            if (window.pageYOffset >= sticky) {

                $('#side-menu').addClass('sticky');

            } else {
                $('#side-menu').removeClass('sticky');

            }

        }
        fixedHeader();

    }


    function backToTop() {
        if (window.pageYOffset >= 400) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    }


    backToTop();


    $("#back-to-top").click(function () {
        $(window).scrollTop(0);
    });



    var new_width = $('#side-menu').width();
    $('#side-menu ul').width(new_width);

    $(window).resize(function () {
        var new_width = $('#side-menu').width();
        $('#side-menu ul').width(new_width);
    });


});

