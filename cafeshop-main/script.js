var ingredientes_opcion1 = ['Leche Entera', 'Jarabe','Hielo', 'Salsa de Chocolate', 'Chips de Chocolate', 'Vainilla', 'Polvo de Cacao', 'Crema Batida'];
var ingredientes_opcion2 = ['Leche', 'Jarabe','Hielo', 'Salsa de Chocolate', 'Cobertura de Caramelo', 'Crema Batida', 'Polvo de Vainilla'];
var ingredientes_opcion3 = ['Leche', 'Jarabe','Hielo', 'Salsa Frutilla', 'Trozos de Frutilla', 'Crema Batida', 'Polvo de Vainilla'];
var ingredientes_opcion4 = ['Leche', 'Jarabe','Hielo', 'Salsa Verde', 'Coberturas Especiales', 'Crema Batida', 'Hojas de Te Verde'];

function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("ingredientes")

    if(opcion==1){
        nombre.innerHTML = "Frappé de Chocolate"
        descripcion.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sunt quas officia sapiente? Velit.";
        fotoPrincipal.src = "img/f1.png";
        circulo.style.backgroundColor = "#f88965";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion1.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==2){
        nombre.innerHTML = "Frappé de Vainilla"
        descripcion.innerHTML = "At architecto id, quia, saepe non cum sapiente, est aut aspernatur perferendis dignissimos unde!";
        fotoPrincipal.src = "img/f2.png";
        circulo.style.backgroundColor = "#f1c072";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion2.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion2[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==3){
        nombre.innerHTML = "Frappé de Frutilla"
        descripcion.innerHTML = "Inventore magni voluptatum adipisci harum maiores architecto vero! Vel suscipit tempora pariatur ad, vero facilis ex, quibusdam iusto, asperiores eum laboriosam illum?";
        fotoPrincipal.src = "img/f3.png";
        circulo.style.backgroundColor = "#d46475";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion3.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion3[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==4){
        nombre.innerHTML = "Frappé de Te"
        descripcion.innerHTML = "Inventore magni voluptatum adipisci harum maiores architecto vero! Vel suscipit tempora";
        fotoPrincipal.src = "img/f4.png";
        circulo.style.backgroundColor = "#398969";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion4.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion4[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    
}