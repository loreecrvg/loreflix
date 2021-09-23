var listaImagem = [
    "https://br.web.img3.acsta.net/pictures/21/06/22/22/19/1495362.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/89/83/20028679.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/04/50/19871429.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/34/28/20028730.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/15/05/14/14/20/365361.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/97/52/82/20534159.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/16/09/28/18/45/072693.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/a/a4/Space_Jam_A_New_Legacy.jpg",
    "https://br.web.img3.acsta.net/pictures/19/04/03/18/23/2539612.jpg"
  ];
  var listaNome = [
    "Esquadrão Suicida",
    "Meu malvado favorito",
    "O Diabo veste Prada",
    "Esposa de Mentirinha",
    "Divertidamente",
    "Escola de Rock",
    "As Branquelas",
    "Animais fantasticos",
    "Space Jam",
    "Coringa"
  ];
  
  var select = document.querySelector("#select");
  var filmes = document.querySelector(".filmes");
  
  function AdicionarNovoFilme() {
    filmes.innerHTML = null;
    select.innerHTML = null;
  
    for (var i = 0; i < listaImagem.length; i++) {
      filmes.insertAdjacentHTML(
        "beforeend",
        "<div class='filmes-div'> <img src=" +
          listaImagem[i] +
          " class=image-list>" +
          "<p class=name-list>" +
          listaNome[i] +
          "</p></div> "
      );
  
      select.insertAdjacentHTML(
        "beforeend",
        " <option value=" + i + ">" + listaNome[i] + "</option>"
      );
    }
  }
  
  AdicionarNovoFilme();
  
  function Enviar() {
    var adicionarUrl = document.querySelector("#entradaImagem").value;
    var adicionarNome = document.querySelector("#entradaNome").value;
  
    if (listaImagem.includes(adicionarUrl) || listaNome.includes(adicionarNome)) {
      alert("Imagem ou nome do filme já adicionada");
    } else {
      if (adicionarUrl.endsWith(".jpg") || adicionarUrl.endsWith(".png")) {
        listaImagem.push(adicionarUrl);
        listaNome.push(adicionarNome);
  
        AdicionarNovoFilme();
      } else if (
        adicionarUrl.endsWith(".jpg") == false ||
        adicionarUrl.endsWith(".png") == false
      ) {
        alert("Por Favor use a url de uma imagem .JPG ou .PNG");
      }
    }
  
    adicionarUrl = document.querySelector("#entradaImagem").value = "";
    adicionarNome = document.querySelector("#entradaNome").value = "";
  }
  
  function Remover() {
    var testeSelect = document.querySelector("#select").value;
  
    listaImagem.splice(testeSelect, 1);
    listaNome.splice(testeSelect, 1);
  
    AdicionarNovoFilme();
  }
  