//keyboard navigation
document.onkeydown = arrowChecker;

function arrowChecker(e) {  
    e = e || window.event;
    if (e.keyCode == '37') { //left
        document.getElementById("previous").click();
    }
    else if (e.keyCode == '39') { //right
        document.getElementById("next").click();
    }
}