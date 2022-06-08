import ToDoRepository from "../repository/ToDoRepository";

export default class GetAllToDo{
    toDoRepository: ToDoRepository;
    
    constructor(toDoRepository: ToDoRepository){
        this.toDoRepository = toDoRepository;
    }

    async execute(){
        return await this.toDoRepository.getToDos();
    }
}