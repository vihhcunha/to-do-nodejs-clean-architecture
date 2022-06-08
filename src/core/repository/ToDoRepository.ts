import ToDo from "../entity/ToDo";

export default interface ToDoRepository{
    getToDo(id: string): Promise<ToDo>;
    getToDoByName(name: string): Promise<ToDo>;
    saveToDo(name: string, description: string, finishDate: Date): void;
    getToDos(): Promise<ToDo[]>
}