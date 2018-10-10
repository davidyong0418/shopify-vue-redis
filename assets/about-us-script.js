function openPage(pageName, elmnt) {
    var i, section, tablinks;
    section = document.getElementsByClassName('section');
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < section.length; i++) {
    section[i].style.display = 'none';
    }

    document.getElementById(pageName).style.display = 'block';
}
// Get the element with id='defaultOpen' and click on it
document.getElementById('defaultOpen').click();

$('.tablink').click(function() {
    $('.current').removeClass('current');
    $(this).addClass('current');
});
