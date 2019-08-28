let input = document.getElementById('task');
let taskList = document.querySelector('.collection');
class Task{
  constructor(name){
    this.name = name;
  }
}

class TodoList{
  constructor(){
    this.list = [];
  }
  addList(name){
    var t = new Task(name);
    this.list.push(t);
    this.generateList();

  }
  generateList(){
    let form = document.getElementById('form');
    form.addEventListener('submit',function(e){
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(input.value));
    let link = document.createElement('a');
    taskList.appendChild(li);
    e.preventDefault();
    });
   }
}
var t1 = new TodoList();
console.log(t1);


