import './styles.css';

// se importan las clases desde un mismo archivo, por defecto en la
// carpeta classes va buscar el index.js
import { Todo, TodoList } from './classes';

import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//. todoList.todos.forEach( todo => crearTodoHtml(todo) );
// es lo mismo que hacer:
// si solo se tiene un argumento y ese mismo se pasa como argumento
// del callback, se puede acortar de la siguiente manera
todoList.todos.forEach( todo => crearTodoHtml(todo, 0) );

console.log( 'todos', todoList.todos );