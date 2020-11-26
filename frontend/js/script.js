 var opcao0 = document.querySelector(".opcoes-0");
 var opcao1 = document.querySelector(".opcoes-1");
 var opcao2 = document.querySelector(".opcoes-2");
 var opcao3 = document.querySelector(".opcoes-3");
 var opcao4 = document.querySelector(".opcoes-4");
 var opcao5 = document.querySelector(".opcoes-5");
 var opcao6 = document.querySelector(".opcoes-6");
 var opcao7 = document.querySelector(".opcoes-7");
 var opcao8 = document.querySelector(".opcoes-8");

var modalBg = document.querySelector(".modal-bg");
var modalFechar = document.querySelector(".fechar");

modalFechar.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});

opcao0.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

opcao1.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

opcao2.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

opcao3.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

opcao4.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

opcao5.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

opcao6.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

opcao7.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

opcao8.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});