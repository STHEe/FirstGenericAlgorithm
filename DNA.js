class DNA {
  constructor(
    wordSize
  ) {
    this.genes = [];
    this.wSize = wordSize;
    this.fitness = 0;

    this.gerarGenes();
  }

  randomChar() {
    let ascii_low = 97;
    let ascii_high = 124;

    let random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);

    if (random_ascii > 122)
      return ' '
    else
      return String.fromCharCode(random_ascii)
  }

  gerarGenes() {
    for (let i = 0; i < this.wSize; i++) {
      this.genes.push(this.randomChar());
    }
  }


  Crossover(e) {
    let child = new DNA(this.wSize);
    let lst = []

    for (let i = 0; i < this.wSize; i++) {
      let rand = Math.random() * this.wSize
      if (rand < Math.ceil(this.wSize / 2)) lst.push(this.genes[i])
      else lst.push(e.genes[i])
    }

    child.genes = lst;

    return child;
  }

  Mutacao(taxaMutacao) {
    let g = [];

    for (let i = 0; i < this.wSize; i++) {
      let rand = Math.random();

      if (rand < taxaMutacao) {
        g.push(this.randomChar())
      } else {
        g.push(this.genes[i])
      }
    }

    this.genes = g;
  }

  calcularFitness(meta) {
    for (let i = 0; i < this.wSize; i++) {
      if (meta[i] === this.genes[i]) {
        this.fitness++;
      }
    }
  }


}