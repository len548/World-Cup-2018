

function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'css/base.css') {
        theme.setAttribute('href', 'css/own.css');
    } else {
        theme.setAttribute('href', 'css/base.css');
    }
}