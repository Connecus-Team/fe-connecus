const TaskForm = ({tasks, totalToken, setTotalToken, handleInputTask, handleClickAddTask, handleRemoveTask}) => {
  return (
    <div className="create-post-task">
      <div className="mb-20">
        <p >Total Token</p>
        <input
          type="number"
          className="form-control"
          name="funding-number"
          placeholder="Total token $"
          value={totalToken}
          onChange={(e) => setTotalToken(e.target.value)}
        />
      </div>
      <div className="d-flex w-100 gap-4">
        <ul className="w-100">
          {tasks.length !== 0 &&
            tasks.map((task, idx) => {
              return (
                <li className="d-flex gap-3" key={idx}>
                  <div className="form-group w-75">
                    <p>Task {idx}</p>
                    <input
                      type="text"
                      className="form-control"
                      name="reply-name"
                      placeholder="Task name"
                      value={task.content}
                      onChange={(e) => handleInputTask(idx, 'content', e.target.value)}
                    />
                  </div>
                  <div className="form-group w-25">
                    <p>Token Amount</p>
                    <input
                      type="number"
                      className="form-control"
                      name="token-amount"
                      placeholder="Amount"
                      value={task.amount}
                      min={0}
                      onChange={(e) => handleInputTask(idx, 'amount', e.target.value)}
                    />
                  </div>
                  <button className="btn close-icon-wrapper" onClick={() => handleRemoveTask(idx)}>
                    <i className="ri-close-fill"></i>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      <button className="btn btn-add w-100" onClick={() => handleClickAddTask()}>
        <i className="ri-add-circle-fill mr-2"></i>
        Add a task
      </button>
    </div>
  );
};

export default TaskForm;
