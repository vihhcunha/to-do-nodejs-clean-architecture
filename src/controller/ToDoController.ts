import { inject, injectable } from "inversify";
import ToDoRepository from "../core/repository/ToDoRepository";
import GetToDo from "../core/usecase/GetToDo";
import "reflect-metadata";
import { TYPES } from "../infra/DI/Types";
import ToDoControllerInterface from "./Interfaces/ToDoControllerInterface";

@injectable()
export default class ToDoController implements ToDoControllerInterface {

    toDoRepository: ToDoRepository;

    constructor(@inject(TYPES.ToDoRepository)toDoRepository: ToDoRepository){
        this.toDoRepository = toDoRepository;
    }

    public async getToDo(params, body) {
        const getToDo = new GetToDo(this.toDoRepository);
        const toDo = await getToDo.executeById(params.id);
        return toDo;
    }
}