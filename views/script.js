

const btnPaginacion = document.getElementById("buttonPaginacion")
const contenido= document.getElementById("contenido")

const paginacion = (pagina) => {
    const contenido = document.getElementById('contenido');

    // Limpia el contenido existente
    contenido.innerHTML = '';

    switch (pagina) {
        case 1:
            // Cambié el operador de comparación en la condición a "=="
            if (pagina === 1) {
                contenido.innerHTML += `
                <iframe src="pagina1.html" frameborder="0" width="100%" height="500px"></iframe>    
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
                    if (pagina === 1) {
                        contenido.innerHTML += `
                        <iframe src="pagina1.html" frameborder="0" width="100%" height="500px"></iframe>    
                        `;
                    }
                    break;

        default:
            console.log('Página no reconocida');
    }
};

