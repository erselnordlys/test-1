
window.onload = main;

function showText (id) {
    var child = document.getElementById(id).firstElementChild;
    child.style.animation = 'fadeIn 500ms';
    child.classList.remove('hidden');
}

function hideText(id) {

    var child = document.getElementById(id).firstElementChild;
    child.style.animation = 'fadeOut 500ms';
    setTimeout(function () {
        child.classList.add('hidden');
    }, 400);
}

function addOverlayToEveryImage() {
    var images = document.querySelectorAll('.image');
    for (var i = 1; i <= images.length; i++) {

        var node = document.createElement('DIV');
        var text = document.createTextNode("Тестовая картинка");
        node.appendChild(text);
        node.classList.add('overlay-text');
        node.style.animation = 'enlargeText 300ms';

        var layer = document.createElement('DIV');
        layer.classList.add('overlay');
        layer.classList.add('hidden');

        layer.appendChild(node);
        document.getElementById('img' + i).appendChild(layer);
    }
}

function main () {

    addOverlayToEveryImage();
}