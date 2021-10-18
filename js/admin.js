import {validarCodigo, validarCampoRequerido, validarNumeros, validarURL, validarGeneral} from "./validaciones.js";
import {Producto} from './productoClass.js';
// traer los input/textarea
let codigo = document.querySelector("#codigo");
let cantidad = document.querySelector("#cantidad");
let url = document.querySelector("#url");
let producto = document.querySelector("#producto");
let descripcion = document.querySelector("#descripcion");
let formulario = document.querySelector("#formProducto");
let listaProductos = [];

//   console.log(formulario);
//  console.log(descripcion);

cargaInicial();

// le agregamos el evento
codigo.addEventListener("blur", () => {
  validarCodigo(codigo);
});
cantidad.addEventListener("blur", () => {
  validarNumeros(cantidad);
});
url.addEventListener("blur", () => {
  validarURL(url);
});
producto.addEventListener("blur", () => {
  validarCampoRequerido(producto);
});
descripcion.addEventListener("blur", () => {
  validarCampoRequerido(descripcion);
});
formulario.addEventListener("submit", guardaProducto);

function guardaProducto(e){
    e.preventDefault();
    // verificar que pase todas las validaciones
    if(validarGeneral()) {
        //tengo que crear el producto
     console.log('aqui creo el producto')
agregarProducto();
    } else {
        // aqui no hacemos nada
        console.log('no deberia hacer nada')
    }

}

function agregarProducto(){
    //  crear un objeto Producto
    let productoNuevo = new Producto(codigo.value, producto.value, descripcion.value, cantidad.value, url.value)
    // cargar el producto dentro del arreglo
    listaProductos.push(productoNuevo);
    console.log(listaProductos);
    // al arreglo de productos los almaceno en localstorage
    localStorage.setItem('arregloProductos', JSON.stringify(listaProductos));
    // limpiar formulario
    limpiarFormulario();

    // mostrar un mensaje al usuario

    // mostra el objeto en una tabla
} 

function limpiarFormulario(){
    // limpia los value de mis input
    formulario.reset();
    // limpiar los estilos
    codigo.className = 'form-control';
    cantidad.className = 'form-control';
    url.className = 'form-control';
    producto.className = 'form-control';
    descripcion.className = 'form-control';
}

function cargaInicial(){
// traer los productos del localstorage si existieran sino dejar el arreglo vacio.
listaProductos = JSON.parse(localStorage.getItem('arregloProductos')) || [];

}

    
