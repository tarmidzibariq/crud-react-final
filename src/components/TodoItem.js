const TodoItem = ({ todo, setRefresh }) => {

  const updateTodo = () => {
    if (todo.done) {
      todo.done = false;
    } else {
      todo.done = true;
    }

    fetch("http://localhost:8000/todos/" + todo.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(todo)
    }).then(() => {
      console.log("Data successfully updated.")
      setRefresh(true)
    })
  },

  deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: 'DELETE',

    }).then(() => { 
      console.log("Data successfully deleted.")
      setRefresh(true);
    })
  }
  return (
    <li className={`${todo.done ? "checked" : ""}`}> 
      <div onClick={updateTodo}>{todo.title} </div>
      <span className="close" onClick={deleteTodo}>x</span>
    </li>
  );
};

export default TodoItem;