const contenedor= document.getElementById('contenedor');
const titulo = document.getElementById('titulo');

const agregarMenu= (dato)=>{
  

    contenedor.innerHTML =""

    if(dato ==="nuevo"){
        contenedor.innerHTML +=`
        <iframe src="products/menu/nuevo.html" frameborder="0" width="100%" height="85%"></iframe>
    `    
    }else if(dato==="modificar"){
        contenedor.innerHTML +=`
        <iframe src="products/menu/modificar.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
       
    }else if(dato==="eliminar"){
        contenedor.innerHTML +=`
        <iframe src="products/menu/eliminar.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="departamentos"){
        contenedor.innerHTML +=`
        <iframe src="products/menu/departamentos.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="ventasPeriodo"){
        contenedor.innerHTML +=`
        <iframe src="products/menu/ventasPeriodo.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="promociones"){
        contenedor.innerHTML +=`
        <iframe src="products/menu/promociones.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="importar"){
        contenedor.innerHTML +=`
        <iframe src="products/menu/importar.html" frameborder="0" width="100%" heiht="85%"></iframe>  `
    }else if(dato==="catalogo"){
        contenedor.innerHTML +=`
    <iframe src="products/menu/catalogo.html" frameborder="0" width="100%" height="85%"></iframe>    
    `
    }
    
}

agregarMenu("nuevo");
