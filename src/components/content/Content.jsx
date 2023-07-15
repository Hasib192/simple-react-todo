const Content = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Add Task" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button className="btn btn-outline-secondary add-button" type="button" id="button-addon2" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default Content;
