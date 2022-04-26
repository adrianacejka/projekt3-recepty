/*
Co je za úkol v tomto projektu:

1) DONE -Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) DONE - jak vyrobit, aby bylo vyhledáno pokud obsahuje pouze část názvu
Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) ??? - použiju filter()? 
Doplň filtrovanání receptů podle kategorie.

4) ??? - použít sort()?
Doplň řazení receptů podle hodnocení.

5) Skrz index a locl storage
Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Snad ok
Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let seznam = document.getElementById('recepty');
let logo = document.querySelector('.logo');
logo.onclick = vygenerujSeznam;

vygenerujSeznam();

function vygenerujSeznam() {  
    recepty.forEach((recept) => {
        console.log(recept.nadpis);
        vytvorPolozkuRecept(recept);
    });
}

function vytvorPolozkuRecept(el) {

    let polozkaRecept = document.createElement('div');
    polozkaRecept.className = 'recept';

    
    polozkaRecept.addEventListener('click', function() { // dopsat funkci po kliknutí na polozku rceptu v seznamu
        console.log('klik'); 
    });

    let receptObrazek = document.createElement('div');
    receptObrazek.className = 'recept-obrazek';
    let imgItem = document.createElement('img');
    imgItem.src = el.img;
    receptObrazek.appendChild(imgItem);

    let receptNazev = document.createElement('div');
    receptNazev.className = 'recept-info';
    let titulek = document.createElement('h3');
    titulek.innerHTML = el.nadpis;
    receptNazev.appendChild(titulek);

    polozkaRecept.appendChild(receptObrazek);
    polozkaRecept.appendChild(receptNazev);
    seznam.appendChild(polozkaRecept);
}


// ------ dopsat funkci po kliknutí na polozku receptu v seznamu ----

/* 
function priKliknuti() {
    
    // vypsat hodnoty do prvků pres textContent do recept-detail -------------------

    let receptFoto = document.getElementById('recept-foto');
    receptFoto.src = recept.img;
    let receptKategorie = document.getElementById('recept-kategorie');
    let receptHodnoceni = document.getElementById('recept-hodnoceni');
    let receptNazev = document.getElementById('recept-nazev');
    let receptPopis = document.getElementById('recept-popis');

} */

// hledání receptu ----------------- pole.filter() ?


let searchButton = document.querySelector('#search');
searchButton.addEventListener('click', najdiRecept);

let searchInput = document.getElementById('hledat');

function najdiRecept() {  // funkce pripnuta na tlacitku hledej

    let hodnota = searchInput.value.toLowerCase();
    console.log(hodnota);

    let nalezene = recepty.filter(recept => recept.nadpis.toLowerCase().includes(hodnota)) // pole nalezených
    console.log(nalezene);
    
    vymazSeznam();

    nalezene.forEach((nalezenyRecept) => {
        console.log(nalezenyRecept.nadpis);
        vytvorPolozkuRecept(nalezenyRecept);
    });

};

function vymazSeznam() {
    let polozkyRecept = document.querySelectorAll('.recept');
    polozkyRecept.forEach(function(polozkaRecept) {
        seznam.removeChild(polozkaRecept);
    }); 
};




// ----------------------------------------------

// function seradOdNejvic() {

// }

// ----------------------------------------------

// function seradOdNejmin() {

// }

