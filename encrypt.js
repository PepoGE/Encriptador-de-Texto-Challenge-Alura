
var e = "enter";
var i = "imes";
var a = "ai";
var o = "ober";
var u = "ufat";

function ObtenerTextoDelUsuario(){
    let textoIngresado = document.getElementById("ingresar-texto").value;
    console.log(textoIngresado);
    return textoIngresado;
}

function Encriptar(){
    ObtenerTextoDelUsuario();
    let textoEncriptado = textoIngresado.replace("a", "ai");
    return textoEncriptado;
}

{ //Ocultar Elementos
function OcultarImagen(){
    document.getElementById("img-muneco").style.display = "none";
}
function OcultarTextosResultados(){
    document.getElementById("textos-de-resultados").style.display = "none";
}

function OcultarTextoResultadoDefault(){
    OcultarImagen();
    OcultarTextosResultados();
}
}

function CambiarTextoEncriptado(){
    var texto = Encriptar();
    document.getElementById("text-encrypted").innerText = texto; 
}

function AlternarTextoEncriptado(){
    OcultarTextoResultadoDefault();
    CambiarTextoEncriptado();
}

document.getElementById("encriptar").onclick = AlternarTextoEncriptado;
document.getElementById("desencriptar").onclick = MostrarImagen;