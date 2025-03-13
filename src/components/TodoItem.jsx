const TodoItem = ({ text }) => {
    return (
      <div className="p-2 border rounded-md bg-gray-50 shadow-sm">
        {text}
      </div>
    );
  };
  
  export default TodoItem;
  