//códigos dos carros 
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,100,150,210,265,318];
let velocidadeCarros = [3.5,4,4.5,5,6,3];
let comprCarro = 50;
let altCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
image(imagemCarros[i],xCarros[i],yCarros[i],comprCarro,altCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   xCarros[i] -= velocidadeCarros[i];
 }
}

function voltaPosicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){  
  if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
  }
 }
}

function passouTodaTela(xCarro){
  return xCarro < -50; 
}
