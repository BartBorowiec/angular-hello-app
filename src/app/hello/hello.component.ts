import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  nazwa: string = "Bartek";
  counter: number = 0;
  todoItem: string = "";
  lastId: number = 2;
  items = [
    {id: 1, name: "Wynieść śmieci"},
    {id: 2, name: "Pójść do sklepu"}
  ];
  constructor() { }
  ngOnInit(): void { }
  incrementCounter() {
    this.counter++;
    console.log(this.counter);
  }
  decrementCounter() {
    this.counter--;
  }
  addItem() {
    if (!this.todoItem) return;
    const item = {id: ++this.lastId, name: this.todoItem};
    this.items.push(item);
    this.todoItem = "";
  }

  deleteItem(id: number) {
    const index = this.items.findIndex(obj => obj.id == id);
    if(index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
