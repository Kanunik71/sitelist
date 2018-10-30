$(function() {


    var countryList = [
        {"name": "Afghanistan", "code": "AF"},
        {"name": "Åland Islands", "code": "AX"},
        {"name": "Albania", "code": "AL"},
        {"name": "Algeria", "code": "DZ"},
        {"name": "American Samoa", "code": "AS"},
        {"name": "AndorrA", "code": "AD"},
        {"name": "Angola", "code": "AO"},
        {"name": "Anguilla", "code": "AI"},
        {"name": "Antarctica", "code": "AQ"},
        {"name": "Antigua and Barbuda", "code": "AG"},
        {"name": "Argentina", "code": "AR"},
        {"name": "Armenia", "code": "AM"},
        {"name": "Aruba", "code": "AW"},
        {"name": "Australia", "code": "AU"},
        {"name": "Austria", "code": "AT"},
        {"name": "Azerbaijan", "code": "AZ"},
        {"name": "Bahamas", "code": "BS"},
        {"name": "Bahrain", "code": "BH"},
        {"name": "Bangladesh", "code": "BD"},
        {"name": "Barbados", "code": "BB"},
        {"name": "Belarus", "code": "BY"},
        {"name": "Belgium", "code": "BE"},
        {"name": "Belize", "code": "BZ"},
        {"name": "Benin", "code": "BJ"},
        {"name": "Bermuda", "code": "BM"},
        {"name": "Bhutan", "code": "BT"},
        {"name": "Bolivia", "code": "BO"},
        {"name": "Bosnia and Herzegovina", "code": "BA"},
        {"name": "Botswana", "code": "BW"},
        {"name": "Bouvet Island", "code": "BV"},
        {"name": "Brazil", "code": "BR"},
        {"name": "British Indian Ocean Territory", "code": "IO"},
        {"name": "Brunei Darussalam", "code": "BN"},
        {"name": "Bulgaria", "code": "BG"},
        {"name": "Burkina Faso", "code": "BF"},
        {"name": "Burundi", "code": "BI"},
        {"name": "Cambodia", "code": "KH"},
        {"name": "Cameroon", "code": "CM"},
        {"name": "Canada", "code": "CA"},
        {"name": "Cape Verde", "code": "CV"},
        {"name": "Cayman Islands", "code": "KY"},
        {"name": "Central African Republic", "code": "CF"},
        {"name": "Chad", "code": "TD"},
        {"name": "Chile", "code": "CL"},
        {"name": "China", "code": "CN"},
        {"name": "Christmas Island", "code": "CX"},
        {"name": "Cocos (Keeling) Islands", "code": "CC"},
        {"name": "Colombia", "code": "CO"},
        {"name": "Comoros", "code": "KM"},
        {"name": "Congo", "code": "CG"},
        {"name": "Congo, The Democratic Republic of the", "code": "CD"},
        {"name": "Cook Islands", "code": "CK"},
        {"name": "Costa Rica", "code": "CR"},
        {"name": "Cote D'Ivoire", "code": "CI"},
        {"name": "Croatia", "code": "HR"},
        {"name": "Cuba", "code": "CU"},
        {"name": "Cyprus", "code": "CY"},
        {"name": "Czech Republic", "code": "CZ"},
        {"name": "Denmark", "code": "DK"},
        {"name": "Djibouti", "code": "DJ"},
        {"name": "Dominica", "code": "DM"},
        {"name": "Dominican Republic", "code": "DO"},
        {"name": "Ecuador", "code": "EC"},
        {"name": "Egypt", "code": "EG"},
        {"name": "El Salvador", "code": "SV"},
        {"name": "Equatorial Guinea", "code": "GQ"},
        {"name": "Eritrea", "code": "ER"},
        {"name": "Estonia", "code": "EE"},
        {"name": "Ethiopia", "code": "ET"},
        {"name": "Falkland Islands (Malvinas)", "code": "FK"},
        {"name": "Faroe Islands", "code": "FO"},
        {"name": "Fiji", "code": "FJ"},
        {"name": "Finland", "code": "FI"},
        {"name": "France", "code": "FR"},
        {"name": "French Guiana", "code": "GF"},
        {"name": "French Polynesia", "code": "PF"},
        {"name": "French Southern Territories", "code": "TF"},
        {"name": "Gabon", "code": "GA"},
        {"name": "Gambia", "code": "GM"},
        {"name": "Georgia", "code": "GE"},
        {"name": "Germany", "code": "DE"},
        {"name": "Ghana", "code": "GH"},
        {"name": "Gibraltar", "code": "GI"},
        {"name": "Greece", "code": "GR"},
        {"name": "Greenland", "code": "GL"},
        {"name": "Grenada", "code": "GD"},
        {"name": "Guadeloupe", "code": "GP"},
        {"name": "Guam", "code": "GU"},
        {"name": "Guatemala", "code": "GT"},
        {"name": "Guernsey", "code": "GG"},
        {"name": "Guinea", "code": "GN"},
        {"name": "Guinea-Bissau", "code": "GW"},
        {"name": "Guyana", "code": "GY"},
        {"name": "Haiti", "code": "HT"},
        {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
        {"name": "Holy See (Vatican City State)", "code": "VA"},
        {"name": "Honduras", "code": "HN"},
        {"name": "Hong Kong", "code": "HK"},
        {"name": "Hungary", "code": "HU"},
        {"name": "Iceland", "code": "IS"},
        {"name": "India", "code": "IN"},
        {"name": "Indonesia", "code": "ID"},
        {"name": "Iran, Islamic Republic Of", "code": "IR"},
        {"name": "Iraq", "code": "IQ"},
        {"name": "Ireland", "code": "IE"},
        {"name": "Isle of Man", "code": "IM"},
        {"name": "Israel", "code": "IL"},
        {"name": "Italy", "code": "IT"},
        {"name": "Jamaica", "code": "JM"},
        {"name": "Japan", "code": "JP"},
        {"name": "Jersey", "code": "JE"},
        {"name": "Jordan", "code": "JO"},
        {"name": "Kazakhstan", "code": "KZ"},
        {"name": "Kenya", "code": "KE"},
        {"name": "Kiribati", "code": "KI"},
        {"name": "Korea, Democratic People'S Republic of", "code": "KP"},
        {"name": "Korea, Republic of", "code": "KR"},
        {"name": "Kuwait", "code": "KW"},
        {"name": "Kyrgyzstan", "code": "KG"},
        {"name": "Lao People'S Democratic Republic", "code": "LA"},
        {"name": "Latvia", "code": "LV"},
        {"name": "Lebanon", "code": "LB"},
        {"name": "Lesotho", "code": "LS"},
        {"name": "Liberia", "code": "LR"},
        {"name": "Libyan Arab Jamahiriya", "code": "LY"},
        {"name": "Liechtenstein", "code": "LI"},
        {"name": "Lithuania", "code": "LT"},
        {"name": "Luxembourg", "code": "LU"},
        {"name": "Macao", "code": "MO"},
        {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
        {"name": "Madagascar", "code": "MG"},
        {"name": "Malawi", "code": "MW"},
        {"name": "Malaysia", "code": "MY"},
        {"name": "Maldives", "code": "MV"},
        {"name": "Mali", "code": "ML"},
        {"name": "Malta", "code": "MT"},
        {"name": "Marshall Islands", "code": "MH"},
        {"name": "Martinique", "code": "MQ"},
        {"name": "Mauritania", "code": "MR"},
        {"name": "Mauritius", "code": "MU"},
        {"name": "Mayotte", "code": "YT"},
        {"name": "Mexico", "code": "MX"},
        {"name": "Micronesia, Federated States of", "code": "FM"},
        {"name": "Moldova, Republic of", "code": "MD"},
        {"name": "Monaco", "code": "MC"},
        {"name": "Mongolia", "code": "MN"},
        {"name": "Montserrat", "code": "MS"},
        {"name": "Morocco", "code": "MA"},
        {"name": "Mozambique", "code": "MZ"},
        {"name": "Myanmar", "code": "MM"},
        {"name": "Namibia", "code": "NA"},
        {"name": "Nauru", "code": "NR"},
        {"name": "Nepal", "code": "NP"},
        {"name": "Netherlands", "code": "NL"},
        {"name": "Netherlands Antilles", "code": "AN"},
        {"name": "New Caledonia", "code": "NC"},
        {"name": "New Zealand", "code": "NZ"},
        {"name": "Nicaragua", "code": "NI"},
        {"name": "Niger", "code": "NE"},
        {"name": "Nigeria", "code": "NG"},
        {"name": "Niue", "code": "NU"},
        {"name": "Norfolk Island", "code": "NF"},
        {"name": "Northern Mariana Islands", "code": "MP"},
        {"name": "Norway", "code": "NO"},
        {"name": "Oman", "code": "OM"},
        {"name": "Pakistan", "code": "PK"},
        {"name": "Palau", "code": "PW"},
        {"name": "Palestinian Territory, Occupied", "code": "PS"},
        {"name": "Panama", "code": "PA"},
        {"name": "Papua New Guinea", "code": "PG"},
        {"name": "Paraguay", "code": "PY"},
        {"name": "Peru", "code": "PE"},
        {"name": "Philippines", "code": "PH"},
        {"name": "Pitcairn", "code": "PN"},
        {"name": "Poland", "code": "PL"},
        {"name": "Portugal", "code": "PT"},
        {"name": "Puerto Rico", "code": "PR"},
        {"name": "Qatar", "code": "QA"},
        {"name": "Reunion", "code": "RE"},
        {"name": "Romania", "code": "RO"},
        {"name": "Russian Federation", "code": "RU"},
        {"name": "RWANDA", "code": "RW"},
        {"name": "Saint Helena", "code": "SH"},
        {"name": "Saint Kitts and Nevis", "code": "KN"},
        {"name": "Saint Lucia", "code": "LC"},
        {"name": "Saint Pierre and Miquelon", "code": "PM"},
        {"name": "Saint Vincent and the Grenadines", "code": "VC"},
        {"name": "Samoa", "code": "WS"},
        {"name": "San Marino", "code": "SM"},
        {"name": "Sao Tome and Principe", "code": "ST"},
        {"name": "Saudi Arabia", "code": "SA"},
        {"name": "Senegal", "code": "SN"},
        {"name": "Serbia and Montenegro", "code": "CS"},
        {"name": "Seychelles", "code": "SC"},
        {"name": "Sierra Leone", "code": "SL"},
        {"name": "Singapore", "code": "SG"},
        {"name": "Slovakia", "code": "SK"},
        {"name": "Slovenia", "code": "SI"},
        {"name": "Solomon Islands", "code": "SB"},
        {"name": "Somalia", "code": "SO"},
        {"name": "South Africa", "code": "ZA"},
        {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
        {"name": "Spain", "code": "ES"},
        {"name": "Sri Lanka", "code": "LK"},
        {"name": "Sudan", "code": "SD"},
        {"name": "Suriname", "code": "SR"},
        {"name": "Svalbard and Jan Mayen", "code": "SJ"},
        {"name": "Swaziland", "code": "SZ"},
        {"name": "Sweden", "code": "SE"},
        {"name": "Switzerland", "code": "CH"},
        {"name": "Syrian Arab Republic", "code": "SY"},
        {"name": "Taiwan, Province of China", "code": "TW"},
        {"name": "Tajikistan", "code": "TJ"},
        {"name": "Tanzania, United Republic of", "code": "TZ"},
        {"name": "Thailand", "code": "TH"},
        {"name": "Timor-Leste", "code": "TL"},
        {"name": "Togo", "code": "TG"},
        {"name": "Tokelau", "code": "TK"},
        {"name": "Tonga", "code": "TO"},
        {"name": "Trinidad and Tobago", "code": "TT"},
        {"name": "Tunisia", "code": "TN"},
        {"name": "Turkey", "code": "TR"},
        {"name": "Turkmenistan", "code": "TM"},
        {"name": "Turks and Caicos Islands", "code": "TC"},
        {"name": "Tuvalu", "code": "TV"},
        {"name": "Uganda", "code": "UG"},
        {"name": "Ukraine", "code": "UA"},
        {"name": "United Arab Emirates", "code": "AE"},
        {"name": "United Kingdom", "code": "GB"},
        {"name": "United States", "code": "US"},
        {"name": "United States Minor Outlying Islands", "code": "UM"},
        {"name": "Uruguay", "code": "UY"},
        {"name": "Uzbekistan", "code": "UZ"},
        {"name": "Vanuatu", "code": "VU"},
        {"name": "Venezuela", "code": "VE"},
        {"name": "Viet Nam", "code": "VN"},
        {"name": "Virgin Islands, British", "code": "VG"},
        {"name": "Virgin Islands, U.S.", "code": "VI"},
        {"name": "Wallis and Futuna", "code": "WF"},
        {"name": "Western Sahara", "code": "EH"},
        {"name": "Yemen", "code": "YE"},
        {"name": "Zambia", "code": "ZM"},
        {"name": "Zimbabwe", "code": "ZW"}
    ];
    // TODO: onload actual month
    // pageRegister2.find('select[name="form-verif-month"]');
    var $selectCountry = $('select[name="form-verif-country"]');
    countryList.forEach(function(country) {
        // var selected = country.code === 'US' ? 'selected="selected"' : '';
        selected = '';
        $selectCountry.append('<option value="'+country.name+'" '+selected+'>'+country.name+'</option>')
    });

    var demoData = {
        profile: {
            login: 'Blnd4Dck',
            city: 'Miami, Fl',
            img: 'data/profile.jpg',
            posts: 1234,
            followers: 9999,
            following: 111,
            intro: 'Always horny and looking for new guys and girls to chat with and trade pics.'
        },
        list: [
            {
                id: 1,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/1.jpg',
                naked: true,
                haveLike: false
            },
            {
                id: 2,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/2.jpg',
                naked: false,
                haveLike: false
            },
            {
                id: 3,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/3.jpg',
                naked: false,
                haveLike: false
            },
            {
                id: 4,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/4.jpg',
                naked: false,
                haveLike: false
            },
            {
                id: 5,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/5.jpg',
                naked: false,
                haveLike: false
            },
            {
                id: 6,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/6.jpg',
                naked: true,
                haveLike: false
            },
            {
                id: 7,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/1.jpg',
                naked: true,
                haveLike: false
            },
            {
                id: 8,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/5.jpg',
                naked: false,
                haveLike: false
            },
            {
                id: 9,
                hash: ['freenies'],
                likes: 130,
                active: '10 minutes ago',
                image: 'data/4.jpg',
                naked: false,
                haveLike: false
            },
        ]
    };

    // variables
    var pages = $('.pages');
    var pageHome = $('.page-home');
    var pageDetail = $('.page-detail');
    var pageRegister = $('.page-register');
    var bottomNavigate = $('.bottom-navigate');
    var formData = {
        formRegister: {
            username: null,
            email: null,
            password: null
        },
        formVerify: {
            fistName: null,
            lastName: null,
            card: null,
            month: null,
            year: null,
            cvv: null,
            zip: null,
            country: null
        }
    };

    // interface

    function animateScrollTop() {
        $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
    }

    function openPageDetail(id) {

        location.hash = '#detail/'+id;
        //history.pushState({}, 'Home', location.hash);

        generateDetailGirl(id);

        pageHome.addClass('page--hide');
        pageRegister.addClass('page--hide');

        pages.removeClass('pages--register');
        bottomNavigate.removeClass('bottom-navigate--hide');

        pageDetail.removeClass('page--hide');

        animateScrollTop();
    }
    function openPageHome() {

        location.hash = '#home';
        //history.pushState({}, 'Home', location.hash);

        pageDetail.addClass('page--hide');
        pageRegister.addClass('page--hide');

        pages.removeClass('pages--register');
        bottomNavigate.removeClass('bottom-navigate--hide');
        pageDetail.find('.profile-girl').removeClass('profile-girl--havelike');

        pageHome.removeClass('page--hide');

        animateScrollTop();
    }
    function openPageRegister() {

        location.hash = '#register';
        //history.pushState({}, 'Home', location.hash);

        pageHome.addClass('page--hide');
        pageDetail.addClass('page--hide');

        pages.addClass('pages--register');
        bottomNavigate.addClass('bottom-navigate--hide');

        pageRegister.removeClass('page--hide');

        animateScrollTop();
    }
    function numberFormatDot(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    $('.page-home__group-el').on('click', function() {
        if($(this).hasClass('page-home__group-el--pr')) {
            openPageRegister();
        } else {
            if(!$(this).hasClass('.page-home__group-el--active')) {
                $(this).parent().find('.page-home__group-el--active').removeClass('page-home__group-el--active');
                $(this).addClass('page-home__group-el--active');
                if($(this).hasClass('page-home__group-el--table')) {
                    channgeDisplayHome('table');
                } else if($(this).hasClass('page-home__group-el--list')) {
                    channgeDisplayHome('list');
                }
            }
        }
    });
    $('.bottom-navigate__btn').on('click', function(e) {
        e.preventDefault();
        openPageRegister();
    });

    $('.page-register__input--select').find('select').each(function() {
        var _this = $(this);
        // _this.hide();

        var $cloneSelect = $('<div class="page-register__input__select-value">'+ _this.find('option:selected').html() +'</div>');

        _this.after($cloneSelect);

        _this.on('change', function() {
            $cloneSelect.html(_this.find('option:selected').html());
        });
        $cloneSelect.on('click', function() {
            _this.click();
        });
    });



    // page home
    pageHome.find('.header').on('click', function(e) {
        e.preventDefault();
        openPageRegister();
    });

    pageHome.find('.header__login').html(demoData.profile.login);
    pageHome.find('.header__avatar').find('img').attr('src', demoData.profile.img);
    pageHome.find('.header__numbers-el--posts').find('.header__numbers-val').html(numberFormatDot(demoData.profile.posts));
    pageHome.find('.header__numbers-el--followers').find('.header__numbers-val').html(numberFormatDot(demoData.profile.followers));
    pageHome.find('.header__numbers-el--following').find('.header__numbers-val').html(numberFormatDot(demoData.profile.following));
    pageHome.find('.header__intro').html(demoData.profile.intro);

    var pageHomeTable = pageHome.find('.page-home__list--table');
    pageHomeTable.html('');
    var pageHomeList = pageHome.find('.page-home__list--list');
    pageHomeList.html('');
    var n = 0;
    demoData.list.forEach(function(girl) {
        n++;
        var $detail = $(
            '<div data-id="'+girl.id+'" class="page-home__list-el '+ (n > (demoData.list.length - 3) ? 'page-home__list-el--third' : '')+'">\n' +
            '    <div class="page-home__list-el-img" style="background-image: url('+ girl.image +')"></div>\n' +
            '</div>'
        );

        $detail.on('click', function() {
            var _this = $(this);
            if(_this.hasClass('page-home__list-el--third')) {
                showPopupSignUp();
            } else {
                var naked = null;
                var id = parseInt(_this.data('id'));
                demoData.list.forEach(function(girl) {
                    if(girl.id === id) naked = girl.naked;
                });

                if(naked) {
                    showPopupVerify();
                } else {
                    openPageDetail(girl.id);
                }
            }
        });

        pageHomeTable.append($detail);

        // -----
        generateDetailGirl(girl.id);
        var cloneDetail = pageDetail.find('.profile-girl').clone();

        generateEventForProfile(cloneDetail);

        pageHomeList.append(cloneDetail);
    });

    function channgeDisplayHome(view) {
        if(view === 'table') {
            pageHome.find('.page-home__list').addClass('page-home__list--hide');
            pageHome.find('.page-home__list--table').removeClass('page-home__list--hide');
        } else if(view === 'list') {
            pageHome.find('.page-home__list').addClass('page-home__list--hide');
            pageHome.find('.page-home__list--list').removeClass('page-home__list--hide');
        }
    }






    //page detail
    pageDetail.find('.header__detail').on('click', function(e) {
        e.preventDefault();
        openPageRegister();
    });
    pageDetail.find('.header-profile__avatar').on('click', function(e) {
        e.preventDefault();
        openPageHome();
    });

    pageDetail.find('.header-profile__avatar').find('img').attr('src', demoData.profile.img);
    pageDetail.find('.header-header-profile__login').html(demoData.profile.login);
    pageDetail.find('.header-profile__city').html(demoData.profile.city);

    function generateDetailGirl(id){


        var girlDetail = null;
        demoData.list.forEach(function(girl) {
            if(girl.id === id) girlDetail = girl;
        });

        pageDetail.find('.profile-girl').data('id', girlDetail.id);
        pageDetail.find('.profile-girl__photo').find('img').attr('src', girlDetail.image);
        pageDetail.find('.profile-girl__likes-val').html(girlDetail.likes);
        pageDetail.find('.profile-girl__login').html(demoData.profile.login);
        if(girlDetail.haveLike) {
            pageDetail.find('.profile-girl').addClass('profile-girl--havelike');
        } else {
            pageDetail.find('.profile-girl').removeClass('profile-girl--havelike');
        }
        if(girlDetail.naked) {
            pageDetail.find('.profile-girl__photo').addClass('profile-girl__photo--nake');
        } else {
            pageDetail.find('.profile-girl__photo').removeClass('profile-girl__photo--nake');
        }
        pageDetail.find('.profile-girl__hash').html(girlDetail.hash.map(function (val) {
            return '#' + val;
        }).join(', '));
        pageDetail.find('.profile-profile-girl__online').html(girlDetail.active);
    }

    function makeLikePhoto($profileBlock) {
        var id = parseInt($profileBlock.data('id'));
        if($profileBlock.hasClass('profile-girl--havelike')) {
            $profileBlock.removeClass('profile-girl--havelike');
            demoData.list.forEach(function(girl) {
                if(girl.id === id) girl.haveLike = false;
            });
        } else {
            $profileBlock.addClass('profile-girl--havelike');
            demoData.list.forEach(function(girl) {
                if(girl.id === id) girl.haveLike = true;
            });
        }
    }

    generateEventForProfile(pageDetail.find('.profile-girl'));

    function generateEventForProfile($profileBlock) {
        $profileBlock.find('.profile-girl__inform').on('click', function(e) {
            e.preventDefault();
            openPageRegister();
        });
        $profileBlock.find('.profile-girl__photo').on('click', function() {
            makeLikePhoto($profileBlock);
        });
        $profileBlock.find('.profile-girl__btn').on('click', function() {
            if($(this).hasClass('profile-girl__btn--like')) {
                makeLikePhoto($profileBlock);
            } else {
                openPageRegister();
            }
        });
    }




    // page register
    var currentRegisterStep = 1;
    var formRegister = pageRegister.find('.page-register__step--1').find('.page-register__form');
    var formRegister2 = pageRegister.find('.page-register__step--3').find('.page-register__form');
    formRegister.on('submit', function(e) {
        e.preventDefault();

        if(formRegister.valid()) {

            formData.formRegister.username = formRegister.find('input[name="form-sign-username"]').val();
            formData.formRegister.email = formRegister.find('input[name="form-sign-email"]').val();
            formData.formRegister.password = formRegister.find('input[name="form-sign-password"]').val();

            showStepRegister(2);
        }

    });
    formRegister2.on('submit', function(e) {
        e.preventDefault();

        if(formRegister2.valid()) {

            formData.formVerify.fistName = formRegister.find('input[name="form-verif-firstname"]').val();
            formData.formVerify.lastName = formRegister.find('input[name="form-verif-lastname"]').val();
            formData.formVerify.card = formRegister.find('input[name="form-verif-card"]').val();
            formData.formVerify.month = formRegister.find('select[name="form-verif-month"]').val();
            formData.formVerify.year = formRegister.find('select[name="form-verif-year"]').val();
            formData.formVerify.cvv = formRegister.find('input[name="form-verif-cvv"]').val();
            formData.formVerify.zip = formRegister.find('input[name="form-verif-zip"]').val();
            formData.formVerify.country = formRegister.find('select[name="form-verif-country"]').val();

            pageRegister.find('.page-register__text4-name').html(formData.formRegister.username);
            pageRegister.find('.page-register__text4-email').html(formData.formRegister.email);
            pageRegister.find('.page-register__text4-password').html(formData.formRegister.password);

            showStepRegister(4);
        }

    });
    pageRegister.on('click', function() {
        if(currentRegisterStep === 2) {
            showStepRegister(3);
        }
    });
    pageRegister.find('.page-register__input-icon--eye').on('click', function() {
        var $input = $(this).parent().find('input');
        if($input.attr('type') === 'password') {
            $input.attr('type', 'text');
        } else {
            $input.attr('type', 'password');
        }
    });
    var registerStep4 = pageRegister.find('.page-register__step--4');
    registerStep4.find('input[name="check-rules"]').on('change', function() {
        if($(this).prop('checked')) {
            registerStep4.find('.page-register__button').prop('disabled', false);
        } else {
            registerStep4.find('.page-register__button').prop('disabled', 'disabled');
        }
    });
    registerStep4.find('.page-register__button').on('click', function() {
       alert('send ok');
    });

    function showStepRegister(step) {
        currentRegisterStep = step;
        pageRegister.find('.page-register__step').addClass('page-register__step--hide');
        pageRegister.find('.page-register__step--' + step).removeClass('page-register__step--hide');
    }

    /* popup */
    /*$(document).mouseup(function (e){
        var block = $(".popup-sign-up");
        if (
            (!block.is(e.target) && block.has(e.target).length === 0)
        ) {
            hideAllPopup();
        }
    });*/
    $('.overlay').on('click', function() {
        hidePopupAll();
        openPageRegister();
    });
    $('.popup-sign-up').on('click', function() {
        hidePopupAll();
        openPageRegister();
    });
    $('.popup-verify').on('click', function() {
        hidePopupAll();
        openPageRegister();
    });
    function hidePopupAll() {
        $('.pages').removeClass('pages--blur');
        $('.bottom-navigate').removeClass('bottom-navigate--blur');
        $('.overlay').addClass('overlay--hide');
        $('.popup-sign-up').addClass('popup--hide');
        $('.popup-verify').addClass('popup--hide');
    };
    /* popup sign up */
    function showPopupSignUp() {
        $('.overlay').removeClass('overlay--hide');
        $('.pages').addClass('pages--blur');
        $('.bottom-navigate').addClass('bottom-navigate--blur');
        $('.popup-sign-up').removeClass('popup--hide');
    }
    /* popup verify */
    function showPopupVerify() {
        $('.overlay').removeClass('overlay--hide');
        $('.pages').addClass('pages--blur');
        $('.bottom-navigate').addClass('bottom-navigate--blur');
        $('.popup-verify').removeClass('popup--hide');
    }

    // parseHistory
    parseHash();
    window.onhashchange = function() {
        parseHash();
    };
    function parseHash() {
        if(location.hash === '#register') {
            openPageRegister();
        } else if(location.hash.indexOf('#detail') !== -1) {
            var id = parseInt(location.hash.substr(8));
            openPageDetail(id);
        } else {
            openPageHome();
        }
    }


});

