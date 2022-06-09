import { inject, injectable } from "inversify";
import ToDoRepository from "../core/repository/ToDoRepository";
import GetToDo from "../core/usecase/GetToDo";
import "reflect-metadata";
import { TYPES } from "../infra/DI/Types";
import ToDoControllerInterface from "./Interfaces/ToDoControllerInterface";
import GetAllToDo from "../core/usecase/GetAllToDo";
import NewToDo from "../core/usecase/NewToDo";
import SetToDoAsDone from "../core/usecase/SetToDoAsDone";

@injectable()
export default class ToDoController implements ToDoControllerInterface {

    toDoRepository: ToDoRepository;

    constructor(@inject(TYPES.ToDoRepository)toDoRepository: ToDoRepository){
        this.toDoRepository = toDoRepository;
    }
    
    public async getToDo(params) {
        const getToDo = new GetToDo(this.toDoRepository);
        const toDo = await getToDo.executeById(params.id);
        return toDo;
    }
    
    public async getAllToDos() {
        const getToDo = new GetAllToDo(this.toDoRepository);
        const toDos = await getToDo.execute();
        return toDos;
    }

    public async addToDo(body: any) {
        const newToDo = new NewToDo(this.toDoRepository);
        await newToDo.execute(body.name, body.description, body.finishDate);
    }

    public async setToDoAsDone(params: any) {
        const setToDoAsDone = new SetToDoAsDone(this.toDoRepository);
        return await setToDoAsDone.execute(params.id);
    }
}