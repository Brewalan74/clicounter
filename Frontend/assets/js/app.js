
const app = {
    // Property
    total : 0,

    // Method
    init : () => {
        const btnElement = document.querySelector('#btn-counter');
        btnElement.addEventListener('click', app.handleButtonClick);

        const btnSaveElement = document.querySelector('#btn-save');
        btnSaveElement.addEventListener('click', app.handleButtonSaveClick);
    },

    handleButtonClick: (evt) => {
        const btnElementClicked = evt.currentTarget;
        
        const divTotalElement = document.querySelector('#total');
        
        let currentTotal = parseInt(divTotalElement.textContent);

        currentTotal = currentTotal + 1;

        divTotalElement.textContent = currentTotal;
    },

    handleButtonSaveClick: (evt) => {
        const btnElementClicked = evt.currentTarget;

        const divTotalElement = document.querySelector('#total');

        let currentTotal = parseInt(divTotalElement.textContent);
        const liElement = document.createElement('li');
        liElement.textContent = currentTotal;

        document.querySelector('#list-counter').prepend(liElement);

        divTotalElement.textContent = 0;
    }
};

// Launch init
document.addEventListener('DOMContentLoaded', app.init);