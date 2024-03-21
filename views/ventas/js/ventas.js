
    // // Función para agregar un nuevo tab
    // function agregarNuevoTab() {
    //   // Obtiene el número de tabs existentes
    //   const numTabs = document.querySelectorAll('.nav-link').length;
    //   // Crea un nuevo ID para el nuevo tab
    //   const nuevoTabID = `tab-${numTabs + 1}`;
    //   // Crea un nuevo nombre para el nuevo tab
    //   const nuevoTabNombre = `Tab ${numTabs + 1}`;
    //   // Crea un nuevo div para el contenido del tab
    //   const nuevoContenidoTab = document.createElement('div');
    //   nuevoContenidoTab.classList.add('tab-pane', 'fade');
    //   nuevoContenidoTab.id = nuevoTabID;
    //   nuevoContenidoTab.setAttribute('role', 'tabpanel');
    //   nuevoContenidoTab.innerHTML = `Contenido del ${nuevoTabNombre}`;
    //   // Agrega el contenido del tab a la sección de contenido de los tabs
    //   document.getElementById('myTabContent').appendChild(nuevoContenidoTab);
    //   // Crea un nuevo elemento de lista para el nuevo tab
    //   const nuevoTab = document.createElement('li');
    //   nuevoTab.classList.add('nav-item');
    //   nuevoTab.innerHTML = `<a class="nav-link" id="${nuevoTabID}-tab" data-toggle="tab" href="#${nuevoTabID}" role="tab" aria-controls="${nuevoTabID}" aria-selected="true">${nuevoTabNombre}</a>`;
    //   // Agrega el nuevo tab a la barra de navegación de los tabs
    //   document.getElementById('myTab').appendChild(nuevoTab);
    // }



    // const agregarTab =()=>{
    //     const agregarTab = document.getElementById("myTab");
    //     const prueba = "hola"

    // //     agregarNuevoTab.innerHTML =`
    // //     <li class="nav-item">
    // //     <a class="nav-link active" id=`{$hola}` data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Tab 1</a>
    // //   </li>
    // //     `

    // }


    let tabCount = 1;

// Función para agregar un nuevo tab
function agregarTab() {
  tabCount++; // Incrementar el contador
  const tabsContainer = document.getElementById('tabs');

  // Crear un nuevo tab
  const newTab = document.createElement('div');
  newTab.classList.add('tab');
  newTab.innerHTML = `
    <h2>Tab ${tabCount}</h2>
    <p>Contenido del Tab ${tabCount}</p>
  `;

  // Agregar el nuevo tab al contenedor de tabs
  tabsContainer.appendChild(newTab);

  // Mostrar el nuevo tab
  mostrarTab(newTab);
}

// Función para mostrar un tab específico
function mostrarTab(tab) {
  // Ocultar todos los tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Mostrar el tab específico
  tab.classList.add('active');
}
    