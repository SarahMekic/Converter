function konvertuj() {
    const uneseniBroj = document.getElementById("uneseniBroj").value;
    const bazaUlaz = parseInt(document.getElementById("bazaUlaz").value);
    const bazaIzlaz = parseInt(document.getElementById("bazaIzlaz").value);
  
    if (uneseniBroj == "") {
      document.getElementById("rezultat").innerText =
        "Molimo unesite broj prije konverzije!";
      return;
    }
  
    let decimalnaVrijednost;
    try {
      decimalnaVrijednost = parseInt(uneseniBroj, bazaUlaz);
      if (isNaN(decimalnaVrijednost)) throw "Greska";
    } catch (error) {
      document.getElementById("rezultat").innerText =
        "Uneseni broj nije odgovarajući za odabrani brojni sistem!";
      return;
    }
  
    const rezultat = decimalnaVrijednost.toString(bazaIzlaz).toUpperCase();
    document.getElementById("rezultat").innerText = `Rezultat: ${rezultat}`;
  }