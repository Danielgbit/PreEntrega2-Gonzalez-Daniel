// Simulador: Calcular costo total de productos y/o servicios seleccionados por el usuario.


let servicios = [
    { id: 1, categoria: "Corte", tipo: "Clasico", precio: 20.00 },
    { id: 2, categoria: "Corte", tipo: "Premium", precio: 20.00 },
    { id: 3, categoria: "Barba", tipo: "Clasica", precio: 12.00 },
    { id: 4, categoria: "Barba", tipo: "Premium", precio: 16.00 },
    { id: 5, categoria: "Spa Facial", tipo: "Premium", precio: 9.00, },
]



let carritoDeCompras = [];

let continuar = true;

let resultado;



function ingresoServiciosSeleccionados() {

    do {

        resultado = Number(prompt("//Ingrese el #numero del servicio que desea comprar:" + "\n" + "\n-1: Corte clasico" + "\n-2: Corte Premium" +
         "\n-3: Barba Clasica" + "\n-4: Barba Premium" + "\n-5: Spa facial" + "\n" + "\n-0: Continuar al carrito//"))
    
            if (resultado === "" || resultado === 0 || resultado === null) {
    
                continuar = false;
    
            }else {
    
                for (let i = 0; i < servicios.length; i++) {
    
                    if (servicios[i].id === resultado) {
                        
                        carritoDeCompras.push(servicios[i]);
    
                        let servicioAñadidoCarrito = servicios.find(servicio => servicio.id === resultado);

                        alert("Servicio Seleccionado:" + "\n\n//"  + servicioAñadidoCarrito.categoria + " " + servicioAñadidoCarrito.tipo);
    
    
                    }
                    
                }
    
               
            }     
    
    } while (continuar);
}

ingresoServiciosSeleccionados();


function serviciosAñadidosCarrito() {

    carritoDeCompras.forEach(elementoCarrito => {

        let precio = elementoCarrito.precio.toFixed(2);
    
        alert("Servicios Añadidos al carrito: " + "\n" + "\n" + elementoCarrito.categoria + " " + elementoCarrito.tipo + "\nPrecio: " + "$" + precio);
    
    
    });
    
}

serviciosAñadidosCarrito();
opcionesContinuar();



function opcionesContinuar() {

    do {

        sumatoriaDeServicios = prompt("-1: Añadir otro servicio al carrito" + "\n-2: Continuar con la operacion");

        if (sumatoriaDeServicios === "" || sumatoriaDeServicios === 2 || sumatoriaDeServicios === null) {

            continuar = false;

        }else if(sumatoriaDeServicios === 1 || sumatoriaDeServicios === "1"){
            ingresoServiciosSeleccionados();
            serviciosAñadidosCarrito();
            opcionesContinuar();
        }
        

    } while (continuar);

}


function totalCarrito() {

    let total = carritoDeCompras.reduce((acumulador, carritoDeCompra) => acumulador + carritoDeCompra.precio, 0 );

    return total;
}


let total = totalCarrito();

let totalCarritoMensaje = "SERVICIOS: \n\n";

carritoDeCompras.forEach(carrito => {

    totalCarritoMensaje = totalCarritoMensaje.concat(carrito.categoria + " " + carrito.tipo + " // " + " $" + carrito.precio.toFixed(2) + "\n");

})


totalCarritoMensaje = totalCarritoMensaje.concat("\nTOTAL A PAGAR: $" + total.toFixed(2) + " US$");



alert(totalCarritoMensaje);








