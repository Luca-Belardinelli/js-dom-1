
// selezione elementi 

const button = document.getElementById('interrutore');

const spenta =  document.getElementById('spenta')
const accesa =  document.getElementById('accesa')


// gestione del click

button.addEventListener('click', function() {

    spenta.classList.add('accesa');

    accesa.classList.remove('accesa');

    interrutore.textContent = 'Spegni';

});