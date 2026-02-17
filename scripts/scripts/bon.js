const bonPopup = document.getElementById("bon-popup");
const bonProductenDiv = document.getElementById("bonProducten");
const bonTotaal = document.getElementById("bonTotaal");
const bonDatum = document.getElementById("bonDatum");

document.getElementById("toonBon").addEventListener("click", function(e) {
    e.preventDefault();
    maakBon();
    bonPopup.style.display = "flex";
});

document.getElementById("closeBon").addEventListener("click", function() {
    bonPopup.style.display = "none";
});

function maakBon() {
    bonProductenDiv.innerHTML = "";

    let totaal = 0;

    // Haal producten uit winkelmand
    const winkelmand = document.querySelectorAll("#winkelmand .product");

    winkelmand.forEach(product => {
        const naam = product.querySelector(".naam").innerText;
        const prijsText = product.querySelector(".prijs").innerText;

        // Prijs omzetten naar nummer (bijv "2,50" -> 2.50)
        const prijs = parseFloat(prijsText.replace("€", "").replace(",", "."));
        totaal += prijs;

        bonProductenDiv.innerHTML += `
            <div class="bon-product">
                <span>${naam}</span>
                <span>€${prijs.toFixed(2).replace(".", ",")}</span>
            </div>
        `;
    });

    bonTotaal.innerText = "€" + totaal.toFixed(2).replace(".", ",");

    const now = new Date();
    bonDatum.innerText = now.toLocaleDateString("nl-NL") + " " + now.toLocaleTimeString("nl-NL");
}
