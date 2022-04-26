/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let seznam = document.getElementById('recepty');
vygenerujSeznam();


function vygenerujSeznam() {  
    recepty.forEach((recept) => {
        console.log(recept.nadpis);
        vytvorPolozkuRecept(recept);
    });
}

function vytvorPolozkuRecept(recept) {

    let polozkaRecept = document.createElement('div'); // tohle je jedna vygenerovaná položka v seznamu
    polozkaRecept.className = 'recept';
    
    polozkaRecept.addEventListener('click', function() {
        console.log('klik');
    });
    
    
    let receptObrazek = document.createElement('div');
    receptObrazek.className = 'recept-obrazek';
    let imgItem = document.createElement('img');
    imgItem.src = recept.img;
    receptObrazek.appendChild(imgItem);

    let receptNazev = document.createElement('div');
    receptNazev.className = 'recept-info';
    let titulek = document.createElement('h3');
    titulek.innerHTML = recept.nadpis;
    receptNazev.appendChild(titulek);

    polozkaRecept.appendChild(receptObrazek);
    polozkaRecept.appendChild(receptNazev);
    seznam.appendChild(polozkaRecept);
}


/* 
function priKliknuti() {
    console.log('klik');
    // vypsat hodnoty do prvků pres textContent do recept-detail
    let receptFoto = document.getElementById('recept-foto');
    receptFoto.src = recept.img;
    let receptKategorie = document.getElementById('recept-kategorie');
    let receptHodnoceni = document.getElementById('recept-hodnoceni');
    let receptNazev = document.getElementById('recept-nazev');
    let receptPopis = document.getElementById('recept-popis');

} */


let searchButton = document.querySelector('#search');
searchButton.addEventListener('click', najdiRecept);

let searchInput = document.getElementById('hledat');

function najdiRecept() {
    let hodnota = searchInput.value;
    console.log(hodnota);
};


// function seradOdNejvic() {

// }

// function seradOdNejmin() {

// }

// 

// 
