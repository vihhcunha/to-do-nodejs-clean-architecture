import GetAllToDo from "../src/core/usecase/getAllToDo";
import GetToDo from "../src/core/usecase/getToDo";
import NewToDo from "../src/core/usecase/NewToDo";
import SQLiteContext from "../src/infra/database/SqliteContext";
import ToDoRepositoryMemory from "../src/infra/repository/ToDoRepositoryMemory";

test('Should add to do', async function(){
    const toDoRepositoryMemory = new ToDoRepositoryMemory(await SQLiteContext.createAsync());

    const newToDo = new NewToDo(toDoRepositoryMemory);
    await newToDo.execute("Test", "Test Description", new Date());

    var getToDo = new GetToDo(toDoRepositoryMemory);
    var toDo = await getToDo.executeByName("Test");

    expect(toDo.name).toBe("Test");
});

test('Should get all toDos', async function(){
    const toDoRepositoryMemory = new ToDoRepositoryMemory(await SQLiteContext.createAsync());

    const getAllToDos = new GetAllToDo(toDoRepositoryMemory);
    var toDos = await getAllToDos.execute();

    expect(toDos).toBeInstanceOf(Array);
    expect(toDos.length).toBeGreaterThan(0);
});