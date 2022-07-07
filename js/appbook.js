

const obtenerDatosAPI = (URL) => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            contenidoJSON = data
            contenidoJSON.forEach(contenido => {
                cardsAmostrar += retornoCardContenido(contenido)

            });

            contenidoCardProducto.innerHTML = cardsAmostrar
        })
}
obtenerDatosAPI(URL)

const retornoCardContenido = (contenido) => {
    debugger
    const { img, id, nombre, autor, precio } = contenido

    let HTMLCard = ""
    HTMLCard += ` 
       <div class="producto col-lg-3 col-sm-6">
                     <div class="card m-3 p-2" style="width: 18rem;">
                      <img src="${img}" class="rounded mx-auto d-block" id="imgCard" alt="...">
                        <div class="card-body">
                         <h6>Ref ID: ${id} </h6>
                         <h4 class="card-title">${nombre}</h4>
                         <h6>${autor}</h6>
                         <em class="card-text">Some quick example text to build on the card title and 
                         make up the bulk of the card's content.</em>
                         <h5>Precio: $ ${precio}</h5>
                         <button type="button" id="boton${id}" class="btn btn-warning fw-bold">¡LO QUIERO!
                         </button>
                       </div>
                    </div>
                    </div>
                   `


    return HTMLCard



}
