/* global $ */
$(document).ready(function () {
    var validator = $('#register').validate({
        errorClass: "my-error-class",
        rules: {
            firstname: {
                required: true,
                lettersonly: true,
                minlength: 2,
                maxlength: 20
            },
            lastname: {
                required: true,
                lettersonly: true,
                minlength: 2,
                maxlength: 30
            },
            email: {
                required: true,
                email: true
            },
            username: {
                required: true,
                minlength: 4,
                maxlength: 20
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 16
            },
            confirmPassword: {
                required: true,
                equalTo: "#password",
                minlength: 6,
                maxlength: 16
            }
        }
    });
    
    $("#reset").click(function() {
        validator.resetForm();
    });

});