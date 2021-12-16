import React, { useRef } from 'react'
import data from './data'
import PostItem from './PostItem'
import VotingItem from './VotingItem'

const LeftInfoVotingComponent = item => (
  <div>
    <p className="color_text txt_xs">CURRENT VOTING</p>
    <span className="txt_sm">{item.currentVotingAmount}</span>
  </div>
)

const BodyComponent = item => {
  return (
    <>
      <div className="px-3">
        <ul>{item.options.map(VotingItem)}</ul>
        <button className="btn btn-primary btn-sm">Vote</button>
      </div>
      <div className="hr"></div>
    </>
  )
}

function VotingPostList() {
  return (
    <div className="space-y-20">
      {data.votingCard.map(item =>
        PostItem({
          item,
          rightInfoTitle: 'VOTING END',
          leftInfoComponent: LeftInfoVotingComponent,
          bodyComponent: BodyComponent
        })
      )}
    </div>
  )
}

export default VotingPostList
