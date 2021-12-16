import React from 'react'
import data from './data'
import PostItem from './PostItem'
import TaskItem from './TaskItem'

const LeftInfoVotingComponent = item => (
  <div className="bid space-x-10">
    <div className="icon">
      <img src="img/icons/ETH.svg" alt="..." />
    </div>
    <div>
      <p className="color_text txt_xs">TOTAL REWARD</p>
      <span className="txt_sm">
        {item.tasks.map(({ amount }) => amount).reduce((acc, cur) => acc + cur)} ETH
      </span>
    </div>
  </div>
)

const BodyComponent = item => {
  return (
    <>
      <div className="px-3">
        <ul>{item.tasks.map(TaskItem)}</ul>
      </div>
      <div className="hr"></div>
    </>
  )
}
function TaskPostList() {
  return (
    <div className="space-y-20">
      {data.taskCard.map(item =>
        PostItem({
          item,
          rightInfoTitle: 'TASKS END',
          leftInfoComponent: LeftInfoVotingComponent,
          bodyComponent: BodyComponent
        })
      )}
    </div>
  )
}

export default TaskPostList
