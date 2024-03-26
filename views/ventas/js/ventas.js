
let tabCount = 1; 
let contadorTabla = 1
let datosObtenidos = []
let totalPrecioVenta = 0;
const inputBuscarProducto = document.getElementById("input_buscarProducto");
const buscarProducto = document.getElementById("btn-buscarProducto");
const totalVenta = document.getElementById("totalVenta");

const agregarTab = () => {
  tabCount++;
  let nombre = prompt("Ingrese el nombre del nuevo tab:");
  
  const divTabs = document.getElementById("nav-tab");
  divTabs.innerHTML += `
    <button class="nav-link" id="tab${tabCount}"  onclick="cambiarTicket('ticket-2')" data-bs-toggle="tab" data-bs-target="#${nombre}" 
    type="button" role="tab" aria-controls="${nombre}" aria-selected="false">${nombre}</button>
  `;

  agregarContenido(nombre);
}


const agregarContenido = (nombre) => {
  contadorTabla++
  const divContend = document.getElementById("nav-tabContent");

  // divContend.innerHTML =""

  console.log(divContend)

  
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

let numeroTicket ="";
// let tbody = "";

const cambiarTicket =(ticket)=>{

  numeroTicket = ticket
  console.log(numeroTicket)
  // return numeroTicket;
  // const tbody = document.querySelector(`#ticket tbody`);
  // const inputValor = inputBuscarProducto.value
 

}

cambiarTicket("tablaProductos");

buscarProducto.addEventListener("click", ()=>{
  console.log(numeroTicket)



  const tbody = document.querySelector(`#${numeroTicket} tbody`);

  console.log(tbody)
  const inputValor = inputBuscarProducto.value

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
                <td class="columnaP justificado"> ${cantidad}</td>
                <td class="columnaP justDerecho">$ ${importe}</td>
                <td class="columnaP justDerecho">${existencia}</td>
                <td ></td>

            `;

    tbody.appendChild(nuevaFila);

    sumarCantidad(pVenta);

    limpiarInput();


    }   
    
  });  
})


const limpiarInput = ()=>{
  inputBuscarProducto.value = ""

}

const sumarCantidad = (precio) =>{
  const precioVenta = parseFloat(precio);
   totalPrecioVenta += precioVenta;

   totalVenta.textContent =  totalPrecioVenta.toFixed(2);


  console.log(totalPrecioVenta)
}