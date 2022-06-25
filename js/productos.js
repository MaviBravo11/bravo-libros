// ---------- Crear un id random------------------------------------------------
function crearID() {
    return parseInt(Math.random() * 1000)
}

// ---------- Lista de------------------------------------------------

const baseProductos = [
    { id: crearID(), nombre: 'Ella y su gato', autor: 'SHINKAI, MAKOTO', precio: 2100, stock: 5, img: '/img/020.jpg' },
    { id: crearID(), nombre: 'Morir lo necesario', autor: 'ROEMMERS, ALEJANDRO', precio: 1800, stock: 6, img: '/img/021.jpg' },
    { id: crearID(), nombre: 'Sobrenatural', autor: 'DISPENZA, JOE', precio: 2650, stock: 10, img: '/img/022.jpg' },
    { id: crearID(), nombre: 'Catedrales', autor: 'PIÑEIRO, CLAUDIA', precio: 3099, stock: 16, img: '/img/023.jpg' },
    { id: crearID(), nombre: 'Las mil y una noches', autor: 'ANÓNIMO', precio: 3800, stock: 10, img: '/img/001.jpeg' },
    { id: crearID(), nombre: 'Don Quijote', autor: 'DE CERVANTES, MIGUEL', precio: 3800, stock: 10, img: '/img/002.jpg' },
    { id: crearID(), nombre: 'Orgullo y Prejuicio', autor: 'AUSTEN, JANE', precio: 3800, stock: 10, img: '/img/003.png' },
    { id: crearID(), nombre: 'Moby Dick', autor: 'MELVILLE, HERMAN', precio: 10000, stock: 10, img: '/img/004.jpg' },
    { id: crearID(), nombre: 'Crimen y Castigo', autor: 'DOSTOYEVSKY, FIÓDOR', precio: 2100, stock: 10, img: '/img/005.jpg' },
    { id: crearID(), nombre: 'Mujercitas', autor: 'MAY ALCOTT, LOUISA', precio: 3000, stock: 10, img: '/img/006.jpg' },
    { id: crearID(), nombre: 'La Metamorfosis', autor: 'KAFKA, FRANZ', precio: 8200, stock: 10, img: '/img/007.jpg' },
    { id: crearID(), nombre: 'Poeta Chileno', autor: 'ZAMBRA, ALEJANDRO', precio: 4800, stock: 10, img: '/img/011.jpg' },
    { id: crearID(), nombre: 'La Tregua', autor: 'BENEDETTI, MARIO', precio: 7800, stock: 10, img: '/img/012.jpg' },
    { id: crearID(), nombre: 'Un mundo feliz', autor: 'HUXLEY, ALDOUS', precio: 7700, stock: 10, img: '/img/013.jpg' },
    { id: crearID(), nombre: 'El Proceso', autor: 'KAFKA, FRANZ', precio: 1520, stock: 10, img: '/img/014.jpg' },
    { id: crearID(), nombre: 'Rebelion en la granja', autor: 'ORWELL, GEORGE', precio: 990, stock: 10, img: '/img/015.jpg' },
    { id: crearID(), nombre: 'Nuestra parte de noche', autor: 'ENRIQUEZ, MARIANA', precio: 2290, stock: 3, img: '/img/016.jpg' },
    { id: crearID(), nombre: 'El funcionamiento general del mundo', autor: 'SACHERI, EDUARDO', precio: 1800, stock: 20, img: '/img/017.jpg' },
    { id: crearID(), nombre: 'Soy una tonta por quererte', autor: 'SOSA VILLADA, CAMILAl', precio: 2200, stock: 4, img: '/img/018.jpg' },
    { id: crearID(), nombre: 'Al final mueren los dos', autor: 'SILVERA, ADAM', precio: 3100, stock: 4, img: '/img/019.jpg' },
]


