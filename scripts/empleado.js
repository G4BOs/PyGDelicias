let empleados = [{
    nombre: "Roberto Ortiz",
    cargo: "Pastelero Jefe",
    salario:5000000,
},{
    nombre: "Valeria Torres",
    cargo: "Asistente de Pasteleria",
    salario:5000000,
},{
    nombre: "Natalia Ferreira",
    cargo: "Chef de Cocina",
    salario:3000000,
},{
    nombre: "Marta Gonzales",
    cargo: "Asistente de Cocina",
    salario:3000000,
},{
    nombre: "Luis Silva",
    cargo: "Limpiador de Cocina",
    salario:2500000,
},{
    nombre: "Carlos Gimenez",
    cargo: "Repartidor a domicilio",
    salario:3000000,
},{
    nombre: "Maria Diaz",
    cargo: "Vendedor",
    salario:6000000,
},{
    nombre: "Pedro Benitez",
    cargo: "Repositor de Mercaderia",
    salario:4000000,
},{
    nombre: "Ana Ramirez",
    cargo: "Administrador",
    salario:8000000,
}];

//Botones
const VER = document.getElementById('ver');
const TOTAL= document.getElementById('calcular');
const SUMAR = document.getElementById('sumar');

//Inputs
//Pendiente

//EventListeners

document.addEventListener("DOMContentLoaded",ver);

//VER.addEventListener("click",ver);
SUMAR.addEventListener("click",calcular);

//Planilla
let nomEmp = document.getElementById('nombre');
let cargEmp = document.getElementById('cargo');
let sueldEmp = document.getElementById('sueldo');
let diasTrab = document.getElementById('diastrabajados');

//Funciones

function ver(){
for (let i=0;i<empleados.length;i++){console.log("Nombre: "+empleados[i].nombre);
let nombrepersonal=document.createElement("li");nombrepersonal.textContent=empleados[i].nombre;nomEmp.appendChild(nombrepersonal);
let diastrabajados=document.createElement("input");diastrabajados.id="input_"+i;diasTrab.appendChild(diastrabajados);
}
console.log("================================================");

for(let i=0;i<empleados.length;i++){console.log("Cargo: "+empleados[i].cargo);
let cargopersonal=document.createElement("li");cargopersonal.textContent=empleados[i].cargo;cargEmp.appendChild(cargopersonal)}
console.log("================================================")

for(let i=0;i<empleados.length;i++){console.log("Sueldo: "+empleados[i].salario);
let sueldopersonal=document.createElement("li");sueldopersonal.textContent=empleados[i].salario+" Gs";sueldEmp.appendChild(sueldopersonal)}
}

//En proceso...
//function calcular(){

    
//        let inp0 = document.getElementById('input_0').value;
//        let inp1 = document.getElementById('input_1').value;
//        let inp2 = document.getElementById('input_2').value;
//        let inp3 = document.getElementById('input_3').value;
//        let inp4 = document.getElementById('input_4').value;
//        let inp5 = document.getElementById('input_5').value;
//        let inp6 = document.getElementById('input_6').value;
//        let inp7 = document.getElementById('input_7').value;
//        let inp8 = document.getElementById('input_8').value;
//
//    if(inp0>0&&inp1>0&&inp2>0&&inp3>0&&inp4>0&&inp5>0&&inp6>0&&inp7>0&&inp8>0){
//
//        let diarioarray=[];
//
//        diarioarray.push(empleados[0].salario/30)
//
//        console.log(empleado[0].salario/30)
//
//        console.log("si se puede calcular")
        

//inp0*pordia;
//inp1*pordia;
//inp2*pordia;
//inp3*pordia;
//inp4*pordia;
//inp5*pordia;
//inp6*pordia;
//inp7*pordia;
//inp8*pordia;
   
//}
//else {console.log("No se pudo calcular")}
//}

