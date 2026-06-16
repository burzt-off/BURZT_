/* Codigo para darle una funcion al boton del menú */

const botonAbrir = document.getElementById('abrir_menu');
const botonCerrar = document.getElementById('cerrar_menu');
const menuLateral = document.getElementById('menu_lateral');
botonAbrir.addEventListener('click', () => {
    menuLateral.classList.add('activo');
});
botonCerrar.addEventListener('click', () => {
    menuLateral.classList.remove('activo');
});
