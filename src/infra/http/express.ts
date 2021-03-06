import * as express from "express";
import { injectable, inject } from "inversify";
import { httpGet, interfaces, controller, requestParam, response, request, httpPost, httpPatch } from "inversify-express-utils";
import ToDoControllerInterface from "../../controller/Interfaces/ToDoControllerInterface";
import { TYPES } from "../DI/Types";
import "reflect-metadata";

@controller('/to-do')
export class ToDoExpressController implements interfaces.Controller {

    private _toDoController: ToDoControllerInterface;

    constructor(@inject(TYPES.ToDoControllerInterface) toDoController: ToDoControllerInterface) {
        this._toDoController = toDoController;
    }

    @httpGet("/:id")
    public getToDo(@request() req: express.Request, @response() res: express.Response) {
        return this._toDoController.getToDo(req.params);
    }

    @httpGet("")
    public getAllToDos(@request() req: express.Request, @response() res: express.Response) {
        return this._toDoController.getAllToDos();
    }

    @httpPost("")
    public addToDo(@request() req: express.Request, @response() res: express.Response) {
        return this._toDoController.addToDo(req.body);
    }

    @httpPatch("/:id")
    public setToDoAsDone(@request() req: express.Request, @response() res: express.Response) {
        return this._toDoController.setToDoAsDone(req.params);
    }
}