const TodoControls = ({ onAddTodo }) => {
    return (
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => onAddTodo(0)}
          className="p-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Add Todo
        </button>
  
        <button
          onClick={() => onAddTodo(2000)}
          className="p-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Add After 2s
        </button>
  
        <button
          onClick={() => onAddTodo(5000)}
          className="p-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Add After 5s
        </button>
      </div>
    );
  };
  
  export default TodoControls;
  