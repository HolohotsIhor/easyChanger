$(document).ready(function() {
    "use strict";

    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    /* Carousel */
    $('.carousel').carousel({
        interval: 8000
    })

    /* Counter */
    $('.number-box').counterUp({
        delay: 10,
        time: 1000
    });


    /* Logic for Calculator */

    // Get courses
    var coursePercent = $("#Percent").text();
    var courseBTC = $("#BTC").text();
    var courseETH = $("#ETH").text();
    var courseXRP = $("#XRP").text();
    var courseLTC = $("#LTC").text();
    var courseUSDT = $("#USDT").text();
    var courseEUR = $("#EUR").text();
    var courseRUR = $("#RUR").text();
    var courseCNY = $("#CNY").text();
    var courseKZT = $("#KZT").text();

    // Pay types
    $('.menu-557 select').change(function() {
        var payType = $('.menu-557 select option:selected').val();
        $('.text-823 input').attr('readonly', false);
        $('.text-823 input').val("Счет/кошелек получателя");

        if(payType == "Наличные в офисе"){
            $('.text-823 input').val("Район Алматы, ул. Макатаева, 68");
            $('.text-823 input').attr('readonly', true);
        }

        if(payType == "Cash in the office"){
            $('.text-823 input').val("District Almaty, st. Makatayev, 68");
            $('.text-823 input').attr('readonly', true);
        }
    });

    // Final currency
    $('.menu-313 select').change(function() {
        var nameCurrentCurrency = $('.menu-986 select option:selected').val();
        var nameFinalCurrency = $('.menu-313 select option:selected').val();
        var sizeCurrentCurrency = $('.number-894 input').val();
        var sizeFinalCurrency = $('.number-894 input').val();
     
        // Calculate final price for USD
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent);
        }

        // Calculate final price for EUR
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseEUR);
        }

        // Calculate final price for RUR
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseRUR);
        }

        // Calculate final price for CNY
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseCNY);
        }

        // Calculate final price for KZT
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseKZT);
        }
    });
    

    // Current currency
    $('.menu-986 select').change(function() {
        var nameCurrentCurrency = $('.menu-986 select option:selected').val();
        var nameFinalCurrency = $('.menu-313 select option:selected').val();
        var sizeCurrentCurrency = $('.number-894 input').val();
        var sizeFinalCurrency = $('.number-894 input').val();
     
        // Calculate final price for USD
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent);
        }

        // Calculate final price for EUR
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseEUR);
        }

        // Calculate final price for RUR
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseRUR);
        }

        // Calculate final price for CNY
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseCNY);
        }

        // Calculate final price for KZT
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseKZT);
        }
    });

 // Current currency input
    $('.number-894 input').change(function() {
        var sizeCurrentCurrency = $('.number-894 input').val();
        var nameFinalCurrency = $('.menu-313 select option:selected').val();
        var nameCurrentCurrency = $('.menu-986 select option:selected').val();

        // Calculate final price for USD
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent);
        }

        // Calculate final price for EUR
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseEUR);
        }

        // Calculate final price for RUR
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseRUR);
        }

        // Calculate final price for CNY
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseCNY);
        }

        // Calculate final price for KZT
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseKZT);
        }
    });

    // Current currency input
    $('.number-894 input').change(function() {
        var sizeCurrentCurrency = $('.number-894 input').val();
        var nameFinalCurrency = $('.menu-313 select option:selected').val();
        var nameCurrentCurrency = $('.menu-986 select option:selected').val();

        // Calculate final price for USD
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "USD"){
            $('.number-239 input').val((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent);
        }

        // Calculate final price for EUR
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseEUR);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "EUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseEUR);
        }

        // Calculate final price for RUR
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseRUR);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "RUR"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseRUR);
        }

        // Calculate final price for CNY
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseCNY);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "CNY"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseCNY);
        }

        // Calculate final price for KZT
        if(nameCurrentCurrency == "BTC" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseBTC) - (sizeCurrentCurrency*courseBTC)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "ETH" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseETH) - (sizeCurrentCurrency*courseETH)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "XRP" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseXRP) - (sizeCurrentCurrency*courseXRP)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "LTC" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseLTC) - (sizeCurrentCurrency*courseLTC)/100*coursePercent)*courseKZT);
        }
        if(nameCurrentCurrency == "USDT" && nameFinalCurrency == "KZT"){
            $('.number-239 input').val(((sizeCurrentCurrency*courseUSDT) - (sizeCurrentCurrency*courseUSDT)/100*coursePercent)*courseKZT);
        }
    });


// end
});