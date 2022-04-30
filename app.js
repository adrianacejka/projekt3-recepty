/*
termin odevzdani nedele 12:00 !

Co je za úkol v tomto projektu:

1) DONE -Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) DONE - jak vyrobit, aby bylo vyhledáno pokud obsahuje pouze část názvu
Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) DONE - použiju pole.filter()? 
Doplň filtrovanání receptů podle kategorie.

4) DONE - použít pole.sort()?
Doplň řazení receptů podle hodnocení.

5) DONE - Skrz index
Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) 
Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let seznam = document.getElementById('recepty');
let logo = document.querySelector('.logo');
logo.onclick = vygenerujSeznam;
let detail = document.querySelector('.recept-detail');
detail.style.display = 'none';

let posledniReceptStorage = localStorage.getItem('posledniRecept')
// if(posledniReceptStorage !== null) {
//     vypisDetail(posledniReceptStorage);
// };

// vypisDetail(posledniReceptStorage);
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
    polozkaRecept.addEventListener('click', vypisDetail);

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



function vypisDetail(num) {
    
    let hodnota = this.innerText;
    console.log(hodnota);
    let index = recepty.findIndex(recept => recept.nadpis === hodnota);
    console.log(index);
    
    let receptFoto = document.getElementById('recept-foto');
    let receptKategorie = document.getElementById('recept-kategorie');
    let receptHodnoceni = document.getElementById('recept-hodnoceni');
    let receptNazev = document.getElementById('recept-nazev');
    let receptPopis = document.getElementById('recept-popis');

    detail.style.display = 'block';
    receptFoto.src = recepty[index].img;
    receptKategorie.innerHTML = recepty[index].kategorie;
    receptHodnoceni.innerHTML = recepty[index].hodnoceni;
    receptNazev.innerHTML = recepty[index].nadpis;
    receptPopis.innerHTML = recepty[index].popis;

    let posledniRecept = recepty[index];
 
    localStorage.setItem('posledniRecept', index);

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

// funkce pripnuta na tlacitku "Hledat" a input pro hledani --------------

function najdiRecept() {  

    let hodnota = searchInput.value.toLowerCase();
    console.log(hodnota);

    let nalezene = recepty.filter(recept => recept.nadpis.toLowerCase().includes(hodnota));
    console.log(nalezene);
    
    // vymazSeznam();
    seznam.innerHTML = '';

    nalezene.forEach((nalezenyRecept) => {
        console.log(nalezenyRecept.nadpis);
        vytvorPolozkuRecept(nalezenyRecept);
    });
};

function vymazSeznam() {
    seznam.innerHTML = '';
};


// filtrování pole receptů podle kategorie --------------------

let kat = document.getElementById('kategorie');

kat.addEventListener('change', function() {
    
    let index = this.selectedIndex;
    console.log(index);

    let kategorieHodnota = kat.options[index].text.toLowerCase();
    console.log(kategorieHodnota);

    let vybraneKat = recepty.filter(recept => recept.kategorie.toLowerCase().includes(kategorieHodnota));
    console.log(vybraneKat);

    vymazSeznam();

    vybraneKat.forEach((vybranyRecept) => {
        console.log(vybranyRecept.nadpis);
        vytvorPolozkuRecept(vybranyRecept);
    });  
});


// funkce na inputu seradit od ----------------------------------------------

let seraditInput = document.getElementById('razeni');

seraditInput.addEventListener('change', function() {

    let index = this.selectedIndex;
    console.log(index);

    if (index === 1) {
        console.log('od nejlepších');
        recepty.sort(function(a, b) {
            return b.hodnoceni - a.hodnoceni;
        });
        console.log(recepty);
        vymazSeznam();

        recepty.forEach((recept) => {
            console.log(recept.nadpis);
            vytvorPolozkuRecept(recept);
        }); 

    } else if (index === 2) {
        console.log('od nejhorších');
        recepty.sort(function(a, b) {
            return a.hodnoceni - b.hodnoceni;
        });

        console.log(recepty);
        vymazSeznam();

        recepty.forEach((recept) => {
            console.log(recept.nadpis);
            vytvorPolozkuRecept(recept);
        }); 
        
    } else {
        console.log('všechny');
        
        console.log(recepty);
        vymazSeznam();

        recepty.forEach((recept) => {
            console.log(recept.nadpis);
            vytvorPolozkuRecept(recept);
        }); 
        
    };

});






