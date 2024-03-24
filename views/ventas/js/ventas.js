
let tabCount = 1; 
const buscarProducto = document.getElementById("btn-buscarProducto")

const agregarTab = () => {
  tabCount++;
  let nombre = prompt("Ingrese el nombre del nuevo tab:");
  
  const divTabs = document.getElementById("nav-tab");
  divTabs.innerHTML += `
    <button class="nav-link" id="tab${tabCount}" data-bs-toggle="tab" data-bs-target="#${nombre}" type="button" role="tab" aria-controls="${nombre}" aria-selected="false">${nombre}</button>
  `;

  agregarContenido(nombre);
}

const agregarContenido = (nombre) => {
  const divContend = document.getElementById("nav-tabContent");
  divContend.innerHTML += `
    <div class="tab-pane fade" id="${nombre}" role="tabpanel" aria-labelledby="nav-profile-tab">
      <label for="">Este es el contenido del nuevo tab: ${nombre}</label>
    </div>
  `;
}

let datosObtenidos = ""

function obtenerProductos() {
  fetch(
    "http://localhost/proyects/ventas1/instancias/instanciaProductos.php?accion=obtenerProductos"
  )
    .then((response) => response.json())
    .then((data) => {
      datosObtenidos = data;
    })
    .catch((error) => console.error("Error:", error));
}

obtenerProductos();

buscarProducto.addEventListener("click", ()=>{
  const inputBuscarProducto = document.getElementById("input_buscarProducto").value;
  const tbody = document.querySelector("#tablaProductos tbody");

  datosObtenidos.forEach(element => {

    if(inputBuscarProducto == element.codigo){
      const nuevaFila = document.createElement("tr");

    const codigo = element.codigo;
    const descripcion = element.descripcion;
    const pVenta = element.precioVenta;
    const cantidad = 2
    const existencia = element.existencia - cantidad;

    const importe = pVenta*cantidad;


    nuevaFila.innerHTML = `
                <td class="columnaP columnaCodigo justificado">${codigo}</td>
                <td class="just-izquierdo">${descripcion}</td>
                <td class="columnaP justDerecho">$ ${pVenta}</td>
                <td class="columnaP justificado"> ${cantidad}</td>
                <td class="columnaP justDerecho">$ ${importe}</td>
                <td class="columnaP justDerecho">${existencia}</td>
                <td ></td>

            `;

    tbody.appendChild(nuevaFila);
    }   
    
  });







  
})