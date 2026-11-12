/* global hljs */
if (typeof hljs !== 'undefined') {
    hljs.initHighlightingOnLoad();
}

(function () {
    var versionSelect = document.getElementById('version-select');
    if (versionSelect) {
        versionSelect.addEventListener('change', function () {
            location.assign(this.value);
        });
        window.addEventListener('pageshow', function () {
            versionSelect.value = versionSelect.querySelector('option[selected]').value;
        });
    }

    var links = document.querySelectorAll('#m-sidebar-list a');
    function updateCurrent() {
        for (var i = 0; i < links.length; i += 1) {
            var current = links[i].hash === location.hash;
            links[i].parentNode.classList.toggle('current', current);
            if (current) {
                links[i].setAttribute('aria-current', 'location');
            } else {
                links[i].removeAttribute('aria-current');
            }
        }
    }

    window.addEventListener('hashchange', updateCurrent);
    updateCurrent();
})();
