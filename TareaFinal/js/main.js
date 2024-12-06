//cargando arreglo de imagenes
const ver = [ "img/productos/laptop.png", "img/productos/laptop1.png", "img/productos/laptop2.png"]
const ver1 = [ "img/productos/modem.png", "img/productos/modem1.png"]
const ver2 = [ "img/productos/sonido.jpg", "img/productos/sonido1.png"]
const ver3 = [ "img/productos/reloj.png", "img/productos/reloj1.png"]
const ver4 = [ "img/productos/PS5.jpg", "img/productos/PS51.jpg"]

const preciover = ["Laptop Marca Samnsug","Bs. ", 3500];
const preciover1 = ["Modem Marca Infinitu","Bs. ", 350];
const preciover2 = ["Radio Marca LG","Bs. ", 1500];
const preciover3 = ["Reloj Marca Citizen","Bs. ", 2800];
const preciover4 = ["Play Station 5","Bs. ",5500];

let Index = 0;
let item = 0;
var producto = "";
var moneda = " Bs ";
let precio = 0;
let total = 0;

const imagen = document.getElementById("modalimagen");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

mostrar();
function mostrar() {

    if (pd == 0) {
        imagen.src = ver[Index];
        producto = preciover[0];
        precio = preciover[2];
        document.getElementById("marca").innerHTML=preciover[0];
        document.getElementById("precio").innerHTML="Bs. "+preciover[2];
        anterior.disabled = Index === 0;
        siguiente.disabled = Index === ver.length - 1;
    } else {
        if (pd == 1) {
            imagen.src = ver1[Index];
            producto = preciover1[0];
            precio = preciover1[2]
            document.getElementById("marca").innerHTML=preciover1[0];
            document.getElementById("precio").innerHTML="Bs. "+preciover1[2];
            anterior.disabled = Index === 0;
            siguiente.disabled = Index === ver1.length - 1;
        } else {
            if (pd == 2) {
                imagen.src = ver2[Index];
                producto = preciover2[0];
                precio = preciover2[2]
                document.getElementById("marca").innerHTML=preciover2[0];
                document.getElementById("precio").innerHTML="Bs. "+preciover2[2];
                anterior.disabled = Index === 0;
                siguiente.disabled = Index === ver2.length - 1;
            } else {
                if (pd == 3) {
                    imagen.src = ver3[Index];
                    producto = preciover3[0];
                    precio = preciover3[2]
                    document.getElementById("marca").innerHTML=preciover3[0];
                    document.getElementById("precio").innerHTML="Bs. "+preciover3[2];
                    anterior.disabled = Index === 0;
                    siguiente.disabled = Index === ver3.length - 1;
                } else {
                    if(pd==4){
                        imagen.src = ver4[Index];
                        producto = preciover4[0];
                        precio = preciover4[2]
                        document.getElementById("marca").innerHTML=preciover4[0];
                        document.getElementById("precio").innerHTML="Bs. "+preciover4[2];
                        anterior.disabled = Index === 0;
                        siguiente.disabled = Index === ver4.length - 1;
                    }  
                }
            }
        }
    }
}

anterior.addEventListener("click", () => {
    if (Index > 0) {
        Index--;
        mostrar();
    }
});

siguiente.addEventListener("click", () => {
    if (Index < 3) {
        Index++;
        mostrar();
    }
});

const openModal = document.querySelector('.img-ver');
const openModal1 = document.querySelector('.img-ver1');
const openModal2 = document.querySelector('.img-ver2');
const openModal3 = document.querySelector('.img-ver3');
const openModal4 = document.querySelector('.img-ver4');

const modal = document.querySelector('.modal');
const compra = document.querySelector('.modal-comprar');
const closeModal = document.querySelector('.modal-volver');
var pd;

openModal.addEventListener('click', (e) => {
    pd = 0;
    Index = 0;
    e.preventDefault();
    modal.classList.add('modal-show');
    mostrar();
});

openModal1.addEventListener('click', (e) => {
    pd = 1;
    Index = 0;
    e.preventDefault();
    modal.classList.add('modal-show');
    mostrar();
});

openModal2.addEventListener('click', (e) => {
    pd = 2;
    Index = 0;
    e.preventDefault();
    modal.classList.add('modal-show');
    mostrar();
});

openModal3.addEventListener('click', (e) => {
    pd = 3;
    Index = 0;
    e.preventDefault();
    modal.classList.add('modal-show');
    mostrar();
});

openModal4.addEventListener('click', (e) => {
    pd = 4;
    Index = 0;
    e.preventDefault();
    modal.classList.add('modal-show');
    mostrar();
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
});

let valores = [];
let carrito = [];


compra.addEventListener('click', (e) => {
    e.preventDefault();
    alert('comprado');
    
    valores=[producto,moneda,precio];
    carrito[item]=valores;
    //console.log(carrito[item]);
    item++;
    total=total+precio;

    modal.classList.remove('modal-show');
    mostrarcarrito();

});

// agranda haciendo click

function mostrarcarrito() {
    
    let tabla='<table>';
    tabla= tabla+'<tr> <th>Producto y Precio </tr>';
    carrito.forEach(c =>{
        tabla=tabla+'<tr>';
        tabla=tabla+'<td>'+c+'</td>';
        tabla=tabla+'</tr>';
        
        console.log(c);
    }); 
    tabla= tabla+'<tr><th>'+"Total = Bs. "+total+'</th></tr>';
    document.getElementById('lista').innerHTML=tabla;
    tabla= tabla+'</table>';
}

// funcion enviar 
function enviarblog(){
    alert('mensaje enviado');
}

