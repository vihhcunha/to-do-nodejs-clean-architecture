import Express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ToDoController from "../../controller/ToDoController";

const app = new Express();

app.get("/to-do/:id", ExpressAdapter.create(ToDoController.getToDo));

app.listen(3000);