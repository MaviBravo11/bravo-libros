
// ---------variables globales---------------------------------------------

let carritoFinal = []

const cardProducto = document.getElementById('cardProducto');
const contenedorCarrito = document.getElementById('contenedorCarrito');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');



// ---------Lógica de Ecommerce---------------------------------------------

// ---------Mostrar los productos (en sus cards)---------------------

function mostrarProductos() {

    baseProductos.forEach(elemento => {
        let div = document.createElement('div')
        div.className = 'producto col-4'
        div.innerHTML = ` 
                 
                      <div class="card m-3 p-2" style="width: 18rem;">
                       <img src="${elemento.img}" class="rounded mx-auto d-block" id="imgCard" alt="...">
                         <div class="card-body">
                          <h6>Ref ID: ${elemento.id} </h6>
                          <h4 class="card-title">${elemento.nombre}</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5>Precio: $ ${elemento.precio}</h5>
                          <a  id="boton${elemento.id}" class="btn btn-warning fw-bold" >¡LO QUIERO!</a>
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
     <h5 class="mt-5">Producto: ${productoAgregado.nombre}</h5>
     <h5>Precio: ${productoAgregado.precio} </h5>
     <button id="quitarProducto${productoAgregado.id}">Quitar Producto </button>
     `
    contenedorCarrito.appendChild(div)

    let btnQuitar = document.getElementById(`quitarProducto${productoAgregado.id}`)
    // console.log(btnQuitar);

    btnQuitar.addEventListener('click', () => {
        btnQuitar.parentElement.remove()   //se mata al padre
        carritoFinal = carritoFinal.filter(elemento => elemento.id !== productoAgregado.id)
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




// ---------Formulario-------------------------

nombreFormulario.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) { //event.key = "Enter"
        emailFormulario.focus()
    }
})

// botonFormulario.addEventListener('click', ()=>
// location.reload())

// botonFormulario.addEventListener('click', ()=>
// alert ('Compra realizado con éxito!'))