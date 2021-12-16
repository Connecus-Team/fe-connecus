import React from 'react'
import data from './data'
import PostItem from './PostItem'

const LeftInfoFundingComponent = item => (
  <div className="bid space-x-10">
    <div className="icon">
      <img src="img/icons/ETH.svg" alt="..." />
    </div>
    <div>
      <p className="color_text txt_xs">CURRENT FUNDING</p>
      <span className="txt_sm">4.77 / {item.totalFunding} ETH</span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '80%' }}
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    </div>
  </div>
)

function FundingPostList() {
  return (
    <div className="space-y-20 post-item">
      {data.fundingCard.map(item =>
        PostItem({
          item,
          leftInfoComponent: LeftInfoFundingComponent
        })
      )}
    </div>
  )
}

export default FundingPostList
