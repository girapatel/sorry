// Disable hover on mobile/tablet

function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all ::after stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match('::after')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}


// Randomize intro on refresh
var introPhrase = new Array();
    introPhrase[0] = 'Design, am I right?';
    introPhrase[1] = 'Style guides, am I right?';
    introPhrase[2] = 'Fonts, am I right?';
    introPhrase[3] = 'Digital, am I right?';
    introPhrase[4] = 'Grids, am I right?';
window.onload = function () {
document.getElementById("introPhrase").innerHTML = introPhrase[Math.floor(Math.random()*introPhrase.length)];
            }