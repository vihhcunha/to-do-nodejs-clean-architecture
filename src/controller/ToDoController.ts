import GetToDo from "../core/usecase/GetToDo";
import SQLiteContext from "../infra/database/SqliteContext";
import ToDoRepositoryMemory from "../infra/repository/ToDoRepositoryMemory";

export default class ToDoController {
    static async getToDo(params, body) {
        var sqliteContext = await SQLiteContext.createAsync();
        const toDoRepositoryMemory = new ToDoRepositoryMemory(sqliteContext);
        const getToDo = new GetToDo(toDoRepositoryMemory);
        const toDo = await getToDo.executeById(params.id);
        return toDo;
    }
}