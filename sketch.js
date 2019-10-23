var populacao;

function setup() {
  createCanvas(800, 800);

  let maxPopulation = 200;
  let match = "first test ever";
  let taxaDeMutacao = 0.1;

  populacao = new Population(maxPopulation, match, taxaDeMutacao);

  populacao.gerarPopulacao();

}

function draw() {
  background(51);

  populacao.calcularFitness();

  populacao.selecaoNatural();

  if (populacao.encontrou) {
    console.log("FIM")
    noLoop();
  }

  
  fill(255);
  text('GERAÇÕES:', 70, height / 2 - 350)
  textSize(30);
  text(populacao.generations, 30, height / 2 - 300);
  
  textSize(20);
  textAlign("center")
  text(populacao.maior, width / 2 - 100, height / 2);
  
}