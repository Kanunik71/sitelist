$(function() {

    // $.mobile.ignoreContentEnabled=true;

    var demoData = [
        {
            "name": "Paola",
            // "profile_img": "data/AdobeStock_37432740.png",
            "profile_img": "data/AdobeStock_193481865@2x.png",
            "distance": "40 miles away",
            // can be random, but needs to be sticky for the user
            "verified": true,
            "premium": false
        },
        {
            "name": "DarksideChick",
            // "profile_img": "data/AdobeStock_77449354.png",
            "profile_img": "data/AdobeStock_174287278@2x.png",
            "distance": "40 miles away",
            // can be random, but needs to be sticky for the user
            "verified": false,
            "premium": false
        },
        {
            "name": "Sheila",
            // "profile_img": "data/AdobeStock_98612124.png",
            "profile_img": "data/AdobeStock_164499569@2x.png",
            "distance": "40 miles away",
            // can be random, but needs to be sticky for the user
            "verified": false,
            "premium": false
        },
        {
            "name": "Helga",
            // "profile_img": "data/AdobeStock_164499569.png",
            "profile_img": "data/AdobeStock_77449354@2x.png",
            "distance": "40 miles away",
            // can be random, but needs to be sticky for the user
            "verified": true,
            "premium": true
        },
        {
            "name": "Jade",
            // "profile_img": "data/AdobeStock_174287278.png",
            "profile_img": "data/AdobeStock_98612124@2x.png",
            "distance": "40 miles away",
            // can be random, but needs to be sticky for the user
            "verified": false,
            "premium": false
        },
        {
            "name": "Anita",
            // "profile_img": "data/AdobeStock_193481865.png",
            "profile_img": "data/AdobeStock_37432740@2x.png",
            "distance": "23 miles",
            // can be random, but needs to be sticky for the user
            "verified": false,
            "premium": false
        }
    ];
    var demoData2 = [
        {
            "name": "Linda",
            // "profile_img": "data/AdobeStock_37432740.png",
            "profile_img": "data/AdobeStock_165238262.png",
            "distance": "40 miles away",
            // can be random, but needs to be sticky for the user
            "verified": true,
            "premium": false
        },
        {
            "name": "Penelopa",
            // "profile_img": "data/AdobeStock_77449354.png",
            "profile_img": "data/AdobeStock_49840412.png",
            "distance": "40 miles away",
            // can be random, but needs to be sticky for the user
            "verified": false,
            "premium": false
        },
        {
            "name": "Maria",
            // "profile_img": "data/AdobeStock_98612124.png",
            "profile_img": "data/insta4.png",
            "distance": "40 miles away",
            // can be random, but needs to be sticky for the user
            "verified": false,
            "premium": false
        }
    ];

    // variables
    var pageList = $('.page-list');
    var pageFind = $('.page-find');
    var pagePremium = $('.page-premium');
    var pageDetail = $('.page-detail');
    var pageHome = $('.page-home');
    var pageWhyVerify = $('.page-why-verify');
    var pageVerify = $('.page-verify');
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


    // upload data
    var id = 0;
    pageList.find('.header__count-val').html(demoData.length);
    demoData.forEach(function(girl) {
        girl.id = ++id;
        girl.sendInvite = false;
        var $girl = $(
            '<div class="page-list__el" date-id="'+ girl.id +'">\n' +
            '<div class="page-list__el-wrapper">\n' +
            '            <div class="page-list__img" style="background-image:url('+ girl.profile_img +')"></div>\n' +
            '            <div class="page-list__info">\n' +
            '                <div class="page-list__name">'+ girl.name +'</div>\n' +
            '                <div class="page-list__distance">'+ girl.distance +'</div>\n' +
            '            </div>\n' +
            '            <div class="page-list__marks '+ ((girl.verified && girl.premium) ? 'page-list__marks--double' : '') +'">\n' +
            (
                girl.verified
                ?
            '                <div class="page-list__mark page-list__mark--verify">\n' +
            '                   <svg width="62px" height="30px">'+
            '                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-verified"></use>'+
            '                    </svg>'+
            '                </div>\n'
                :
                ''
            ) +
            (
                girl.premium
                    ?
            '                <div class="page-list__mark page-list__mark--premium">\n' +
            '                   <svg width="62px" height="30px">'+
            '                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-premium"></use>'+
            '                    </svg>'+
            '                </div>\n'
                    :
                    ''
            ) +
            '            </div>\n' +
            '            </div>\n' +
            '        </div>'
        );

        $girl.on('click', function() {
           if(girl.premium || girl.verified) {
               showPopupNeedPremium();
           } else if(girl.sendInvite) {
               showPopupResponde(girl);
           } else {
               showPopupShowInvite(girl);
           }
        });

        pageList.append($girl);
    });



    // interface
    $('.bottom-navigate').find('.bottom-navigate__btn').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('bottom-navigate__btn--conversations')) {
            showPopupNeedPremium();
        } else {
            if(!$(this).hasClass('bottom-navigate__btn--active')) {

                if($(this).hasClass('bottom-navigate__btn--find')) {
                    showPageFind();
                }
                if($(this).hasClass('bottom-navigate__btn--nearby')) {
                    showPageNearby();
                }
                $(this).parent().find('.bottom-navigate__btn--active').removeClass('bottom-navigate__btn--active');
                $(this).addClass('bottom-navigate__btn--active');

            }
        }
    });

    $('.header').find('.header__filter-button').on('click', function() {
        showPopupShowFilter();
    });

    $('.page-button--effect-boris').on('click', function(e) {
        var _this = $(this);
        _this.addClass('button--click');
        setTimeout(function() {
            _this.removeClass('button--click');
        }, 1000);
    });
    function hideAllPages() {
        $('.pages').removeClass('pages--background-home');

        pageList.addClass('page--hide');
        pagePremium.addClass('page--hide');
        pageFind.addClass('page--hide');
        pageDetail.addClass('page--hide');
        pageHome.addClass('page--hide');
        pageWhyVerify.addClass('page--hide');
        pageVerify.addClass('page--hide');
    }
    function showPageFind() {
        hideAllPages();
        pageFind.removeClass('page--hide');

        showBottomNavigation();
        animateScrollTop();
    }
    function showPageNearby() {
        hideAllPages();
        pageList.removeClass('page--hide');

        showBottomNavigation();
        animateScrollTop();
    }
    function showPageDetail() {
        hideAllPages();
        pageDetail.removeClass('page--hide');

        showBottomNavigation();
        animateScrollTop();
    }
    function showPagePremium() {
        hideAllPages();
        pagePremium.removeClass('page--hide');

        hideBottomNavigation();
        animateScrollTop();
    }
    function showPageWhyVerify() {
        hideAllPages();
        pageWhyVerify.removeClass('page--hide');

        hideBottomNavigation();
        animateScrollTop();
    }
    function showPageVerify() {
        hideAllPages();
        pageVerify.removeClass('page--hide');

        hideBottomNavigation();
        animateScrollTop();
    }
    function hideBottomNavigation() {
        $('.bottom-navigate-under').addClass('bottom-navigate-under--hide');
        $('.bottom-navigate').addClass('bottom-navigate--hide');
    }
    function showBottomNavigation() {
        $('.bottom-navigate-under').removeClass('bottom-navigate-under--hide');
        $('.bottom-navigate').removeClass('bottom-navigate--hide');
    }
    function animateScrollTop() {
        $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
    }
    hideBottomNavigation();


    // pages
    // home
    pageHome.find('.page-home__button').on('click', function() {
        showPageDetail();
    });

    // why verify
    var currentSlideNum = 1;
    pageWhyVerify.find('.page-why-verify__button').on('click', function() {
        showPageVerify();
    });
    pageWhyVerify.on('click', function(e) {
        var block = $(".page-why-verify__button");
        if (
            (!block.is(e.target) &&
                block.has(e.target).length === 0)
        ) {
            currentSlideNum++;
            showNextSlideWhyVerify();
        }
    });
    function showNextSlideWhyVerify() {
        if(currentSlideNum > 3) currentSlideNum = 1;
        if(currentSlideNum < 1) currentSlideNum = 3;

        pageWhyVerify.find('.page-why-verify__slider').css('left', (currentSlideNum - 1) * -375);
        pageWhyVerify.find('.page-why-verify__nav-el').removeClass('page-why-verify__nav-el--active');
        pageWhyVerify.find('.page-why-verify__nav-el--'+currentSlideNum).addClass('page-why-verify__nav-el--active');
    }
    pageWhyVerify.swipe({
        fingers:'all',
        swipeLeft: function() {
            currentSlideNum++;
            showNextSlideWhyVerify();
        },
        swipeRight: function() {
            currentSlideNum--;
            showNextSlideWhyVerify();
        },
        allowPageScroll:"auto"
    });

    // page find
    var girlForFind = [];
    var currentSelectIndex = 0;
    var findGirlNoRepeat = true;
    var countSwipe = 0;
    var countSwipeLove = 0;
    demoData2.forEach(function(girl) {
        girlForFind.push(
            {
                image: girl.profile_img,
                name: girl.name,
                likes: (Math.random() * (10 - 1)).toFixed(1) + 'k',
                years: parseInt(Math.random() * (30 - 20) + 20),
                distance: parseInt(girl.distance),
                infotext: 'Just looking to have fun and meet some new people on here'
            }
        );
    });
    pageFind.find('.page-find__btns-el--cross').on('click', function(e) {
        e.preventDefault();
        findNextGirl('left');
    });
    pageFind.find('.page-find__btns-el--chat').on('click', function(e) {
        e.preventDefault();
        showPopupNeedPremium();
    });
    pageFind.find('.page-find__btns-el--heart').on('click', function(e) {
        e.preventDefault();
        findNextGirl('right');
    });
    pageFind.find('.page-find__images').swipe({
        swipe: function(e, direction, distance, duration, fingerCount, fingerData) {
            if(direction === 'left') {
                e.preventDefault();
                findNextGirl('left');
            } else if(direction === 'right') {
                e.preventDefault();
                findNextGirl('right');
            }
        }
    });
    function findNextGirl(direction) {

        if(countSwipe >= 6) {
            showPopupReachede();
            return false;
        }
        if(direction === 'right') {
            countSwipeLove++;
            if(countSwipeLove === 3) {
                showPopupMatch(currentSelectIndex);
                return false;
            }
        }
        countSwipe++;
        var nextIndex = currentSelectIndex + 1;
        currentSelectIndex = nextIndex >= girlForFind.length ? 0 : nextIndex;
        generateFindGirl(currentSelectIndex, direction);
    }
    function generateFindGirl(index, direct) {
        if(findGirlNoRepeat) {
            findGirlNoRepeat = false;
            var cls = (direct === 'left') ? 'page-find__images-el--out-left' : 'page-find__images-el--out-right';
            var currentFindGirl = girlForFind[index];
            var nextFindGirl = girlForFind[index + 1] ? girlForFind[index + 1] : girlForFind[0];
            var wrapperCurrent = pageFind.find('.page-find__wrapper');
            wrapperCurrent.addClass('page-find__wrapper--hide');

            var mainImage = pageFind.find('.page-find__images-el--main');
            mainImage.addClass('page-find__images-el--out');
            mainImage.addClass(cls);
            var nextImage = pageFind.find('.page-find__images-el--next');
            nextImage.css('background-image', 'url(' + currentFindGirl.image + ')');
            nextImage.removeClass('page-find__images-el--next').addClass('page-find__images-el--main');

            setTimeout(function () {
                findGirlNoRepeat = true;
                mainImage
                    .removeClass('page-find__images-el--main')
                    .removeClass('page-find__images-el--out')
                    .removeClass('page-find__images-el--out-right')
                    .removeClass('page-find__images-el--out-left')
                    .addClass('page-find__images-el--next')
                    .css('background-image', 'url(' + nextFindGirl.image + ')');

                wrapperCurrent.find('.page-find__info-name').html(currentFindGirl.name);
                wrapperCurrent.find('.page-find__info-likes-text').html(currentFindGirl.likes);
                wrapperCurrent.find('.page-find__data-old').html(currentFindGirl.years);
                wrapperCurrent.find('.page-find__data-distance').html(currentFindGirl.distance);
                wrapperCurrent.find('.page-find__text').html(currentFindGirl.infotext);
                wrapperCurrent.removeClass('page-find__wrapper--hide');
            }, 555);
        }
    }
    generateFindGirl(currentSelectIndex, 'right');


    // page detail
    pageDetail.find('.page-detail__list-el-star').on('click', function(e) {
        e.preventDefault();
        showPopupNeedPremium();
    });
    pageDetail.find('.page-detail__chat').on('click', function(e) {
        e.preventDefault();
        showPopupNeedPremium();
    });
    pageDetail.find('.page-detail__feed').on('click', function(e) {
        e.preventDefault();
        showPopupNeedPremium();
    });


    // page premium
    var premiumForm = $('.page-premium__form');
    premiumForm.on('submit', function(e) {
        e.preventDefault();

        if(premiumForm.valid()) {

            formData.formRegister.username = premiumForm.find('input[name="form-sign-username"]').val();
            formData.formRegister.email = premiumForm.find('input[name="form-sign-email"]').val();
            formData.formRegister.password = premiumForm.find('input[name="form-sign-password"]').val();

            showPageWhyVerify();
        }
    });

    // page verify
    var verifyForm = $('.page-verify__form');
    verifyForm.on('submit', function(e) {
        e.preventDefault();

        if(verifyForm.valid()) {

            formData.formVerify.fistName = verifyForm.find('input[name="form-verif-firstname"]').val();
            formData.formVerify.lastName = verifyForm.find('input[name="form-verif-lastname"]').val();
            formData.formVerify.card = verifyForm.find('input[name="form-verif-card"]').val();
            formData.formVerify.month = verifyForm.find('select[name="form-verif-month"]').val();
            formData.formVerify.year = verifyForm.find('select[name="form-verif-year"]').val();
            formData.formVerify.cvv = verifyForm.find('input[name="form-verif-cvv"]').val();
            formData.formVerify.zip = verifyForm.find('input[name="form-verif-zip"]').val();
            formData.formVerify.country = verifyForm.find('select[name="form-verif-country"]').val();

            console.log(formData);
        }
    });


    // popup
    $(document).mouseup(function (e){
        var block = $(".popup-need-premium");
        var block2 = $(".popup-send-invite");
        var block3 = $(".popup-filter");
        var block4 = $(".popup-respond");
        var block5 = $('.popup-limit-reachede');
        var block6 = $('.popup-match');
        if (
            (!block.is(e.target) &&
            block.has(e.target).length === 0) &&
            (!block2.is(e.target) &&
            block2.has(e.target).length === 0) &&
            (!block3.is(e.target) &&
                block3.has(e.target).length === 0) &&
            (!block4.is(e.target) &&
                block4.has(e.target).length === 0) &&
            (!block5.is(e.target) &&
                block5.has(e.target).length === 0) &&
            (!block6.is(e.target) &&
                block6.has(e.target).length === 0)
        ) {
            hidePopupNeedPremium();
            hidePopupShowInvite();
            hidePopupFilter();
            hidePopupResponde();
            hidePopupReachede();
            hidePopupMatch();
        }
    });

    // popup need premium
    function showPopupNeedPremium() {
        $('.overlay').removeClass('overlay--hide');
        $('.popup-need-premium').removeClass('popup--hide');
    }
    function hidePopupNeedPremium() {
        $('.overlay').addClass('overlay--hide');
        $('.popup-need-premium').addClass('popup--hide');
    }
    $('.popup-need-premium').find('.popup-need-premium__close').on('click', function(e) {
        e.preventDefault();
        hidePopupNeedPremium();
    });
    $('.popup-need-premium').find('.popup-need-premium__unlock').on('click', function(e) {
        e.preventDefault();
        hidePopupNeedPremium();
        showPagePremium();
    });

    // popup limit reachede
    function showPopupReachede() {
        $('.overlay').removeClass('overlay--hide');
        $('.popup-limit-reachede').removeClass('popup--hide');
    }
    function hidePopupReachede() {
        $('.overlay').addClass('overlay--hide');
        $('.popup-limit-reachede').addClass('popup--hide');
    }
    $('.popup-limit-reachede').find('.popup-need-premium__close').on('click', function(e) {
        e.preventDefault();
        hidePopupReachede();
    });
    $('.popup-limit-reachede').find('.popup-need-premium__unlock').on('click', function(e) {
        e.preventDefault();
        hidePopupReachede();
        showPagePremium();
    });

    // popup show invite
    function showPopupShowInvite(girl) {
        $('.overlay').removeClass('overlay--hide');

        $('.popup-send-invite').find('.popup-send-invite__info').removeClass('popup-send-invite__info--hide');
        $('.popup-send-invite').find('.popup-send-invite__sent').addClass('popup-send-invite__sent--hide');

        $('.popup-send-invite').find('.popup-send-invite__img').css('background-image','url('+girl.profile_img+')');
        $('.popup-send-invite').find('.popup-send-invite__title').html(girl.name);
        $('.popup-send-invite').find('.popup-send-invite__text').html(girl.distance);
        $('.popup-send-invite').find('.popup-send-invite__btn').data('id', girl.id);
        $('.popup-send-invite').removeClass('popup--hide');
    }
    function hidePopupShowInvite() {
        $('.overlay').addClass('overlay--hide');
        $('.popup-send-invite').addClass('popup--hide');
    }
    function sentPopupShowInvite() {
        $('.popup-send-invite').find('.popup-send-invite__info').addClass('popup-send-invite__info--hide');
        $('.popup-send-invite').find('.popup-send-invite__sent').removeClass('popup-send-invite__sent--hide');
    }
    $('.popup-send-invite').find('.popup-send-invite__close').on('click', function(e) {
        e.preventDefault();
        hidePopupShowInvite();
    });
    $('.popup-send-invite').find('.popup-send-invite__btn').on('click', function(e) {
        e.preventDefault();
        var id = parseInt($(this).data('id'));
        demoData.forEach(function(girl) {
            if(girl.id === id) girl.sendInvite = true;
        });
        sentPopupShowInvite();
    });

    // popup show filter
    function showPopupShowFilter() {
        $('.overlay').removeClass('overlay--hide');
        $('.popup-filter').removeClass('popup--hide');
    }
    function hidePopupFilter() {
        $('.overlay').addClass('overlay--hide');
        $('.popup-filter').addClass('popup--hide');
    }
    $('.popup-filter').find('.popup-filter__close').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        hidePopupFilter();
    });
    $('.popup-filter').on('click', function(e) {
        e.preventDefault();
        hidePopupFilter();
        showPopupNeedPremium();
    });

    // popup respond
    function showPopupResponde(girl) {
        $('.overlay').removeClass('overlay--hide');
        $('.popup-respond').find('.popup-respond__background').css('background-image','url('+girl.profile_img+')');
        $('.popup-respond').find('.popup-respond__name').html(girl.name);
        $('.popup-respond').find('.popup-respond__distance').html(parseInt(girl.distance) + 'mi');
        $('.popup-respond').find('.popup-respond__text').html(girl.distance);
        $('.popup-respond').removeClass('popup--hide');
    }
    function hidePopupResponde() {
        $('.overlay').addClass('overlay--hide');
        $('.popup-respond').addClass('popup--hide');
    }
    $('.popup-respond').find('.popup-respond__btn--respond').on('click', function(e) {
        e.preventDefault();
        hidePopupResponde();
        showPagePremium();
    });
    $('.popup-respond').find('.popup-respond__btn--deny').on('click', function(e) {
        e.preventDefault();
        hidePopupResponde();
    });

    // popup respond
    function showPopupMatch(index) {
        $('.overlay').removeClass('overlay--hide');
        var currentFindGirl = girlForFind[index];
        // $('.popup-match').data('index', index);
        $('.popup-match').find('.popup-match__avatar').css('background-image', 'url('+ currentFindGirl.image +')');
        $('.popup-match').find('.popup-popup-match__text').find('span').html(currentFindGirl.name);
        $('.popup-match').removeClass('popup--hide');
    }
    function hidePopupMatch() {
        $('.overlay').addClass('overlay--hide');
        $('.popup-match').addClass('popup--hide');
    }
    $('.popup-match').find('.popup-match__verify').on('click', function(e) {
        e.preventDefault();
        hidePopupMatch();
        showPagePremium();
    });
    $('.popup-match').find('.popup-match__keep').on('click', function(e) {
        e.preventDefault();
        hidePopupMatch();
        findNextGirl('right');
    });

});

