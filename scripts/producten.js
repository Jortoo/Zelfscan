const broodjesContainer = document.querySelector('.broodjes-knoppen');
const groenteContainer = document.querySelector('.groentes-knoppen');
const winkelmand = document.querySelector('.producten-lijst');
const totaalPrijs = document.querySelector('.prijs');

let totaal = 0;

fetch('data/producten.json')
  .then(res => res.json())
  .then(data => {

    // === BROODJES ===
    data.broodjes.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('product-item');

      div.innerHTML = `
        <img src="${item.foto}" alt="${item.naam}" height="75px">
        <p>${item.naam}</p>
        <p>€${item.prijs.toFixed(2)}</p>
        <p>${item.type}</p>
      `;

      // 🔥 CLICK EVENT HIER
      div.addEventListener("click", () => {
        voegToeAanWinkelmand(item);
      });

      broodjesContainer.appendChild(div);
    });

    // === GROENTE ===
    data.groente.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('product-item');

      div.innerHTML = `
        <img src="${item.foto}" alt="${item.naam}" height="75px">
        <p>${item.naam}</p>
        <p>€${item.prijs.toFixed(2)}</p>
        <p>${item.type}</p>
      `;

      div.addEventListener("click", () => {
        voegToeAanWinkelmand(item);
      });

      groenteContainer.appendChild(div);
    });

  });


// === FUNCTIE ===
function voegToeAanWinkelmand(item) {

  const nieuwItem = document.createElement("div");
  nieuwItem.textContent = `${item.naam} - €${item.prijs.toFixed(2)}`;
  winkelmand.appendChild(nieuwItem);

  totaal += item.prijs;
  totaalPrijs.textContent = "€" + totaal.toFixed(2);
}
