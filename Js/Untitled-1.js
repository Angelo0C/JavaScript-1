let carrito = [];
let total = 0;

function agregarProducto(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;


    const listaCarrito = document.getElementById("listaCarrito");

    const totalCarrito = document.getElementById("totalCarrito");

    const item = document.createElement("li");

    item.textContent = `${nombre} - $${precio}`;
    listaCarrito.appendChild(item);

    totalCarrito.textContent = total;
    alert(`${nombre} ha sido agregado al carrito con éxito!!`);
}


// funcion para finalizar la compraa

function finalizarCompra() {

    let presupuesto = parseFloat(prompt("Ingresá tu presupuesto:"));

    if (total > presupuesto) {

        alert(`¡Atención! El total de $${total} supera tu presupuesto de $${presupuesto}.`);
    } else {

        alert(`¡Compra realizada con éxito! El total es $${total}.`);
    }

    console.log("Productos comprados:");
    carrito.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });

    console.log(`Total: $${total}`);

}
