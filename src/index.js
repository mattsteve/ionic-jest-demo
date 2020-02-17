require('@ionic/core/css/ionic.bundle.css');
const IonicLoader = require('@ionic/core/loader');

async function createPage() {
    const item = document.createElement('ion-item');

    const label = document.createElement('ion-label');
    label.setAttribute('position', 'stacked');
    label.textContent = 'Type Something: ';
    label.for = 'input';

    const input = document.createElement('ion-input');
    input.id = 'input'

    item.appendChild(label);
    item.appendChild(input);
    document.body.appendChild(item);
}

async function init() {
    await IonicLoader.applyPolyfills();
    await IonicLoader.defineCustomElements();
    await createPage();
    const readyEvent = new Event('appready');
    document.body.dispatchEvent(readyEvent);
}

init();