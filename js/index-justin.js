
// Simple navigation toggler
var state = ($(".sidebar").hasClass("toggled"));

var nav = document.getElementById("sidebarToggleTop");

nav.onclick = function() {
    state = !state;
    if (state) {
        nav.style.left = '16px';
    }
    else {
        nav.style.left = '6.5rem';
    }
}