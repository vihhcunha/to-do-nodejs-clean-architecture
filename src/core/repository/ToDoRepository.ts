import ToDo from "../entity/ToDo";

export default interface ToDoRepository{
    getToDo(id: number): Promise<ToDo>;
    getToDoByName(name: string): Promise<ToDo>;
    saveToDo(name: string, description: string, finishDate: Date): void;
    getToDos(): Promise<ToDo[]>
    updateToDo(id: number, name: string, description: string, finishDate: Date, done: boolean)
}