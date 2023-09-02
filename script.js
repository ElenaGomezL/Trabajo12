var nombre = prompt("Ingrese su nombre");
function saludo(){
    
    if (nombre){
        alert("Bienvenido "+ nombre);
    } else{
        alert("Ingrese su nombre");
    }
   
}
saludo();