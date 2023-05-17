const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
// PRODUCTOS
const productos = [
  // Bolsa
  {
      id: "bolsa-01",
      titulo: "Bolsa Callaway Blanco",
      imagen: "./img/Bolsa-Callaway-Blanco.jpg",
      categoria: {
        nombre: "Bolsa",
        id: "bolsas"
      },
      precio: 1500
  },
  {
      id: "bolsa-02",
      titulo: "Bolsa Callaway Negro",
      imagen: "./img/Bolsa-Callaway-Negro.jpg",
      categoria: {
        nombre: "Bolsa",
        id: "bolsas"
      },
      precio: 1000
  },
  //Guantes
  {
    id:"Guantes-01",
    titulo:"Guantes Stuburt",
    imagen:"./img/Guantes-Stuburt.jpg",
    categoria: {
      nombre: "Guantes",
      id: "guantes"
    },
    precio:2000
  },
  //Pelotas
  {
    id:"Pelotas-01",
    titulo:"Pelotas Callaway SuperSoft",
    imagen:"./img/Pelotas1.jpg",
    categoria: {
      nombre: "Pelotas",
      id: "pelotas"
    },
    precio:3300
  },
  {
  id:"Pelotas-02",
  titulo:"Pelotas Callaway Boca Juniors",
  imagen:"./img/PelotasBoca.jpg",
  categoria: {
    nombre: "Pelotas",
    id: "pelotas"
  },
  precio:5500
  }
];


const contenedorProductos = document.querySelector("#shopContent");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

//funcion para cargar los productos y hacerlos tipo card con su boton de agregar carrito
  function cargarProductos(productosElegidos)
  {
    contenedorProductos.innerHTML = ""; //sirve para vaciar
    
    productosElegidos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src = "${product.imagen}">
    <h3>${product.titulo}</h3>
    <p class = "price">${product.precio}$</p>
    <button class ="producto-agregar" ${product.id}">Agregar</button>
    `;
    shopContent.append(content);
      
  })

  actualizarBotonesAgregar();
}

cargarProductos(productos);
  
  
//sirve esto para filtros los productos de la
botonesCategorias.forEach(boton => {
  boton.addEventListener("click",(e) =>
  {
    if(e.currentTarget.id !="todos")
    {
      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton);
    }else{
      cargarProductos(productos);
    }
  })
})

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
}