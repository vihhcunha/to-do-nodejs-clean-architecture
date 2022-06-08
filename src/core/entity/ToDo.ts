export default class ToDo {
    id: number;
    name: string;
    description: string;
    finishDate: Date;
    done: boolean;

    constructor(name: string, description: string, finishDate: Date, done: boolean = false, id: number = 0) {
        this.name = name;
        this.description = description;
        this.finishDate = finishDate;
        this.done = done;
        this.id = id;

        this.validate();
    }

    validate() {
        if(this.name == null || this.name == "") {
            throw new Error("To do name is empty.");
        }
    }

    setAsDone() {
        this.done = true;
    }
}