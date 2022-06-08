import ToDo from "../entity/ToDo";
import ToDoRepository from "../repository/ToDoRepository";

export default class NewToDo {

    toDoRepository: ToDoRepository;

    constructor(toDoRepository: ToDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    async execute(name: string, description: string, finishDate: Date): Promise<void> {
        let toDo = new ToDo(name, description, finishDate);
        await this.toDoRepository.saveToDo(toDo.name, toDo.description, toDo.finishDate);
    }
}