const readline = require('readline-sync');

class Budget {
  private depenses: number[];
  private revenus: number[];

  constructor() {
    this.depenses = [];
    this.revenus = [];
  }

  // Ajouter une dépense
  ajouterDepense() {
    const montant = Number(readline.question("Entrez le montant de la depense:"));
    if (!isNaN(montant)) {
      this.depenses.push(montant);
    }
  }

  // Ajouter un revenu
  ajouterRevenu() {
    const montant = Number(readline.question("Entrez le montant du revenu:"));
    if (!isNaN(montant)) {
      this.revenus.push(montant);
    }
  }

  // Afficher les dépenses
  afficherDepenses() {
    console.log("Dépenses:");
    console.table(this.depenses);
  }

  // Afficher les revenus
  afficherRevenus() {
    console.log("Revenus:");
    console.table(this.revenus);
  }

  // Total des dépenses
  totalDepenses() {
    let total = 0;
    for (const depense of this.depenses) {
      total += depense;
    }
    return total;
  }

  // Total des revenus
  totalRevenus() {
    let total = 0;
    for (const revenu of this.revenus) {
      total += revenu;
    }
    return total;
  }

  // Moyenne des dépenses
  moyenneDepenses() {
    return this.totalDepenses() / this.depenses.length;
  }

  // Moyenne des revenus
  moyenneRevenus() {
    return this.totalRevenus() / this.revenus.length;
  }

  // Dépense maximale
  depenseMaximale() {
    return Math.max(...this.depenses);
  }

  // Dépense minimale
  depenseMinimale() {
    return Math.min(...this.depenses);
  }

  // Revenu maximal
  revenuMaximal() {
    return Math.max(...this.revenus);
  }

  // Revenu minimal
  revenuMinimal() {
    return Math.min(...this.revenus);
  }
}

const budget = new Budget();
budget.ajouterDepense();
budget.ajouterDepense();
budget.ajouterDepense();
budget.ajouterDepense();

budget.ajouterRevenu();
budget.ajouterRevenu();
budget.ajouterRevenu();
budget.ajouterRevenu();

budget.afficherDepenses();
console.log("Total des dépenses:", budget.totalDepenses());
console.log("Moyenne des dépenses:", budget.moyenneDepenses());
console.log("Dépense maximale:", budget.depenseMaximale());
console.log("Dépense minimale:", budget.depenseMinimale());
budget.afficherRevenus();

console.log("Total des revenus:", budget.totalRevenus());
console.log("Moyenne des revenus:", budget.moyenneRevenus());
console.log("Revenu maximal:", budget.revenuMaximal());
console.log("Revenu minimal:", budget.revenuMinimal());