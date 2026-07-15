/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
$('.form-input__input, .form-ta__ta').on('input keydown keyup propertychange click paste cut copy mousedown mouseup change', function () {
  if ($(this).val().length > 0) {
    $(this).addClass('filled');
  } else if ($(this).text().length > 0) {
    $(this).addClass('filled');
  } else $(this).removeClass('filled');
});
$('img.svg').each(function () {
  var $img = $(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  jQuery.get(imgURL, function (data) {
    var $svg = $(data).find('svg');

    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }

    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    $svg = $svg.removeAttr('xmlns:a');

    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
    }

    $img.replaceWith($svg);
  }, 'xml');
});
$('.info-banner-close').on('click', function () {
  $('.info-banner').remove();
  document.documentElement.style.setProperty('--info-banner-h', '0px');
});
jQuery('img.svg').each(function () {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  jQuery.get(imgURL, function (data) {
    var $svg = jQuery(data).find('svg');

    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }

    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    $svg = $svg.removeAttr('xmlns:a');

    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
    }

    $img.replaceWith($svg);
  }, 'xml');
});
$('.tsokol-gallery-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  appendArrows: '.tsokol-gallery-arrows',
  nextArrow: '<button class="tsokol-arrow tsokol-arrow--next"></button>',
  prevArrow: '<button class="tsokol-arrow tsokol-arrow--prev"></button>',
  responsive: [{
    breakpoint: 640,
    settings: {
      slidesToShow: 3
    }
  }]
});
$('.banner-main__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  arrows: true,
  appendDots: '.banner-main__dots',
  appendArrows: '.banner-main__arrows-lg',
  nextArrow: '<button class="slider-arrow slider-arrow--next"></button>',
  prevArrow: '<button class="slider-arrow slider-arrow--prev"></button>'
});
$('.banner-main-min-banners-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: false,
  arrows: true,
  appendArrows: '.banner-main__arrows',
  nextArrow: '<button class="slider-arrow slider-arrow--next"></button>',
  prevArrow: '<button class="slider-arrow slider-arrow--prev"></button>'
});
$('.banner-main-min-banners-slider-m').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  fade: false,
  dots: false,
  arrows: true,
  appendArrows: '.banner-main__arrows-m',
  nextArrow: '<button class="slider-arrow slider-arrow--next"></button>',
  prevArrow: '<button class="slider-arrow slider-arrow--prev"></button>'
});
$(window).on('load resize', function () {
  if (window.innerWidth <= 1200 || window.innerWidth > 1440 && window.innerWidth <= 1800) {
    $('.product-slider--s:not(.slick-initialized)').slick({
      centerMode: false,
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 2,
      variableWidth: true,
      swipeToSlide: true
    });
  } else {
    $(".product-slider--s.slick-initialized").slick("unslick");
  }

  if (window.innerWidth <= 1050) {
    $('.product-slider--m:not(.slick-initialized)').slick({
      centerMode: false,
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 2,
      variableWidth: true,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 499,
        settings: {
          slidesToShow: 2
        }
      }]
    });
    $('.news-slider:not(.slick-initialized)').slick({
      centerMode: false,
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      variableWidth: true,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }]
    });
    $('.selection-slider:not(.slick-initialized)').slick({
      centerMode: false,
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 2,
      variableWidth: true,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  } else {
    $(".product-slider--m.slick-initialized").slick("unslick");
    $(".news-slider.slick-initialized").slick("unslick");
    $(".selection-slider.slick-initialized").slick("unslick");
  }
});
$('.product-slider--f').slick({
  centerMode: false,
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  variableWidth: true,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 899,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 499,
    settings: {
      slidesToShow: 2
    }
  }]
});
$('.header-search__btn').on('click', function () {
  $('.header-search').toggleClass('active');
  $('.header-wrap').toggleClass('s--opened');
});
$(document).on('scroll', function () {
  var documentScroll = $(document).scrollTop();

  if (documentScroll >= 1) {
    $('.header-wrap').addClass('scrolled');
  } else {
    $('.header-wrap').removeClass('scrolled');
  }
});
$('.header-btn--expmenu').on('click', function () {
  if (!$(this).hasClass('active')) {
    var menu = $(this).data('menu');

    if (menu == 'catalog') {
      $('.menu-side__block-link')[0].click();
    }

    $('.menu').hide();
    $('#menu-' + menu).fadeIn().css('display', 'flex');
    $('.menu-block').hide();
    $('.menu-block[data-menu="' + menu + '"]').fadeIn();
    $('.header-btn--expmenu').removeClass('active');
    $('.header-wrap').addClass('menu-opened');
    $('.menu-container').hide();
    $('body').addClass('fixed');
    $('.menu-block[data-menu="' + menu + '"]').find('a[data-submenu]').first().click();
  } else {
    $('.menu').fadeOut();
    $('.header-wrap').removeClass('menu-opened');
    $('body').removeClass('fixed');
  }

  $(this).toggleClass('active');
});
$('.menu-side__block-list a[data-submenu]').on('click', function (e) {
  e.preventDefault();
  var menu = $(this).data('submenu');
  var side = $(this).closest('.menu-side');
  $(side).find('.menu-side__block-list a').removeClass('active');
  $('.menu-container').hide();
  $('.menu-container[data-submenu="' + menu + '"]').fadeIn().css('display', 'flex');

  if (window.innerWidth <= 620) {
    $(this).closest('.menu-side').hide();
  } else {
    $(this).addClass('active');
  }
});
$('.menu-main__item.--hassub a').on('click', function (e) {
  e.preventDefault();
  $('#menu-main').hide();
  var menu = $(this).data('menu');
  $('#menu-' + menu).fadeIn();
  $('.menu-block[data-menu="' + menu + '"]').fadeIn();
});
$('.menu-back').on('click', function () {
  $(this).closest('.menu-lvl').fadeOut();
  var menu = $(this).data('menu');

  if ($(this).data('menu') == 'main') {
    $('.menu').hide();
    $('#menu-main').fadeIn();
  } else {
    $('.menu-block[data-menu="' + menu + '"]').fadeIn();
  }
});
$('.header-location').on('click', function () {
  $(this).next('.header-location-box').fadeToggle();
  $('.header-location-input input').val('');
});
$(document).mouseup(function (e) {
  var container = $(".header-location-wrap");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.header-location-box').fadeOut();
  }
});
$('.change-location').on('click', function () {
  if (window.innerWidth > 620) {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  } else {
    $('.header-btn--menu').addClass('active');
    var menu = 'main';
    $('.menu').hide();
    $('#menu-' + menu).fadeIn().css('display', 'flex');
    $('.menu-block').hide();
    $('.menu-block[data-menu="' + menu + '"]').fadeIn();
    $('.header-wrap').addClass('menu-opened');
    $('.menu-container').hide();
    $('body').addClass('fixed');
    $('.menu-block[data-menu="' + menu + '"]').find('a[data-submenu]').first().click();
  }

  $('.header-location-box').fadeIn();
  $('.header-location-accept').fadeOut();
  $('.header-location-input input').val('');
});
$('.accept-location').on('click', function () {
  $('.header-location-box').fadeOut();
  $('.header-location-accept').fadeOut();
  document.cookie = "accept_location=1; path=/; max-age=31536000";
});

function removeNonCity(suggestions) {
  return suggestions.filter(function (suggestion) {
    return suggestion.data.fias_level !== "5" && suggestion.data.fias_level !== "65";
  });
}

$(".header-location-input input").suggestions({
  token: "3c9470d44b27fcd7814433487e0fc47cd9c6ad5b",
  type: "ADDRESS",
  hint: false,
  count: 20,
  geoLocation: false,
  bounds: "city-settlement",
  onSuggestionsFetch: removeNonCity,
  onSelect: function onSelect(suggestion) {
    if (suggestion.data.city != null) {
      cityConfirmed(suggestion.data.city, 'city');
    } else {
      if (suggestion.data.settlement != null) {
        cityConfirmed(suggestion.data.settlement, 'settlement');
      }
    }

    $('.header-location-box').fadeOut();
  }
});
$('.header-location-list button').on('click', function () {
  cityConfirmed($(this).data('city'), 'city');
  $('.header-location-box').fadeOut();
});

function cityConfirmed(cityName, cityType) {
  $('.header-location').attr('data-city', cityName);
  $('.header-location').text(cityName);
  $('.header-location').attr('data-type', cityType);
  $('.header-location').attr('data-confirmed', 1);
}

$('.catalog-filters__head').on('click', function () {
  $(this).toggleClass('closed').next().slideToggle();
});
var infoBanner = $('#info-banner');

if (infoBanner.length > 0) {
  document.documentElement.style.setProperty('--info-banner-h', $(infoBanner).innerHeight() + 'px');
  $(window).on("resize", function () {
    document.documentElement.style.setProperty('--info-banner-h', $(infoBanner).innerHeight() + 'px');
  });
}

var node = document.getElementsByClassName("filter-search");

for (var i = 0; i < node.length; i++) {
  node[i].addEventListener('keydown', function (event) {
    var s = $(this).closest('.catalog-filters__search');
    var val = $(this).text();

    if (event.keyCode == '13') {
      event.preventDefault();
      var p = document.createElement('p');
      var h = document.createElement('input');
      h.setAttribute("type", "hidden");
      h.setAttribute("name", $(this).data('name'));
      h.setAttribute("value", val);
      p.innerHTML = val;
      p.append(h);
      $(p).on('click', function () {
        $(this).remove();
      });
      $(s).next().append(p);
      $(this).text('');
    }
  });
}

$('.catalog-filters-toggle-btn').on('click', function () {
  if (!$(this).hasClass('active')) {
    $('.catalog-filters-toggle-btn').removeClass('active');
    $(this).addClass('active');
    var block = $(this).data('block');
    $('.catalog-filters__toggle-block').slideUp();
    $('.catalog-filters__toggle-block[data-block="' + block + '"]').slideDown();
  } else {
    $('.catalog-filters-toggle-btn').removeClass('active');
    $('.catalog-filters__toggle-block').slideUp();
  }
});
$('.catalog-filters__s-list p').on('click', function () {
  $(this).remove();
});
$('.catalog-filters-btn, .catalog-filters-wrap--overlay').on('click', function () {
  $('.catalog-filters-wrap').toggleClass('active');
  $('.catalog-container').toggleClass('active');
  $('.catalog-filters-btn').toggleClass('active');
  $('.header-wrap').toggleClass('filters-opened');
});
$('.filters-reset').on('click', function (e) {
  e.preventDefault();
  var form = $(this).closest('form');
  $(':input', form).not(':button, :submit, :reset, :hidden').val('').prop('checked', false).prop('selected', false);
  $(form).find('.catalog-filters__s-list p').remove();
});
var input = document.querySelector('.cart__item-count__input-box');
$('.cart__item-count__input-box').on('input', function () {
  this.style.width = this.value.length + "ch";
});
$('.cart__item-count__input-box').on('input', validateNum);
$('.cart__item-count__input-box').each(function () {
  this.style.width = this.value.length + "ch";
});

function validateNum() {
  this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
}

$('body').on('click', '.cart__item-count__input-btn.--minus', function () {
  var box = $(this).closest('.cart__item-count__input');
  var val = $(box).find('.cart__item-count__input-box').first();
  var newval = Number($(val).val()) - 1;

  if (newval > 0) {
    $(val).css('width', newval.toString().length + 'ch');
  }
});
$('body').on('click', '.cart__item-count__input-btn.--plus', function () {
  var box = $(this).closest('.cart__item-count__input');
  var val = $(box).find('.cart__item-count__input-box').first();
  var newval = Number($(val).val()) + 1;
  $(val).css('width', newval.toString().length + 'ch');
});
$('.catalog-filters__search').on('click', function () {
  $(this).find('.filter-search').first().focus();
});
$('.cart-pack--enable').on('change', function () {
  if ($(this).prop('checked')) {
    $('.cart-pack__count, .cart-pack__cost, .cart-pack-item-list').addClass('active');
  } else {
    $('.cart-pack__count, .cart-pack__cost, .cart-pack-item-list').removeClass('active');
  }
});
$('.cart-pack__count-val').on('input', function () {
  var val = Number($(this).val());
  var base = Number($('#pack-cost-val').data('basecost'));
  $('#pack-cost-val').html(val * base);
});
$('.cart-pack__count .cart__item-count__input-btn').on('click', function () {
  var box = $(this).closest('.cart__item-count__input');
  var val = $(box).find('.cart__item-count__input-box').first().val();

  if (val > 0) {
    var base = Number($('#pack-cost-val').data('basecost'));
    $('#pack-cost-val').html(val * base);
  }
});
$('.cart-promo').on('submit', function (e) {
  e.preventDefault();
});
$('.product-page__gallery-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: false,
  arrows: false,
  swipe: false,
  asNavFor: '.product-page__gallery-preview',
  responsive: [{
    breakpoint: 1050,
    settings: {
      swipe: true,
      dots: true,
      appendDots: '.product-page__gallery-dots'
    }
  }]
});
$('.product-page__gallery-preview').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  verticalSwiping: true,
  vertical: true,
  variableHeight: true,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  swipeToSlide: false,
  touchThreshold: 100,
  asNavFor: '.product-page__gallery-slider',
  adaptiveHeight: true
});
$('.tab-list').each(function () {
  var tab_item = $(this).find('.tab-item');
  var len = $(tab_item).length;

  for (var _i = 0; _i < len; _i++) {
    $(tab_item[_i]).css('z-index', len - _i);
  }
}); ////

var fileArr = {};
$('.images_field').each(function () {
  fileArr[$(this).attr('id')] = [];
  $(this).change(function () {
    var id = $(this).attr('id');
    if (fileArr.length > 0) fileArr[id] = [];
    var prev = $(this).data('prev');
    $('#' + prev).html("");
    var total_file = document.getElementById(id).files;
    var i;
    if (!total_file.length) return;

    for (i = 0; i < total_file.length; i++) {
      if (total_file[i].size > 1048576) {
        return false;
      } else {
        fileArr[id].push(total_file[i]);
        $('#' + prev).append("<div class='img-div' id='img-div-" + id + i + "'><img src='" + URL.createObjectURL(event.target.files[i]) + "' class='img-thumbnail'><button data-inp='" + id + "' class='img-delete' value='img-div-" + id + i + "' role='" + total_file[i].name + "'></button></div>");
      }
    }

    console.log(fileArr);
  });
});
$('body').on('click', '.img-delete', function (evt) {
  evt.preventDefault();
  var divName = this.value;
  var fileName = $(this).attr('role');
  var inp = $(this).data('inp');
  var total_file = fileArr[inp];

  for (var i = 0; i < fileArr[inp].length; i++) {
    if (fileArr[inp][i].name === fileName) {
      fileArr[inp].splice(i, 1);
    }
  }

  document.getElementById(inp).files = FileListItem(fileArr[inp]);
  $("#".concat(divName)).remove();
});

function FileListItem(file) {
  file = [].slice.call(Array.isArray(file) ? file : arguments);

  for (var c, b = c = file.length, d = !0; b-- && d;) {
    d = file[b] instanceof File;
  }

  if (!d) throw new TypeError("expected argument to FileList is File or array of File objects");

  for (b = new ClipboardEvent("").clipboardData || new DataTransfer(); c--;) {
    b.items.add(file[c]);
  }

  return b.files;
}

$('.reviews-form-show').on('click', function () {
  var ph = $(this).closest('.product-page__reviews--ph');
  $(ph).slideUp();
  $(ph).next().slideDown();
});
$('.product-page__reviews-form-close').on('click', function () {
  var form = $(this).closest('.product-page__reviews-form');
  $(form).slideUp();
  $(form).prev().slideDown();
});
$('body').on('click', '.tab-item[data-tab]', function (evt) {
  var tab = $(this).data('tab');
  $(this).closest('.tab-list').find('.tab-item').removeClass('active');
  $(this).addClass('active');
  $(this).closest('.tab-list').next().find('.tab-content').hide();
  $(this).closest('.tab-list').next().find('.tab-content[data-tab="' + tab + '"]').show();
});
$('body').on('click', '.form-vars__head', function () {
  $(this).toggleClass('active').next().fadeToggle();
});
$('body').on('click', '.form-vars__list-item', function () {
  value = $($(this).find('p')[0]).html();
  $(this).closest('.form-vars__list').fadeOut().prev().addClass('filled').removeClass('active').find('.form-vars__val').html(value);
});
$(document).mouseup(function (e) {
  var container = $(".form-vars");
  container.each(function () {
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0) {
      $(this).find('.form-vars__list').fadeOut();
      $(this).find('.form-vars__head').removeClass('active');
    }
  });
});
$('.--copy').click(function () {
  text = $(this).html();
  navigator.clipboard.writeText(text);
  var elem = $(this);
  $(elem).addClass('active');
  setTimeout(function () {
    $(elem).removeClass('active');
  }, 2000);
});
$('.product-page__reviews-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  arrows: true,
  nextArrow: '<button class="slider-arrow slider-arrow--next"></button>',
  prevArrow: '<button class="slider-arrow slider-arrow--prev"></button>',
  touchThreshold: 100,
  responsive: [{
    breakpoint: 799,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 620,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.share--open').on('click', function () {
  $(this).toggleClass('active').next().slideToggle();
});
$('.share__btn').on('click', function () {
  $(this).closest('.share-list').slideToggle();
  $('.share--open').removeClass('active');
});
$('body').on('click', '.ya-share2__link', function () {
  $(this).closest('.share-list').slideToggle();
  $('.share--open').removeClass('active');
});
$(document).mouseup(function (e) {
  var container = $(".share--wrap");
  container.each(function () {
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0) {
      $(this).find('.share-list').fadeOut();
      $(this).find('.share--open').removeClass('active');
    }
  });
});
$('body').on('click', '.ya-share2__link_copy', function () {
  var elem = $(this).closest('.share--wrap');
  setTimeout(function () {
    $(elem).addClass('active');
    setTimeout(function () {
      $(elem).removeClass('active');
    }, 2000);
  }, 500);
});
$('.product-page__btn-enable').on('click', function () {
  $('.tab-item[data-tab="enable"]').click();
  $('html, body').animate({
    scrollTop: $("#tab-enable").offset().top - 300
  }, 800);
});
$('body').on('click', '.tab-item', function () {
  if (window.innerWidth < 620) {
    var centerWindow = window.innerWidth / 2;
    var centerElement = this.offsetWidth / 2;
    var centerOffset = centerWindow - centerElement;
    var positionElement = this.offsetLeft - centerOffset;
    this.parentElement.scrollTo({
      left: positionElement,
      behavior: 'smooth'
    });
  }
});
$('.next-toggle').on('change', function () {
  var checkBoxes = $(this).closest('.order-form-check').next().find('.form-input__input');
  checkBoxes.prop("disabled", !checkBoxes.prop("disabled"));
  $(this).closest('.order-form-check').next().find('.text-notice').toggleClass('disabled');
});
$('.form-input__pass-toggle').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).prev().attr('type', 'password').focus();
  } else {
    $(this).prev().attr('type', 'text').focus();
  }

  $(this).toggleClass('active');
});
$(function () {
  $(".dt").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: 'c-95:c+0',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    firstDay: 1,
    monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    minDate: new Date(1900, 1 - 1, 1)
  });
});
$('body').on('click', '.profile-orders-item-exp', function () {
  $(this).toggleClass('active');
  $(this).closest('.profile-orders-item__head').next().slideToggle();
});
$('.profile-sub__club-btn').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).find('span').html('Подробнее');
  } else {
    $(this).find('span').html('Скрыть');
  }

  $(this).toggleClass('active');
  $(this).closest('.profile-sub__tab-content').find('.profile-sub__club-hidden').slideToggle();
});
$('.profile-sub__club-hidden-btn').on('click', function () {
  $(this).closest('.profile-sub__tab-content').find('.profile-sub__club-btn').click();
});
$('.profile-sub__tab-item').on('click', function () {
  var tab = $(this).data('block');

  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.profile-sub__tab-content').removeClass('active');
  } else {
    $('.profile-sub__tab-item').removeClass('active');
    $(this).addClass('active');
    $('.profile-sub__tab-content').removeClass('active');
    $('.profile-sub__tab-content[data-block="' + tab + '"]').addClass('active');
  }
});
$('.popup-wrap, .close, .popup-close-btn').on('click', function (e) {
  if (e.target == this) {
    $(this).closest('.popup').fadeOut();
    $('body').removeClass('fixed');
  }
});
$('.check-agree').on('change', function () {
  if ($('.subscribe-form-agree').find('.check-agree').length == $('.subscribe-form-agree').find('.check-agree:checked').length) {
    $(this).closest('.subscribe-form').find('.subscribe-btn').removeClass('disabled');
  } else {
    $(this).closest('.subscribe-form').find('.subscribe-btn').addClass('disabled');
  }
});
$('.form-vars__list-item input[data-var]').on('change', function () {
  var option = $(this).data('var');
  $(this).closest('.profile-sub-form-delivery-content').find('.profile-sub-form-details').removeClass('active');
  $(this).closest('.profile-sub-form-delivery-content').find('.profile-sub-form-details[data-var=' + option + ']').addClass('active');
});
$('.profile-sub__club-plans__btn').on('click', function () {
  var formID = $(this).data('id');
  var form = $('#' + formID);
  $(form).find('.profile-sub-form-final-cost-val').html($(this).data('cost'));
  $(form).find('.sub-val').val($(this).data('len'));
  $(form).find('.book-count').html($(this).data('bookcount'));
  $(form).fadeIn();
});
$('input.no-other').on('change', function () {
  if ($(this).prop('checked')) {
    $(this).closest('div').find('.is-var').prop('checked', false);
  }
});
$('input.is-var').on('change', function () {
  if ($(this).prop('checked')) {
    $(this).closest('div').find('.no-other').prop('checked', false);
  }
});
$('.questions-item-head').on('click', function () {
  $(this).toggleClass('active').next().slideToggle();
});
$('.cert-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  variableWidth: true,
  dots: true,
  arrows: true,
  swipeToSlide: true,
  appendArrows: '.cert-slider__arrows',
  appendDots: '.cert-slider__dots',
  nextArrow: '<button class="slider-arrow slider-arrow--next slider-arrow--light"></button>',
  prevArrow: '<button class="slider-arrow slider-arrow--prev slider-arrow--light"></button>'
});
$('.shop-list').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  swipeToSlide: true,
  appendArrows: '.shop-list-arrows',
  nextArrow: '<button class="slider-arrow slider-arrow--next slider-arrow--light"></button>',
  prevArrow: '<button class="slider-arrow slider-arrow--prev slider-arrow--light"></button>',
  responsive: [{
    breakpoint: 1240,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 920,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 620,
    settings: {
      slidesToShow: 1,
      variableWidth: true
    }
  }]
});
$('.about__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  dots: true,
  arrows: true,
  swipeToSlide: true,
  appendArrows: '.about__slider__arrows',
  nextArrow: '<button class="slider-arrow slider-arrow--next slider-arrow--light"></button>',
  prevArrow: '<button class="slider-arrow slider-arrow--prev slider-arrow--light"></button>',
  appendDots: '.about__slider__dots'
});
$('.term-search-alphabet-prev').on('click', function () {
  var alp = $(this).closest('.term-search-arrows').prev();
  scrollCur = alp.scrollLeft();
  scrollCur = scrollCur / 40;
  scrollCur = parseInt(scrollCur);
  scrollCur = scrollCur * 40;
  $(alp).animate({
    scrollLeft: scrollCur - 40 * 7
  });
});
$('.term-search-alphabet-next').on('click', function () {
  var alp = $(this).closest('.term-search-arrows').prev();
  scrollCur = alp.scrollLeft();
  scrollCur = scrollCur / 40;
  scrollCur = parseInt(scrollCur);
  scrollCur = scrollCur * 40;
  $(alp).animate({
    scrollLeft: scrollCur + 40 * 7 - 1
  });
});
$('[data-click]').on('click', function () {
  var trg = $(this).data('click');
  $('#' + trg).click();
});

var appHeight = function appHeight() {
  var doc = document.documentElement;
  doc.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
};

window.addEventListener('resize', appHeight);
appHeight(); // Check for location acceptance cookie and show popup after 1 minute if not set

setTimeout(function () {
  if (!document.cookie.includes('accept_location=1')) {
    $('.header-location-accept').fadeIn();
  }
}, 60000); // 60000ms = 1 minute

window.currentMenuLevel = 1;
$('body').on('click', '.menu-sub-link[data-sub-menu], .menu-side__block-link[data-sub-menu]', function (e) {
  e.preventDefault();
  var $menu = $('.menu-sub[data-sub-menu="' + $(this).data('sub-menu') + '"]');
  $(this).closest('.menu-sub').find('.menu-sub-item').removeClass('active');
  $(this).closest('.menu-side').find('.menu-side__block-item').removeClass('active');
  $(this).parent().addClass('active');
  console.log(window.currentMenuLevel);

  for (var $i = window.currentMenuLevel; $i >= Number($menu.data('menu-level')); $i--) {
    $('.menu-sub[data-menu-level="' + $i + '"]').removeClass('active').find('.menu-sub-item').removeClass('active');
  }

  window.currentMenuLevel = Number($menu.data('menu-level'));
  $menu.addClass('active');
});
$('.menu, .menu-close, .menu-head-close').on('click', function (e) {
  if (e.target !== e.currentTarget) return;
  $('.menu').hide();
  $('.header-wrap').removeClass('menu-opened');
  $('body').removeClass('fixed');
  $('.header-btn--expmenu').removeClass('active');
});
$('body').on('click', '.mobile-nav__link[data-menu]', function (e) {
  var menu = $(this).data('menu');
  $('.menu').hide();
  $('#menu-' + menu).fadeIn().css('display', 'flex').css('height', '100vh');
  $('.menu-block').hide();
  $('[data-sub-menu]').removeClass('active');
  $('.header-wrap').addClass('menu-opened');
  $('body').addClass('fixed');
});
$('body').on('click', '.menu-head-back', function (e) {
  console.log('x');
  $(this).closest('.menu-sub').removeClass('active');
  $('.menu-sub-item').removeClass('active');
  $('.menu-side__block-item').removeClass('active');
});
/******/ })()
;