import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import queryString from 'query-string'
import data from './data'
import FundingPostItem from './FundingPostItem'
import TaskItem from './TaskItem'
import TaskPostItem from './TaskPostItem'
import apis from '../../../apis/apis'
// import web3Selector from '../../../components/header/redux/Web3.Selector';

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
  const [taskPostList, setTaskPostList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { address: tokenAddress } = queryString.parse(window.location.search)
      let params = { tokenAddress }
      const response = await apis.getTask(params)
      const { data } = response
      setTaskPostList(data)
    }
    fetchData()
  }, [])

  return (
    <div className="space-y-20">
      {taskPostList.length !== 0 &&
        taskPostList.map(item =>
          TaskPostItem({
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
