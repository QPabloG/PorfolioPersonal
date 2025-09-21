// --- MENU HAMBURGUESA ---
let iconoMenu = document.querySelector('#IconoMenu');
let navbar    = document.querySelector('#navbar');

iconoMenu.onclick = () => {
    iconoMenu.classList.toggle('bx-x'); // cambia icono a X
    navbar.classList.toggle('active');  // muestra/oculta menu
};

// --- CAMBIAR ENLACE ACTIVO AL HACER SCROLL ---
let secciones = document.querySelectorAll('section');
let linksNav  = document.querySelectorAll('#navbar a');

window.onscroll = () => {
    let top = window.scrollY;

    secciones.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            linksNav.forEach(link => {
                link.classList.remove('active');
                document.querySelector('#navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Cerrar menu al scrollear en móvil
    iconoMenu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

