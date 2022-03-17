import './styles.css';

// se importan las clases desde un mismo archivo, por defecto en la
// carpeta classes va buscar el index.js
import { Todo, TodoList } from './classes';

import { crearTodoHtml } from './js/componentes';


export const todoListPri = new TodoList();

//. todoList.todos.forEach( todo => crearTodoHtml(todo) );
// es lo mismo que hacer:
// si solo se tiene un argumento y ese mismo se pasa como argumento
// del callback, se puede acortar de la siguiente manera
todoListPri.todos.forEach( todo => crearTodoHtml(todo, 0) );
// todoListPri.todos.forEach( todo => crearTodoHtml(todo, 1) );

console.log( 'todos', todoListPri.todos );