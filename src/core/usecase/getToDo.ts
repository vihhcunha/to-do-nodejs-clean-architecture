import ToDo from "../entity/ToDo";
import ToDoRepository from "../repository/ToDoRepository";

export default class GetToDo{
    toDoRepository: ToDoRepository;
    
    constructor(toDoRepository: ToDoRepository){
        this.toDoRepository = toDoRepository;
    }

    async executeById(id: number): Promise<ToDo> {
        return await this.toDoRepository.getToDo(id);
    }

    async executeByName(name: string): Promise<ToDo> {
        return await this.toDoRepository.getToDoByName(name);
    }
}