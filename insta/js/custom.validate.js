$(function() {

    window.rulesData = {
        "form-sign-username": {
            required: true,
            minlength: 3,
            maxlength: 200
        },
        "form-sign-email": {
            required: true,
            email: true
        },
        "form-sign-password": {
            required: true,
            // methodLatinSymbol: true,
            methodNeedNumber: true,
            methodNeedCapitalLetter: true,
            methodNeedLowCaseletter: true,
            // methodCheckNoPrintLetter: true,
            minlength: 8
        },

        "form-verif-firstname": {
            required: true,
            minlength: 3,
            maxlength: 200
        },
        "form-verif-lastname": {
            required: true,
            minlength: 3,
            maxlength: 200
        },
        "form-verif-card": {
            required: true,
            number: true,
            minlength: 12,
            maxlength: 16
        },
        "form-verif-month": {
            required: true,
            valueNotEquals: 'default'
        },
        "form-verif-year": {
            required: true,
            valueNotEquals: 'default'
        },
        "form-verif-cvv": {
            required: true,
            number: true,
            minlength: 3,
            maxlength: 3
        },
        "form-verif-zip": {
            required: true,
            number: true,
            minlength: 3,
            maxlength: 6
        },
        "form-verif-country": {
            required: true,
            valueNotEquals: 'default'
        }
      };

    window.messagesData = {
        /*"form-verif-country": {
            valueNotEquals: "Please select an item!"
        }*/
    };

    function funcHighlight(element, errorClass, validClass) {
        $(element).parent(".page-register__input").addClass("page-register__input--error").removeClass("page-register__input--valid");;
    }

    function funcUnhighlight(element, errorClass, validClass) {
        $(element).parent(".page-register__input").removeClass("page-register__input--error").addClass("page-register__input--valid");;
    }

    window.initGlobalValidate = {
        rules: window.rulesData,
        messages: window.messagesData,
        errorElement: "div",
        errorClass: "page-register__input-error font-helvetica-neue",
        validClass: "page-register__input--valid",
        highlight: funcHighlight,
        unhighlight: funcUnhighlight
    };

    $(".js-need-validate").each(function () {

        var $form = $(this);

        $form.validate(initGlobalValidate);

        // TODO double code
        $form.find('input').on('blur keyup', function() {

            var allInputFull = true;
            $form.find('input').each(function() {
                if($(this).val() === '') allInputFull = false;
            });
            $form.find('select').each(function() {
                if($(this).val() === 'default') allInputFull = false;
            });

            if(allInputFull) {
                if ($form.valid()) {
                    $form.find('button[type="submit"]').prop('disabled', false);
                } else {
                    $form.find('button[type="submit"]').prop('disabled', 'disabled');
                }
            } else {
                $form.find('button[type="submit"]').prop('disabled', 'disabled');
            }
        });
        $form.find('select').on('change', function() {

            var allInputFull = true;
            $form.find('input').each(function() {
                if($(this).val() === '') allInputFull = false;
            });
            $form.find('select').each(function() {
                if($(this).val() === 'default') allInputFull = false;
            });

            if(allInputFull) {
                if ($form.valid()) {
                    $form.find('button[type="submit"]').prop('disabled', false);
                } else {
                    $form.find('button[type="submit"]').prop('disabled', 'disabled');
                }
            } else {
                $form.find('button[type="submit"]').prop('disabled', 'disabled');
            }
        });
        // ----


    });

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
    }, "Please select an item");

    $.validator.addMethod('methodLatinSymbol',
        function (val, el, args) {
            if (val.search(/[^a-zA-Z0-9]/g) !== -1 && val.length > 0) {
                return false;
            } else {
                return true;
            }
        },
        ""
    );

    $.validator.addMethod('methodNeedNumber',
        function (val, el, args) {

            if (val.search(/[0-9]/) === -1 && val.length > 0) {
                return false;
            } else {
                return true;
            }
        },
        "Missing numbers 0 - 9"
    );

    $.validator.addMethod('methodNeedCapitalLetter',
        function (val, el, args) {

            if (val.search(/[A-Z]/) === -1 && val.length > 0) {
                return false;
            } else {
                return true;
            }
        },
        "Missing capital letter A - Z"
    );

    $.validator.addMethod('methodNeedLowCaseletter',
        function (val, el, args) {

            if (val.search(/[a-z]/) === -1 && val.length > 0) {
                return false;
            } else {
                return true;
            }
        },
        "Missing lowercase letter a - z"
    );

    $.validator.addMethod('methodCheckNoPrintLetter',
        function (val, el, args) {

            if (val.search(/[,.!?;:()\[\]\+\-$#@%*&"'|`~^ ]/) !== -1 && val.length > 0) {
                return false;
            } else {
                return true;
            }
        },
        "Have no print letter .,&:;$-| и т.д."
    );



});
