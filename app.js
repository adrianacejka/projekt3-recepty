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

    recepty.forEach(function(recept) {

        console.log(recept.nadpis);

        vytvorPolozkuRecept(recept);
        
    });
}

function vytvorPolozkuRecept(recept) {
    let polozkaRecept = document.createElement('div');polozkaRecept.className = 'recept';

    let receptObrazek = document.createElement('div');
    receptObrazek.className = 'recept-obrazek';
    let img = document.createElement('img');
    img.src = recept.img;
    receptObrazek.appendChild(img);

    let receptNazev = document.createElement('div');
    receptNazev.className = 'recept-info';
    let titulek = document.createElement('h3');
    titulek.innerHTML = recept.nadpis;
    receptNazev.appendChild(titulek);

    polozkaRecept.appendChild(receptObrazek);
    polozkaRecept.appendChild(receptNazev);

    seznam.appendChild(polozkaRecept);

}




