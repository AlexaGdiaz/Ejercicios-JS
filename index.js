document.getElementById("enviar").addEventListener("click",function(e){
    e.preventDefault();
    let empleado= document.getElementById("empleado").value;
    let sueldo= document.getElementById("sueldo").value;
document.getElementById("msj").innerHTML=
mensaje(empleado,sueldo)
});
function mensaje (empleado,sueldo){
    return "Hola "+ empleado+" este es su "+ sueldo
};
 // 2-Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch)
document.getElementById("btn").addEventListener("click",function(e){
    e.preventDefault();
    let op =document.getElementById("combo").value;
    document.getElementById("msj2").innerHTML= nombres (op)
    });

    function nombres (op){
        let resultado;
        switch (op){
            case "1": resultado ="House";
            break;
            
            case "2": resultado ="Table";
            break;

            case "3": resultado ="Dog";
            break;

            case "4": resultado ="Cat";
            break;
        }
        return resultado;
    };
 
    // 7-Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:
 
    var numero1 = 5;
    var numero2 = 8;
     
    if(numero1 < numero2) {
      console.log("numero1 no es mayor que numero2");
    }
    if(numero2>0) {
              console.log("numero2 es positivo");
    }
    if(numero1<0||numero1!=0) {
      console.log("numero1 es negativo o distinto de cero");
    }
    if (numero1++<numero2){
        
      console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
    
 


 
 
 
// 4-Realiza una página que muestre una imagen que cambie cuando el ratón pase por encima de la imagen y que vuelva a cambiar cuando salga de ella. */
