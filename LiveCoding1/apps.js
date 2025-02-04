
function comparativa(word, arrayString) {
    /*filter()devuelve un uno array con los elementos que cumplan la condicion 
    que es este caso es que sean mayores que la langitud de la palabra */
    return arrayString.filter(item => item.length > word.length);
}

//Segunda funcion 
function enlistarArray(wordsArray) {
    // Seleccionar el elemento <ul> en el HTML
    const listaElementos = document.getElementById("wordList");

    // Limpiar la lista antes de agregar nuevos elementos
    listaElementos.innerHTML = "";

    // Recorrer el array y agregar cada palabra como un <li>
    wordsArray.forEach(word => {
        const listItem = document.createElement("li"); // Crear un <li>
        listItem.textContent = word; // Agregar el texto de la palabra
        listaElementos.appendChild(listItem); // Agregar el <li> a la <ul>
    });
}

//Creamos el array de strings 
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
//Guardamos el array resultante de la primera funcion para la segunda función 
const palabrasFiltradas = comparativa('kemble', myArray);
enlistarArray(palabrasFiltradas);

//Con otros datos 
const myArray1 = ['computadoras', ' fresas', 'mangos', 'reptil', 'mosca', 'escritorio'];

const palabrasFiltradas2 = comparativa('Monroy', myArray1);
enlistarArray(palabrasFiltradas2);