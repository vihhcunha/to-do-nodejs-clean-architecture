import { Container } from "inversify";
import ToDoRepository from "../src/core/repository/ToDoRepository";
import GetAllToDo from "../src/core/usecase/GetAllToDo";
import GetToDo from "../src/core/usecase/GetToDo";
import NewToDo from "../src/core/usecase/NewToDo";
import containerModule from "../src/infra/DI/ContainerModules";
import ContainerModules from "../src/infra/DI/ContainerModules";
import { TYPES } from "../src/infra/DI/Types";



test('Should add to do', async function(){
    let container = new Container();
    await container.loadAsync(containerModule);

    var repository = container.get<ToDoRepository>(TYPES.ToDoRepository);
    const newToDo = new NewToDo(repository);
    await newToDo.execute("Test", "Test Description", new Date());

    var getToDo = new GetToDo(repository);
    var toDo = await getToDo.executeByName("Test");

    expect(toDo.name).toBe("Test");
});

test('Should get all toDos', async function(){
    const container = new Container();
    await container.loadAsync(containerModule);

    const getAllToDos = new GetAllToDo(container.get<ToDoRepository>(TYPES.ToDoRepository));
    var toDos = await getAllToDos.execute();

    expect(toDos).toBeInstanceOf(Array);
    expect(toDos.length).toBeGreaterThan(0);
});