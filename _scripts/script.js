
var telaview = document.querySelector("#frametela");
var infocampo = document.querySelector("#inforegcampo");
var linkIMG = "";
var nomeCAMPO = "";
var myWindow;
var lista = "";
var receberlista = "";

function pegarlink(linkIMG,codCampo,nomeCAMPO){

    localStorage.setItem("UrlALTERAR",linkIMG);
    localStorage.setItem("codCampo",codCampo);
    localStorage.setItem("NameCampo",nomeCAMPO);
    
}


function alterar(){

    var linkIMG = localStorage.getItem("UrlALTERAR");
    var codCampo = localStorage.getItem("codCampo");
    var nomeCAMPO = localStorage.getItem("NameCampo");
    telaview.src = linkIMG
    infocampo.innerHTML = codCampo + nomeCAMPO;
    
}

function pesquisar(){
    var input, filtro, menu, menuItens, links;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = menu.getElementsByTagName("li");
    for(var i=0;i<menuItens.length;i++){
        links = menuItens[i].getElementsByTagName("a")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display="";
        }else{
            menuItens[i].style.display="none";
        }
    }
}

function converter(){
    var valorml, valormm, indiceC;
    indiceC = 0.036;
    valorml = document.getElementById("caixaml").value;
    valormm = valorml*indiceC;
    document.getElementById("textomm").innerHTML = valormm.toFixed(2)+" mm";
    document.getElementById("caixamm") = valormm.toFixed(2);
}

function fecharprog() {

    finishAffinity();

}


function linkObjt(lista){
    localStorage.setItem("listaPre",lista);

}

function editarlista(){
    var lista = localStorage.getItem("listaPre");
    document.getElementById("objcustoli").innerHTML = lista;


}