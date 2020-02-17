require('../../src/index.js');

function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

test('app is ready', async () => {
    await new Promise((resolve) => {
        document.body.addEventListener('appready', function() {
            resolve();
        });
    });
});

test('ion-input exists', async () => {
    expect(document.querySelector('ion-input')).toBeTruthy();
});

test('ion-input is hydrated', async () => {
    const input = document.querySelector('ion-input');
    wait(2000);
    expect(input.classList.contains('hydrated')).toBeTruthy();
});
