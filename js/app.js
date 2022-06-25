

// ---------Mostrar los productos (en sus cards)---------------------

function mostrarProductos() {

    baseProductos.forEach(elemento => {
        let div = document.createElement('div')
        div.className = 'producto col-lg-3 col-sm-6'
        div.innerHTML = ` 
                 
                      <div class="card m-3 p-2" style="width: 18rem;">
                       <img src="${elemento.img}" class="rounded mx-auto d-block" id="imgCard" alt="...">
                         <div class="card-body">
                          <h6>Ref ID: ${elemento.id} </h6>
                          <h4 class="card-title">${elemento.nombre}</h4>
                          <h6>${elemento.autor}</h6>
                          <em class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</em>
                          <h5>Precio: $ ${elemento.precio}</h5>


                          <button type="button" id="boton${elemento.id}" class="btn btn-warning fw-bold">¡LO QUIERO!</button>
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
    Swal.fire(
        {
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          }
          
    )


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
     <h5>Autor/a: ${productoAgregado.autor}</h5>
     <h5>Precio: ${productoAgregado.precio} </h5>
     <button class="btn bg-warning" id="quitarProducto${productoAgregado.id}">Quitar Producto </button>
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

// ---------Ir actualizando el carrito : cuando se agregan productos--------------------------------------------------

function actualizarCarrito() {

    contadorCarrito.innerText = carritoFinal.length
    precioTotal.innerText = carritoFinal.reduce((contador, elemento) =>
        contador + elemento.precio, 0)
}

// ---------Formulario compra checkout-------------------------

const baseDatosClientes= [] //

btnEnviar.addEventListener('click', () => {
    
   

    const chequearDatos = (isNaN(parseInt(inputTel.value)) || inputNombre.value.trim() == "" || emailFormulario.value.trim() == "") 
    if (chequearDatos) {
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Faltan algunos datos para la compra...',
          })
    } else {
    
    const obj = {
        nombre: inputNombre.value,
        email: emailFormulario.value,
        domicilio: inputDomicilio.value,
        telefono: inputTel.value,
        cp: inputCP.value
    }
    
    baseDatosClientes.push(obj)
    console.log('Se realizó un pedido')


    let divForm = document.createElement('div')
        divForm.className = 'formEnviado'
        divForm.innerHTML =
        `
        <h2 id="formularioEnviado"class="fw-bold pt-5">FORMULARIO ENVIADO CORRECTAMENTE</h2>
        <H4>Recibirás un mail con el detalle de tu compra</H4>
        <H4>En aproximadamente 5 días hábiles recibirás tu pedido</H4>
        <H3 class="fw-bold">¡MUCHAS GRACIAS!</H3>
        `
        formularioEnviado.appendChild(divForm)
    }    
    btnCancelar.click()
    inputNombre.focus()
    localStorage.setItem("Base de datos Clientes", JSON.stringify(baseDatosClientes))

})


btnCancelar.addEventListener('click', () => {
    inputNombre.value = ""
    emailFormulario.value = ""
    inputDomicilio.value = ""
    telefono = inputTel.value = ""
})


// -------volver al inicio----------------
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    window.location.href = "index.html#principio";
})