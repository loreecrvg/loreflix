var listaFilmes = [ "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/97/52/82/20534159.jpg", 
"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg",
"https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/04/50/19871429.jpg",
"https://br.web.img3.acsta.net/c_310_420/pictures/16/09/28/18/45/072693.jpg", 
"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/34/28/20028730.jpg" ]

for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<img src=" + listaFilmes[indice] + ">");
}

function pesquisarFilme() {
    var campoFilmeFavorito = document.getElementById("filme").value;
    var elementoFilmeFavorito = "<img src" + campoFilmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;

}
