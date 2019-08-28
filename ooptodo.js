let input = document.getElementById('task');
let taskList = document.querySelector('.collection');
class Task {
  constructor(name) {
    this.name = name;
  }
}

class TodoList {
  constructor() {
    this.list = [];
  }
  addList(name) {
    var t = new Task(name);
    this.list.push(t);

    this.generateList();

  }

  removeList(index){

  }

  generateList() {
    //Cleaning up the display
    taskList.innerHTML = ""
    //Generating all the list items
    for (var i = 0; i < this.list.length; i++) {

      let li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(this.list[i].name));
      taskList.appendChild(li);
    }
  }
}
var t1 = new TodoList();
console.log(t1);


let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log("The input value from the form", e.srcElement[0].value)
  t1.addList(e.srcElement[0].value)
})

//     form.addEventListener('submit', function (e) {
//       

//       e.preventDefault();
//     });

t1.generateList();


