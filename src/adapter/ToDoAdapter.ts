import ToDo from "../core/entity/ToDo";

export default class ToDoAdapter {

    static create(name: string, description: string, finishDate: Date, done: boolean = false): ToDo {
        return new ToDo(name, description, finishDate, done);
    }
}