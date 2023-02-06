var readline = require('readline-sync');
var Budget = /** @class */ (function () {
    function Budget() {
        this.depenses = [];
        this.revenus = [];
    }
    // Ajouter une dépense
    Budget.prototype.ajouterDepense = function () {
        var montant = Number(readline.question("Entrez le montant de la depense:"));
        if (!isNaN(montant)) {
            this.depenses.push(montant);
        }
    };
    // Ajouter un revenu
    Budget.prototype.ajouterRevenu = function () {
        var montant = Number(readline.question("Entrez le montant du revenu:"));
        if (!isNaN(montant)) {
            this.revenus.push(montant);
        }
    };
    // Afficher les dépenses
    Budget.prototype.afficherDepenses = function () {
        console.log("Dépenses:");
        console.table(this.depenses);
    };
    // Afficher les revenus
    Budget.prototype.afficherRevenus = function () {
        console.log("Revenus:");
        console.table(this.revenus);
    };
    // Total des dépenses
    Budget.prototype.totalDepenses = function () {
        var total = 0;
        for (var _i = 0, _a = this.depenses; _i < _a.length; _i++) {
            var depense = _a[_i];
            total += depense;
        }
        return total;
    };
    // Total des revenus
    Budget.prototype.totalRevenus = function () {
        var total = 0;
        for (var _i = 0, _a = this.revenus; _i < _a.length; _i++) {
            var revenu = _a[_i];
            total += revenu;
        }
        return total;
    };
    // Moyenne des dépenses
    Budget.prototype.moyenneDepenses = function () {
        return this.totalDepenses() / this.depenses.length;
    };
    // Moyenne des revenus
    Budget.prototype.moyenneRevenus = function () {
        return this.totalRevenus() / this.revenus.length;
    };
    // Dépense maximale
    Budget.prototype.depenseMaximale = function () {
        return Math.max.apply(Math, this.depenses);
    };
    // Dépense minimale
    Budget.prototype.depenseMinimale = function () {
        return Math.min.apply(Math, this.depenses);
    };
    // Revenu maximal
    Budget.prototype.revenuMaximal = function () {
        return Math.max.apply(Math, this.revenus);
    };
    // Revenu minimal
    Budget.prototype.revenuMinimal = function () {
        return Math.min.apply(Math, this.revenus);
    };
    return Budget;
}());
var budget = new Budget();
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
