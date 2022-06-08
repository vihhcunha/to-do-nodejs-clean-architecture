import ToDoRepository from "../repository/ToDoRepository";

export default class GetToDo{
    toDoRepository: ToDoRepository;
    
    constructor(toDoRepository: ToDoRepository){
        this.toDoRepository = toDoRepository;
    }

    async executeById(id: string){
        return await this.toDoRepository.getToDo(id);
    }

    async executeByName(name: string){
        return await this.toDoRepository.getToDoByName(name);
    }
}