$(document).ready(function () {




    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { fixedHeader() };

    // Get the header
    var header = document.getElementById("eduhkheader");




    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    var headerHeight = $("#eduhkheader").height();
    $("#main-content").css("margin-top", headerHeight);

    $(window).resize(function () {
        var headerHeight = $("#eduhkheader").height();
        $("#main-content").css("margin-top", headerHeight);
    });


    //console.log ('hahaha' + sticky)

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position


    function fixedHeader() {
        if (window.pageYOffset >= 280) {

            var headerHeight = $("#eduhkheader").height();
            console.log(window.pageYOffset + " : " + sticky + " : height - " + headerHeight);

            $('#eduhkheader').addClass('sticky');
            /* $('.sticky_show').addClass('d-inline').removeClass('d-none'); */
        } else {
            $('#eduhkheader').removeClass('sticky');
            /* $('.sticky_show').addClass('d-none').removeClass('d-inline'); */
        }
    }

    fixedHeader();


});

