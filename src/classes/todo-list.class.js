import { Todo } from './todo.class';

export class TodoList {

    constructor(indice) {
        this.indice = indice;
        // this.todos = [];
        this.cargarLocalStorage();
    }


    nuevoTodo( todo ) {
        if(this.indice == 0){
            this.todos.push( todo );
            this.guardarLocalStorage();
        } else {
            this.todos1.push( todo );
            this.guardarLocalStorage();
        }
    }


    eliminarTodo( id ) {
        if(this.indice == 0){
            this.todos = this.todos.filter( todo => todo.id != id )
            this.guardarLocalStorage();
        } else {
            this.todos1 = this.todos1.filter( todo => todo.id != id )
            this.guardarLocalStorage();
        }
    }


    marcarCompletado( id ) { 
        if(this.indice == 0){
            for( const todo of this.todos ) {
                if( todo.id == id ) {
                    todo.completado = !todo.completado;
                    this.guardarLocalStorage();
                    break;
                }
            }
        } else {
            for( const todo of this.todos1 ) {
                if( todo.id == id ) {
                    todo.completado = !todo.completado;
                    this.guardarLocalStorage();
                    break;
                }
            }
        }
    }


    eliminarCompletados() {
        if(this.indice == 0){
            this.todos = this.todos.filter( todo => !todo.completado )
            this.guardarLocalStorage();
        } else {
            this.todos1 = this.todos1.filter( todo => !todo.completado )
            this.guardarLocalStorage();
        }
    }


    guardarLocalStorage(){
        // JSON.stringify: transforma los datos a un json string 
        // para poder ser enviados a traves del navegador
        this.indice == 0
            ? localStorage.setItem('todo', JSON.stringify( this.todos ) )
            : localStorage.setItem('todo1', JSON.stringify( this.todos1 ) );
    }


    cargarLocalStorage(){
        if(this.indice == 0){
            this.todos = ( localStorage.getItem('todo') )
                            ? JSON.parse( localStorage.getItem('todo') )
                            : [];
            
            this.todos = this.todos.map( Todo.fromJson );
            // this.todos = this.todos.map( obj => Todo.fromJson(obj) );
        } else {
            this.todos1 = ( localStorage.getItem('todo1') )
                            ? JSON.parse( localStorage.getItem('todo1') )
                            : [];
            
            this.todos1 = this.todos1.map( Todo.fromJson );
        }
    }

}