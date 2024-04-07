
let tabCount = 1; 
let contadorTabla = 1
let datosObtenidos = []
let totalPrecioVenta = 0;
let numeroTicket ="";
const inputBuscarProducto = document.getElementById("input_buscarProducto");
const buscarProducto = document.getElementById("btn-buscarProducto");
const totalVenta = document.getElementById("totalVenta");

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

const agregarTab = () => {
  tabCount++;
  let nombre = prompt("Ingrese el nombre del nuevo tab:");
  
  const divTabs = document.getElementById("nav-tab");
  divTabs.innerHTML += `
    <button class="nav-link" id="tab${tabCount}"  onclick="cambiarTicket('${nombre}')" data-bs-toggle="tab" data-bs-target="#${nombre}" 
    type="button" role="tab" aria-controls="${nombre}" aria-selected="false">${nombre}</button>
  `;

  agregarContenido(nombre);
}


const agregarContenido = (nombre) => {
  contadorTabla++
  const divContend = document.getElementById("nav-tabContent");  
  divContend.innerHTML += `
    <div class="tab-pane fade" id="${nombre}" role="tabpanel" aria-labelledby="nav-profile-tab">
    <div>
    <div class="card-body" data-bs-spy="scroll">
      <div>
        <table class="table" id="ticket-${contadorTabla}">
          <tbody ></tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
  `;
}

obtenerProductos();

const cambiarTicket =(ticket)=>{
  numeroTicket = ticket;
  // calcularTotal();
}

cambiarTicket("tablaProductos");

buscarProducto.addEventListener("click", (e)=>{
  e.preventDefault();

  const tbody = document.querySelector(`#${numeroTicket} tbody`);

  const inputValor = inputBuscarProducto.value
  let valor= "";

  datosObtenidos.forEach(element => {

    if(inputValor == element.codigo){
    const nuevaFila = document.createElement("tr");

    const codigo = element.codigo;
    const descripcion = element.descripcion;
    const pVenta = parseFloat(element.precioVenta).toFixed(2); // Formatear el precio de venta a 2 decimales
    const cantidad = 1
    const existencia = element.existencia - cantidad;

    const importe = (pVenta * cantidad).toFixed(2);


    nuevaFila.innerHTML = `
                <td class="columnaP columnaCodigo justificado">${codigo}</td>
                <td class="just-izquierdo">${descripcion}</td>
                <td class="columnaP justDerecho">$ ${pVenta}</td>
                <td class="columnaP justificado">${cantidad}</td>
                <td class="columnaP justDerecho"> ${importe}</td>
                <td class="columnaP justDerecho">${existencia}</td>
                <td ></td>

            `;

    tbody.appendChild(nuevaFila);

    // sumarCantidad(pVenta);
    calcularTotal(numeroTicket);

    limpiarInput();


    }else{
      valor = false;
      console.log("el valor no existe"); 
    }   
    
  }); 
  
  if(valor = false){
    console.log("el valor no existe");

  }
})
// Actualizar calcularTotal para procesar solo la fila recién agregada
const calcularTotal = (numeroTicket) => {
  const tbody = document.querySelector(`#${numeroTicket} tbody`);
  const ultimaFilaAgregada = tbody.lastElementChild; // Obtener la última fila agregada

  if (ultimaFilaAgregada) {
    const celdas = ultimaFilaAgregada.querySelectorAll('td');
    const importeCompra = celdas[4];
    const totalImporte = importeCompra.textContent
    console.log(totalImporte);
    sumarCantidad(totalImporte);
  }
};
const limpiarInput = ()=>{
  inputBuscarProducto.value = ""

}

const sumarCantidad = (precio) =>{
  console.log(precio)
  const precioVenta = parseFloat(precio);
  totalPrecioVenta += precioVenta;

  //  totalVenta.textContent =  precio;


   totalVenta.textContent =  totalPrecioVenta.toFixed(2);
}

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}