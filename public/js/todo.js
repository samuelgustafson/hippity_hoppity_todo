// factory function
function creatTodo(task, date, category){
  var  todo = {};
  todo.task = task; //setting the properties
  todo.date = date;
  todo.category = category;
  return todo;
}
