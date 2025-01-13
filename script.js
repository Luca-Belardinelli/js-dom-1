
// selezione elementi 

const button = document.getElementById('interrutore');

const spenta =  document.getElementById('spenta')
const accesa =  document.getElementById('accesa')

let isOn = false;

// gestione del click

button.addEventListener('click', function() {

    if(!isOn){

    spenta.classList.add('accesa');

    accesa.classList.remove('accesa');

    interrutore.textContent = 'Spegni';

    }else{

    spenta.classList.remove('accesa');

    accesa.classList.add('accesa');

    interrutore.textContent = 'Accendi';
}

// Inverto stato lampadina
isOn = !isOn;

});