function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let total = Number(prompt("Total HT ?"));
let remise = Number(prompt("Remise (%) ?"));

let resultat = totalAvecRemise(total, remise);

console.log("Total final :", resultat);
