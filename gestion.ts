class Budget {
    private expenses: number[];
    private incomes: number[];
  
    constructor() {
      this.expenses = [];
      this.incomes = [];
    }
  
    addExpense(expense: number) {
      this.expenses.push(expense);
    }
  
    addIncome(income: number) {
      this.incomes.push(income);
    }
  
    getExpenses() {
      return this.expenses;
    }
  
    getIncomes() {
      return this.incomes;
    }
  
    getExpensesTotal() {
      let total = 0;
      for (let expense of this.expenses) {
        total += expense;
      }
      return total;
    }
  
    getIncomesTotal() {
      let total = 0;
      for (let income of this.incomes) {
        total += income;
      }
      return total;
    }
  
    getExpensesAvg() {
      return this.getExpensesTotal() / this.expenses.length;
    }
  
    getIncomesAvg() {
      return this.getIncomesTotal() / this.incomes.length;
    }
  
    getExpensesMax(month: string) {
      let maxExpense = 0;
      for (let expense of this.expenses) {
        if (expense > maxExpense) {
          maxExpense = expense;
        }
      }
      return maxExpense;
    }
  
    getIncomesMax(month: string) {
      let maxIncome = 0;
      for (let income of this.incomes) {
        if (income > maxIncome) {
          maxIncome = income;
        }
      }
      return maxIncome;
    }
  
    getExpensesMin(month: string) {
      let minExpense = Number.MAX_VALUE;
      for (let expense of this.expenses) {
        if (expense < minExpense) {
          minExpense = expense;
        }
      }
      return minExpense;
    }
  
    getIncomesMin(month: string) {
      let minIncome = Number.MAX_VALUE;
      for (let income of this.incomes) {
        if (income < minIncome) {
          minIncome = income;
        }
      }
      return minIncome;
    }
  }


  /* Ce code crée une classe Budget qui contient des tableaux pour les dépenses et les revenus, ainsi que des méthodes pour ajouter des 
  dépenses et des revenus,récupérer les dépenses et les revenus, calculer les totaux,les moyennes, les valeurs 
  maximales et minimales pour les dépenses et les revenus. Il est important de noter 
  que cette exemple n'inclus pas la fonctionalité pour afficher les informations sous forme de graphiques ou tableau,
    ni les fonctionnalités pour la récupération des sommes des dépenses et revenus */
