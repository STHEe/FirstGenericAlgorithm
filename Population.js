class Population {
  constructor(
    maxPopulation,
    match,
    taxaDeMutation
  ) {
    this.max = maxPopulation;
    this.goal = match.toLowerCase().split("");
    this.taxaDeMutation = taxaDeMutation;
    this.encontrou = false;
    this.generations = 0;
      
    this.maior = "";
  }

  gerarPopulacao() {
    this.population = [];

    for (let i = 0; i < this.max; i++) {
      this.population.push(new DNA(this.goal.length));
    }
  }


  calcularFitness() {
    for (let i = 0; i < this.max; i++) {
      this.population[i].calcularFitness(this.goal);
    }
  }

  selecaoNatural() {
    this.verificar();
    
    let pessoaA = this.population.reduce((prev, current) => (prev.fitness > current.fitness) ? prev : current)
    this.maior = pessoaA.genes.join('')
    this.population.splice(this.population.indexOf(pessoaA), 1);
    let pessoaB = this.population.reduce((prev, current) => (prev.fitness > current.fitness) ? prev : current)
    this.population.push(pessoaA)

    let childs = []

    for (let i = 0; i < this.max; i++) {
      let child = pessoaA.Crossover(pessoaB);
      child.Mutacao(this.taxaDeMutation)

      childs.push(child);
    }

    this.population = childs;

    
    this.generations++;

  }

  verificar() {
    let maior = this.population.reduce((prev, current) => (prev.fitness > current.fitness) ? prev : current)

    if (this.arraysMatch(maior.genes, this.goal))
      this.encontrou = true;

  }

  arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  }


}