//código do ator
let xAtor = 80;
let yAtor = 375;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,25,25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
   
 }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprCarro,altCarro,xAtor,yAtor,15);
    if(colisao){
      somDaColisao.play();
      voltaAtorPosInicial();
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosInicial(){
  yAtor = 375;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width / 4, 27);
}

function marcaPonto(){
  if (yAtor < 10){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosInicial();
  }
}

function podeSeMover(){
  return yAtor < 375;
}
