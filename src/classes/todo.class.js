
export class Todo {

    // crear la instancia de los objetos que vienen del local storage
    // desestructuro el objeto
    static fromJson({ id, tarea, completado, creado }) {

        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;

        // una forma de generar un id
        this.id         = new Date().getTime(); // 12836871263
        this.completado = false;
        this.creado     = new Date();

    }

    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }

}