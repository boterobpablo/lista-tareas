import { Todo } from '../classes';
import { todoListPri } from '../index';


// Referencias en el HTML
const divTodoList   = document.querySelectorAll('.todo-list');
const txtInput      = document.querySelectorAll('.new-todo');
const btnBorrar     = document.querySelectorAll('.clear-completed');
const ulFiltros     = document.querySelectorAll('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

console.log(anchorFiltros);

// crear la insercion de la tarea en el html
export const crearTodoHtml = ( todo, indice ) => {

    const htmlTodo = `
    <li class="${  (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${  (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    
    // para insertar solo el primer hijo, en este caso, la
    // etiqueta li, no incluiria el div
    indice == 0 
        ? divTodoList[0].append( div.firstElementChild )
        : divTodoList[1].append( div.firstElementChild );

    return div.firstElementChild;
}


// EVENTOS

// keyup, cuando la persona suelta la tecla
// crear el nuevo todo a partir del input
const eventoEnter = (i) => {
    txtInput[i].addEventListener('keyup', ( event ) => {

    // si se presiona la tecla enter
    if ( event.keyCode === 13 && txtInput[i].value.length > 0 ) {

        console.log(txtInput[i].value);
        const nuevoTodo = new Todo( txtInput[i].value );
        todoListPri.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo, i );
        txtInput[i].value = '';
    }
})};
eventoEnter(0);
// eventoEnter(1);


// marcar como completado o eliminar todo
// click, cuando se hace click en el elemento
const eventoMarcarCompletado = (i) => {
    divTodoList[i].addEventListener('click', (event) => {

    // para saber a q parte del elmeento se le dio click
    // si al input, label o button
    const nombreElemento = event.target.localName;

    // para sacar la refererncia al li
    const todoElemento   = event.target.parentElement.parentElement;

    // obtener el id del elemento
    const todoId         = todoElemento.getAttribute('data-id');

    if (  nombreElemento.includes('input') ){ // click en el check 
        todoListPri.marcarCompletado( todoId );

        // quitar o poner una clase en el elemento
        todoElemento.classList.toggle('completed');

    } else if( nombreElemento.includes('button') ) { // hay que borrar el todo

        todoListPri.eliminarTodo( todoId );
        divTodoList[i].removeChild( todoElemento );
    }
})};
eventoMarcarCompletado(0);
// eventoMarcarCompletado(1);


// evento de eliminar completados
const eventoBorrar = (j) => {
    btnBorrar[j].addEventListener('click', () => {

    todoListPri.eliminarCompletados();

    for( let i = divTodoList[j].children.length-1; i >= 0; i-- ) {

        const elemento = divTodoList[j].children[i];

        if( elemento.classList.contains('completed') ){
            divTodoList[j].removeChild(elemento);
        }
    }
})};
eventoBorrar(0);
// eventoBorrar(1);


// evento para filtrar la lista
const eventoFiltrar = (i) => {
    ulFiltros[i].addEventListener('click', (event) => {

    const filtro = event.target.text;
    if( !filtro ){ return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');

    for( const elemento of divTodoList[i].children ) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
})};
eventoFiltrar(0);
// eventoFiltrar(1);