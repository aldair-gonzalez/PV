const productos     =       (document.querySelector<HTMLDivElement>('#products') as HTMLDivElement);
const productDialog =       (document.querySelector<HTMLDivElement>('#productDialog') as HTMLDivElement);
const buttonsDialog =       (document.querySelector<HTMLDivElement>('#buttonsDialog') as HTMLDivElement);
const formularios   =       (document.querySelectorAll<HTMLElement>('form'));

(() => {

    const functionEach = (array, element, elementClass: string, action: string) => {
        array.forEach((e: HTMLElement, i: number) => {
            array[i].addEventListener('click', () => {
                action == 'remove' ? element.classList.remove(elementClass) : null;
                action == 'add'    ? element.classList.add(elementClass)    : null;
            })
        });
    }
    
    formularios ? formularios.forEach((e, i) => e.addEventListener('submit', (e) => e.preventDefault())) : null;
    if(
        productos     &&
        productDialog &&
        buttonsDialog
    ) {
        functionEach(productos.childNodes,     productDialog, 'hidden', 'remove');
        functionEach(buttonsDialog.childNodes, productDialog, 'hidden', 'add');
    }
    
})()