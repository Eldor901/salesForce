import { LightningElement, track } from "lwc";

export default class TodoList extends LightningElement {
    @track
    todos = [
        { id: 1, name: "article 1", description: "description 1" },
        { id: 2, name: "article 2", description: "description 2" }
    ];

    handleClick() {
        this.todos.push({
            id: this.todos.length + 1,
            name: "article " + (this.todos.length + 1),
            description: "description " + (this.todos.length + 1)
        });
    }

    handleDelete(event) {
        const id = event.target.name;

        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}
