export default class ToDo {
    id: string = "";
    name: string;
    description: string;
    finishDate: Date;
    done: boolean;

    constructor(name: string, description: string, finishDate: Date, done: boolean = false) {
        this.name = name;
        this.description = description;
        this.finishDate = finishDate;
        this.done = done;

        this.validate();
    }

    validate() {
        if(this.name == null || this.name == "") {
            throw new Error("To do name is empty.");
        }
    }
}