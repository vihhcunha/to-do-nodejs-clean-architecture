import { AsyncContainerModule, ContainerModule, interfaces } from "inversify";
import ToDoControllerInterface from "../../controller/Interfaces/ToDoControllerInterface";
import ToDoController from "../../controller/ToDoController";
import ToDoRepository from "../../core/repository/ToDoRepository";
import SQLiteContext from "../database/SqliteContext";
import SQLiteDatabaseBuilder from "../database/SqliteDatabaseBuilder";
import ToDoRepositoryMemory from "../repository/ToDoRepositoryMemory";
import { TYPES } from "../DI/Types";

const containerModule = new AsyncContainerModule(async (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    const sqliteContext = await SQLiteDatabaseBuilder.createAsync();
    bind<SQLiteContext>(TYPES.SQLiteContext).toConstantValue(sqliteContext);
    bind<ToDoRepository>(TYPES.ToDoRepository).to(ToDoRepositoryMemory);
    bind<ToDoControllerInterface>(TYPES.ToDoControllerInterface).to(ToDoController);
});

export default containerModule;