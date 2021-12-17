import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import data from './data';
import FundingPostItem from './FundingPostItem';
import TaskItem from './TaskItem';
import TaskPostItem from './TaskPostItem';
import apis from '../../../apis/apis';
import web3Selector from '../../../components/header/redux/Web3.Selector';


const LeftInfoVotingComponent = (item) => (
  <div className="bid space-x-10">
    <div className="icon">
      <img src="img/icons/ETH.svg" alt="..." />
    </div>
    <div>
      <p className="color_text txt_xs">TOTAL REWARD</p>
      <span className="txt_sm">
        {item.tasks.map(({amount}) => amount).reduce((acc, cur) => acc + cur)} ETH
      </span>
    </div>
  </div>
);

const BodyComponent = (item) => {
  return (
    <>
      <div className="px-3">
        <ul>{item.tasks.map(TaskItem)}</ul>
      </div>
      <div className="hr"></div>
    </>
  );
};
function TaskPostList() {
  const web3 = useSelector(web3Selector.selectWeb3);
  const [taskPostList, setTaskPostList] = useState([]);

  useEffect(() => {
    if (web3 === null) {
      // alert('Can\'t connect to wallet');
      return;
    }
    const fetchData = async () => {
      const accounts= await web3.eth.getAccounts();
      let walletAddress = accounts[0];

      let params = {walletAddress};
      const response = await apis.getTask(params);
      const {data} = response;
      setTaskPostList(data);
    };
    fetchData();
  }, [web3]);

  return (
    <div className="space-y-20">
      {taskPostList.length !== 0 && taskPostList.map((item) =>
        TaskPostItem({
          item,
          rightInfoTitle: 'TASKS END',
          leftInfoComponent: LeftInfoVotingComponent,
          bodyComponent: BodyComponent,
        }),
      )}
    </div>
  );
}

export default TaskPostList;
