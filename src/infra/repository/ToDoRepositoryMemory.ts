import { inject, injectable } from "inversify";
import ToDoAdapter from "../../adapter/ToDoAdapter";
import ToDo from "../../core/entity/ToDo";
import ToDoRepository from "../../core/repository/ToDoRepository";
import SQLiteContext from "../database/SqliteContext";
import { TYPES } from "../DI/Types";
import "reflect-metadata";

@injectable()
export default class ToDoRepositoryMemory implements ToDoRepository {
    sqliteContext: SQLiteContext;

    constructor(@inject(TYPES.SQLiteContext) sqliteContext: SQLiteContext) {
        this.sqliteContext = sqliteContext;
    }

    saveToDo(name: string, description: string, finishDate: Date): void {
        const sql = 'INSERT INTO ToDo (name, description, finishDate, done) VALUES (?, ?, ?, ?)'
        const params = [name, description, finishDate, 0]
        this.sqliteContext.db.run(sql, params);
    }

    updateToDo(id: number, name: string, description: string, finishDate: Date, done: boolean) {
        let doneDb = done ? 1 : 0;
        const sql = 'UPDATE ToDo SET name = ?, description = ?, finishDate = ?, done = ? WHERE id = ?'
        const params = [name, description, finishDate, doneDb, id]
        this.sqliteContext.db.run(sql, params);
    }

    async getToDos(): Promise<ToDo[]> {
        const sql = 'SELECT * FROM ToDo'
        const params: any[] = []
        var results = await this.sqliteContext.db.all(sql, params);

        var toDos: ToDo[] = [];
        results.forEach(toDoData => {
            toDos.push(ToDoAdapter.create(toDoData.id, toDoData.name, toDoData.description, toDoData.finishDate, toDoData.done));
        });

        return toDos;
    }

    async getToDo(id: number): Promise<ToDo> {
        const sql = 'SELECT * FROM ToDo WHERE id = ?'
        const params = [id]
        var results = await this.sqliteContext.db.get(sql, params);

        var toDo = ToDoAdapter.create(results.id, results.name, results.description, results.finishDate, results.done);
        return toDo;
    }

    async getToDoByName(name: string): Promise<ToDo> {
        const sql = 'SELECT * FROM ToDo WHERE name = ?'
        const params = [name]
        var results = await this.sqliteContext.db.get(sql, params);

        var toDo = ToDoAdapter.create(results.id, results.name, results.description, results.finishDate, results.done);
        return toDo;
    }
}