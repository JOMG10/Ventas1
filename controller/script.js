

const btnPaginacion = document.getElementById("buttonPaginacion");
const contenido = document.getElementById("contenido");

const productos = new Producto()

const btnAgregarProducto= document.getElementById("")

productos.agregarProductos("jabon",25,2020)
const obtenerProductos = productos.obtenerProductos()

console.log( productos.obtenerProductos())


//   contenido.innerHTML += `
// <iframe src="pagina1.html" frameborder="0" width="100%" height="500px"></iframe>    
// `;

const paginacion = (pagina) => {

  contenido.innerHTML = "";

  switch (pagina) {
    case 1:
      if (pagina === 1) {
        contenido.innerHTML += `
                <iframe src="pagina1.html" frameborder="0" width="100%" height="600px"></iframe>    
                `;
      }
      break;

    case 2:
      if (pagina === 2) {
        contenido.innerHTML += `
                    <iframe src="pagina2.html" frameborder="0" width="100%" height="500px"></iframe>    
                    `;
      }
      break;

    case 3:
      if (pagina === 3) {
        contenido.innerHTML += `
                        <iframe src="pagina3.html" frameborder="0" width="100%" height="500px"></iframe>    
                        `;
      }
      break;

    case 4:
      if (pagina === 4) {
        contenido.innerHTML += `
                        <iframe src="pagina4.html" frameborder="0" width="100%" height="500px"></iframe>    
                        `;
      }
      break;

    case 5:
      if (pagina === 5) {
        contenido.innerHTML += `
                          <iframe src="pagina5.html" frameborder="0" width="100%" height="500px"></iframe>    
                          `;
      }
      break;

    case 6:
      if (pagina === 6) {
        contenido.innerHTML += `
                              <iframe src="pagina6.html" frameborder="0" width="100%" height="500px"></iframe>    
                              `;
      }
      break;

    case 7:
      if (pagina === 7) {
        contenido.innerHTML += `
                                  <iframe src="pagina7.html" frameborder="0" width="100%" height="500px"></iframe>    
                                  `;
      }
      break;
  }
};




