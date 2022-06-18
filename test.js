
// ---------variables globales---------------------------------------------

let carritoFinal = []

const cardProducto = document.getElementById('cardProducto');
const contenedorCarrito = document.getElementById('contenedorCarrito');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');



// ---------Lógica de Ecommerce---------------------------------------------

// ---------Mostrar los productos (en sus cards)---------------------

function mostrarProductos() {

    baseProductos.forEach(elemento => {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = ` 
                  <div class="col">
                      <div class="card m-3 p-2" style="width: 18rem;">
                       <img src="${elemento.img}" class="card-img-top" alt="...">
                         <div class="card-body">
                          <h6>Ref ID: ${elemento.id} </h6>
                          <h3 class="card-title">${elemento.nombre}</h3>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5>Precio: $ ${elemento.precio}</h5>
                          <a  id="boton${elemento.id}" class="btn btn-primary" >¡LO QUIERO!</a>
                        </div>
                     </div>
                    </div>
                    `
        cardProducto.appendChild(div)       //agrego como hijo el div al padre div 'cardProducto'

        // debugger
        let btnAgregar = document.getElementById(`boton${elemento.id}`)
        //    console.log (btnAgregar);

        btnAgregar.addEventListener('click', () => {
            agregarCarrito(elemento.id)   //  -----> acá ya estoy llamando a la función agregarCarrito
        })

    })

}

mostrarProductos()



// ---------Agregar los productos al carrito--------------------------------------------------

function agregarCarrito(id) {

    let = productoAgregado = baseProductos.find(item => item.id === id) //solicito busque en mis productos si existe (por el ID)
    console.log(productoAgregado)
    carritoFinal.push(productoAgregado)
    mostrarCarrito(productoAgregado)
    actualizarCarrito()


}
// ---------Ir mostrando Carrito armado--------------------------------------------------

function mostrarCarrito(productoAgregado) {

    let div = document.createElement('div')
    div.className = 'productoEnElCarrito'
    div.innerHTML =
        `
     <h4>Producto: ${productoAgregado.nombre}</h4>
     <h4>Precio: ${productoAgregado.precio} </h4>
     <button id="quitarProducto${productoAgregado.id}">Quitar Producto </button>
     `
    contenedorCarrito.appendChild(div)

    let btnQuitar = document.getElementById(`quitarProducto${productoAgregado.id}`)
    // console.log(btnQuitar);

    btnQuitar.addEventListener('click', () => {
        btnQuitar.parentElement.remove()   //se mata al padre
        carritoFinal = carritoFinal.filter( elemento => elemento.id !== productoAgregado.id)
        actualizarCarrito()

    }

    )

}


// ---------Ir actualizando el carrito : agregarr--------------------------------------------------


function actualizarCarrito() {

    contadorCarrito.innerText = carritoFinal.length
    precioTotal.innerText = carritoFinal.reduce((contador, elemento) =>
        contador + elemento.precio, 0)
}