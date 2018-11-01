$(function() {

      var demoData2 = [
        {
            "name": "SexyBuns",
            "profile_img": "data/girl1.jpg",
            "distance": "1.2km away",
            "years": "28 yrs old"
        },
        {
            "name": "TightAndHot",
            "profile_img": "data/girl2.jpg",
            "distance": "0.2km away",
            "years": "22 yrs old"
        },
        {
            "name": "SexyBuns",
            "profile_img": "data/girl3.jpg",
            "distance": "1.2km away",
            "years": "28 yrs old"
        }
    ];

    // variables
    var pages= $('.pages');
    var pageFind = $('.page-find');
    var pageMatch = $('.page-match');
    var pagePremium = $('.page-premium');
    var pageHome = $('.page-home');
    var pageWhyVerify = $('.page-why-verify');
    var pageVerify = $('.page-verify');
    var pageWarning = $('.page-warning');
    var formData = {
        formRegister: {
            username: '',
            email: '',
            password: ''
        },
        formVerify: {
            fistName: '',
            lastName: '',
            card: '',
            month: '',
            year: '',
            cvv: '',
            zip: '',
            country: ''
        }
    };

    // interface
    $('.page-button--effect-boris').on('click', function(e) {
        e.preventDefault();
        var _this = $(this);
        _this.addClass('button--click');
        setTimeout(function() {
            _this.removeClass('button--click');
        }, 1000);
    });
    function hideAllPages() {
        pages.removeClass('pages--background-home');
        pages.removeClass('pages--background-signup');

        pageMatch.addClass('page--hide');
        pagePremium.addClass('page--hide');
        pageFind.addClass('page--hide');
        pageHome.addClass('page--hide');
        pageWhyVerify.addClass('page--hide');
        pageVerify.addClass('page--hide');
    }
    function showPageFind() {
        hideAllPages();
        pageFind.removeClass('page--hide');

        animateScrollTop();
    }
    function showPagePremium() {
        hideAllPages();
        pages.addClass('pages--background-signup');
        pagePremium.removeClass('page--hide');

        animateScrollTop();
    }
    function showPageWhyVerify() {
        hideAllPages();
        pageWhyVerify.removeClass('page--hide');

        animateScrollTop();
    }
    function showPageVerify() {
        hideAllPages();
        pageVerify.removeClass('page--hide');

        animateScrollTop();
    }
    function showPageMatch() {
        hideAllPages();
        pageMatch.removeClass('page--hide');

        animateScrollTop();
    }
    function showPageWarning() {
        hideAllPages();
        pageWarning.removeClass('page--hide');

        animateScrollTop();
    }
    function animateScrollTop() {
        $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
    }
    showPagePremium();

    // pages
    // page home
    pageHome.find('.page-home__button').on('click', function() {
        showPageFind();
    });

    // page warning
    // pageWarning

    // page match
    // pageMatch.find
    /*$('.popup-match').find('.popup-match__verify').on('click', function(e) {
        e.preventDefault();
        hidePopupMatch();
        showPagePremium();
    });
    $('.popup-match').find('.popup-match__keep').on('click', function(e) {
        e.preventDefault();
        hidePopupMatch();
        findNextGirl('right');
    });*/

    // why verify
    var currentSlideNum = 1;
    pageWhyVerify.find('.page-why-verify__button').on('click', function() {
        showPageVerify();
    });
    pageWhyVerify.on('click', function(e) {
        var block = $(".page-why-verify__button");
        if (
            (!block.is(e.target) && block.has(e.target).length === 0)
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
                showPageMatch(currentSelectIndex);
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
    var popupOverlay = $('.overlay');
    var popupReached = $('.popup-limit-reachede');
    var popupNeedPremium = $('.popup-need-premium');

    $(document).on('mouseup', function (e){
        if (
            (!popupNeedPremium.is(e.target) && popupNeedPremium.has(e.target).length === 0) &&
            (!popupReached.is(e.target) && popupReached.has(e.target).length === 0)
        ) {
            hidePopupNeedPremium();
            hidePopupReachede();
        }
    });

    // popup need premium
    function showPopupNeedPremium() {
        popupOverlay.removeClass('overlay--hide');
        popupNeedPremium.removeClass('popup--hide');
    }
    function hidePopupNeedPremium() {
        popupOverlay.addClass('overlay--hide');
        popupNeedPremium.addClass('popup--hide');
    }
    popupNeedPremium.find('.popup-need-premium__close').on('click', function(e) {
        e.preventDefault();
        hidePopupNeedPremium();
    });
    popupNeedPremium.find('.popup-need-premium__unlock').on('click', function(e) {
        e.preventDefault();
        hidePopupNeedPremium();
        showPagePremium();
    });

    // popup limit reachede
    function showPopupReachede() {
        popupOverlay.removeClass('overlay--hide');
        popupReached.removeClass('popup--hide');
    }
    function hidePopupReachede() {
        popupOverlay.addClass('overlay--hide');
        popupReached.addClass('popup--hide');
    }
    popupReached.find('.popup-need-premium__close').on('click', function(e) {
        e.preventDefault();
        hidePopupReachede();
    });
    popupReached.find('.popup-need-premium__unlock').on('click', function(e) {
        e.preventDefault();
        hidePopupReachede();
        showPagePremium();
    });

});

