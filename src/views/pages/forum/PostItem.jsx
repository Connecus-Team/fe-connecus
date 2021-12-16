import React from 'react'
import Countdown from 'react-countdown'
import ConnecusCountDown from './ConnecusCountDown'

export const defaultItem = {
  id: 1,
  title: 'Colorful Painting',
  description: `Thank you you all for making this community
    Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Rarible (with crypto payment)! What do you`,
  img: 'https://miro.medium.com/max/1024/1*kdYwtZPiNcz8djsFLfWTNQ.jpeg',
  totalFunding: '1000',
  date: '10/01/2022 12:00:00'
}
const defaultComponent = () => null
// Will use it later
function PostItem({
  item = defaultItem,
  rightInfoTitle = 'FUNDING END',
  leftInfoComponent = defaultComponent,
  bodyComponent = defaultComponent
}) {
  return (
    <div className="card__item one post-item" key={item.id} style={{ maxWidth: '100%' }}>
      <div className="card_body space-y-10">
        <div className="card_head">
          <img src={item.img} alt="" />
          <div className="details d-flex justify-content-between">
            {leftInfoComponent(item)}

            <div className="auction_end text-right">
              <p className="color_text txt_xs">{rightInfoTitle}</p>
              <span className="counter txt_sm">
                <Countdown date={item.date} renderer={ConnecusCountDown} />
              </span>
            </div>
          </div>
        </div>
        <h4 className="card_title mt-3">{item.title}</h4>
        <p className="mt-1">{item.description}</p>
        <div className="hr"></div>
        {bodyComponent(item)}
        <div className="hr"></div>
        <div
          className="card_footer justify-content-between flex-column
                                                              flex-md-row">
          <div className="creators space-x-10">
            <div className="avatars space-x-3">
              <div className="-space-x-20">
                <a href="Profile.html">
                  <img src="img/avatars/avatar_3.png" alt="Avatar" className="avatar avatar-sm" />
                </a>
                <a href="Profile.html">
                  <img src="img/avatars/avatar_2.png" alt="Avatar" className="avatar avatar-sm" />
                </a>
              </div>
              <a href="Profile.html">
                <p className="avatars_name txt_sm">@makinzi_jamy...</p>
              </a>
            </div>
          </div>
          <a href="#" className="likes space-x-3">
            <i className="ri-heart-3-fill"></i>
            <span className="txt_sm">2.1k</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostItem
