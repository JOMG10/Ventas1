const contenedor= document.getElementById('contenedor');


const agregarMenu= (dato)=>{

    contenedor.innerHTML =""

    if(dato ==="nuevo"){
        contenedor.innerHTML +=`
    <iframe src="menuProductos/nuevo.html" frameborder="0" width="100%" height="85%"></iframe>    
    `
    }else if(dato==="modificar"){
        contenedor.innerHTML +=`
        <iframe src="menuProductos/modificar.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="eliminar"){
        contenedor.innerHTML +=`
        <iframe src="menuProductos/eliminar.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="Departamentos"){
        contenedor.innerHTML +=`
        <iframe src="menuProductos/departamentos.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="ventasPeriodo"){
        contenedor.innerHTML +=`
        <iframe src="menuProductos/ventasPeriodo.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="promociones"){
        contenedor.innerHTML +=`
        <iframe src="menuProductos/promociones.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="importar"){
        contenedor.innerHTML +=`
        <iframe src="menuProductos/importar.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="catalogo"){
        contenedor.innerHTML +=`
    <iframe src="menuProductos/catalogo.html" frameborder="0" width="100%" height="85%"></iframe>    
    `
    }
    
}

agregarMenu("nuevo");
