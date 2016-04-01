(function () {
    "use strict";
    var closeMenus = function () {
        var openLaunchers = document.querySelectorAll('.dropdown-launcher[aria-expanded="true"]'),
            len = openLaunchers.length,
            i   = 0;
        for (i=0; i<len; i++) {
            openLaunchers[i].setAttribute("aria-expanded", "");
            openLaunchers[i].parentElement.focus();
            openLaunchers[i].parentElement.style.zIndex = '10';
            openLaunchers[i].setAttribute("aria-expanded", "false");
            (function (i) {
                setTimeout(function() { openLaunchers[i].parentElement.querySelector('.dropdown-links').style.display = 'none'; }, 300);
            })(i);
        }
        document.removeEventListener('click', closeMenus);
    },
    launcherClick = function(e) {
        var launcher  = e.target,
            container = launcher.parentElement,
            menu      = launcher.parentElement.querySelector('.dropdown-links');
        launcher.blur();
        closeMenus();
        menu.style.display = 'block';
        container.style.zIndex = '20';
        setTimeout(function() {
            launcher.setAttribute("aria-expanded", "true");
        }, 50);
        document.addEventListener('click', closeMenus);
        e.stopPropagation();
        e.preventDefault();
        menu.focus();
    },
    launchers = document.querySelectorAll('.dropdown-launcher'),
    len   = launchers.length,
    i = 0;

    for (i=0; i<len; i++) {
        launchers[i].addEventListener('click', launcherClick);
        launchers[i].parentElement.querySelector('.dropdown-links').style.display = 'none';
        launchers[i].parentElement.style.zIndex = '10';
    }
})();
