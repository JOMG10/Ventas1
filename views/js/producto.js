const contenedor= document.getElementById('contenedor');


const agregarMenu= (dato)=>{

    contenedor.innerHTML =""

    if(dato ==="nuevo"){
        contenedor.innerHTML +=`

    <iframe src="menuProductos/nuevo.html" frameborder="0" width="100%" height="100%"></iframe>

    
    `

    }

    
}
