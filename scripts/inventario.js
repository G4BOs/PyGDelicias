document.addEventListener("DOMContentLoaded", function () {
    // Datos de la galería (puedes obtener estos datos de tu backend o de alguna fuente de datos)
    const galeriaData = [
      { nombre: "hamburguesa", imagen: "img/hambur.jpg", cantidad: 5 },
      { nombre: "Empanada", imagen: "img/empanada.jpg", cantidad: 8 },
      { nombre: "Alfajor", imagen: "img/alfajor.jpg", cantidad: 3 },
      { nombre: "Media Luna", imagen: "img/mediaLuna.jpg", cantidad: 3 },
      { nombre: "Lomito Arabe", imagen: "img/lomitoArabe.jpg", cantidad: 3 },
      { nombre: "Cupcake", imagen: "img/cupkape.jpg", cantidad: 3 },
      { nombre: "Pizza", imagen: "img/pizza.jpg", cantidad: 3 },
      { nombre: "Tarta Dulce", imagen: "img/tarta.jpg", cantidad: 3 },
      { nombre: "Tarta Salada", imagen: "img/tartaSalada.jpg", cantidad: 3 },
      { nombre: "Pionono", imagen: "img/pionono.jpg", cantidad: 3 },
      { nombre: "Pastel", imagen: "img/pastel.jpg", cantidad: 3 },
      { nombre: "Sanwich de Lomito", imagen: "img/sawichLomito.jpg", cantidad: 3 },
      // Agrega más objetos según sea necesario
    ];

    // Obtén el contenedor de la galería
    const galeriaContainer = document.getElementById("galeria");

    // Recorre los datos y crea dinámicamente los elementos HTML
    galeriaData.forEach((item) => {
        console.log(item)
      // Crea un nuevo div para cada elemento
      const nuevoDiv = document.createElement("div");

      // Agrega el nombre
      const nombreElemento = document.createElement("h3");
      nombreElemento.textContent = item.nombre;

      // Agrega la imagen
      const imagenElemento = document.createElement("img");
      imagenElemento.className = "alimento";
      imagenElemento.src = item.imagen;

      // Agrega la cantidad
      const cantidadElemento = document.createElement("h3");
      cantidadElemento.textContent = `Cantidad: ${item.cantidad}`;

      // Agrega los elementos al nuevo div
      nuevoDiv.appendChild(nombreElemento);
      nuevoDiv.appendChild(imagenElemento);
      nuevoDiv.appendChild(cantidadElemento);

      // Agrega el nuevo div al contenedor de la galería
      galeriaContainer.appendChild(nuevoDiv);
    });
  });