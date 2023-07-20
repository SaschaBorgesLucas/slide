const imagens = document.querySelectorAll('.slide');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');
let imagemAtual = 0;


setaDireita.addEventListener('click', function() {
    if(imagemAtual===imagens.length-1){
        return;
    }
    esconderImagem();
    imagemAtual++;
    mostrarImagem(imagemAtual, imagens);
    mostrarOuEsconderSetas(imagemAtual);
});

setaEsquerda.addEventListener('click', function() {
    if(imagemAtual===0){
        return;
    }
    esconderImagem();
    imagemAtual--;
    mostrarImagem(imagemAtual, imagens);
    mostrarOuEsconderSetas(imagemAtual);
});

function esconderImagem(){
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
}
function mostrarImagem(index, imagens){
    imagens[index].classList.add('mostrar');
};
function mostrarOuEsconderSetas(index){
   const naoEAprimeiraImagem = index !==0;
   if(naoEAprimeiraImagem){
    setaEsquerda.classList.remove('opacidade');
   } else {
    setaEsquerda.classList.add('opacidade');
   }

   const chegouAUltimaImagem = index !==0 && index=== imagens.length-1;
   if(chegouAUltimaImagem){
    setaDireita.classList.add('opacidade');
   }else{
    setaDireita.classList.remove('opacidade');
   }

}

function mudarACorDoBotao(index){
    
}