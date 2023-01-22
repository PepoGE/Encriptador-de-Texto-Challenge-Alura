
function ObtenerTextoDelUsuario(){
    let textoIngresado = document.getElementById("ingresarTexto").value;
    return textoIngresado;
}


function Encriptar(){
    var textoIngresado = ObtenerTextoDelUsuario();
    var textoEncriptado = textoIngresado.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    console.log(textoEncriptado);
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
    document.getElementById("text-result-encrypted").style.display = "flex"; 
    document.getElementById("text-encrypted").innerText = texto; 
}

function AlternarTextoEncriptado(){
    OcultarTextoResultadoDefault();
    CambiarTextoEncriptado();
}

document.getElementById("encriptar").onclick = AlternarTextoEncriptado;
document.getElementById("desencriptar").onclick = MostrarImagen;