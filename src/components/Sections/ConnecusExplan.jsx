import React from 'react';

export default function ConnecusExplain() {
  const sectionInfos = [
    {
      className: 'what',
      icon: 'ri-question-fill',
      title: 'What is Connecus?',
      desc: `A blockchain application platform that helps influencers manage and develop their community by connecting and interacting directly 
      with fans through incentive activities, voting, fund-raising`,
    },
    {
      className: 'how',
      icon: 'ri-rocket-2-fill',
      title: 'How Connecus works?',
      desc: `Launch your own community's token (CT) that enables more creative solutions for your economy`,
    },
    {
      className: 'why',
      icon: 'ri-service-fill',
      title: 'Why must Connecus?',
      desc: 'No cryptocurrency experience required, influencers easily manage community interactions and fans gaining exclusive access and benefits with their influencers',
    },
  ];
  return (
    <div className="connecus-explain">
      {sectionInfos.map(({className, icon, title, desc}, index) => (
        <section className={className + ' col-10 col-md-4 p-3'} key={index}>
          <span className="icon-wrapper-1">
            <span className="icon-wrapper-2">
              <i className={icon}></i>
            </span>
          </span>
          <div className="divider"></div>
          <div className="content">
            <h3 className="mb-4">{title}</h3>
            <p dangerouslySetInnerHTML={{__html: desc}}></p>
          </div>
        </section>
      ))}
    </div>
  );
}
