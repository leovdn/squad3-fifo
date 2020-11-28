var abrirMenu = document.getElementById("menu-responsivo");
var fecharMenu = document.getElementById("fechar-menu");


abrirMenu.addEventListener('click', function(){
  document.getElementById("abrir-menu").style.height = "100%";
})

fecharMenu.addEventListener('click', function(){
  document.getElementById("abrir-menu").style.height = "0";
})
