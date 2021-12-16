import React from 'react'

function TaskItem(item, index) {
  return (
    <li className="w-100 mb-4">
      <h5 className="mb-2 ml-3">
        <span className="mr-1">
          Task {index + 1}. {item.content}
        </span>{' '}
        (<strong>{item.amount}ETH</strong>)
      </h5>
      <div className="w-100 d-flex align-items-center">
        <div className="d-flex align-items-center gap-3 flex-grow-1">
          <input
            type="text"
            className="form-control-sm w-100"
            name="reply-name"
            placeholder="Your discord ID as thanhhoa214#1239"
            value={item.content}
            onChange={e => {}}
          />
          <button className="btn btn-dark flex-shrink-0" onClick={() => {}}>
            Verify
          </button>
        </div>
      </div>
    </li>
  )
}

export default TaskItem
