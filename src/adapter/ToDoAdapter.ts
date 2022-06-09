import ToDo from "../core/entity/ToDo";

export default class ToDoAdapter {

    static create(id: number, name: string, description: string, finishDate: Date, doneDb: number = 0): ToDo {
        let done = doneDb ? true : false;
        return new ToDo(name, description, finishDate, done, id);
    }
}