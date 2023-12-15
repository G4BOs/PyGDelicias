const LOGIN = document.getElementById('lboton');
const LOGERROR =document.getElementById('errorlogin');

LOGIN.addEventListener("click",login)

function login(){
    const USUARIO = document.getElementById('inpusuario');
    const CONTRAS =document.getElementById('inpcontrasena');

    if ((USUARIO.value === "admin") && (CONTRAS.value ==="admin")){
        console.log("accediste");LOGERROR.style.display='none';
    window.location.href='inicio.html';
        return }
        else {;LOGERROR.style.display='block';}
}