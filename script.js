//==========================================================================
//BANCO DE DADOS - CAMPOS
//==========================================================================
var campos = [
    {codigo: "000",   nome: "Campo de Sulco 1",    fazenda: "Campo_de_Sulco_1",   depa: 1, setor: "setor1",lider: "lider1",tipo: "sul",novo: "", garantia: "",obs:"",link: "aaa",link_projeto: "aaa1"},
    {codigo: "001",   nome: "Campo de Sulco 2",    fazenda: "Campo_de_Sulco_2",   depa: 2, setor: "setor1",lider: "lider1",tipo: "sul",novo: "", garantia: "",obs:"",link: "aaa",link_projeto: "aaa1"},
    {codigo: "002",   nome: "Campo de Sulco 3",    fazenda: "Campo_de_Sulco_3",   depa: 1, setor: "setor1",lider: "lider1",tipo: "sul",novo: "", garantia: "",obs:"",link: "aaa",link_projeto: "aaa1"},
    {codigo: "003",   nome: "Campo de Sulco 4",    fazenda: "Campo_de_Sulco_4",   depa: 2, setor: "setor1",lider: "lider1",tipo: "got",novo: "", garantia: "",obs:"",link: "aaa",link_projeto: "aaa1"},
    {codigo: "004",   nome: "Campo de gotejo 1",    fazenda: "Campo_de_Gotejo_1",   depa: 1, setor: "setor1",lider: "lider1",tipo: "got",novo: "", garantia: "",obs:"",link: "aaa",link_projeto: "aaa1"},
    {codigo: "005",   nome: "Campo de gotejo 2",    fazenda: "Campo_de_Gotejo_2",   depa: 2, setor: "setor1",lider: "lider1",tipo: "got",novo: "", garantia: "",obs:"",link: "aaa",link_projeto: "aaa1"},
    {codigo: "006",   nome: "Campo de gotejo 3",    fazenda: "Campo_de_Gotejo_3",   depa: 2, setor: "setor1",lider: "lider1",tipo: "piv",novo: "", garantia: "",obs:"",link: "aaa",link_projeto: "aaa1"}

];
//==========================================================================

function salvartipo(tipolista){
    localStorage.setItem("tipolista",tipolista);
};

function gerarview(link){
    localStorage.setItem("link",link);
};

function salvarInfo(cod,campo,setor,depa,tipo,lider){
    localStorage.setItem("cod",cod);
    localStorage.setItem("campo",campo);
    localStorage.setItem("setor",setor);
    localStorage.setItem("depa",depa);
    localStorage.setItem("tipo",tipo);
    localStorage.setItem("lider",lider);
};

function pegarinfo(){
    var cod = localStorage.getItem("cod");
    var campo = localStorage.getItem("campo");
    var setor = localStorage.getItem("setor");
    var depa = localStorage.getItem("depa");
    var tipo = localStorage.getItem("tipo");
    var lider = localStorage.getItem("lider");

    document.getElementById('infocampo').innerHTML = "<p><span id='info'>Código: </span>" + cod + " - " + campo + "</p>" +
    "<p><span id='info'>Setor: </span>" + setor + "</p>" +
    "<p><span id='info'>Depa: </span>" + depa + "</p>" +
    "<p><span id='info'>Líder: </span>" + lider + "</p>";
};

function mostrarinfo(){
    var telaexibe = document.getElementById('infocampo').style.display;

    if (telaexibe === "none"){
        document.getElementById('infocampo').style.display = "";
    }else{
        document.getElementById('infocampo').style.display = "none";
    };
};

var i = 0;

function criarlista(){

    var tipolistacriar = localStorage.getItem("tipolista");
    var link1 = "deucerto";

    for (i = 0;i <= campos.length - 1;i++){
        
        var codigo_campo    =   campos[i].codigo;
        var nome_campo      =   campos[i].nome;
        var depa_campo      =   campos[i].depa;
        var setor_campo     =   campos[i].setor;
        var tipo_campo      =   campos[i].tipo;
        var lider_campo     =   campos[i].lider;
        var fazenda         =   campos[i].fazenda;

        if (tipo_campo === tipolistacriar){

            

            tabela = document.getElementById('lista_criar').innerHTML;

            document.getElementById('lista_criar').innerHTML = tabela + 
            "<tr " + "onclick=" + "window.location='view.html',gerarview('" + link1 + "'),salvarInfo('"+ codigo_campo +"','" + fazenda + "','" + setor_campo + "','" + depa_campo + "','" + tipo_campo + "','" + lider_campo + "')>" + 
            "<td>" + codigo_campo + "</td>" + 
            "<td>" + nome_campo + "</td>" + 
            "<td>" + setor_campo + "</td>" + 
            "<td>" + "Depa " + depa_campo + "</td>";
            "</tr>"
        }else if(tipolistacriar == "all"){
            tabela = document.getElementById('lista_criar').innerHTML;

            document.getElementById('lista_criar').innerHTML = tabela + 
            "<tr " + "onclick=" + "window.location='view.html',gerarview('" + link1 + "'),salvarInfo('"+ codigo_campo +"','" + fazenda + "','" + setor_campo + "','" + depa_campo + "','" + tipo_campo + "','" + lider_campo + "')>" + 
            "<td>" + codigo_campo + "</td>" + 
            "<td>" + nome_campo + "</td>" + 
            "<td>" + setor_campo + "</td>" + 
            "<td>" + "Depa " + depa_campo + "</td>";
            "</tr>"
        };
        
        
    };

};

//==========================================================================
//BANCO DE DADOS MATERIAIS
//==========================================================================



//==========================================================================



//==========================================================================
//Scripts
//==========================================================================
//Pesquisa Lista
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

//Pesquisa Tabela - Novo
function pesquisarTabela(){
    const input = document.getElementById('pesquisa');
    const trs = [...document.querySelectorAll('#lista_campos tbody tr')];

    input.addEventListener('input', () => {
    const search = input.value.toLowerCase();
    trs.forEach(el => {
    const matches = el.textContent.toLowerCase().includes(search);
    el.style.display = matches ? '' : 'none';
  });
});
}

//Calculadora de MM
function converter(){
    var valorml, valormm, indiceC;
    indiceC = 0.036;
    valorml = document.getElementById("caixaml").value;
    valormm = valorml*indiceC;
    document.getElementById("textomm").innerHTML = valormm.toFixed(2)+" mm";
    document.getElementById("caixamm") = valormm.toFixed(2);
}

//==========================================================================
//Scripts - Salvar info script antigo
//==========================================================================
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
