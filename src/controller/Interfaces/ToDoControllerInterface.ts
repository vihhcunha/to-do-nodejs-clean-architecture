export default interface ToDoControllerInterface {
    getToDo(params);
    getAllToDos();
    addToDo(body);
    setToDoAsDone(params);
}