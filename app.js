let seznam = document.getElementById('recepty');
let logo = document.querySelector('.logo');
logo.onclick = vygenerujSeznam;
let detail = document.querySelector('.recept-detail');
detail.style.display = 'none';

let posledniReceptStorage = localStorage.getItem('posledniRecept')
vypisDetail(posledniReceptStorage);

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
    polozkaRecept.addEventListener('click', ziskejIndexReceptu);

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

function ziskejIndexReceptu() {
    let hodnota = this.innerText;
    console.log(hodnota);
    let index = recepty.findIndex(recept => recept.nadpis === hodnota);
    console.log(index);

    vypisDetail(index);
};


function vypisDetail(index) {
    
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
    
    vymazSeznam();

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
        recepty.sort(function(a, b) {
            return b.hodnoceni - a.hodnoceni;
        });
        console.log(recepty);
        vymazSeznam();
        recepty.forEach((recept) => {      
            vytvorPolozkuRecept(recept);
        }); 

    } else if (index === 2) {
        recepty.sort(function(a, b) {
            return a.hodnoceni - b.hodnoceni;
        });
        vymazSeznam();
        recepty.forEach((recept) => {
            vytvorPolozkuRecept(recept);
        }); 
        
    } else {
        console.log(recepty);
        vymazSeznam();
        recepty.forEach((recept) => {  
            vytvorPolozkuRecept(recept);
        }); 
    };

});






