var productos = document.querySelector('#products');
var productDialog = document.querySelector('#productDialog');
var buttonsDialog = document.querySelector('#buttonsDialog');
var formularios = (document.querySelectorAll('form'));
(function () {
    var functionEach = function (array, element, elementClass, action) {
        array.forEach(function (e, i) {
            array[i].addEventListener('click', function () {
                action == 'remove' ? element.classList.remove(elementClass) : null;
                action == 'add' ? element.classList.add(elementClass) : null;
            });
        });
    };
    formularios ? formularios.forEach(function (e, i) { return e.addEventListener('submit', function (e) { return e.preventDefault(); }); }) : null;
    if (productos &&
        productDialog &&
        buttonsDialog) {
        functionEach(productos.childNodes, productDialog, 'hidden', 'remove');
        functionEach(buttonsDialog.childNodes, productDialog, 'hidden', 'add');
    }
})();
