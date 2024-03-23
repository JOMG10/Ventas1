
let tabCount = 1; 

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



