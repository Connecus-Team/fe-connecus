import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import contractValue from '../../../constants/contract';
import web3Selector from '../../../components/header/redux/Web3.Selector';

const TaskForm = ({title, description, date, file}) => {
  const web3 = useSelector(web3Selector.selectWeb3);
  // task
  const [tasks, setTasks] = useState([{content: '', amount: '0'}]);
  const [totalToken, setTotalToken] = useState(0);

  const handlePost = async () => {
    // if (!title || !description || !date) {
    //   alert('Please Check Enter Data');
    //   return;
    // }
    if (web3 === null) {
      alert('Can\'t connect to wallet');
      return;
    }

    const accounts = await web3.eth.getAccounts();
    const walletAddress = accounts[0]; // TODO Check


    let params = {
      title,
      description,
      date,
      file,
      totalToken,
      tasks,
      walletAddress,
    };
    const response = await apis.postTask(params);
    console.log(response);
    return;

    let contract = new web3.eth.Contract(
        contractValue.ABIContractBuilder,
        contractValue.addressContractBuilder,
    );
  };

  const handleInputTask = (idx, type, value) => {
    const _tasks = Object.assign([], tasks);
    _tasks[idx][type] = value;
    setTasks(_tasks);
  };

  const handleClickAddTask = () => {
    setTasks([...tasks, {content: '', amount: 0}]);
  };

  const handleRemoveTask = (idx) => {
    let _tasks = tasks;
    _tasks[idx] = undefined;
    _tasks = _tasks.filter((i) => i !== undefined);
    setTasks(_tasks);
  };

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
      <button className="btn btn-primary mt-20" onClick={() => handlePost()}>
          Post a task
      </button>
    </div>
  );
};

export default TaskForm;
