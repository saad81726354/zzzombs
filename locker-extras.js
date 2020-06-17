function alphabeticize() {
    location.replace(window.location.href + "&alphabetical=true")
}

function dealphabeticize() {
    var x = window.location.href.replace("&alphabetical=true", "");
    location.replace(x)
};

var n = 0;
var bp = new Audio("https://cdn.glitch.com/7188c23d-904a-4c62-ae47-5ff3976cc2a1%2Fmenu_button-resources.assets-5104.wav?v=1592257456148");

function findInPage() {
    var estr = document.getElementById("replaceme").value.toString();
    var str = estr.replace(/ /g, '');
    var txt, i, found;
    if (str == "") {
        return false;
    }
    // Find next occurance of the given string on the page, wrap around to the
    // start of the page if necessary.
    if (window.find) {
        bp.play();
        // Look for match starting at the current point. If not found, rewind
        // back to the first match.
        if (!window.find(str)) {
            while (window.find(str, false, true)) {
                n++;
            }
        } else {
            n++;
        }
        // If not found in either direction, give message.
        if (n == 0) {
            alert("Not found.");
        }
    } else if (window.document.body.createTextRange) {
        txt = window.document.body.createTextRange();
        // Find the nth match from the top of the page.
        found = true;
        i = 0;
        while (found === true && i <= n) {
            found = txt.findText(str);
            if (found) {
                txt.moveStart("character", 1);
                txt.moveEnd("textedit");
            }
            i += 1;
        }
        // If found, mark it and scroll it into view.
        if (found) {
            txt.moveStart("character", -1);
            txt.findText(str);
            txt.select();
            txt.scrollIntoView();
            n++;
        } else {
            // Otherwise, start over at the top of the page and find first match.
            if (n > 0) {
                n = 0;
                findInPage(str);
            }
            // Not found anywhere, give message. else
            alert("Not found.");
        }
    }
    return false;
};