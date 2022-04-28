/*
termin odevzdani nedele 12:00 !

Co je za úkol v tomto projektu:

1) DONE -Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) DONE - jak vyrobit, aby bylo vyhledáno pokud obsahuje pouze část názvu
Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) ??? - použiju pole.filter()? 
Doplň filtrovanání receptů podle kategorie.

4) ??? - použít pole.sort()?
Doplň řazení receptů podle hodnocení.

5) DONE - Skrz index
Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) asi ok
Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let seznam = document.getElementById('recepty');
let logo = document.querySelector('.logo');
logo.onclick = vygenerujSeznam;
let detail = document.querySelector('.recept-detail');
detail.style.display = 'none';

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

    // dopsat funkci po kliknutí na polozku rceptu v seznamu
    polozkaRecept.addEventListener('click', priKliknuti);

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

// funkce při kliknutí na položku receptu v seznamu -----------

function priKliknuti() {

    let hodnota = this.innerText;
    console.log(hodnota);

    let index = recepty.findIndex(recept => recept.nadpis === hodnota);
    console.log(index);

    detail.style.display = 'block';

    let receptFoto = document.getElementById('recept-foto');
    receptFoto.src = recepty[index].img;
    
    let receptKategorie = document.getElementById('recept-kategorie');
    receptKategorie.innerHTML = recepty[index].kategorie;

    let receptHodnoceni = document.getElementById('recept-hodnoceni');
    receptHodnoceni.innerHTML = recepty[index].hodnoceni;

    let receptNazev = document.getElementById('recept-nazev');
    receptNazev.innerHTML = recepty[index].nadpis;

    let receptPopis = document.getElementById('recept-popis');
    receptPopis.innerHTML = recepty[index].popis;
};

// hledání receptu -----------------------------

let searchButton = document.querySelector('#search');
searchButton.addEventListener('click', najdiRecept);

let searchInput = document.getElementById('hledat');

searchInput.onkeydown = function(e) {
    if (e.key === "Enter") {
      najdiRecept();
    };
};

// funkce pripnuta na tlacitku "Hledat" -----------------

function najdiRecept() {  

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

// filtrování pole receptů podle kategorie --------------------

let kategorie = document.getElementById('kategorie'); // vvybere el.

kategorie.addEventListener('change', function() {
    
    console.log(this.selectedIndex);

    let kategorieHodnota = kategorie.options[this.selectedIndex].text;
    console.log(kategorieHodnota);
});



// function vyberTextKat() {

//     let kategorieHodnota = kategorie.options[2].text; // vybere text v option
// }


// console.log(kategorieHodnota);




// ----------------------------------------------

// function seradOdNejmin() {

// }

