import ToDo from "../entity/ToDo";
import ToDoRepository from "../repository/ToDoRepository";

export default class SetToDoAsDone {
    toDoRepository: ToDoRepository;

    constructor(toDoRepository: ToDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    async execute(id: number): Promise<ToDo> {
        var toDo = await this.toDoRepository.getToDo(id);
        toDo.setAsDone();
        await this.toDoRepository.updateToDo(id, toDo.name, toDo.description, toDo.finishDate, toDo.done);
        return toDo;
    }
}