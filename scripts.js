// hide close icons, links, and dark overlay on document ready
$(document).ready(function () {
    $('.closeIcon').first().hide();
    // $('.firstIntroGroup').addClass('noDisplay');
});

const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 45
});


$('.burgerIcon').click(function () {
    $('.overheadHeader').addClass('open');
    $('.burgerIcon').hide();
    $('.closeIcon').show();

    $('.navLinks').on('click', () => {
        $('.overheadHeader').removeClass('open');
        $('.closeIcon').hide();
        $('.burgerIcon').show();
    })
    $('.closeIcon').on('click', () => {
        $('.overheadHeader').removeClass('open');
        $('.closeIcon').hide();
        $('.burgerIcon').show();
    })
});


$('.topIcon').hover(function () {
    $('.topIcon').attr('src', 'assets/navIcons/topIcon2.png');
}, function () {
    $('.topIcon').attr('src', 'assets/navIcons/topIcon.png');
});
$('.projectsIcon').hover(function () {
    $('.projectsIcon').attr('src', 'assets/navIcons/projectsIcon2.png');
}, function () {
    $('.projectsIcon').attr('src', 'assets/navIcons/projectsIcon.png');
});
$('.introIcon').hover(function () {
    $('.introIcon').attr('src', 'assets/navIcons/introIcon2.png');
}, function () {
    $('.introIcon').attr('src', 'assets/navIcons/introIcon.png');
});
$('.contactIcon').hover(function () {
    $('.contactIcon').attr('src', 'assets/navIcons/contactIcon2.png');
}, function () {
    $('.contactIcon').attr('src', 'assets/navIcons/contactIcon.png');
});


$('.me').hover(function () {
    $('.me').attr('src', 'assets/base/ali.gif');
}, function() {
        $('.me').attr('src', 'assets/base/aliSmile.gif');
});
