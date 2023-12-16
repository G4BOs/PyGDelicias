let empleados = [];


fetch('https://sheet.best/api/sheets/9c8e16cc-6b8c-420b-885d-a4e1ef42dd78').then(response=>response.json()).then(data=>{empleados=data;ver()})

.catch(error=>{console.error('Error obteniendo API')})



//Botones

const TOTAL= document.getElementById('calcular');
const SUMAR = document.getElementById('sumar');

//Inputs
//Pendiente

//EventListeners

document.addEventListener("DOMContentLoaded",ver);


SUMAR.addEventListener("click",calcular);

//Planilla
let nomEmp = document.getElementById('nombre');
let cargEmp = document.getElementById('cargo');
let sueldEmp = document.getElementById('sueldo');
let diasTrab = document.getElementById('diastrabajados');

//Funciones

function ver(){
for (let i=0;i<empleados.length;i++){
let nombrepersonal=document.createElement("li");nombrepersonal.textContent=empleados[i].nombre;nomEmp.appendChild(nombrepersonal);
let diastrabajados=document.createElement("input");diastrabajados.id="input_"+i;diasTrab.appendChild(diastrabajados);
}


for(let i=0;i<empleados.length;i++){
let cargopersonal=document.createElement("li");cargopersonal.textContent=empleados[i].cargo;cargEmp.appendChild(cargopersonal)}


for(let i=0;i<empleados.length;i++){
let sueldopersonal=document.createElement("li");sueldopersonal.textContent=empleados[i].salario+" Gs";sueldEmp.appendChild(sueldopersonal)}
}


let OCULTARERROR = document.getElementById('ocultar');
function calcular(){

    let totalsueldo = document.getElementById('Totalsueldo');
        let inp0 = document.getElementById('input_0').value;
        let inp1 = document.getElementById('input_1').value;
        let inp2 = document.getElementById('input_2').value;
        let inp3 = document.getElementById('input_3').value;
        let inp4 = document.getElementById('input_4').value;
        let inp5 = document.getElementById('input_5').value;
        let inp6 = document.getElementById('input_6').value;
        let inp7 = document.getElementById('input_7').value;
        let inp8 = document.getElementById('input_8').value;

    if(inp0>0&&inp1>0&&inp2>0&&inp3>0&&inp4>0&&inp5>0&&inp6>0&&inp7>0&&inp8>0){

        OCULTARERROR.style.display='none';


        
        
        let robertodia = empleados[0].pordia*inp0; 
        let robdia = document.createElement("li");
        robdia.textContent=robertodia;
        totalsueldo.appendChild(robdia);

        let segundia = empleados[1].pordia*inp1; 
        let segdia = document.createElement("li");
        segdia.textContent=segundia;
        totalsueldo.appendChild(segdia);

        let tercerdia = empleados[2].pordia*inp2; 
        let terdia = document.createElement("li");
        terdia.textContent=tercerdia;
        totalsueldo.appendChild(terdia);

        let cuartodia = empleados[3].pordia*inp3; 
        let cuadia = document.createElement("li");
        cuadia.textContent=cuartodia;
        totalsueldo.appendChild(cuadia);

        let quintodia = empleados[4].pordia*inp4; 
        let quindia = document.createElement("li");
        quindia.textContent=quintodia;
        totalsueldo.appendChild(quindia);

        let sextdia = empleados[5].pordia*inp5; 
        let sexdia = document.createElement("li");
        sexdia.textContent=sextdia;
        totalsueldo.appendChild(sexdia);

        let sevendia = empleados[6].pordia*inp6; 
        let sevdia = document.createElement("li");
        sevdia.textContent=sevendia;
        totalsueldo.appendChild(sevdia);

        let octavodia = empleados[7].pordia*inp7; 
        let octdia = document.createElement("li");
        octdia.textContent=octavodia;
        totalsueldo.appendChild(octdia);

        let novenodia = empleados[8].pordia*inp8; 
        let novdia = document.createElement("li");
        novdia.textContent=novenodia;
        totalsueldo.appendChild(novdia);

SUMAR.disabled=true;

let totalgastado = document.getElementById('totalgastado');
let totgast = (robertodia+segundia+tercerdia+cuartodia+quintodia+sextdia+sevendia+octavodia+novenodia);

totalgastado.innerHTML="Total Gastado en personal este mes: "+totgast+" Gs";
totalgastado.style.display='block';


   
}
else {
OCULTARERROR.style.display='block';
}}
document.addEventListener("DOMContentLoaded",ver);
