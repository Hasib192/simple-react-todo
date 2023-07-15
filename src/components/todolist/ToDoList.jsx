const ToDoList = ({ list, count, setCount, deleteTodo }) => {
  return (
    <div>
      {list?.length > 0 ? (
        <ol className="list-group list-group-numbered">
          {list.map((item, index) => {
            return (
              <>
                <li className="list-group-item" key={index}>
                  {item}
                  <button
                    type="button"
                    className="btn-close float-end"
                    onClick={() => {
                      deleteTodo(item);
                    }}
                  ></button>
                </li>
              </>
            );
          })}
        </ol>
      ) : (
        <p className="text-center text-capitalize h5 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">No Task</p>
      )}
    </div>
  );
};

export default ToDoList;
