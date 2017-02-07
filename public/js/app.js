var todoApp = {
  todos: [], //our data source/store
  init: function (){
    todoApp.cacheDom();
    todoApp.addEventListeners();
    todoApp.render();
  },
  cacheDom: function(){
    todoApp.createButton = document.querySelector('#create');
    todoApp.taskInput = document.querySelector('#task');
    todoApp.categoryInput = document.querySelector('#category');
    todoApp.dateInput = document.querySelector('#date');
    todoApp.list = document.querySelector('#list');
    console.log(todoApp);
  },
  render: function(){
   var listItemsFromTodos = todoApp.todos
                                .map(function(todo){
                                  console.log(todo);
                                 return '<li>${todo.task}: (${todo.date}) [${todo.category}]
                                 </li>';
   })
   .join('');
   todoApp.list.innerHTML =listItemsFromTodos;
   },
  addEventListeners: function(){
    todoApp.createButton.addEventListener('click', todoApp.addTodo);
  },
  addTodo: function(){
    var taskValue = todoApp.taskInput.value; //specific to input field
    todoApp.todos.push(taskValue);
    todoApp.render();
  }
  };
  //console.log(todoApp);
  todoApp.init();
  //console.log(todoApp);
