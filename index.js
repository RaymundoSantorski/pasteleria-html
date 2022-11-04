let state = 0;

let nextButton = document.getElementById('next_button');
let lastButton = document.getElementById('last_button');
let saboresSection = document.getElementById('sabores');
let adornosSection = document.getElementById('adornos');
let pedidoSection = document.getElementById('pedido');

nextButton.addEventListener('click', (e) => {
    state++;
    showRoute();
});

lastButton.addEventListener('click', (e) => {
    state--;
    showRoute();
});

let showRoute = () => {
    switch(state){
        case 0:
            saboresSection.classList.add('--active');
            adornosSection.classList.remove('--active');
            pedidoSection.classList.remove('--active');
            nextButton.classList.add('--active');
            lastButton.classList.remove('--active');
            break;
        case 1: 
            saboresSection.classList.remove('--active');
            adornosSection.classList.add('--active');
            pedidoSection.classList.remove('--active');
            nextButton.classList.add('--active');
            lastButton.classList.add('--active');
            break;
        case 2: 
            saboresSection.classList.remove('--active');
            adornosSection.classList.remove('--active');
            pedidoSection.classList.add('--active');
            nextButton.classList.remove('--active');
            lastButton.classList.add('--active');
            break;
    }
}