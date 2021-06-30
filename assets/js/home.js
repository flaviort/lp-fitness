$(document).ready(function() {

    // STANDARD BOTTOM
    $("#standard-form").validate({
        // if valid, post data via AJAX
        submitHandler: function(form) {
            $.post("https://lepimentafit.com/mailchimpv3/subscribe.php", { name: $("#hire-standard-name").val(), email: $("#hire-standard-email").val(),  phone: $("#hire-standard-phone").val(), message: "Standard", tagid: $("#TagStandardID").val() }, function(data) {
                //$('#response').html(data);
                console.log(data);
                $("#hire-standard-name").val("");
                $("#hire-standard-email").val("");
                $("#hire-standard-phone").val("");

                if(data.indexOf("400") >= 0){
                    $.fancybox.open($("#popup-error"));
                    //console.log("error");
                }

                if(data.indexOf("Thank") >= 0){
                    $.fancybox.open($("#popup-success"));
                    //console.log("success");
                }
            });
        },
        // all fields are required
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
        }
    });

     // STANDARD BOTTOM
     $("#premium-form").validate({
        // if valid, post data via AJAX
        submitHandler: function(form) {
            $.post("https://lepimentafit.com/mailchimpv3/subscribe.php", { name: $("#hire-premium-name").val(), email: $("#hire-premium-email").val(),  phone: $("#hire-premium-phone").val(), message: "Premium", tagid: $("#TagPremiumID").val() }, function(data) {
                //$('#response').html(data);
                console.log(data);
                $("#hire-premium-name").val("");
                $("#hire-premium-email").val("");
                $("#hire-premium-phone").val("");

                if(data.indexOf("400") >= 0){
                    $.fancybox.open($("#popup-error"));
                    //console.log("error");
                }

                if(data.indexOf("Thank") >= 0){
                    $.fancybox.open($("#popup-success"));
                    //console.log("success");
                }
            });
        },
        // all fields are required
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
        }
    });

    // CONTACT BOTTOM
    $("#contact-bottom").validate({
        // if valid, post data via AJAX
        submitHandler: function(form) {
            $.post("https://lepimentafit.com/mailchimpv3/subscribe.php", { name: $("#name").val(), email: $("#email").val(),  phone: $("#phone").val(), message: $("#message").val(), tagid: $("#TagID").val() }, function(data) {
                //$('#response').html(data);
                console.log(data);
                $("#email").val("");
                $("#name").val("");
                $("#phone").val("");
                $("#message").val("");

                if(data.indexOf("400") >= 0){
                    $.fancybox.open($("#popup-error"));
                    //console.log("error");
                }

                if(data.indexOf("Thank") >= 0){
                    $.fancybox.open($("#popup-success"));
                    //console.log("success");
                }
            });
        },
        // all fields are required
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
        }
    });
 
});